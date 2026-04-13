import tensorflow as tf
from tensorflow.keras.models import load_model
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import numpy as np
import cv2 

# =====================
# TensorFlow Memory Fix
# =====================
gpus = tf.config.list_physical_devices('GPU')
if gpus:
    try:
        for gpu in gpus:
            tf.config.experimental.set_memory_growth(gpu, True)
    except RuntimeError as e:
        print(e)

tf.config.threading.set_intra_op_parallelism_threads(2)
tf.config.threading.set_inter_op_parallelism_threads(2)

# =====================
# Flask App Setup
# =====================
app = Flask(__name__)
CORS(app)

# =====================
# Load Pretrained Model & Haar Cascade
# =====================
MODEL_PATH = 'model_file.h5'
CASCADE_PATH = 'haarcascade_frontalface_default.xml'

if os.path.exists(MODEL_PATH):
    model = load_model(MODEL_PATH)
    print(f"✅ Loaded model from {MODEL_PATH}")
else:
    model = None
    print(f"⚠️ Model file {MODEL_PATH} not found.")

if os.path.exists(CASCADE_PATH):
    faceDetect = cv2.CascadeClassifier(CASCADE_PATH)
    print("✅ Loaded Haar Cascade Face Detector")
else:
    faceDetect = None
    print("⚠️ Haar Cascade file not found.")

class_labels = {0: 'Angry', 1: 'Disgust', 2: 'Fear', 3: 'Happy', 4: 'Neutral', 5: 'Sad', 6: 'Surprise'}

# =====================
# API Route
# =====================
@app.route('/predict_emotion', methods=['POST'])
def predict_emotion():
    try:
        if 'image' not in request.files:
            return jsonify({'error': 'No image file provided'}), 400

        image_file = request.files['image']
        npimg = np.frombuffer(image_file.read(), np.uint8)
        frame = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

        if frame is None:
            return jsonify({'error': 'Invalid image format'}), 400

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        # Face Detection Logic
        faces = faceDetect.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=4, minSize=(40, 40))
        if len(faces) == 0:
            gray_eq = cv2.equalizeHist(gray)
            faces = faceDetect.detectMultiScale(gray_eq, scaleFactor=1.1, minNeighbors=4, minSize=(40, 40))
        
        if len(faces) == 0:
            return jsonify({'error': 'No face detected.'}), 400

        largest_face = max(faces, key=lambda rect: rect[2] * rect[3])
        x, y, w, h = largest_face
        sub_face_img = gray[y:y+h, x:x+w]
        resized = cv2.resize(sub_face_img, (48, 48))
        normalize = resized / 255.0
        reshaped = np.reshape(normalize, (1, 48, 48, 1))

        if model:
            result = model.predict(reshaped)
            raw_probs = result[0]
            
            print("\n--- RAW MODEL SCORES ---")
            for i, p in enumerate(raw_probs):
                print(f"{class_labels[i]}: {p*100:.2f}%")

            # ==========================================
            # THE "STRICT OVERRIDE" VERSION 2.0
            # ==========================================
            # Indices: 0=Angry, 1=Disgust, 2=Fear, 3=Happy, 4=Neutral, 5=Sad
            
           # ==========================================
            # THE EMOTION BALANCER (Angry vs Sad)
            # ==========================================
            # ==========================================
            # THE PERFECT EMOTION BALANCE (Final Fix)
            # ==========================================
            angry_p = raw_probs[0]
            fear_p = raw_probs[2]
            sad_p = raw_probs[5]
            happy_p = raw_probs[3]
            neutral_p = raw_probs[4]
            if angry_p > 0.035:
                label = 0  # ANGRY
            
            # 2. Sad Check (Sogama iruntha next preference)
            elif sad_p > 0.10:
                label = 5  # SAD

            # 3. Very Strong Happy (85% mela iruntha mattum)
            elif happy_p > 0.85:
                label = 3  # HAPPY
                
            # 4. Neutral
            elif neutral_p > 0.20:
                label = 4  # NEUTRAL
            # 4. Fear/Neutral Balance
            else:
                temp_probs = raw_probs.copy()
                temp_probs[3] = temp_probs[3] * 0.05 # Reduced penalty
                
                label = int(np.argmax(temp_probs))

            emotion = class_labels[label]
            print(f"---> FINAL CHOSEN EMOTION: {emotion} <---")
            
        else:
            return jsonify({'error': 'Model not loaded.'}), 500

        return jsonify({"mood": label, "moodLabel": emotion})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5055, debug=True)