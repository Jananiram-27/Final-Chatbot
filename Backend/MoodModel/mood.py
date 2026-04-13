from flask import Flask, request, jsonify
import cv2
import numpy as np
from keras.models import load_model
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS to allow frontend requests

# Load the pre-trained model and Haar cascade
model = load_model('model_file_30epochs.h5')
faceDetect = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
labels_dict = {0: 'Angry', 1: 'Disgust', 2: 'Fear', 3: 'Happy', 4: 'Neutral', 5: 'Sad', 6: 'Surprise'}

@app.route('/predict_emotion', methods=['POST'])
def predict_emotion():
    try:
        print("Received prediction request")
        
        # Check if an image file is included in the request
        if 'image' not in request.files:
            print("No 'image' field found in request")
            return jsonify({'error': 'No image provided'}), 400

        # Read the image file
        file = request.files['image']
        
        if file.filename == '':
            print("Empty filename")
            return jsonify({'error': 'No image file selected'}), 400
            
        npimg = np.frombuffer(file.read(), np.uint8)
        frame = cv2.imdecode(npimg, cv2.IMREAD_COLOR)
        
        if frame is None:
            print("Failed to decode image")
            return jsonify({'error': 'Invalid image format'}), 400

        # Convert to grayscale
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        
        # Check if camera is completely blocked/dark
        if cv2.mean(gray)[0] < 5:
            print("Received a completely black image.")
            return jsonify({'error': 'Camera frame is too dark or empty. Please check your camera.'}), 400
            
        # FIX 1: Strict Face Detection (Stops empty background from being detected as Neutral)
        faces = faceDetect.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=8, minSize=(100, 100))
        print(f"Detected {len(faces)} faces")

        if len(faces) == 0:
            print("No real face detected by OpenCV.")
            return jsonify({'error': 'No face detected in frame. Please show your face clearly.'}), 400

        # Find the actual face (the largest one) to avoid background noise
        largest_face = max(faces, key=lambda rect: rect[2] * rect[3])
        x, y, w, h = largest_face
        
        # FIX 2: Tight Crop without padding. FER2013 Models need the exact face bounds.
        sub_face_img = gray[y:y+h, x:x+w]
        
        # Process the exact cropped face
        resized = cv2.resize(sub_face_img, (48, 48))
        normalize = resized / 255.0
        reshaped = np.reshape(normalize, (1, 48, 48, 1))
        
        result = model.predict(reshaped)
        
        # FIX 3: Print all emotion probabilities in terminal to debug bias
        print("\n--- Emotion Probabilities ---")
        for i, prob in enumerate(result[0]):
            print(f"{labels_dict[i]}: {prob*100:.2f}%")
        print("-----------------------------\n")
        
        label = int(np.argmax(result, axis=1)[0])  # Convert np.int64 to Python int
        emotion = labels_dict[label]
        print(f"Predicted emotion: {emotion} (label: {label})")
        
        return jsonify({'mood': label, 'moodLabel': emotion})

    except Exception as e:
        print(f"Error in predict_emotion: {str(e)}")
        import traceback
        traceback.print_exc()
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    # Running on port 5055 to perfectly match your frontend config.js
    app.run(host='0.0.0.0', port=5055)