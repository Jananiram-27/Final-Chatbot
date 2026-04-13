
const vader = require('vader-sentiment');


// Store used responses to prevent repetition
const usedResponses = {
    happy: {
        joy: [],
        excited: [],
        proud: [],
        relieved: [],
        content: [],
        grateful: [],
        cheerful: [],
        optimistic: [],
        playful: [],
        inspired: [],
        energetic: [],
        hopeful: [],
        satisfied: [],
        motivated: [],
        relaxed: [],
        peaceful: [],
        amused: [],
        confident: [],
        enthusiastic: [],
        thankful: []
    },
    neutral: {
        general: []
    }
};

// Responses database for Happy category
const responses = {
    happy: {
        joy: [
"That's wonderful! It sounds like you're experiencing a really happy moment today. Sometimes these joyful feelings come from small things that make our day special. Take a moment to enjoy it fully and appreciate the positivity around you. What made you feel this way today?",

"Your joy is contagious! It's really nice to hear such positive energy from you. Sharing happiness can make the feeling even stronger and brighter. If you'd like, you can tell me more about what made you feel so joyful.",

"I'm glad you're feeling happy! Positive emotions like this can lift our mood and give us motivation. It's always good to notice the things that bring us happiness. What do you think is the source of this joyful feeling today?",

"Such a positive vibe! Moments like this can really brighten our day and mind. Try to enjoy this feeling and hold on to the things that bring you happiness. I'd love to hear more about what's making you feel this way.",

"Happiness looks good on you! Feeling joyful can bring a lot of warmth and positivity into your life. It's nice to pause and appreciate these moments. What made you feel so joyful today?",

"I love hearing that! It sounds like something really nice must have happened today. Sometimes even small experiences can brighten our mood in a big way. What was it that made your day better?",

"Feeling joyful is amazing! Emotions like this can refresh our mind and make everything feel lighter. It's great to recognize and appreciate these happy moments. If you'd like, you can describe what brought this joy to you.",

"Your energy is uplifting! Happiness like this can spread positivity to others around you as well. Take a moment to enjoy this feeling and let it motivate you. Would you like to share why you're feeling this way?",

"Yay! I'm happy for you! It's always great to celebrate moments of joy, whether big or small. Appreciating these moments can make them even more meaningful. What sparked this happy feeling today?",

"This is delightful! Talking about happy moments can make the feeling even better. Joy can come from achievements, people, or simple moments. Let's talk about what's bringing you this happiness.",

"I see you're in high spirits! That kind of energy can really brighten your day. Holding on to positive feelings like this can help keep your mind relaxed and happy. Tell me more about what happened.",

"Such excitement! Celebrating good moments is important for our wellbeing. It can be something big or even a small win that made your day better. What are you celebrating today?",

"Your happiness shines! It's wonderful when something brings us genuine joy. Reflecting on these moments can make them even more meaningful. How did this happiness come about?",

"I sense pure joy! It's really nice when we experience moments that make us feel this positive. Sharing these moments can help you relive that happiness. Would you like to talk more about it?",

"Feeling good is important! Positive emotions can make a big difference in how we see the day. Try to hold on to this good feeling and enjoy it fully. What happened today that made you feel this way?",

"Your positivity is inspiring! Happiness can sometimes come from simple things like kind words or achievements. It's great that you're experiencing such a moment. What made you smile today?",

"Happiness detected! It's always nice to notice when we're feeling good. Talking about it can help you appreciate the moment even more. Would you like to elaborate on what made you happy?",

"It's great to see you cheerful! A positive mood can bring a lot of calm and energy at the same time. Try to enjoy this feeling and let it brighten your day. Do you want to share more about it?",

"Joy looks like you! It's always wonderful when we experience genuine happiness. Sometimes sharing the reason behind it makes the moment even more special. Tell me what caused this joyful feeling.",

"What a fantastic mood! Feeling joyful can make everything around you seem brighter. It's nice to pause and appreciate these moments of happiness. Can you describe what made you feel this way?"
],
        excited: [
"Wow, you seem excited! That kind of energy can make the moment feel even more special. Excitement often comes from something we’re really looking forward to or something good that just happened. Take a moment to enjoy that feeling. Can you tell me why you're feeling this excited?",

"Such enthusiasm! Your excitement really shows through your words. Moments like this can bring a lot of positive energy and motivation. It's nice to pause and appreciate them. What's making you feel so thrilled right now?",

"Your excitement is contagious! It’s always great to hear someone feeling this energetic and happy. Exciting moments can make our day brighter and more memorable. If you'd like, you can share what's behind this feeling.",

"I see your energy! It sounds like something exciting is happening in your life. These moments can be really uplifting and motivating. Enjoy this feeling while it lasts. What's the big news?",

"Feeling excited is awesome! It often means something meaningful or fun is happening. Try to take in this positive moment and enjoy the anticipation. What triggered this excitement for you?",

"You're glowing with excitement! That kind of enthusiasm can make experiences even more enjoyable. Sometimes sharing the reason behind it can make the moment even better. So tell me, what's going on?",

"Thrilled to hear this! Excitement can bring a lot of positive energy into your day. It's always nice to celebrate moments that make us feel alive and motivated. Can you elaborate on what's making you feel this way?",

"Your vibes are electric! That level of excitement can really brighten the atmosphere around you. Enjoy this moment and let yourself feel proud or happy about it. What's making you feel so ecstatic?",

"Excitement detected! It sounds like something interesting or joyful just happened. These moments can create great memories and motivation. Care to tell the story behind this excitement?",

"This energy is inspiring! Excited moments can make us feel more alive and hopeful. It’s always good to acknowledge and enjoy these positive emotions. What's happening that made you feel this way?",

"Wow! You look pumped! That kind of excitement can make the day feel even more special. It's great when something gives us this much energy and positivity. What's the occasion today?",

"Thrilled to hear that! Exciting experiences can be really motivating and uplifting. Talking about them can make the moment even more meaningful. Share the details if you'd like.",

"I feel your excitement! It sounds like something really nice happened. Moments like these can leave us feeling energized and happy. What made your day so exciting?",

"You seem so thrilled! It's wonderful when something makes us feel this enthusiastic. Try to enjoy this moment and appreciate whatever brought it to you. Can you explain why you're feeling this way?",

"Feeling ecstatic is amazing! Excitement can bring a lot of motivation and positivity into our lives. Take a moment to enjoy it fully. Tell me more about what's making you feel this excited.",

"Your joy and excitement are visible! It sounds like something meaningful or fun just happened. Positive emotions like this can really brighten our day. What's going on?",

"I love this energy! It's great when something fills us with this much excitement. Sharing these moments can make them even more memorable. Can you tell me what caused it?",

"Such enthusiasm! Exciting moments can remind us how enjoyable life can be. It's always nice to appreciate these feelings while they last. What's bringing you this joy?",

"You're positively buzzing! That kind of excitement can make everything feel more lively. Enjoy the moment and let the positivity stay with you. Tell me why you're feeling this way.",

"Excited vibes! It sounds like something really positive is happening for you. Talking about happy moments can make them even more meaningful. Can you elaborate on your happiness?"
],
        proud: [
"Feeling proud is wonderful! It usually means you worked hard or achieved something meaningful. Moments like this remind us to appreciate our efforts and growth. Take a moment to enjoy this success. What achievement made you feel this proud?",

"Your pride is inspiring! It sounds like you accomplished something important. Recognizing your achievements is a great way to build confidence and motivation. Be proud of the effort you put in. What did you accomplish?",

"I see you're proud! That’s a really positive feeling to have. Pride often comes from dedication, patience, and effort. It's good to pause and appreciate how far you've come. Care to share more about what made you proud?",

"Pride looks good on you! It usually comes from doing something meaningful or reaching a goal. Celebrating your achievements can boost your confidence and happiness. What’s the reason behind this proud moment?",

"Achievement unlocked! It sounds like something great just happened. Moments like these remind us that our hard work really does pay off. Take a moment to enjoy your success. Can you tell me about it?",

"Feeling proud! That’s a strong and motivating emotion. When we achieve something after effort, it can give us a lot of confidence. It’s important to appreciate those moments. What success made you feel this way?",

"Your hard work shows! It’s clear that your effort has brought you to a proud moment. Recognizing your progress can help you stay motivated for future goals. What are you celebrating today?",

"That's impressive! Pride usually comes from achieving something meaningful. It’s great to see you appreciating your own success. Take a moment to reflect on the effort behind it. Can you describe what made you proud?",

"Proud vibes detected! That sounds like a rewarding moment for you. Achievements, big or small, deserve to be recognized and celebrated. Enjoy this positive feeling. What caused this pride?",

"Your accomplishment is shining! It’s wonderful when our efforts turn into something we can be proud of. Moments like this can motivate us to keep growing. Tell me more about what you achieved.",

"Feeling accomplished is great! It often means you reached a goal or completed something important. Appreciating these moments can boost your self-confidence. What did you achieve that made you feel this way?",

"I sense pride! It’s always uplifting when someone recognizes their own success. Pride can remind us how capable we are. Take a moment to appreciate your hard work. Can you elaborate on what happened?",

"Pride is empowering! It can make us feel confident and motivated to keep moving forward. Achievements like this show your dedication and effort. What’s the story behind this proud moment?",

"You're glowing with achievement! That kind of pride usually comes from meaningful effort. It’s great to acknowledge the progress you’ve made. Enjoy this moment of success. Care to explain what happened?",

"Success is visible! Something must have gone really well for you. These proud moments remind us of our abilities and determination. Take time to appreciate it. What made you proud today?",

"Feeling fulfilled is great! It usually means you accomplished something that truly matters to you. Recognizing your progress can help build confidence and satisfaction. What’s the reason behind this feeling?",

"Your efforts paid off! That’s always a rewarding experience. Hard work often leads to moments we can truly be proud of. It’s nice to celebrate these achievements. What was it that you accomplished?",

"Pride in action! It sounds like you reached an important milestone. Appreciating your progress can help you stay motivated for future goals. Tell me more about what made you feel proud.",

"This is admirable! Achievements like this deserve recognition and celebration. Being proud of yourself is a healthy and positive emotion. What achievement are you proud of today?",

"I see confidence from pride! It sounds like something meaningful happened for you. Moments like these can build motivation and self-belief. What caused this proud feeling?"
],
       relieved: [
"Relief is great! It sounds like something that was worrying you earlier has finally settled down. Moments like this can make us feel lighter and more peaceful. Take a deep breath and enjoy this calm feeling. What was worrying you earlier?",

"Glad to see relief! It’s always comforting when a stressful situation starts to improve. Sometimes just talking about what changed can make the relief feel even better. Take a moment to appreciate this peaceful moment. Can you explain what changed?",

"Feeling relieved is amazing! It often means something difficult has finally worked out. That sense of calm can help your mind and body relax again. Try to enjoy this lighter feeling. What’s behind this relief?",

"I sense calm now! It seems like the tension you felt earlier has eased. Moments like this can help restore your peace of mind. Take a moment to breathe and relax. What caused your stress earlier?",

"Phew! Relief is evident! It sounds like something that worried you is no longer troubling you. Let yourself enjoy this calm moment and appreciate the change. Care to share what happened?",

"Glad it's resolved! Situations that once felt stressful can sometimes turn out better than we expect. Feeling relief after worry is a very natural and comforting emotion. What was the situation that got resolved?",

"Feeling lighter is wonderful! It’s a sign that the stress or pressure you were carrying has eased. Take this moment to relax your mind and body. What happened that made you feel this way?",

"I see a sigh of relief! It sounds like something important worked out for you. Moments like this remind us that difficult situations can pass. Would you like to share the story behind it?",

"Relief vibes detected! That lighter feeling can really help restore your energy and calmness. It's always good to recognize when things improve. Can you elaborate on what changed?",

"Feeling at ease is good! When worries fade, it gives us space to think more clearly and calmly. Enjoy this peaceful moment for a while. What changed that made you feel this relief?",

"That's a load off! It seems like something stressful has finally lifted from your mind. These moments can help you feel refreshed and relaxed again. What made you feel more at ease?",

"I sense your calm! It sounds like the tension you were feeling has settled down. Taking a moment to appreciate this calm can be really helpful for your wellbeing. Can you share the details?",

"Feeling relieved is important! It often means a difficult situation has improved or been resolved. Let yourself enjoy this calm feeling and give your mind a break. What triggered this relief?",

"Phew! Things improved! It's always a good feeling when something stressful turns out better. Moments like this can bring peace and reassurance. Tell me more about what happened.",

"Your worries eased! That must feel really comforting after dealing with stress or uncertainty. It’s nice when situations finally settle down. Can you explain what changed?",

"Relief is energizing! When stress fades away, it can bring a fresh sense of calm and clarity. Take a moment to appreciate the peaceful feeling. What changed that helped you feel better?",

"I see tension released! It seems like the pressure you felt earlier has finally eased. These moments are important for your emotional balance. What's the situation that improved?",

"Glad to hear relief! It's always nice when things turn out better than expected. Sharing what happened can help you reflect on the positive change. Care to elaborate?",

"Feeling unburdened is great! Letting go of stress can make your mind feel lighter and calmer. Try to enjoy this moment of peace. What caused this feeling of relief?",

"That's wonderful! Feeling safe and calm again is very important for your wellbeing. It sounds like something that worried you is no longer a concern. What made you feel safe now?"
],
        content: [
"Being content is nice. It often means you're feeling peaceful and satisfied with how things are right now. These calm moments can be really valuable for our mental wellbeing. Take a moment to enjoy this sense of balance. What's making you feel this way today?",

"I see satisfaction! That kind of feeling usually comes when things feel stable and comfortable in life. It's nice to recognize and appreciate these peaceful moments. Sometimes reflecting on them can make the feeling even stronger. Care to elaborate on what’s bringing this satisfaction?",

"Feeling content is lovely! It sounds like you're experiencing a calm and steady kind of happiness. These moments can help us recharge emotionally. It's always good to pause and appreciate them. What do you think contributes to this feeling?",

"Your calm happiness is wonderful! Contentment often comes when things feel balanced and peaceful. Enjoying these quiet positive emotions can be very healthy for the mind. If you'd like, you can share what's making you feel this way.",

"Contentment detected! It sounds like things are feeling stable and comfortable for you right now. Moments like these can help us feel grounded and relaxed. Take a moment to appreciate that calm energy. What's bringing this feeling?",

"I sense peace and satisfaction! That usually means something in your life is bringing you quiet happiness. These balanced moments are important for emotional wellbeing. It's great that you're experiencing this calm state. Would you like to share more about it?",

"Feeling fulfilled is great! It often happens when we feel satisfied with what we have or what we've done. Appreciating these moments can help us stay positive and balanced. What's the source of this feeling today?",

"Your day seems good! Feeling content usually means things are going smoothly or peacefully. It's always nice to notice when life feels calm and comfortable. Take a moment to enjoy that feeling. What makes you feel content right now?",

"Content vibes! A peaceful mood like this can make the day feel lighter and more balanced. Sometimes small things bring the greatest satisfaction. Reflecting on them can help keep that calm energy. Can you tell me the reason behind this feeling?",

"I see serenity in your mood! That kind of calm happiness is really special. It often means you're feeling comfortable and at peace with the moment. These emotions can help us stay mentally balanced. Care to elaborate?",

"Being happy with the moment is wonderful! Contentment often comes when we accept and appreciate what we have. It can create a deep sense of calm and satisfaction. It's nice to recognize these moments. Why do you feel this way right now?",

"I sense satisfaction! That usually comes when something in life feels right or complete. It's always good to acknowledge these peaceful feelings. They can remind us of what truly matters. What triggered this contentment?",

"Feeling balanced is great! When our emotions feel steady and calm, it can bring a sense of peace. Moments like this are helpful for maintaining mental wellbeing. Take a moment to appreciate that balance. Can you share the details?",

"Your calm energy is noticeable! It sounds like you're experiencing a peaceful and stable mood. These kinds of emotions can make the day feel relaxed and comfortable. It's great to notice them. What's the reason behind this feeling?",

"Contentment is shining! It often means you're feeling satisfied and at peace with things around you. These calm emotions can help create a positive mindset. Enjoy this steady moment. What makes you happy right now?",

"I feel your peace! A calm and content mind can make everything feel a little lighter. These moments can help us feel grounded and grateful. It's great that you're experiencing this feeling. Care to explain what brought it?",

"Being satisfied is great! It usually comes from appreciating the small or big things in life. Recognizing these moments can help build long-term happiness. It's nice to pause and reflect on them. What's contributing to this feeling?",

"Your mood is stable and happy! That kind of balance can make the day feel calm and comfortable. Contentment is a quiet but powerful form of happiness. Enjoy this peaceful moment. Can you elaborate on what’s making you feel this way?",

"Contentment detected! It seems like you're experiencing a calm and steady emotional state. Moments like these can help you feel relaxed and grounded. Appreciating them can strengthen your wellbeing. Share the story behind it?",

"I sense harmony in your feelings! When emotions feel balanced like this, it can bring a lot of peace. It's always nice to notice when life feels calm and satisfying. Take a moment to enjoy it. What caused this feeling?"
],
        grateful: [
"Gratitude is powerful! Feeling thankful can bring a lot of positivity and peace to our minds. It often reminds us of the good people and experiences in our lives. Taking a moment to appreciate them can make the feeling even stronger. Who or what are you grateful for today?",

"I see appreciation! It sounds like something or someone has made a positive impact on you. Recognizing these moments of gratitude can help us feel happier and more connected. It's always nice to reflect on them. Care to share more about what you're appreciating?",

"Feeling thankful is wonderful! Gratitude often comes from meaningful experiences or kind gestures. When we pause to recognize them, it can make our mood brighter. It's a beautiful emotion to hold onto. What's the reason behind your gratitude?",

"Your gratitude shines! It sounds like something meaningful has touched your heart today. Appreciating these moments can strengthen our sense of happiness and connection. Take a moment to enjoy that feeling. Can you elaborate on what made you grateful?",

"Being grateful is lovely! Sometimes a person, a small act of kindness, or a positive experience can make us feel this way. Recognizing those moments can help build lasting positivity. Who made a difference in your day?",

"I sense appreciation! Gratitude can remind us of the support and kindness around us. It's a powerful way to keep a positive mindset. Sharing these moments can make them even more meaningful. Tell me more about what's making you feel thankful.",

"Thankfulness detected! Something must have brought you a sense of appreciation today. These moments help us notice the good things in life. It's great that you're recognizing them. What triggered this gratitude?",

"Feeling grateful is uplifting! Gratitude can help bring calmness and happiness to our thoughts. It often comes from meaningful connections or positive experiences. Enjoy this warm feeling. What’s the cause behind it?",

"Your energy is positive! It sounds like you're appreciating something or someone important. Recognizing those things can make our perspective brighter. It's always nice to acknowledge them. Who or what are you thankful for?",

"I see you value things! That kind of appreciation can help create a deeper sense of happiness. Gratitude often reminds us of what truly matters in life. It's great that you're feeling this way. Can you explain what brought this feeling?",

"Gratitude is inspiring! When we feel thankful, it can help us focus on the good parts of life. These moments can strengthen our emotional wellbeing. Take a moment to appreciate it. What’s contributing to this feeling?",

"Being thankful brings joy! Gratitude can turn small moments into meaningful ones. Recognizing these experiences can bring lasting positivity. It's great that you're feeling this appreciation. Can you tell me why?",

"I sense appreciation in your tone! That usually means something meaningful happened. Reflecting on these moments can help us feel more connected and positive. It's a lovely feeling to have. Share more about it?",

"Feeling thankful is powerful! It often comes from kindness, support, or positive experiences. Appreciating those moments can help us feel more balanced and happy. It's wonderful you're noticing it. What's the story behind your gratitude?",

"Your gratefulness is visible! That kind of feeling can bring warmth and positivity to your day. Taking a moment to reflect on it can make the feeling even stronger. It's a beautiful emotion. Care to elaborate on what made you grateful?",

"Thankfulness is beautiful! Sometimes someone’s help or kindness can make a big difference in our lives. Recognizing those moments can make us feel more connected and appreciative. Who helped you feel this way?",

"I see gratitude! That usually means something meaningful happened that you're appreciating. Gratitude can bring a sense of peace and happiness. It's great that you're noticing it. Can you share the details?",

"Being appreciative is important! It helps us focus on the good things around us. Gratitude can improve our mindset and emotional wellbeing. It's wonderful you're feeling this way. What's the reason behind it?",

"Grateful vibes detected! It sounds like a positive moment or person made an impact on you. Sharing gratitude can make the feeling even more meaningful. It's a great emotion to express. Tell me the story behind it.",

"I sense your gratitude! Feeling thankful often comes from recognizing the support or kindness around us. It's a powerful and uplifting emotion. Take a moment to enjoy that feeling. Can you explain why you feel grateful?"
],
        // remaining happy subcategories will follow in Part 2...
    }
};

// Function to get a non-repeating random response
function getRandomResponse(category, subcategory) {
    const list = responses[category][subcategory];
    const used = usedResponses[category][subcategory];

    const available = list.filter(r => !used.includes(r));
    if (available.length === 0) {
        // Reset used array if all responses are used
        usedResponses[category][subcategory] = [];
        return getRandomResponse(category, subcategory);
    }

    const choice = available[Math.floor(Math.random() * available.length)];
    used.push(choice);
    return choice;
}

// Simple keyword-based category & subcategory detection for Happy
// Simple keyword-based category & subcategory detection
function detectCategoryAndSubcategory(message) {
    const msg = message.toLowerCase();

    // --- HAPPY ---
    if (/joy|happy|glad|delighted|cheerful/.test(msg)) return { category: 'happy', subcategory: 'joy' };
    if (/excited|thrilled|ecstatic/.test(msg)) return { category: 'happy', subcategory: 'excited' };
    if (/proud|achievement|success/.test(msg)) return { category: 'happy', subcategory: 'proud' };
    if (/relieved|relief/.test(msg)) return { category: 'happy', subcategory: 'relieved' };
    if (/content|satisfied/.test(msg)) return { category: 'happy', subcategory: 'content' };
    if (/grateful|thankful/.test(msg)) return { category: 'happy', subcategory: 'grateful' };

    // --- SAD ---
    if (/lonely|alone|isolated/.test(msg)) return { category: 'sad', subcategory: 'loneliness' };
    if (/grief|loss|died|passed away/.test(msg)) return { category: 'sad', subcategory: 'grief' };
    if (/reject|turned down|ignored/.test(msg)) return { category: 'sad', subcategory: 'rejection' };
    if (/fail|failed|setback|loser/.test(msg)) return { category: 'sad', subcategory: 'failure' };
    if (/guilt|my fault|regret|sorry/.test(msg)) return { category: 'sad', subcategory: 'guilt' };
    if (/hopeless|give up|no point/.test(msg)) return { category: 'sad', subcategory: 'hopelessness' };
    if (/tired|exhausted|drained|low energy/.test(msg)) return { category: 'sad', subcategory: 'low_energy' };
    if (/cry|crying|tears|weeping/.test(msg)) return { category: 'sad', subcategory: 'crying' };
    if (/stress|stressed|overwhelmed|pressure/.test(msg)) return { category: 'sad', subcategory: 'stress' };
    if (/sad|upset|down|depressed|blue/.test(msg)) return { category: 'sad', subcategory: 'general' }; 

    // --- ANXIOUS ---
    if (/exam|test|marks|grade/.test(msg)) return { category: 'anxious', subcategory: 'exams' };
    if (/performance|presentation|stage|public speaking/.test(msg)) return { category: 'anxious', subcategory: 'performance' };
    if (/social|people|crowd|party/.test(msg)) return { category: 'anxious', subcategory: 'social' };
    if (/health|sick|illness|disease/.test(msg)) return { category: 'anxious', subcategory: 'health' };
    if (/future|career|what's next/.test(msg)) return { category: 'anxious', subcategory: 'future' };
    if (/decision|choice|confused/.test(msg)) return { category: 'anxious', subcategory: 'decision_making' };
    if (/panic|heart racing|can't breathe/.test(msg)) return { category: 'anxious', subcategory: 'panic' };
    if (/sleep|insomnia|can't sleep|awake/.test(msg)) return { category: 'anxious', subcategory: 'sleep' };
    if (/anxious|anxiety|nervous|worry|worried|scared|fear|afraid/.test(msg)) return { category: 'anxious', subcategory: 'general' }; 

    // If no keywords match, default to neutral
    return { category: 'neutral', subcategory: 'general' };
}

// --- EXPORTABLE AI ENGINE ---
function getAiResponse(userMessage) {
    const msgClean = userMessage.toLowerCase().trim();

    // 1. VADER SENTIMENT ANALYSIS
    const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(userMessage);
    const score = intensity.compound; 

    // 2. GIBBERISH FILTER
    const isGibberish = /[bcdfghjklmnpqrstvwxyz]{5,}/i.test(userMessage) || 
                        userMessage.split(' ').some(word => word.length > 5 && !/[aeiouy]/i.test(word));
    
    if (isGibberish) {
        return { reply: "I didn't quite catch that. Could you type that again clearly?", score: 0 };
    }

    // 3. SHORT ANSWER FILTER
    const shortWords = ['ok', 'k', 'yes', 'no', 'hmm', 'yeah', 'yep', 'yup'];
    if (shortWords.includes(msgClean)) {
        return { reply: "I'm listening. Please go on.", score: score };
    }

    // 4. EMOTION DETECTION
    const { category, subcategory } = detectCategoryAndSubcategory(userMessage);
    let reply = getRandomResponse(category, subcategory);

    // Return the result instead of console.log
    return { reply: reply, score: score };
}

// Intha line thaan main! Ithu matha files intha AI engine-a use panna allow pannum.
module.exports = { getAiResponse };

// aiChatTest.js - Part 2: Remaining Happy Subcategories

responses.happy.cheerful = [
"I can feel your cheerfulness! It sounds like you're in a really positive and lighthearted mood today. Moments like this can make the whole day feel brighter. It's always nice to pause and appreciate that happiness. What's making you smile today?",

"Your cheerful mood is contagious! It's great to hear such positive energy in your words. Cheerful moments can spread happiness not only to you but also to the people around you. Enjoy this uplifting feeling. Care to share more about what's making you happy?",

"Feeling cheerful is wonderful! That kind of mood can make even simple moments feel special. It's always nice to recognize and appreciate when we feel this light and positive. These emotions can really boost our wellbeing. What brought this joy today?",

"I see happiness in your tone! It sounds like something pleasant or exciting happened. Recognizing these happy moments can help us stay positive and motivated. Take a moment to enjoy that feeling. What's the reason behind your cheerfulness?",

"Cheerfulness detected! It seems like you're experiencing a bright and positive moment. Emotions like this can really lift our spirits and make the day feel easier. It's great to notice them. Can you explain the source of this happiness?",

"Your energy is uplifting! It's always refreshing to hear someone feeling cheerful and relaxed. These kinds of emotions can help us feel more balanced and optimistic. Enjoy the moment while it lasts. What's making you happy right now?",

"So cheerful! Your mood sounds really light and positive today. Cheerful moments can make everything feel a little easier and more enjoyable. It's nice to pause and appreciate them. Can you tell me why you're feeling this way?",

"Your joy is shining! It sounds like something meaningful or pleasant is brightening your day. Positive emotions like this can bring a lot of motivation and comfort. It's wonderful that you're experiencing it. What's contributing to this joy?",

"Feeling lighthearted is lovely! It usually means things are going smoothly or something nice happened. Moments like these can bring calm happiness and positive energy. It's great to enjoy them fully. Would you like to share more?",

"I sense cheerfulness! It sounds like something good has lifted your mood today. Recognizing these positive moments can help build long-term happiness. It's always nice to reflect on them. What made your day better?",

"Happy vibes! It sounds like you're enjoying a positive and cheerful moment. These emotions can help refresh our mind and make the day feel lighter. Take a moment to enjoy it. Care to elaborate on what happened?",

"Your bright mood is inspiring! Hearing cheerful energy like this can bring a lot of positivity. It often comes from meaningful experiences or pleasant surprises. It's great that you're feeling this way. What's happening today?",

"Cheerfulness is amazing! When we feel this light and happy, it can bring motivation and positivity to our day. Appreciating these moments can make them even more meaningful. What's the story behind your mood?",

"I see your smile! It sounds like something is bringing you genuine happiness. Moments like this can brighten our perspective and make us feel more relaxed. It's wonderful that you're experiencing it. What's bringing you joy?",

"Feeling upbeat is great! That kind of energy can help make the day feel productive and enjoyable. Positive moods like this are important for mental wellbeing. It's good to recognize them. Can you tell me more about it?",

"Your positive energy is noticeable! It sounds like something uplifting has happened. These cheerful emotions can make us feel motivated and hopeful. Enjoy the moment fully. What triggered this happiness?",

"So happy and cheerful! It's always great to hear when someone is feeling this positive. Cheerful moments can bring lightness and comfort to our thoughts. It's wonderful you're experiencing that. What's the reason behind it?",

"I sense lightness in your mood! It sounds like you're feeling calm, happy, and relaxed. These kinds of emotions can help balance our day and bring peace of mind. It's great to notice them. Care to explain what made you feel this way?",

"Cheerful energy detected! Your mood sounds really bright and positive right now. Sharing these happy moments can make them even more meaningful. It's always nice to talk about them. What's making you feel this way?",

"Your mood is sparkling! It sounds like something wonderful is adding brightness to your day. Positive emotions like this can bring motivation and calm happiness. It's lovely to experience them. Share the cause behind this cheerful feeling?"
];

responses.happy.optimistic = [
"Optimism is refreshing! It sounds like you're feeling hopeful about something ahead. A positive outlook like this can bring motivation and confidence. It's always nice to look forward to good moments. What are you looking forward to?",

"I see a hopeful vibe! It sounds like you're thinking positively about the future. Having this kind of mindset can make challenges feel easier to handle. It's great that you're feeling this way. Can you share your plans?",

"Feeling positive is great! Optimism often comes when we believe good things are on the way. This mindset can bring energy and encouragement. It's wonderful that you're holding onto this feeling. What's coming up that excites you?",

"I sense optimism! That kind of hopeful thinking can really brighten the day. It often helps us stay motivated and confident about the future. Enjoy that positive mindset. What's making you feel hopeful right now?",

"Your mindset is inspiring! Optimistic thinking can help us focus on possibilities instead of worries. It’s a powerful way to stay motivated and calm. It's great that you're experiencing this. What's the reason behind your positivity?",

"Optimistic energy detected! It sounds like you're feeling hopeful and encouraged about something ahead. Moments like this can give us motivation and clarity. It's nice to appreciate these feelings. Care to elaborate?",

"Looking forward is wonderful! Anticipating something positive can make us feel excited and motivated. It’s great when we have things to look forward to in life. Enjoy that hopeful energy. What’s exciting you right now?",

"I see your positive outlook! It sounds like you're focusing on the brighter side of things. That perspective can help build confidence and resilience. It's wonderful to notice that mindset. What do you think is ahead for you?",

"Feeling upbeat is inspiring! Optimism can bring a lot of positive energy into our thoughts and actions. It’s always encouraging to see someone looking forward with hope. What’s on your mind right now?",

"Your hopeful energy shines! It sounds like you're feeling confident about something upcoming. These feelings can help keep us motivated and excited. It's great that you're experiencing this positivity. What's the source of it?",

"Optimism detected! A hopeful mindset can really change how we see situations. It often helps us stay strong and motivated through challenges. It's nice that you're feeling this way. Can you explain why?",

"Your perspective is bright! Seeing the future with optimism can bring calmness and encouragement. It’s a great mindset to have when moving toward goals. Enjoy that hopeful outlook. What are you anticipating?",

"Feeling hopeful is amazing! That kind of emotion can give us strength and positivity. It often comes from believing that good things are possible. It's wonderful you're experiencing that feeling. What’s making you feel this way?",

"I sense positive vibes! It sounds like you're expecting something good ahead. Anticipation like this can bring excitement and motivation. It's always nice to look forward to something meaningful. What’s coming next?",

"Optimistic thoughts! Thinking positively about the future can make us feel more confident and calm. It helps us focus on opportunities and possibilities. It's great that you're feeling this way. Can you share what's happening?",

"Your hopeful mood is great! A positive outlook can help bring balance and encouragement in life. These feelings can help us stay motivated. It's wonderful you're experiencing it. Care to elaborate?",

"Looking forward to good things! Anticipation can make the present moment feel more exciting. It’s nice when we believe something good is ahead. That kind of hope can be very powerful. What’s the reason behind your optimism?",

"I see positivity in your words! It sounds like you're focusing on something encouraging or exciting. This mindset can help create confidence and calmness. It's always nice to hear optimism. What’s exciting you?",

"Optimistic energy! A hopeful attitude can really lift our spirits and motivation. It often comes from believing in positive outcomes. It's wonderful you're feeling this way. Tell me why you're optimistic.",

"Hopeful vibes detected! It sounds like something ahead is bringing you happiness or anticipation. Moments like these can fill us with motivation and excitement. Enjoy this hopeful feeling. What's bringing you joy?"
];

responses.happy.playful = [
"Playfulness detected! It sounds like you're having a fun and lighthearted moment. Playful moods can make the day feel brighter and more enjoyable. It's always nice to enjoy these cheerful moments. What fun are you having right now?",

"I see a playful vibe! It sounds like something amusing or entertaining is happening. Lighthearted moments like these can really lift our mood. It's great that you're enjoying yourself. Can you share more about what's going on?",

"Feeling lighthearted is great! That kind of mood can make even simple moments feel joyful. Playfulness often comes from fun experiences or funny situations. It's wonderful you're enjoying this energy. What's making you smile?",

"Your playful energy is contagious! It sounds like you're in a cheerful and fun mood. Moments like these can spread positivity to others too. It's always great to enjoy laughter and fun. Care to elaborate on what's happening?",

"Having fun is wonderful! Playful moments can help us relax and enjoy the present. It's always good to take a break and have a little fun. These experiences can brighten our day. What activity are you enjoying?",

"Playful mood detected! It seems like something entertaining or amusing is happening. Light and fun moments like these can bring a lot of positive energy. It's great that you're enjoying it. What's keeping you entertained?",

"I sense humor and fun! It sounds like something funny or enjoyable caught your attention. Laughter and playful moments can really improve our mood. It's nice to hear that energy. Can you explain what's happening?",

"Your joy is playful! It sounds like you're experiencing a cheerful and carefree moment. Playful feelings can make the day feel lighter and more relaxed. It's great that you're enjoying that energy. What's causing it?",

"Feeling mischievous is fun! Sometimes playful moments come from jokes, games, or funny situations. These lighthearted experiences can bring a lot of happiness. It's great you're enjoying the moment. Tell me more about it.",

"Playful energy shines! Your mood sounds bright and full of fun right now. Moments like these can help us relax and enjoy life a little more. It's wonderful you're experiencing it. What's the reason behind this playful mood?",

"I see your lighthearted mood! It sounds like something fun or amusing is happening. Playful moments like these can make the day feel cheerful and relaxed. It's always nice to enjoy them. Share the story behind it.",

"Fun vibes detected! It sounds like something joyful is making you feel playful. Moments like this can bring laughter and positive energy. It's great you're enjoying that feeling. What's bringing you joy?",

"Being playful is lovely! It often means you're feeling relaxed and happy. Laughter and fun moments can really brighten our day. It's wonderful that you're experiencing that energy. What's making you laugh?",

"I sense playfulness! It sounds like something amusing or entertaining is happening around you. Playful moments can make the atmosphere feel lively and joyful. It's great that you're enjoying it. What's the game or joke?",

"Your energy is fun and bright! It sounds like you're enjoying a cheerful and entertaining moment. Playfulness can make experiences feel even more memorable. It's nice to hear that positive energy. Can you share more?",

"Feeling cheerful and playful! It sounds like something fun is happening right now. These lighthearted moments can help us relax and enjoy the present. It's always nice to have them. What's going on?",

"Playful mood detected! It seems like you're in a fun and carefree state of mind. Moments like this can help bring laughter and joy. It's great you're enjoying it. Tell me why you're feeling this way.",

"I see humor in your tone! It sounds like something funny or entertaining is happening. Humor can really brighten our mood and bring people together. It's wonderful you're experiencing that moment. What's amusing you?",

"Lighthearted vibes! It sounds like something playful or funny is happening around you. These cheerful moments can help us feel relaxed and happy. It's nice to appreciate them. Share the playful story.",

"Your playful energy is amazing! It sounds like you're enjoying a fun and lively moment. Playful moods can make the day feel more enjoyable and exciting. It's great to hear that positivity. What's the reason behind it?"
];

responses.happy.inspired = [
"Feeling inspired! It sounds like something meaningful or exciting is motivating you today. Inspiration can bring new ideas and energy into our thoughts. These moments often help us move forward with creativity and confidence. What's motivating you right now?",

"I see inspiration! It seems like something has sparked a new idea or motivation in you. Inspired moments can help us think creatively and see new possibilities. It's wonderful that you're experiencing that energy. Can you share the source of this inspiration?",

"Your motivation is contagious! It sounds like you're feeling energized by something exciting or meaningful. Inspiration often pushes us to explore new ideas and opportunities. It's great to notice that feeling. What's driving you today?",

"Being inspired is amazing! That kind of energy can help bring creativity and motivation into our day. Inspired moments often lead to new ideas and positive actions. It's great that you're experiencing this. Tell me more about what's inspiring you.",

"I sense creative energy! It sounds like something is sparking new thoughts or motivation. Inspiration can make us feel curious and excited about possibilities. These moments are really powerful for growth. What's sparking this creative feeling?",

"Inspired vibes detected! It seems like you're feeling motivated or encouraged by something. Inspiration often helps us see things in a new and positive way. It's wonderful that you're experiencing this moment. Care to elaborate?",

"Feeling energized by ideas! It sounds like your thoughts are flowing with creativity or excitement. Inspired moments like these can lead to wonderful discoveries. It's great to notice that motivation. What's the cause behind this energy?",

"I see your inspiration! It looks like something is encouraging you to move forward or think creatively. These feelings can bring motivation and clarity. It's great that you're experiencing them. What's pushing you forward?",

"Motivated and inspired! That kind of feeling can help us stay focused and passionate about our goals. Inspiration often gives us the courage to try new things. It's wonderful you're feeling this way. Can you explain what's behind it?",

"Your passion shines! It sounds like something meaningful is fueling your excitement and motivation. Passion and inspiration can help us achieve great things. It's great that you're feeling this energy. What's inspiring you today?",

"Feeling uplifted is great! Inspired moments can help us feel hopeful and motivated. They often come from ideas, people, or experiences that encourage us. It's wonderful you're feeling uplifted. What's the story behind it?",

"I sense motivation! It sounds like something is pushing you to think positively or creatively. Motivation and inspiration together can bring amazing ideas. It's great that you're noticing this energy. Share the details.",

"Inspired energy is wonderful! These moments can help us think bigger and explore new possibilities. Inspiration often brings excitement and creativity. It's great you're feeling that spark. What's happening right now?",

"I see enthusiasm! That kind of excitement often comes from ideas or goals that feel meaningful. Inspired energy can help us stay focused and motivated. It's nice to see that positivity. What's fueling this enthusiasm?",

"Feeling creative and inspired! It sounds like something is encouraging new ideas or motivation. These moments can lead to wonderful creativity and growth. It's great that you're experiencing them. Can you share what's inspiring you?",

"Your inspiration is bright! It seems like something meaningful is lighting up your thoughts and motivation. Inspired feelings can help us discover new possibilities. It's wonderful you're feeling this way. Tell me the reason behind it.",

"I sense excitement from inspiration! It sounds like something has sparked your interest or creativity. These moments can bring motivation and fresh ideas. It's great to notice that energy. What's the cause behind it?",

"Uplifting vibes detected! It seems like you're feeling motivated and encouraged. Inspiration can bring a sense of purpose and positivity. It's wonderful that you're experiencing this moment. What's motivating you today?",

"Inspired and energized! That combination can bring powerful ideas and motivation. These moments often help us take steps toward our goals. It's great you're feeling this spark. Can you elaborate on what's inspiring you?",

"Your ideas are flowing! It sounds like creativity and inspiration are working together right now. Moments like these can lead to exciting thoughts and opportunities. It's wonderful that you're experiencing it. What's the inspiration behind your ideas?"
];

responses.happy.energetic = [
"High energy vibes! It sounds like you're feeling really active and full of enthusiasm right now. Moments like this can bring a lot of motivation and excitement into the day. It's great to enjoy that lively energy. What are you up to?",

"I see your energy! It sounds like you're feeling active and ready to do things. High energy moments can make the day feel productive and exciting. It's wonderful to notice that positive momentum. Care to share more about what's going on?",

"Feeling active is great! That kind of energy can help you stay motivated and engaged with what you're doing. Energetic moods often come from excitement or positive experiences. It's nice to hear that spark in your words. What's happening today?",

"Energetic mood detected! It seems like something is giving you a boost of enthusiasm. Moments like this can make tasks feel easier and more enjoyable. It's great to appreciate this lively feeling. What's causing this energy?",

"Your energy is inspiring! It sounds like you're feeling motivated and ready for action. Energetic moments can help us stay focused and productive. It's wonderful to experience that vitality. Tell me more about what's driving it.",

"I sense vibrancy! It seems like you're feeling active and lively today. This kind of positive energy can make the day feel exciting and full of possibilities. It's great to embrace that feeling. What's keeping you busy right now?",

"Feeling lively and active! That kind of mood can make everything feel more engaging. Energetic moments often come when we're excited or motivated about something. It's wonderful that you're experiencing this. What's going on?",

"Energetic vibes shine! It sounds like you're full of enthusiasm and momentum today. These lively feelings can help you accomplish things and stay motivated. It's great to recognize them. Can you explain what's behind this energy?",

"I see your high spirits! It sounds like something is energizing and motivating you right now. High spirits can bring positivity and excitement into our actions. It's great that you're feeling this way. What's energizing you?",

"Active and vibrant! Your mood sounds lively and enthusiastic today. Moments like this can bring motivation and productivity. It's wonderful to embrace that positive energy. What activity are you enjoying?",

"Feeling charged is amazing! It sounds like you're experiencing a boost of motivation or excitement. Energetic moments can make the day feel full of possibilities. It's great to enjoy that spark. Tell me why you're feeling this way.",

"I sense motion and energy! It sounds like you're feeling motivated and ready to do things. This kind of enthusiasm can make activities feel more exciting. It's wonderful that you're experiencing it. Can you elaborate?",

"Your mood is bright and active! It sounds like something positive is giving you energy today. Lively emotions like this can help bring productivity and joy. It's great to appreciate that feeling. What's causing it?",

"Energetic and lively! It seems like you're having a vibrant and exciting day. These kinds of moods can make experiences more enjoyable and meaningful. It's wonderful you're feeling this way. What's happening today?",

"I see vitality in your words! It sounds like you're feeling full of life and enthusiasm. Moments like this can help bring motivation and excitement into our activities. It's great to notice this energy. Share more about what's going on.",

"Feeling upbeat and energetic! That combination can make the day feel exciting and productive. Energetic moods often come from motivation or excitement. It's wonderful that you're experiencing this. What's the story behind it?",

"Your energy is noticeable! It sounds like something is motivating or exciting you today. High energy moments can help us accomplish a lot and stay positive. It's great to feel that spark. What's driving it?",

"Vibrant and active vibes detected! It seems like you're feeling lively and enthusiastic right now. This kind of positive energy can brighten the whole day. It's wonderful to embrace that feeling. Care to explain what's happening?",

"High spirits and energy! It sounds like you're experiencing a very positive and active moment. These lively emotions can help boost motivation and excitement. It's great to appreciate them. What's bringing this energy?",

"I sense liveliness! Your mood sounds bright and enthusiastic today. Energetic moments like these can make everything feel more exciting and engaging. It's wonderful you're feeling this way. What's the reason behind it?"
];
responses.happy.hopeful = [
"Hopefulness is beautiful. It sounds like you're feeling positive about what lies ahead. Hope can give us strength and motivation to move forward. It's wonderful to hold on to that feeling. What are you hoping for right now?",

"I see hope in your words! It sounds like you're expecting something positive in the future. Hopeful thoughts can help us stay motivated and calm. It's great that you're feeling this way. Can you explain what's giving you this hope?",

"Feeling positive about the future is great! It shows you're looking ahead with confidence. These hopeful feelings can help us stay motivated and optimistic. It's wonderful to notice them. What's coming up that excites you?",

"Hopeful vibes detected! It seems like something ahead is giving you encouragement. Anticipating positive moments can bring energy and happiness. It's great to embrace that feeling. Care to elaborate on what's giving you hope?",

"I sense optimism and hope! It sounds like you're feeling encouraged about something. These emotions can bring motivation and positivity into our lives. It's wonderful to experience them. What's making you feel this way?",

"Being hopeful is inspiring! It often means you believe good things are possible. That kind of mindset can help us stay strong and motivated. It's great that you're feeling this positivity. Share the story behind it.",

"Your hopeful mood is uplifting! It sounds like you're looking forward to something meaningful. These moments of anticipation can bring excitement and motivation. It's wonderful to embrace that feeling. What's ahead for you?",

"I see your expectations bright! It sounds like something is motivating you to look forward with positivity. Hopeful thinking can help us feel confident about the future. It's great to experience that mindset. What's motivating you right now?",

"Feeling encouraged is wonderful! It sounds like you're feeling positive and motivated about something ahead. Encouragement can bring a lot of strength and confidence. It's great you're experiencing this. Can you tell me more?",

"Hopeful and positive! It seems like something ahead is giving you optimism. Moments like this can help us stay motivated and excited. It's wonderful to hold onto that feeling. What's the reason behind it?",

"I sense forward-looking thoughts! It sounds like you're thinking about the future in a positive way. Hopeful thinking can help create motivation and excitement. It's great to notice that mindset. What's the hope you're feeling?",

"Being optimistic is great! It often means you believe something good is possible. Optimism can bring confidence and energy into our lives. It's wonderful you're feeling this way. What's the focus of your hope?",

"Hopefulness detected! It seems like you're expecting something positive ahead. These feelings can bring motivation and excitement. It's great to appreciate them. Share the details behind your hope.",

"I see aspirations in your tone! It sounds like you're thinking about goals or positive possibilities. Aspirations can give us direction and encouragement. It's wonderful to feel inspired like this. What's coming next for you?",

"Feeling inspired for the future! It sounds like something ahead is motivating you. These hopeful feelings can bring excitement and confidence. It's great you're experiencing this energy. Can you elaborate?",

"Your hopeful energy shines! It seems like something meaningful is encouraging you. Hopeful emotions can help us stay motivated and focused. It's wonderful that you're feeling this positivity. What's motivating you?",

"I sense expectation and hope! It sounds like you're looking forward to something important. Anticipation can bring excitement and happiness. It's great to hold onto that positive mindset. What's happening?",

"Looking forward is great! It often means something exciting or meaningful is coming up. Anticipation can make the present feel brighter. It's wonderful to notice that feeling. What's the story behind it?",

"Hopeful and encouraged! It sounds like you're feeling positive about something ahead. Encouragement can bring confidence and strength. It's great to embrace that feeling. Care to explain what's giving you hope?",

"Your optimism is visible! It sounds like you're expecting something good in the future. Optimism can bring motivation and positivity. It's wonderful to experience that mindset. What's making you feel hopeful?"
];

responses.happy.satisfied = [
"Satisfaction is great! It sounds like something has brought you a sense of fulfillment. Moments like this can make us feel calm and accomplished. It's wonderful to appreciate them. What has been fulfilling for you?",

"I see contentment! It sounds like things are going well and you're feeling comfortable with the outcome. Contentment can bring peace and balance to our day. It's nice to recognize that feeling. Can you explain more about it?",

"Feeling satisfied is lovely! It usually means something meaningful worked out for you. Appreciating these moments can help strengthen positive emotions. It's wonderful you're feeling this way. What's making you feel satisfied?",

"Satisfied vibes detected! It seems like something has given you a sense of completion or happiness. These moments can bring calm and confidence. It's great to acknowledge them. Share the details behind this feeling.",

"I sense fulfillment! It sounds like something meaningful has brought you happiness. Fulfillment often comes from effort or meaningful experiences. It's wonderful you're experiencing that feeling. What's the cause behind it?",

"Being content is wonderful! It often means you're comfortable with how things turned out. These peaceful moments can help bring balance to our emotions. It's great to notice them. What's contributing to this feeling?",

"Your satisfaction shines! It sounds like something positive has worked out for you. Moments like this can bring a sense of accomplishment and happiness. It's great to appreciate them. Can you elaborate?",

"I see accomplishment! It seems like you achieved something meaningful. Achievements often bring satisfaction and confidence. It's wonderful you're experiencing that moment. What's bringing this satisfaction?",

"Feeling fulfilled is amazing! That kind of feeling often comes from reaching goals or completing something important. It's wonderful to recognize those moments. They can bring a lot of positivity. Tell me more about it.",

"Your mood shows contentment! It sounds like you're feeling calm and happy with the situation. These peaceful emotions can help us stay balanced. It's great that you're experiencing this. What's happening?",

"Satisfaction detected! It seems like something worked out well for you. Appreciating those moments can strengthen positive feelings. It's great you're noticing this sense of fulfillment. Care to share the story?",

"I sense pleasure from achievements! It sounds like your effort has paid off. Moments like these can bring confidence and happiness. It's wonderful to enjoy that success. What's the source of this satisfaction?",

"Feeling content and happy! That kind of emotional balance can make the day feel calm and positive. It's wonderful to recognize these peaceful moments. They can bring lasting happiness. What's the reason behind it?",

"Your positive feelings are clear! It sounds like something meaningful brought you satisfaction. These emotions can help boost confidence and motivation. It's great that you're experiencing this. Can you explain more?",

"Being satisfied is uplifting! It usually means things have worked out in a positive way. Moments like this can bring calm happiness and confidence. It's wonderful you're feeling this way. What's the situation?",

"I see joy and fulfillment! It sounds like something meaningful has brought you happiness. Fulfillment can come from achievements or positive experiences. It's great that you're experiencing this feeling. Share more about it.",

"Feeling accomplished is wonderful! Achieving something important can bring a deep sense of satisfaction. It's great to recognize the effort behind it. These moments can be very rewarding. What's contributing to this feeling?",

"Your satisfaction is noticeable! It sounds like something has brought you a sense of completion or happiness. Appreciating these moments can strengthen positivity. It's great you're feeling this way. What's the reason behind it?",

"Fulfillment detected! It seems like something meaningful has worked out for you. These moments can bring confidence and calm happiness. It's wonderful you're experiencing that feeling. Can you elaborate?",

"I sense happiness from completion! It sounds like finishing something important brought you satisfaction. Completion often brings relief and pride. It's great to appreciate those moments. What's happening right now?"
];
// Part 2 continues with motivated, relaxed, peaceful, amused, confident, enthusiastic, thankful subcategories...

// aiChatTest.js - Part 3: Final Happy Subcategories

responses.happy.motivated = [
"Motivation is key! You seem driven and ready to take action today. Moments like this can move us closer to our goals and dreams. What's driving you today?",

"I see your determination! Your words show focus and effort. Determination can be a powerful force for progress and growth. Can you share more about what's motivating you?",

"Feeling motivated is great! This kind of energy helps you stay productive and inspired. It's wonderful when something pushes us to do our best. What's inspiring you right now?",

"Motivated vibes detected! Something seems to be giving you a boost of purpose and energy. Motivation can make even tough tasks feel achievable. Care to explain what's behind it?",

"I sense your energy for action! You sound ready to move forward and make things happen. That mindset can lead to amazing progress. What's pushing you forward?",

"Being motivated is wonderful! When we feel driven, it often means something meaningful is guiding us. That focus can bring excitement and purpose. What's the goal you're working toward?",

"Your drive is impressive! You seem focused and ready to accomplish something important. Moments like this can feel very empowering. Tell me more about what's motivating you.",

"I see determination in your words! Determination often comes from passion or a clear goal. It's great to notice that energy in your mindset. What's motivating you today?",

"Feeling enthusiastic to achieve is amazing! That excitement can turn ideas into real progress. It's wonderful to feel that spark of determination. Would you like to share more about it?",

"Motivation detected! You sound inspired to take action. Motivation can make challenges feel more manageable and rewarding. What's the reason behind this energy?",

"I sense ambition! Ambition can push us to reach beyond our limits and aim for something meaningful. It's great you're feeling that sense of purpose. What's making you feel motivated?",

"Being proactive is fantastic! Taking initiative often leads to positive changes and achievements. It's great that you're ready to move forward. What's the story behind this motivation?",

"Your focus is clear! It sounds like something important is on your mind. Focus helps us stay on track and make progress step by step. Can you explain more about what's driving you?",

"I see energy for progress! This mindset can help you accomplish amazing things. It's wonderful to feel ready for growth and improvement. What's the inspiration behind it?",

"Feeling encouraged is great! Encouragement often brings confidence and determination. It's wonderful to notice that positive mindset. What's motivating you today?",

"Your drive shines! You seem determined and focused on something important. That kind of energy can lead to meaningful progress. Care to share the details?",

"Motivated and determined! You sound ready to move forward and achieve something meaningful. That determination can be very powerful. What's pushing you today?",

"I sense action-oriented energy! It feels like you're ready to make things happen. This kind of motivation can lead to exciting progress. What's the cause behind it?",

"Feeling uplifted and motivated! When positivity and motivation combine, they create strong momentum. It's wonderful that you're feeling this way. Can you elaborate?",

"Your focus is inspiring! You seem deeply committed to something meaningful. That dedication can lead to great achievements. What's keeping you driven?"
];
responses.happy.relaxed = [
"Relaxation feels good. It sounds like you're enjoying a calm moment right now. Taking time to unwind can really help refresh the mind. How did you unwind today?",

"I see calmness! Your words feel peaceful and balanced. Moments like this can help us recharge mentally and emotionally. Can you tell me more about what's helping you feel calm?",

"Feeling relaxed is wonderful! When the mind feels relaxed, everything seems lighter and easier. It's great that you're experiencing that comfort. What's helping you feel this way?",

"Relaxed vibes detected! It seems like you're taking a moment to slow down and breathe. Those peaceful breaks can make a big difference. Care to elaborate?",

"I sense peace in your words! That calm feeling can bring clarity and comfort. It's wonderful that you're experiencing it. What's contributing to this peaceful mood?",

"Being at ease is great! When we feel relaxed, it can bring balance to our thoughts and emotions. It's lovely that you're enjoying this moment. What's the reason behind it?",

"Your calm energy shines! It sounds like you're in a peaceful state of mind right now. Those moments are important for well-being. Can you share what's helping you relax?",

"I see serenity! That gentle sense of calm can make the day feel lighter. It's wonderful to experience that feeling. What's helping you relax today?",

"Feeling rested is amazing! Rest can help restore both energy and positivity. It's great that you're feeling refreshed. Tell me more about what's helping you feel this way.",

"Relaxation detected! It seems like you're enjoying a peaceful activity or quiet moment. Those breaks can really help the mind reset. What activity helped you relax?",

"I sense comfort and calm! That relaxed feeling can bring emotional balance and clarity. It's wonderful you're experiencing that ease. What's working well for you right now?",

"Being relaxed is lovely! It sounds like things feel calm and comfortable at the moment. Those peaceful experiences can be very refreshing. What's the story behind it?",

"Your mood is peaceful! That kind of calm energy can make everything feel more manageable. It's great to notice moments like this. Care to explain what's helping?",

"I see tranquility in your tone! It seems like you're enjoying a quiet and balanced moment. That kind of calm can be very healing. What's helping you feel this way?",

"Feeling calm and unwound is wonderful! Letting go of stress can make a big difference in how we feel. It's great that you're experiencing that ease. Would you like to share more?",

"Relaxed and happy! That combination can make the day feel especially pleasant. It's wonderful to experience that peaceful happiness. What's contributing to this mood?",

"I sense ease and lightness! When things feel lighter, it can bring comfort and clarity. It's great that you're experiencing this calm feeling. What's the cause behind it?",

"Being stress-free is great! Moments without pressure can help us recharge and feel balanced again. It's wonderful you're enjoying that space. Can you elaborate?",

"Your relaxed mood shines! It sounds like you're enjoying a calm and peaceful moment. Those times can really help restore energy. What's happening today?",

"I see calmness and comfort! That peaceful feeling can bring balance and positivity. It's wonderful you're experiencing it. What's making you feel this way?"
];

responses.happy.peaceful = [
"Peaceful vibes! It sounds like you're experiencing a calm and gentle moment right now. Those peaceful feelings can bring clarity and comfort. What's creating this calm for you?",

"I see serenity in your mood! Your words feel balanced and relaxed. Moments like this can help the mind slow down and feel centered. Can you explain what's helping you feel this way?",

"Feeling at peace is wonderful! When our thoughts feel calm, everything around us can seem lighter. It's great that you're experiencing that feeling. What's helping you stay peaceful?",

"Peaceful energy detected! It seems like you're enjoying a quiet and comfortable state of mind. Those moments can be really refreshing. Would you like to share the story behind it?",

"I sense tranquility! That calm energy can help bring emotional balance and clarity. It's wonderful that you're feeling this way. What's contributing to this peaceful feeling?",

"Being calm is great! A calm mind can help us think clearly and feel more balanced. It's nice to notice those peaceful moments. Tell me more about what's happening.",

"Your peaceful mood shines! It sounds like you're enjoying a gentle and relaxed moment. Those experiences can be very comforting. Can you elaborate on what's helping you feel this way?",

"I see serenity in your words! That peaceful tone suggests you're feeling balanced and at ease. It's wonderful to notice that calm energy. What's the reason behind it?",

"Feeling harmony is amazing! When things feel balanced, it can bring a deep sense of comfort. It's great that you're experiencing that. What's the cause of this harmony?",

"Peace detected! It seems like you're in a calm and centered moment. Those experiences can be very grounding. What's helping you feel this way?",

"I sense balance and calm! Your words feel steady and relaxed. Moments like these can help restore emotional balance. Care to explain what's contributing to it?",

"Being peaceful is lovely! It sounds like you're enjoying a calm and quiet state of mind. Those moments can be very healing. What's happening right now?",

"Your calm energy is noticeable! That peaceful feeling can make everything feel more manageable. It's great that you're experiencing this balance. Tell me more about it.",

"I see serenity and quietness! It sounds like you're enjoying a gentle and reflective moment. Those calm experiences can be very comforting. What's working well for you?",

"Feeling composed is wonderful! When we feel composed, it often means things feel balanced and steady. It's great you're experiencing that feeling. Would you like to share the details?",

"Peaceful and happy! That combination can bring a deep sense of contentment. It's wonderful to feel both calm and positive. What's the source of that feeling?",

"I sense inner calm! It sounds like you're feeling centered and relaxed within yourself. Those moments can be very meaningful. Can you elaborate on what's helping you feel this way?",

"Being at ease is great! When things feel easy and calm, it can bring a lot of comfort. It's wonderful that you're experiencing that state. What's contributing to it?",

"Your tranquil mood shines! That peaceful tone suggests you're enjoying a quiet and balanced moment. It's great to recognize those feelings. What's causing this calm?",

"I see serenity and harmony! It sounds like you're experiencing a nice sense of balance. Those moments can be very refreshing and meaningful. What's helping you feel this way?"
];
responses.happy.amused = [
"Amusement is fun! It sounds like something made you smile or laugh. Those lighthearted moments can really brighten the day. What made you laugh?",

"I see humor! Your words feel playful and cheerful. Humor can be a wonderful way to lift the mood. Can you share more about what's funny?",

"Feeling amused is great! Laughter and humor can make everything feel lighter. I'm curious about what's bringing that smile. What’s funny?",

"Amused vibes detected! It seems like something entertaining just happened. Funny moments can make the day more enjoyable. Tell me the story.",

"I sense laughter! Laughter can be a great way to relax and enjoy the moment. It sounds like something amusing happened. What’s bringing that laughter?",

"Being amused is lovely! Humor can bring a lot of joy and positivity. It sounds like you're enjoying a funny moment. Can you elaborate?",

"Your amusement shines! That cheerful energy suggests something entertaining is happening. It's always nice to enjoy moments like that. What's going on?",

"I see humor in your words! It sounds like something made you smile. Those playful moments can brighten anyone's mood. What’s making you smile?",

"Feeling entertained is wonderful! When something amuses us, it can make the day feel more fun. I'd love to hear more about it. Share more?",

"Amusement detected! It sounds like something lighthearted caught your attention. Humor can really lift the mood. What's the reason behind it?",

"I sense joy from humor! Laughter often brings positive energy and connection. It seems like something funny happened. Can you explain?",

"Being cheerful and amused! That playful feeling can make everything more enjoyable. It sounds like something funny is happening. What's funny?",

"Your laughter is contagious! Even hearing about laughter can brighten the moment. I'd love to know what made you laugh. Share the cause.",

"I see your playful amusement! It sounds like you're enjoying a light and fun moment. Those experiences can be really refreshing. What's going on?",

"Feeling happy and amused! That kind of cheerful mood can make the day feel brighter. It's great that you're enjoying the moment. Tell me more.",

"Amused and joyful! Laughter and joy together can create wonderful moments. I'm curious about what's making you laugh. Care to share?",

"I sense delight! Something seems to be bringing you a fun and entertaining experience. Those moments can be really uplifting. What’s causing the amusement?",

"Being entertained is amazing! When something catches our humor, it can make everything feel lighter. Can you elaborate on what's entertaining you?",

"Your humor is noticeable! It sounds like you're enjoying something funny or playful. Those moments can make conversations lively. What's happening?",

"I see amusement and joy! That cheerful feeling suggests something amusing is happening. It's always nice to share those moments. What's bringing the laughter?"
];

responses.happy.confident = [
"Confidence looks good on you! It sounds like you're feeling strong and self-assured right now. That kind of mindset can really help you take on challenges. What's boosting your confidence today?",

"I see self-assurance! Your words reflect a lot of belief in yourself. Self-confidence can make a big difference in how we approach things. Can you explain more about what's helping you feel this way?",

"Feeling confident is wonderful! When we trust our abilities, it can open the door to many possibilities. It's great that you're feeling strong. What's giving you that strength?",

"Confident vibes detected! It sounds like you're feeling positive and capable right now. Confidence can really help us move forward with clarity. Would you like to share the story behind it?",

"I sense courage! That brave energy can help you face challenges with determination. It's wonderful to notice that strength in your words. What's making you feel confident?",

"Being self-assured is great! When you believe in yourself, it can bring clarity and motivation. It's inspiring to hear that confidence. Tell me more about it.",

"Your confidence shines! That strong mindset can help you achieve many things. It's great that you're feeling empowered right now. What's contributing to this feeling?",

"I see determination in your mood! Determination and confidence often go hand in hand. It sounds like you're ready to move forward with purpose. Can you elaborate?",

"Feeling empowered is amazing! Empowerment can make us feel capable and ready for new opportunities. It's great that you're experiencing that energy. What's the reason behind it?",

"Confidence detected! It sounds like something positive is helping you feel strong and capable. Moments like this can be very motivating. What's helping you feel this way?",

"I sense boldness! That fearless attitude can help you take meaningful steps forward. It's wonderful to hear that strength in your tone. Would you like to share more details?",

"Being strong and confident! That mindset can help you handle challenges and opportunities alike. It's inspiring to hear your determination. What's motivating you?",

"Your self-assurance is noticeable! It sounds like you truly believe in your abilities right now. Confidence like that can be very empowering. Tell me the story behind it.",

"I see fearless energy! That bold mindset can make it easier to pursue goals and take risks. It's great that you're feeling this way. What's boosting your confidence?",

"Feeling positive and confident! That combination can create strong motivation and optimism. It's wonderful that you're experiencing it. Can you explain what's behind it?",

"Confident and happy! That balance of positivity and self-belief can make the day feel brighter. It's great that you're feeling this way. What's the cause behind it?",

"I sense self-belief! Believing in yourself can be a powerful source of strength. It's wonderful to hear that in your words. What's contributing to that confidence?",

"Being confident is inspiring! Confidence often encourages growth and progress. It's great to see that energy in your mindset. Tell me more about what's driving it.",

"Your assertiveness shines! That strong and clear mindset can help you move forward with purpose. It's wonderful that you're feeling empowered. What's making you feel strong?",

"I see confidence and clarity! That sense of direction can bring a lot of motivation and focus. It's great that you're feeling balanced and strong. Can you elaborate?"
];
responses.happy.enthusiastic = [
"Enthusiasm is great! It sounds like something is really exciting you right now. That kind of positive energy can make experiences even more enjoyable. What excites you the most?",

"I see eagerness! Your words sound full of interest and curiosity. It's always wonderful when something sparks that kind of excitement. Can you tell me more about it?",

"Feeling enthusiastic is wonderful! That lively energy can make the day feel brighter and more engaging. It sounds like something exciting is happening. What's going on?",

"Enthusiastic vibes detected! It seems like you're feeling really energized and positive. Those moments can be very motivating. Would you like to share the details?",

"I sense excitement! That kind of joyful energy can make activities feel more meaningful and fun. It's great that you're feeling this way. What's contributing to it?",

"Being eager is amazing! Curiosity and excitement often lead to new ideas and experiences. It sounds like something caught your interest. Can you explain more?",

"Your enthusiasm shines! That energetic mood can be really inspiring. It's wonderful when something makes us feel this excited. What's the cause behind it?",

"I see energy and passion! Your words sound lively and motivated. Passion can make everything feel more engaging. Tell me more about what's exciting you.",

"Feeling spirited is lovely! That upbeat energy can make the day feel more vibrant. It's great that you're feeling enthusiastic. What's happening right now?",

"Enthusiasm detected! It sounds like something is motivating you and bringing positive energy. Those moments can be really uplifting. What's inspiring you?",

"I sense zeal! That strong excitement can bring creativity and motivation. It's wonderful that you're feeling so engaged. Can you elaborate?",

"Being driven and enthusiastic! That combination can lead to great progress and meaningful experiences. It sounds like something exciting is going on. What's the story?",

"Your excited energy is noticeable! It sounds like you're really enjoying something right now. Enthusiasm like that can be contagious. Tell me more about it.",

"I see engagement and eagerness! You seem truly interested and involved in something. That kind of focus can be very rewarding. What's bringing this feeling?",

"Feeling lively and enthusiastic! That vibrant energy can make the moment feel even better. It's wonderful that you're experiencing this excitement. What's the reason behind it?",

"Enthusiastic and joyful! That positive combination can make the day feel amazing. It sounds like you're really enjoying something. Can you explain more?",

"I sense high energy! That lively spirit can bring a lot of motivation and happiness. It's great that you're feeling this way. What's exciting you today?",

"Being motivated is great! When enthusiasm and motivation come together, they can lead to wonderful progress. It sounds like something inspiring is happening. What's contributing to it?",

"Your enthusiasm is shining! That cheerful energy can brighten any moment. It's wonderful to hear that excitement in your words. Tell me the cause behind it.",

"I see passionate energy! Passion often means something truly matters to you. It's great that you're feeling so engaged and excited. Can you elaborate?"
];

responses.happy.thankful = [
"Thankfulness detected! It sounds like you're feeling grateful for something today. Gratitude can make even small moments feel meaningful. What are you appreciating right now?",

"I see gratitude! Your words reflect a sense of appreciation. It's always wonderful to notice and value the good things around us. Can you share more about it?",

"Feeling thankful is wonderful! Gratitude can bring a lot of positivity and peace. It sounds like something meaningful happened. What's making you feel this way?",

"Thankful vibes detected! It seems like something or someone has made a positive impact on you. Those moments can feel really special. Would you like to tell the story?",

"I sense appreciation! Recognizing the good things in life can be really uplifting. It's great that you're feeling grateful. What's the reason behind it?",

"Being grateful is amazing! Gratitude can help us focus on the positive moments in our lives. It's wonderful that you're feeling this way. Can you elaborate?",

"Your gratitude shines! That thankful mindset can bring warmth and happiness. It's nice to hear that appreciation in your words. What's contributing to this feeling?",

"I see thankfulness in your words! It sounds like something meaningful has touched your heart. Gratitude can make moments even more special. Tell me more about it.",

"Feeling appreciative is lovely! When we notice the good around us, it can bring a lot of joy and calm. It's wonderful that you're feeling this way. What's happening?",

"Thankful mood detected! Something must have made a positive difference for you today. Those moments can feel really meaningful. What's the source of this gratitude?",

"I sense recognition and gratitude! Acknowledging the people or experiences that help us can feel very rewarding. It's great that you're feeling appreciative. Share more if you'd like.",

"Being thankful and positive! Gratitude often brings a sense of calm and happiness. It sounds like something meaningful is motivating you. What's behind this feeling?",

"Your grateful energy is noticeable! That kind of appreciation can brighten your day and the people around you. It's wonderful to hear. Tell me the reason behind it.",

"I see gratitude and joy! Those two feelings together can make moments feel even more special. It sounds like something good happened. What's bringing this feeling?",

"Feeling thankful and happy! Gratitude can bring a lot of warmth and positivity. It's wonderful that you're experiencing that. Can you explain more about it?",

"Thankfulness and contentment! That combination can create a peaceful and fulfilling feeling. It sounds like something meaningful happened. What's the story behind it?",

"I sense gratefulness! Recognizing the good things in life can be very uplifting. It's great that you're feeling this appreciation. What's contributing to it?",

"Being appreciative is great! Gratitude can help us stay connected to the positive moments around us. It's nice to hear that in your words. Tell me more.",

"Your grateful mood shines! That kind of positivity can make experiences feel even more meaningful. It's wonderful that you're feeling this way. What's the cause behind it?",

"I see thankfulness and happiness! Gratitude can create a strong sense of warmth and positivity. It's great that you're feeling this combination. Can you elaborate?"
];

// Initialize usedResponses tracking for these subcategories
usedResponses.happy.motivated = [];
usedResponses.happy.relaxed = [];
usedResponses.happy.peaceful = [];
usedResponses.happy.amused = [];
usedResponses.happy.confident = [];
usedResponses.happy.enthusiastic = [];
usedResponses.happy.thankful = [];

usedResponses.happy.enthusiastic = [];
usedResponses.happy.thankful = [];

// ================= Neutral Category =================
responses.neutral = {
    general: [
        "I hear you. Tell me more about what's on your mind.",
        "I'm here for you. How has your day been overall?",
        "Take your time. I'm listening.",
        "Could you elaborate on that a bit more?",
        "I see. How does that make you feel?",
        "Whenever you're ready, I'd love to hear more about that.",
        "That's interesting. What else are you thinking about?",
        "I'm following along. Please continue.",
        "Got it. Is there anything specific you want to focus on?",
        "I understand. How are you holding up with everything?",
        
        "Thanks for sharing that. What else has been on your mind lately?",
        "I'm here and listening. Feel free to tell me more.",
        "That sounds important. Would you like to talk more about it?",
        "I appreciate you sharing that with me. What happened next?",
        "I'm glad you're telling me about this. What are you thinking about it now?",
        "Take your time to explain. I'm here to listen.",
        "It sounds like there's more to the story. Would you like to continue?",
        "I'm interested in understanding more about your thoughts.",
        "That makes sense. How has this been affecting you?",
        "Whenever you feel comfortable, you can share more details."
    ]
};


// ================= Sad Category - Part 1 =================

responses.sad = {};

// General sadness
responses.sad.general = [
"You're not alone in feeling sad. I'm here with you, and you can share as much as you feel comfortable. Can you tell me what's weighing on your mind?",

"Sadness is a natural emotion that many people experience. It's okay to talk about it here. Would you like to share what's been on your mind lately?",

"I hear you, and it's completely okay to feel this way. Emotions can be heavy sometimes. Can you describe what you're feeling right now?",

"Feeling low happens to everyone at times. You don't have to go through it alone. Would you like to share what's been troubling you?",

"I understand that sadness can feel heavy and difficult to carry. Talking about it can sometimes help. Would you like to explore it together?",

"It's okay to feel sad. Your feelings are valid and deserve attention. What's been bothering you the most recently?",

"Sad emotions happen to everyone, and they can sometimes feel overwhelming. I'm here to listen. Would you like to talk about what's going on?",

"I sense some heaviness in your mood. Thank you for sharing that with me. Can you explain a little more about what you're experiencing?",

"Sadness can feel overwhelming at times. You don't have to keep it all inside. Would you like to talk about what's causing these feelings?",

"I hear that you're going through something difficult. I'm here to listen without judgment. Want to tell me what's making you feel down?",

"It's natural to feel sad sometimes. These emotions are part of being human. Would you like to share the thoughts that are on your mind?",

"I understand your feelings might be difficult right now. Sharing them can sometimes make things a little lighter. What do you think might be the main cause?",

"Feeling blue can happen during tough moments. You're not alone in experiencing it. Would you like to tell me more about what's going on?",

"Sadness can weigh on the mind and heart. Talking about it can sometimes help us understand it better. Can you tell me more about your situation?",

"I hear the emotions you're expressing, and they matter. I'm here to listen. Would you like to describe how you're feeling right now?",

"Being sad is completely okay. Emotions can change over time, and talking about them can help. Can you explain what's happening in your life right now?",

"I sense that you're carrying some difficult feelings. You can share them here safely. Would you like to talk about them?",

"Sad moments are part of life, even though they can feel very heavy. What's making today especially difficult for you?",

"I understand that you've been feeling this way. Sometimes it helps to talk about how long these feelings have been present. Would you like to share more about that?",

"Feeling sad is a human experience, and it's okay to talk about it. I'm here to listen and support you. Would you like to discuss what's been happening?"
];
usedResponses.sad = {};
usedResponses.sad.general = [];

// Loneliness
responses.sad.loneliness = [
"Feeling alone can be really difficult. I'm here to listen if you'd like to talk about what's making you feel this way.",

"Loneliness can be tough to carry. Would you like to share what's been contributing to these feelings?",

"You're not alone right now. I'm here with you. Can you tell me more about what you're experiencing?",

"Feeling isolated can be painful at times. If you're comfortable, we can explore these feelings together.",

"Lonely moments can feel heavy. Is there someone you usually reach out to when you feel this way?",

"Sometimes feeling disconnected from others can be really hard. What do you think might be causing this feeling right now?",

"Being lonely is something many people experience at times. Would you like to elaborate on what's been happening?",

"I sense some loneliness in what you're sharing. Do you want to talk more about what's going on?",

"Feeling disconnected can make things feel overwhelming. If you'd like, you can tell me more about it.",

"Loneliness can make even simple days feel difficult. What has been making you feel this way recently?",

"Being alone can sometimes feel heavier than expected. Would you like to talk about what's been on your mind?",

"It sounds like you're dealing with some loneliness. Do you have someone you usually talk to or trust?",

"Many people go through moments of loneliness. Would you like to describe how you're feeling right now?",

"I sense that you might be feeling isolated. If you feel comfortable, you can share what's been happening.",

"Feeling solitary can be challenging. Is there something specific that triggered this feeling?",

"Loneliness can be painful, but sharing your thoughts can sometimes help a little. Want to talk about it?",

"Being alone sometimes is part of life, but it can still feel difficult. What's been causing this feeling lately?",

"It sounds like you're going through a lonely moment. I'm here to listen if you'd like to share more.",

"Loneliness can weigh on the heart. Would you like to explain more about what you're experiencing?",

"Your feelings matter. If you'd like, we can talk through what has been making you feel this way."
];
usedResponses.sad.loneliness = [];

// Grief
responses.sad.grief = [
"Losing someone important can be incredibly painful. I'm really sorry you're going through this. If you'd like, you can share anything that's on your mind.",

"Grief takes time, and everyone experiences it differently. If you feel comfortable, would you like to talk about your loved one?",

"I understand this must be very difficult. Sometimes sharing memories can bring comfort. Would you like to tell me about them?",

"Feeling sorrow after a loss is completely natural. Your emotions are valid. Would you like to describe how you're feeling right now?",

"I hear you. Loss can feel very heavy to carry. If you'd like, we can talk about what you're going through.",

"Grief is a deeply personal journey. There is no right or wrong way to feel. How have you been coping lately?",

"I'm sorry that you're experiencing this pain. If you want, we can explore these feelings together at your own pace.",

"It's okay to feel heartache after losing someone you care about. Would you like to share more about what you're feeling?",

"I sense a lot of sadness in your words. I'm here to listen if you'd like to talk about the loss.",

"Losing someone close can leave a deep emptiness. If you're comfortable, you can express whatever you're feeling here.",

"I hear your grief, and your feelings matter. Sometimes remembering special moments can help. Would you like to share a memory?",

"Feeling emotional after a loss is very normal. You don't have to go through it alone. We can talk about it if you'd like.",

"I understand that this can be one of the hardest experiences to face. Would you like to share what has been the most difficult part?",

"Grief can feel overwhelming at times. It's okay to take things one moment at a time. If you'd like, you can open up here.",

"I sense sorrow in what you're sharing. Talking about your feelings may help a little. Would you like to explore them together?",

"Losing someone important can change so many things in life. If you want, you can talk about what you're going through.",

"I hear the pain in your words. Grieving is a natural response to loss. Would you like to share more about your experience?",

"It's completely natural to feel sadness after losing someone you love. I'm here to listen whenever you're ready.",

"I understand that this heartache can feel very heavy. If you'd like, you can tell me about the person you're missing.",

"Grief affects everyone differently, and there's no timeline for healing. How have you been feeling today?"
];
usedResponses.sad.grief = [];

// Rejection
responses.sad.rejection = [
"Being rejected can hurt deeply, and it's completely understandable to feel upset about it. If you'd like, you can tell me what happened.",

"Rejection can be painful, but it doesn't define your worth or value as a person. Would you like to talk about what you're feeling right now?",

"I hear that you're going through something difficult. Rejection can bring a lot of emotions. Want to describe what's on your mind?",

"Feeling turned down can be really hard. Your feelings are valid. Would you like to explore what you're experiencing?",

"I understand that rejection can sting. If you're comfortable, you can share what happened.",

"It's natural to feel hurt after something like this. What part of the situation feels the most difficult for you?",

"I sense some disappointment in your words. If you'd like, you can tell me more about what's been going on.",

"Experiencing rejection can shake our confidence sometimes. I'm here to listen if you'd like to talk about it.",

"It sounds like this situation is weighing on you. Would you like to explore why it feels so heavy?",

"Rejection can be really tough to process. What part of the experience has been the hardest for you?",

"I understand that this might feel discouraging. If you'd like, we can talk about the situation together.",

"Feeling dejected after rejection is a very human response. Would you like to open up about what's bothering you?",

"I sense some hurt in what you're sharing. Would you like to describe the emotions you're going through?",

"Being turned down can make anyone feel sad or uncertain. How have you been coping with it?",

"It sounds like this experience affected you deeply. If you'd like, you can share more about it.",

"It's completely natural to feel upset after rejection. Would you like to explain what happened?",

"I understand this experience might have been painful. If you want, you can talk about it here.",

"Rejection can sometimes weigh heavily on the heart. Sharing your thoughts might help a little. Want to tell me more?",

"I sense sadness connected to this experience. What part of the situation has been the most difficult for you?",

"Being rejected can feel discouraging, but your feelings matter. How has this experience made you feel?"
];
usedResponses.sad.rejection = [];

// Failure
responses.sad.failure = [
"Experiencing failure can feel really tough. I'm here to listen if you'd like to talk about what happened.",

"Setbacks can be discouraging, and it's okay to feel upset about them. Would you like to share what went wrong?",

"I understand that this situation might feel disappointing. What part of the experience has been the hardest for you?",

"Feeling like you failed can bring a lot of emotions. If you'd like, we can explore those thoughts together.",

"I hear that you're struggling with this situation. Failures can feel heavy sometimes. Want to talk about it?",

"It's okay to feel down after a setback. These moments can be difficult to process. Would you like to elaborate on what happened?",

"I sense some frustration in your words. What part of the experience is affecting you the most right now?",

"Experiencing setbacks happens to everyone at times, but it can still feel painful. Would you like to discuss it?",

"I hear your disappointment, and that feeling is valid. Would you like to talk about what made this situation difficult?",

"Failure can feel heavy and discouraging. If you want, you can describe how you're feeling about it.",

"I understand this may feel like a big struggle right now. Would you like to share more details about what happened?",

"Feeling unsuccessful can be really discouraging. What's been bothering you the most about this experience?",

"It sounds like this situation has been difficult for you. If you'd like, we can talk through it together.",

"Mistakes and setbacks can hurt, especially when we care deeply about something. Want to open up about it?",

"I hear that you're feeling sad about this experience. It's completely okay to feel that way. Would you like to discuss it?",

"Sometimes failure can feel overwhelming. Sharing your thoughts might help a little. Can you explain more about it?",

"I understand that this situation is bringing up a lot of emotions. If you'd like, we can break them down together.",

"Feeling like you didn't succeed can be really discouraging. Would you like to explore what you're thinking about it?",

"I sense disappointment in your words. What part of this experience feels the hardest for you?",

"It's okay to struggle sometimes. You're not alone in feeling this way. If you want, we can talk about it."
];
usedResponses.sad.failure = [];

// ================= Sad Category - Part 2 =================

// Guilt
responses.sad.guilt = [
"Guilt can feel very heavy to carry. If you're comfortable, would you like to share what's been causing these feelings?",

"It's normal to feel guilty sometimes, especially when something matters to us. Would you like to talk about what happened?",

"I hear that something is weighing on your mind. How long have you been feeling this way?",

"Feeling guilty can be overwhelming. If you'd like, we can explore these feelings together.",

"I understand that this situation might be difficult for you. Would you like to describe what happened?",

"Guilt can linger in our thoughts for a long time. If you're comfortable, you can explain what's making you feel this way.",

"I sense some remorse in your words. Would you like to share more about what's been troubling you?",

"It's okay to talk about feelings like guilt. What has been on your mind lately?",

"It sounds like this situation is affecting you deeply. Want to talk about what led to these feelings?",

"Guilt can sometimes affect our mood and thoughts. If you'd like, we can break it down together.",

"I understand that these emotions may feel confusing or heavy. Can you tell me what triggered them?",

"Sometimes feeling responsible for something can bring up guilt. Would you like to explore those feelings together?",

"I sense some inner conflict in what you're sharing. If you're comfortable, we can talk through it.",

"Guilt can weigh heavily on the mind and heart. Would you like to share your thoughts about it?",

"I hear that this is affecting you. Talking about it might help you process the situation. Want to explore it together?",

"It's natural to experience guilt at times. Would you like to talk more about what you're going through?",

"I understand this may feel like a struggle right now. What part of the situation feels the hardest for you?",

"Guilt can feel overwhelming, but sharing your feelings may help lighten it a little. Can you tell me more?",

"It sounds like something important happened that is staying on your mind. Would you like to describe what led to this?",

"Feeling guilty is a very human experience. If you'd like, we can discuss the emotions you're dealing with."
];
usedResponses.sad.guilt = [];

// Hopelessness
responses.sad.hopelessness = [
"Feeling hopeless can be really heavy, and I'm sorry you're going through this. If you’d like, we can talk about what’s making things feel this way.",

"Hopelessness can feel overwhelming at times. You don’t have to handle it alone here. Would you like to share what’s been on your mind?",

"I hear that things might feel very difficult right now. If you're comfortable, we can explore these feelings together.",

"It's okay to feel uncertain or lost sometimes. Would you like to tell me what has been making things feel so hard?",

"When things feel hopeless, it can seem like there's no clear path forward. What part of the situation feels the most difficult for you?",

"I sense that you're carrying a lot right now. If you'd like, you can share what's been weighing on you.",

"Hopeless thoughts can feel very heavy. Talking about them may help a little. Would you like to describe what you're experiencing?",

"I understand that you're struggling right now. What part of your situation feels the most troubling?",

"Feeling lost or discouraged can happen during very hard moments. I'm here to listen if you'd like to talk about it.",

"It sounds like things might feel overwhelming right now. Would you like to share what’s been making you feel this way?",

"Sometimes hopelessness can make everything seem darker than it really is. If you'd like, we can talk through what you're feeling.",

"I sense you're going through something difficult. If it helps, we can focus on one small part of it together.",

"Feeling overwhelmed can make things seem impossible. Would you like to tell me more about what's happening?",

"I hear your thoughts and feelings. What has been making things feel especially hard lately?",

"When everything feels heavy, even small steps can feel difficult. We can take this conversation slowly if you'd like.",

"Hopeless moments can happen, especially during stressful times. Would you like to talk about what led to these feelings?",

"I sense that you're struggling right now. Sharing your feelings might help lighten the burden a little.",

"When people feel like giving up, it often means they’ve been carrying a lot for a long time. Do you want to tell me what’s been going on?",

"I hear that things feel really hard right now. If you'd like, we can focus on what you're experiencing in this moment.",

"Your feelings matter, even when things feel hopeless. I'm here to listen if you want to share more."
];
usedResponses.sad.hopelessness = [];

// Low Energy
responses.sad.low_energy = [
"Feeling low on energy can be really difficult, especially when you're already feeling sad. Would you like to share what your days have been like lately?",

"When sadness is present, it's common to feel drained or tired. If you're comfortable, you can tell me more about how you've been feeling.",

"I hear that you might be feeling low on energy. Are there moments during the day when you feel even a little better?",

"Fatigue and sadness can sometimes go together. If you'd like, we can talk about what's been weighing on you.",

"Low energy can make everyday tasks feel harder than usual. Would you like to describe what that has been like for you?",

"I sense some tiredness in what you're sharing. What's been wearing you down recently?",

"Feeling sluggish or unmotivated can happen when you're going through a difficult time. Would you like to explore what might be contributing to it?",

"I hear you. Are there activities that used to feel easy but now feel more difficult?",

"Energy levels can change when we're under emotional stress. Can you tell me a little more about how you've been feeling?",

"It sounds like you might be feeling very drained lately. If you'd like, we can talk about what's been going on.",

"I sense some exhaustion in your words. What part of your day feels the most challenging right now?",

"Feeling low energy can make things feel heavier than usual. Want to share what's been happening lately?",

"I hear that you're feeling tired and weighed down. If you'd like, we can explore what might be affecting your energy.",

"Sometimes when emotions feel heavy, our energy can drop too. Would you like to explain how this has been affecting you?",

"It sounds like you've been dealing with a lot lately. How long have you been feeling this low on energy?",

"I sense some fatigue in what you're describing. Would you like to talk about what your recent days have been like?",

"Feeling worn out can happen when you're going through something difficult. If you want, you can talk about it here.",

"I hear you. Are there small moments during the day when your energy improves even a little?",

"Low energy can make everything feel more difficult. Would you like to explore what might be influencing it?",

"It sounds like you're feeling quite drained. If you'd like, you can share more about what you're experiencing."
];
usedResponses.sad.low_energy = [];

// Crying
responses.sad.crying = [
"It's okay to cry. Sometimes tears are a way for our emotions to release. If you'd like, you can share what's been upsetting you.",

"Crying can happen when feelings become too heavy to hold inside. I'm here to listen if you want to talk about it.",

"I understand that you're feeling overwhelmed right now. It's completely okay to cry. What has been bringing up these feelings?",

"Tears can be a natural response to deep emotions. If you're comfortable, you can tell me what's been weighing on your heart.",

"I hear that you're going through something painful. Crying is a normal way to express those emotions. Would you like to share more?",

"Sometimes when sadness builds up, crying helps release it. If you want, you can talk about what's causing these feelings.",

"I sense that you're feeling very emotional right now. Would you like to describe what you're experiencing?",

"Crying can sometimes bring a little relief when emotions feel overwhelming. What's been making you feel this way?",

"I understand that you're dealing with strong emotions. If you'd like, we can talk about what you're going through.",

"It's completely okay to express sadness through tears. Your feelings are valid. Want to share what's on your mind?",

"I hear you. Sometimes crying helps us process things we can't easily put into words. What has been happening lately?",

"Tears can be part of healing and emotional release. If you feel comfortable, you can tell me more about what's going on.",

"I sense a lot of sadness in what you're experiencing. Would you like to talk about what caused these feelings?",

"Crying can help release some of the emotional pressure we carry. Would you like to explore what you're feeling right now?",

"I'm sorry that you're going through something that makes you cry. If you'd like, you can share what's been hurting.",

"Crying is a human response to deep emotions. If it helps, we can talk about what you're feeling.",

"I hear that things feel really heavy right now. What situations have been bringing up these tears?",

"Sometimes tears come when we've been holding a lot inside. If you want, you can open up about what's been happening.",

"I sense that your emotions feel very intense right now. Would you like to talk about what's causing that heaviness?",

"It's okay to cry and take your time with your emotions. I'm here to listen whenever you're ready to share."
];
usedResponses.sad.crying = [];

// Stress
responses.sad.stress = [
"Stress can feel really heavy, especially when you're already feeling down. Would you like to share what's been stressing you lately?",

"I hear that things might feel overwhelming right now. If you'd like, we can talk about what's causing the stress.",

"When stress builds up, it can affect both mood and energy. Would you like to break down what's been bothering you?",

"It sounds like you're under a lot of pressure. What part of the situation feels the most stressful for you?",

"Feeling stressed can make everything seem harder than usual. If you're comfortable, you can share what's been on your mind.",

"I sense some tension in what you're describing. What has been weighing on you the most lately?",

"Stress can sometimes pile up without us realizing it. Would you like to talk about what's been happening?",

"I hear you. What kinds of situations have been triggering this stress recently?",

"Managing stress can feel difficult when there are many things happening at once. Want to talk about one part of it together?",

"It sounds like this pressure has been affecting you. If you'd like, you can describe what it's been like.",

"I sense that you're feeling a lot of pressure. Would it help to talk about one stressor at a time?",

"Feeling stressed is something many people go through during tough moments. Would you like to share what's causing it?",

"I hear that stress has been affecting your mood. What do you think has been the biggest source of it?",

"It sounds like you're dealing with a lot right now. If you'd like, we can explore what might help you cope.",

"Stress can build up slowly and start to feel overwhelming. Would you like to tell me more about it?",

"I sense that you've been facing some challenges recently. Want to talk about what's been going on?",

"I hear you. What part of today or recently has felt the most stressful?",

"Sometimes stress can feel constant when many things happen at once. Would you like to talk about what's contributing to it?",

"Feeling pressured can make emotions feel heavier. If you want, you can share what's been stressing you out.",

"It sounds like you're under strain right now. What feels like the biggest stressor at the moment?"
];
usedResponses.sad.stress = [];
// ================= Sad Category - Part 3 =================

// Disappointment
responses.sad.disappointment = [
"Disappointment can really hurt, especially when you were hoping for something different. Would you like to share what happened?",

"I understand that things didn’t go the way you hoped. How have you been coping with it?",

"Feeling disappointed is a very normal reaction when expectations aren't met. If you'd like, you can tell me more about it.",

"I hear you. What was the outcome you were hoping for?",

"Disappointment can feel heavy when things don’t turn out as planned. Would you like to talk about what you expected?",

"It sounds like something didn’t go the way you hoped. Would you like to explore what happened?",

"It's completely natural to feel down when things don't meet our expectations. Want to share more about it?",

"I hear that this situation affected you. What part of it felt the most disappointing?",

"Disappointment can affect how we see the situation and ourselves. Would you like to talk it through?",

"I understand that plans sometimes don’t work out the way we want. If you'd like, we can talk about your feelings around it.",

"Feeling let down can be really difficult. What part of the situation hurts the most?",

"I hear you. If you want, we can break down the situation together.",

"Sometimes disappointment can linger in our thoughts. Would you like to tell me more about what happened?",

"I understand that this is bothering you. What part of it has been on your mind the most?",

"It's okay to feel down when something important doesn't go the way you hoped. Want to explain the situation?",

"I hear you. What moment during the experience felt the hardest for you?",

"Disappointment is a very human feeling. If you'd like, we can explore what might help you cope.",

"I understand your feelings. Would you like to talk about what you might want to do next?",

"Feeling upset after disappointment is completely natural. If you want, you can share more details.",

"I hear you. What do you think might have made the situation feel better for you?"
];
usedResponses.sad.disappointment = [];

// Anxiety Related
responses.sad.anxiety_related = [
"Sometimes sadness and anxiety can appear together and make things feel heavier. Would you like to share what's making you feel anxious?",

"I hear that you might be dealing with both sadness and worry. If you're comfortable, you can talk about the thoughts on your mind.",

"Feeling both sad and anxious is something many people experience. We can explore one feeling at a time if you'd like.",

"I understand that anxiety can make sadness feel stronger. Would you like to describe what you're feeling right now?",

"When worries keep coming back, they can feel exhausting. Want to share what thoughts have been troubling you?",

"I hear you. Are there certain situations or moments that seem to trigger this anxiety?",

"Feeling uneasy or tense can happen when you're dealing with a lot emotionally. Would you like to talk about what's causing it?",

"I understand. What kinds of thoughts have been repeating in your mind lately?",

"Anxious feelings are completely valid. If you'd like, you can tell me more about what you're experiencing.",

"I hear that this anxiety might be affecting your day. How has it been impacting you?",

"It's normal to feel nervous or worried when things feel uncertain. Would you like to break it down together?",

"I understand this can feel overwhelming. If you'd like, we can explore what might help you feel a little calmer.",

"Anxiety can sometimes make emotions feel more intense. Would you like to describe what the feeling is like for you?",

"I hear you. Are there specific situations that seem to increase your anxious feelings?",

"Feeling tense can be really uncomfortable. If you want, we can talk through what's happening.",

"I understand your worry. Would you like to share more details about what's troubling you?",

"Sometimes sadness and anxiety appear together when something important is weighing on us. What thoughts are present right now?",

"I hear you. What part of the situation feels the most stressful or worrying?",

"Feeling unsettled can make everything seem uncertain. Would you like to explore what might help a little?",

"I understand. When these feelings appear, is there anything that helps you feel even slightly calmer?"
];
usedResponses.sad.anxiety_related = [];

// Isolation
responses.sad.isolation = [
"Feeling isolated can make sadness feel even heavier. Would you like to share what has been making you feel alone?",

"Being alone for a long time can be really difficult. If you're comfortable, you can tell me how long you've been feeling this way.",

"I understand that isolation can feel overwhelming. Would you like to talk about what your days have been like recently?",

"I hear you. Sometimes isolation can be physical or emotional. How has it been for you?",

"When you feel disconnected from others, it can weigh on your heart. Would you like to share more about your experience?",

"I understand your feelings. Have there been moments when you wished someone was there with you?",

"Feeling alone is something many people experience at times. If you'd like, you can talk about what's been going on.",

"I hear you. What moments during the day tend to feel the most lonely for you?",

"Isolation can make emotions feel stronger. Would you like to describe what it has been like for you?",

"I understand that being disconnected from others can feel heavy. Want to share more about your thoughts?",

"Feeling detached from people can be painful. Can you tell me more about how it affects you?",

"I hear you. Sometimes talking about loneliness can make it feel a little lighter. Want to share?",

"Isolation can sometimes make it feel like no one understands. Would you like to talk about what you're experiencing?",

"I understand your struggle. If you'd like, we can explore ways that might help you feel a little less alone.",

"Feeling alone is a very human experience. Would you like to share what has been on your mind lately?",

"I hear you. Are there moments when the feeling of loneliness becomes stronger?",

"Isolation can affect mood and energy. If you're comfortable, you can describe how it has been impacting you.",

"I understand. Is there someone you wish you could talk to right now?",

"Feeling cut off from others can be really hard. Would you like to share more about what you're going through?",

"I hear you. You can take your time and describe your feelings if you'd like."
];
usedResponses.sad.isolation = [];

// Regret
responses.sad.regret = [
"Regret can feel really heavy when we keep thinking about the past. Would you like to share what’s been on your mind?",

"I hear you. Many people experience regret at times. If you're comfortable, you can talk about what happened.",

"Feeling regret is a very human experience. Would you like to describe the situation that's troubling you?",

"I understand that thinking about past choices can be painful. What part of it feels the hardest right now?",

"Sometimes regret stays with us longer than we expect. Want to share what you wish had been different?",

"I hear you. Reflecting on the past can bring many emotions. Would you like to talk about what happened?",

"Regret can bring a lot of self-reflection. What thoughts have been coming up for you lately?",

"I understand your feelings. If you'd like, you can share what you wish you had done differently.",

"Thinking about past decisions can sometimes bring sadness. Want to talk about what's been bothering you?",

"I hear you. How has this feeling of regret been affecting your mood recently?",

"Feeling remorse about something important to you is completely natural. Would you like to talk about it?",

"I understand. What moment or decision do you keep thinking about the most?",

"Regret can sometimes make us replay situations in our mind. Is that happening for you too?",

"I hear you. If you want, we can explore these feelings step by step.",

"Sometimes sharing regret can make the feeling a little lighter. Would you like to tell me more?",

"I understand your emotions. What part of the experience feels the most difficult to accept?",

"Reflecting on past choices can be painful, especially when they mattered to us. Want to talk about it?",

"I hear you. What do you think has been the hardest part of this regret?",

"Regret can sometimes teach us about what truly matters to us. Would you like to share more about the situation?",

"I understand. You can take your time and talk about whatever part of this experience feels important."
];
usedResponses.sad.regret = [];

// Self Criticism
responses.sad.self_criticism = [
"Being very hard on yourself can make sadness feel heavier. Would you like to share what thoughts you've been having about yourself?",

"I hear you. Sometimes our inner voice can be very critical. Want to talk about what it's saying to you?",

"You're not alone in feeling this way. If you'd like, we can look at these thoughts together.",

"I understand. Can you describe the kind of self-judgment you're experiencing?",

"Self-critical thoughts can be difficult to deal with. Would you like to talk more about them?",

"I hear you. Do these thoughts come up often or in certain situations?",

"Feeling self-critical happens to many people. Would you like to explore what might be triggering it?",

"I understand that being hard on yourself can affect how you feel. Want to share what’s been on your mind?",

"Sometimes our minds focus more on our mistakes than our strengths. What thoughts have been repeating for you?",

"I hear you. If you're comfortable, you can share some examples of the thoughts you're having.",

"Self-criticism can feel overwhelming at times. Would you like to talk about what’s causing it?",

"I understand. What situations tend to bring out these thoughts about yourself?",

"It's common to judge ourselves more harshly than others do. How have these thoughts been affecting you?",

"I hear you. Sometimes talking about these thoughts can help make them feel less powerful.",

"Being self-critical can make emotions feel heavier. Would you like to describe what you're feeling right now?",

"I understand your struggle. What part of these thoughts feels the most painful?",

"Sometimes our inner critic becomes louder during difficult moments. Has something recently triggered it?",

"I hear you. If you'd like, we can explore these thoughts step by step.",

"Self-judgment can be really tough to carry alone. Would you like to talk about what's behind it?",

"I understand. You can take your time and share whatever feels important to you."
];
usedResponses.sad.self_criticism = [];

// ================= Sad Category - Part 4 =================

// Relationship Loss
responses.sad.relationship_loss = [
"Losing someone important in your life can be really painful. Would you like to share what happened?",

"I hear you. When a relationship ends or changes, it can leave a deep emotional impact. Want to talk about it?",

"Feeling sad after losing someone close is completely natural. If you're comfortable, you can share what you're feeling.",

"I understand that this loss may feel overwhelming. How have you been coping with it lately?",

"When someone important is no longer in our lives, it can leave an empty space. Would you like to talk about that?",

"I hear you. Relationships carry many memories and emotions. What has been on your mind the most?",

"Loss can bring many feelings all at once. If you'd like, you can share what you're experiencing.",

"I understand your sadness. Sometimes talking about the relationship can help. Want to tell me about it?",

"Feeling empty after losing someone close is something many people experience. How has it been affecting you?",

"I hear you. What part of this loss has been the hardest for you?",

"Relationships become part of our lives, so losing one can feel very painful. Would you like to share more?",

"I understand that this may still be fresh for you. What thoughts keep coming back lately?",

"Feeling heartbroken after a relationship loss is very human. Would you like to talk about the memories you have?",

"I hear you. What do you think you miss the most about that person or relationship?",

"Losing a relationship can bring both sadness and confusion. Want to talk through those feelings?",

"I understand your grief. If you'd like, you can share some moments that meant a lot to you.",

"Sorrow after losing someone important can take time to process. Would you like to describe how you've been feeling?",

"I hear you. How has this experience been affecting your daily life?",

"Sometimes relationship loss can make us feel very alone. Would you like to talk about your support around you?",

"I understand. You can take your time and share whatever part of this experience feels important to you."
];
usedResponses.sad.relationship_loss = [];

// Hopeless Future
responses.sad.hopeless_future = [
"Thinking about the future can sometimes feel overwhelming. Would you like to share what has been worrying you?",

"I hear you. When the future feels uncertain, it can bring a lot of heavy emotions. What thoughts have been on your mind?",

"Feeling unsure about what lies ahead is something many people experience. Would you like to talk about your concerns?",

"I understand that the future might feel unclear right now. What part of it feels the most worrying for you?",

"When things feel uncertain, it's normal to feel discouraged. Would you like to describe what's been troubling you?",

"I hear you. Sometimes our minds imagine many possibilities about the future. What thoughts keep coming back?",

"Feeling worried about what comes next can feel very heavy. Want to share what you're afraid might happen?",

"I understand your concern. What part of the future feels the most uncertain right now?",

"Thinking about the future can bring many emotions at once. If you'd like, you can talk about them.",

"I hear you. When did these worries about the future start appearing for you?",

"Uncertainty about the future can make things feel overwhelming. How has it been affecting you lately?",

"I understand. What situation or thought has been making the future feel difficult to imagine?",

"Feeling lost about the future can happen during difficult times. Would you like to talk about what you're going through?",

"I hear you. What worries you the most when you think about what's ahead?",

"When things feel uncertain, it's natural to feel discouraged. Want to share more about what's been on your mind?",

"I understand your feelings. How have these thoughts about the future been affecting your mood?",

"Sometimes the future can feel intimidating when we think about everything at once. What part feels the heaviest for you?",

"I hear you. If you're comfortable, you can tell me what kind of future you had hoped for.",

"Feeling anxious or hopeless about the future can be really tough. Would you like to share more about it?",

"I understand. You can take your time and talk about whatever concerns you most about the future."
];
usedResponses.sad.hopeless_future = [];

// Low Motivation
responses.sad.low_motivation = [
"Lacking motivation can feel really frustrating, especially when you're already feeling down. Would you like to share what your days have been like lately?",

"I hear you. Sometimes when we're feeling sad, even small things can feel difficult to start. Want to talk about how you're feeling?",

"Feeling unmotivated happens to many people during tough moments. What has been making things feel harder to do?",

"I understand. When motivation is low, it can make even simple tasks feel overwhelming. How has this been affecting you?",

"I hear you. What kinds of things have been hardest to begin recently?",

"Low motivation can sometimes come with sadness or exhaustion. Would you like to share what’s been on your mind?",

"Feeling stuck without motivation can be really discouraging. Want to talk about what might be contributing to that feeling?",

"I understand your struggle. Are there certain moments during the day when motivation feels especially low?",

"I hear you. Sometimes just talking about the feeling of being stuck can help a little. Want to share more?",

"Low motivation can make everything seem heavier than usual. How long have you been feeling this way?",

"I understand. What activities or tasks feel the most difficult to start right now?",

"I hear you. When motivation drops, it can affect many parts of life. How has it been impacting your routine?",

"Feeling unmotivated is a very human experience during difficult times. Would you like to describe what you're going through?",

"I understand that starting things can feel tough right now. What thoughts come up when you try to begin something?",

"I hear you. Sometimes low motivation is connected to feeling overwhelmed or tired. Does that resonate with you?",

"Feeling stuck can be frustrating. Would you like to talk about what’s been making things feel difficult?",

"I understand your feelings. If you'd like, we can explore what's been draining your motivation.",

"I hear you. Are there moments when motivation feels even slightly better?",

"Low motivation can make progress feel far away. Would you like to share more about how you're feeling?",

"I understand. You can take your time and talk about whatever feels important right now."
];
usedResponses.sad.low_motivation = [];

// Suicidal Thoughts
responses.sad.suicidal_thoughts = [
    "It sounds like you're in a very difficult place right now. Please consider reaching out immediately to a trained professional. You can call 9152987821 (India) or 988 (Suicide Prevention).",
    "I hear you. Your safety is important. Can we contact someone you trust right now?",
    "Your life matters. A professional can help you through this. Would you like guidance on reaching out?",
    "Feeling hopeless can be overwhelming. Please connect with a trained counselor or helpline immediately.",
    "You are not alone. Can we reach out to a supportive person together right now?",
    "I understand this is serious. Would you like help contacting professional support?",
    "Your safety comes first. Please call a crisis line or trusted adult immediately.",
    "I hear you. Can you share with someone nearby for support and safety?",
    "Life is valuable. Please reach out to a trained professional as soon as possible.",
    "I understand your pain. Would you like information about helplines or chat services available?",
    "You deserve help. Can we contact a trained counselor or crisis line together?",
    "Feeling suicidal is serious. Please seek immediate professional help.",
    "I hear you. Let's try to find someone safe to talk to right now.",
    "Your emotions are valid. Reaching out to a trained professional can help.",
    "I understand. Please consider calling a crisis helpline immediately.",
    "You are important. Can we identify a safe person or professional to contact?",
    "I hear you. Contacting a trained counselor or helpline now is crucial.",
    "Feeling suicidal is serious. Please prioritize reaching professional help immediately.",
    "Your life matters. Can you stay connected with someone trained to assist?",
    "I understand. Please consider contacting a crisis line or online support service right away."
];
usedResponses.sad.suicidal_thoughts = [];

// Confusion
responses.sad.confusion = [
    "Feeling confused is normal when sad. Can you share what’s unclear right now?",
    "It’s okay to feel uncertain. Let’s try breaking down your thoughts together.",
    "Confusion can feel heavy. What part feels most unclear or overwhelming?",
    "I hear you. Can you describe the decisions or thoughts that feel puzzling?",
    "Feeling puzzled is natural. Want to talk it through step by step?",
    "Let’s see if we can pinpoint the source of your confusion. Can you describe it?",
    "Confusion often comes with sadness. Can you explain what’s contributing?",
    "I understand. Which part feels most uncertain or unclear?",
    "Feeling unclear about things is common. Want to explore it together?",
    "We can focus on one confusing thought first. Which one feels biggest?",
    "Confusion can intensify negative emotions. Can we look at it slowly?",
    "I hear you. What thought is causing the most uncertainty right now?",
    "Feeling lost is normal. Let’s try breaking it down into smaller parts.",
    "It’s okay to feel fuzzy about things. Can you explain what feels unclear?",
    "Confusion can be stressful. Can we go through it one piece at a time?",
    "Let’s clarify your thoughts together. What’s the first thing to focus on?",
    "Feeling uncertain is human. Can you share what’s making it hard to decide?",
    "I understand. What aspect of this feels most confusing?",
    "Confusion can feel heavy. Can we start with a small, clear step?",
    "I hear you. What might help make this situation feel clearer?"
];
usedResponses.sad.confusion = [];

// ================= Anxious / Fear Category - Part 1 =================
usedResponses.anxious = {
    general: [],
    exams: [],
    performance: [],
    social: [],
    health: [],
    future: [],
    decision_making: []
};

responses.anxious = {};

// General Anxiety
responses.anxious.general = [
    "Feeling anxious is natural. Can you share what’s worrying you most right now?",
    "I hear you. Anxiety can feel heavy. What’s on your mind at the moment?",
    "Anxiety can be overwhelming. Want to talk about the thoughts running through your mind?",
    "I understand. Can you describe what triggers these anxious feelings?",
    "Feeling uneasy is normal. What seems most concerning for you right now?",
    "I hear you. Let’s explore what situations or thoughts heighten this anxiety.",
    "Anxiety is common. Can you notice when it usually starts?",
    "I understand. Are there recurring thoughts or worries you’ve noticed?",
    "Feeling tense happens. Can you tell me what you’re focusing on?",
    "I hear you. Are there specific situations that make anxiety stronger?",
    "Anxiety can feel heavy. What part of it affects you the most?",
    "I understand. Can we identify the main worry together?",
    "Feeling nervous is natural. Can you describe how it feels in your body?",
    "I hear you. How does anxiety impact your daily life?",
    "Anxiety can be draining. Want to explore your feelings step by step?",
    "I understand. Are there patterns in what triggers these anxious moments?",
    "Feeling stressed is human. Can you share more details about it?",
    "I hear you. What physical sensations do you notice when anxious?",
    "Anxiety can affect focus. Can we tackle one thought at a time?",
    "I understand. Which thoughts feel hardest to manage or let go of?"
];

// Exam Anxiety
responses.anxious.exams = [
    "Exam stress is common. Have you tried breaking topics into smaller, manageable goals?",
    "I understand exams can be worrying. Want to sketch a simple study plan together?",
    "Feeling anxious about exams is normal. Deep breathing or short breaks can help. Shall we try?",
    "I hear you. Can we plan a study schedule that feels doable?",
    "Exam pressure can feel intense. Which subject or topic worries you the most?",
    "I understand. How is your preparation going so far?",
    "Feeling stressed before exams is natural. Want to discuss ways to stay relaxed?",
    "I hear you. What part of your exam prep feels most overwhelming right now?",
    "Exam anxiety happens to many. Can we focus on one topic at a time?",
    "I understand. How confident do you feel about the plan you’ve made?",
    "Feeling pressured is normal. Can we explore strategies to stay calm during study?",
    "I hear you. What usually helps you stay focused while revising?",
    "Exam stress can be heavy. Can we schedule short breaks to ease tension?",
    "I understand. Would you like to try a quick breathing exercise for exam anxiety?",
    "Feeling worried about tests is normal. Which topics are giving you the most stress?",
    "I hear you. How do you typically cope with exam nerves?",
    "Exam anxiety is common. Can we break down your revision into smaller parts?",
    "I understand. What aspect of exam prep feels hardest to tackle?",
    "Feeling tense before exams happens. Can we set one small goal for today?",
    "I hear you. Let’s create a tiny action step to reduce exam worry today."
];

// Performance Anxiety
responses.anxious.performance = [
    "Worrying about performance can be tough. What are you specifically concerned about?",
    "I hear you. Let's focus on one goal at a time to reduce anxiety.",
    "Feeling pressure to perform is normal. How can we make it manageable?",
    "I understand. Can you describe which performance situation worries you most?",
    "Performance anxiety is common. Want to try visualizing a calm approach?",
    "I hear you. What expectations make you anxious?",
    "Feeling nervous before tasks is normal. Can we explore one technique to stay calm?",
    "I understand. Which past experiences affect your confidence?",
    "Performance pressure can feel heavy. Can we break it down into steps?",
    "I hear you. What part of your performance seems hardest?",
    "Feeling tense during evaluations is normal. Can we plan small coping strategies?",
    "I understand. Want to discuss ways to manage stress before tasks?",
    "Performance anxiety can be overwhelming. Can we focus on preparation?",
    "I hear you. Which outcomes worry you the most?",
    "Feeling uneasy about performing is normal. Can we practice a calming exercise?",
    "I understand. What helps you feel slightly more confident?",
    "Performance worries can affect focus. Can we make a mini checklist?",
    "I hear you. How does anxiety show up physically for you?",
    "Feeling pressured is human. Can we identify one positive approach?",
    "I understand. Let's take one step to reduce anxiety about performance."
];

// Social Anxiety
responses.anxious.social = [
    "Social situations can trigger anxiety. What kind of social setting worries you?",
    "I understand. Want to talk through a recent social situation?",
    "Social anxiety is common. Let's explore how it makes you feel.",
    "I hear you. Which social interactions feel most stressful?",
    "Feeling nervous around people is normal. Can we identify triggers?",
    "I understand. What thoughts come up in social situations?",
    "Social anxiety can be overwhelming. Can we discuss coping methods?",
    "I hear you. What helps you feel safer around others?",
    "Feeling tense in groups is normal. Can we practice a small step together?",
    "I understand. How do you usually manage social discomfort?",
    "Social settings can increase anxiety. Can we plan a manageable approach?",
    "I hear you. Which social scenario is hardest for you?",
    "Feeling shy or anxious is normal. Want to discuss preparation strategies?",
    "I understand. What part of social interaction feels the hardest?",
    "Social anxiety happens. Can we explore gradual exposure steps?",
    "I hear you. What helps reduce stress in social situations?",
    "Feeling nervous is human. Can we identify what triggers it most?",
    "I understand. How confident do you feel in social settings?",
    "Social anxiety can affect participation. Can we make a small plan?",
    "I hear you. Can we practice coping strategies for upcoming events?"
];

// Health Anxiety
responses.anxious.health = [
    "Worrying about health is understandable. Is there a specific concern?",
    "I hear you. Health-related anxiety can be stressful. Shall we discuss it?",
    "Feeling anxious about health is normal. What symptoms or situations worry you most?",
    "I understand. Can we explore which health concerns trigger anxiety?",
    "Health worries can feel heavy. Want to talk about them?",
    "I hear you. How often do these worries come up?",
    "Feeling uneasy about health is common. Can we discuss coping strategies?",
    "I understand. What makes you feel safer about your health?",
    "Health anxiety can affect daily life. Can we plan small steps to reduce it?",
    "I hear you. Which thoughts worry you the most about health?",
    "Feeling tense about illness is normal. Can we try a grounding technique?",
    "I understand. What reassures you when health worries appear?",
    "Health anxiety can feel overwhelming. Can we focus on what you can control?",
    "I hear you. How do you usually check your health concerns?",
    "Feeling stressed about health is human. Can we discuss positive actions?",
    "I understand. What information helps you feel calmer?",
    "Health worries often repeat. Can we explore why this happens?",
    "I hear you. How do physical sensations affect your anxiety?",
    "Feeling concerned is normal. Can we try a small relaxation method?",
    "I understand. What support do you have regarding your health worries?"
];

// Future Anxiety
responses.anxious.future = [
    "Uncertainty about the future can be stressful. What's worrying you specifically?",
    "I understand. Focusing on small steps can reduce anxiety about the future.",
    "Thinking ahead can feel overwhelming. What is your biggest concern?",
    "I hear you. Which part of the future seems unclear or frightening?",
    "Future worries are common. Can we break them into smaller parts?",
    "I understand. What goals feel most intimidating right now?",
    "Feeling uncertain is normal. Can we identify what is within your control?",
    "I hear you. How do thoughts about the future affect your mood?",
    "Future anxiety can feel heavy. Can we discuss one possibility at a time?",
    "I understand. Which upcoming events trigger the most worry?",
    "Feeling nervous about what's ahead is normal. Can we plan small steps?",
    "I hear you. How do you usually cope with uncertainty?",
    "Future worries can overwhelm focus. Can we take one small action today?",
    "I understand. Which thoughts make you feel powerless?",
    "Feeling uneasy about tomorrow is human. Can we try planning a small step?",
    "I hear you. Can we identify positive outcomes to focus on?",
    "Future anxiety often repeats. Can we break the thoughts down?",
    "I understand. What helps you feel slightly more secure about the future?",
    "Feeling concerned about the unknown is normal. Can we explore it together?",
    "I hear you. What small action could reduce your worry today?"
];

// Decision Making Anxiety
responses.anxious.decision_making = [
    "Decisions can be anxiety-provoking. Which choice is troubling you?",
    "I hear you. Let's explore the options together to reduce stress.",
    "Making decisions can be hard. What seems most challenging right now?",
    "I understand. Which possible outcome worries you the most?",
    "Decision-making stress is normal. Can we list pros and cons?",
    "I hear you. What information do you need to feel clearer?",
    "Feeling uncertain about decisions is common. Can we break it into steps?",
    "I understand. Which part of the choice feels most overwhelming?",
    "Decision anxiety can affect focus. Can we tackle one aspect first?",
    "I hear you. How do you usually approach tough choices?",
    "Making choices can feel heavy. Can we explore small, actionable steps?",
    "I understand. Which options seem manageable?",
    "Decision anxiety often repeats. Can we try evaluating one factor at a time?",
    "I hear you. How confident do you feel in your options?",
    "Feeling stuck is human. Can we narrow the focus to key decisions?",
    "I understand. What would make you feel slightly more certain?",
    "Decision worries can overwhelm. Can we make a small plan together?",
    "I hear you. Which consequences worry you most?",
    "Feeling unsure is normal. Can we explore the best possible step?",
    "I understand. Let's try breaking it down to simpler choices."
];


// ================= Anxious / Fear Category - Part 2 =================
usedResponses.anxious.social = usedResponses.anxious.social || [];
usedResponses.anxious.health = usedResponses.anxious.health || [];
usedResponses.anxious.future = usedResponses.anxious.future || [];
usedResponses.anxious.decision_making = usedResponses.anxious.decision_making || [];
usedResponses.anxious.financial = [];
usedResponses.anxious.relationship = [];
usedResponses.anxious.conflict = [];
usedResponses.anxious.uncertainty = [];
usedResponses.anxious.failure = [];
usedResponses.anxious.self_doubt = [];
usedResponses.anxious.public_speaking = [];
usedResponses.anxious.panic = [];
usedResponses.anxious.sleep = [];
usedResponses.anxious.performance_anxiety = [];
usedResponses.anxious.change = [];
usedResponses.anxious.environment = [];
usedResponses.anxious.unknown = [];

responses.anxious.financial = [
    "Financial worries are stressful. Want to talk about your current concerns?",
    "I understand. Planning can help reduce financial anxiety. Can we discuss options?",
    "Money-related stress is common. What part worries you most?",
    "I hear you. Are bills or expenses causing the most stress?",
    "Financial anxiety can feel heavy. Can we break it down?",
    "I understand. What steps could help manage this worry?",
    "Feeling anxious about money is normal. Can we explore your priorities?",
    "I hear you. How do financial concerns affect your daily life?",
    "Stress about finances is human. Can we list small actions?",
    "I understand. What part of budgeting feels most overwhelming?",
    "Financial worries can repeat. Can we plan one small solution today?",
    "I hear you. How confident do you feel in handling your finances?",
    "Money-related stress can be tiring. Can we explore ways to ease it?",
    "I understand. Are there support systems you can reach out to?",
    "Feeling uneasy about finances is normal. Can we take one small step?",
    "I hear you. What resources could help reduce your worry?",
    "Financial anxiety often overlaps with other stresses. Can we prioritize?",
    "I understand. Which part of financial planning feels hardest?",
    "Feeling concerned about money is common. Can we discuss one thing at a time?",
    "I hear you. How can we make a small plan to feel more secure?"
];

responses.anxious.relationship = [
    "Relationship worries can cause anxiety. What’s bothering you?",
    "I hear you. Want to talk about the dynamics causing stress?",
    "Anxious thoughts in relationships are normal. Can you explain the situation?",
    "I understand. Which relationship is causing tension?",
    "Feeling uneasy with someone close is normal. Can we discuss your feelings?",
    "I hear you. What do you wish could be different?",
    "Relationship anxiety can be heavy. Can we explore communication strategies?",
    "I understand. How does this relationship affect your daily life?",
    "Feeling stressed about others is normal. Can we break it down?",
    "I hear you. What boundaries or expectations worry you?",
    "Relationship anxiety often repeats. Can we tackle one part at a time?",
    "I understand. How confident are you in expressing your feelings?",
    "Feeling tense in relationships is human. Can we plan small actions?",
    "I hear you. What could make interactions less stressful?",
    "Anxiety about connection is common. Can we identify triggers?",
    "I understand. How do you cope with misunderstandings?",
    "Relationship worries can overlap with other concerns. Can we prioritize?",
    "I hear you. What makes you feel safe in this relationship?",
    "Feeling uncertain about connections is normal. Can we discuss small steps?",
    "I understand. How can you strengthen trust or clarity?"
];

responses.anxious.conflict = [
    "Conflict can heighten anxiety. Want to discuss the argument?",
    "I understand. Let’s find ways to manage these stressful interactions.",
    "Arguments can be overwhelming. How are you feeling about it?",
    "I hear you. Which conflict feels hardest to face?",
    "Feeling anxious during disputes is normal. Can we explore strategies?",
    "I understand. How do you usually react in tense moments?",
    "Conflict can cause tension. Can we break down the problem?",
    "I hear you. What outcome would feel manageable?",
    "Feeling uneasy during disagreement is normal. Can we plan small steps?",
    "I understand. How do others' reactions affect your anxiety?",
    "Conflict often triggers repeated worry. Can we identify triggers?",
    "I hear you. Which approach feels safest to handle conflict?",
    "Tension in relationships is human. Can we explore communication tips?",
    "I understand. How do you manage feelings after an argument?",
    "Conflicts can feel heavy. Can we focus on one solution first?",
    "I hear you. What compromises feel possible?",
    "Feeling stressed during conflict is normal. Can we plan a calming step?",
    "I understand. What boundaries help reduce anxiety in disputes?",
    "Conflict can be confusing. Can we clarify your priorities?",
    "I hear you. What support would help navigate this situation?"
];

responses.anxious.uncertainty = [
    "Uncertainty often causes anxiety. What feels unclear?",
    "I hear you. Let's break it down to make it manageable.",
    "Feeling unsure is normal. What part feels most concerning?",
    "I understand. Which uncertainties are most pressing for you?",
    "Ambiguity can increase stress. Can we list what is unknown?",
    "I hear you. How does uncertainty affect your decisions?",
    "Feeling uneasy about unclear situations is normal. Can we plan one step?",
    "I understand. Which outcomes are you worried about most?",
    "Uncertainty can feel heavy. Can we identify what is controllable?",
    "I hear you. How do you usually cope with unknown situations?",
    "Feeling tense when unsure is human. Can we explore solutions together?",
    "I understand. Which unknowns cause recurring worry?",
    "Uncertainty can be overwhelming. Can we focus on one small action?",
    "I hear you. How confident are you in adapting to change?",
    "Feeling anxious about the future is normal. Can we break it down?",
    "I understand. What helps you feel safer in unknown scenarios?",
    "Uncertainty can cause mental strain. Can we plan a step-by-step approach?",
    "I hear you. What resources help reduce stress in unclear situations?",
    "Feeling uneasy about outcomes is normal. Can we try perspective shifts?",
    "I understand. Can we identify one thing that reduces anxiety in uncertainty?"
];

responses.anxious.failure = [
    "Fear of failure is common. Can we explore why it worries you?",
    "I understand. Remember, failure is part of growth. Want to talk about it?",
    "Feeling anxious about failing is normal. What's your biggest fear?",
    "I hear you. How does the possibility of failing affect your decisions?",
    "Failure anxiety is common. Can we focus on small achievable steps?",
    "I understand. Which scenarios trigger worry about failure?",
    "Feeling tense about mistakes is normal. Can we analyze one situation?",
    "I hear you. How do past experiences shape your current fear?",
    "Fear of failure can feel heavy. Can we explore coping strategies?",
    "I understand. What successes can remind you of your abilities?",
    "Feeling pressure to succeed is normal. Can we list small wins?",
    "I hear you. How does self-talk affect your fear of failure?",
    "Failure worries often repeat. Can we focus on one actionable step?",
    "I understand. What helps reduce tension when attempting tasks?",
    "Feeling uncertain is human. Can we create a small practice plan?",
    "I hear you. Which task feels most intimidating?",
    "Anxiety about failure can reduce focus. Can we take a small step first?",
    "I understand. What skills do you have to increase confidence?",
    "Feeling nervous about mistakes is normal. Can we discuss mindset shifts?",
    "I hear you. How can we make progress without adding pressure?"
];

responses.anxious.self_doubt = [
    "Self-doubt can heighten anxiety. Can you describe these thoughts?",
    "I hear you. Want to explore ways to build confidence?",
    "Feeling unsure about yourself is normal. Let's tackle one worry at a time.",
    "I understand. What triggers the feeling of self-doubt?",
    "Self-doubt is common. Can we examine evidence supporting these thoughts?",
    "I hear you. How do comparisons affect your confidence?",
    "Feeling insecure sometimes is human. Can we list your strengths?",
    "I understand. Which situations increase self-doubt?",
    "Self-doubt can feel heavy. Can we plan small steps to improve confidence?",
    "I hear you. How do your achievements counter these feelings?",
    "Feeling uncertain is normal. Can we explore positive affirmations?",
    "I understand. Which areas do you feel less capable in?",
    "Self-doubt can affect focus. Can we break it down?",
    "I hear you. How does fear of judgment affect you?",
    "Feeling hesitant is human. Can we discuss past successes?",
    "I understand. Which thought patterns worsen self-doubt?",
    "Self-doubt is normal. Can we plan one empowering action?",
    "I hear you. How does feedback impact your confidence?",
    "Feeling unsure is common. Can we identify small wins today?",
    "I understand. How can you remind yourself of your abilities?"
];

// Remaining subcategories (public_speaking, panic, sleep, performance_anxiety, change, environment, unknown) will follow in next part


// ================= Anxious / Fear Category - Part 3 =================

// Initialize usedResponses for remaining subcategories
usedResponses.anxious.public_speaking = [];
usedResponses.anxious.panic = [];
usedResponses.anxious.sleep = [];
usedResponses.anxious.performance_anxiety = [];
usedResponses.anxious.change = [];
usedResponses.anxious.environment = [];
usedResponses.anxious.unknown = [];

// Responses for remaining subcategories

responses.anxious.public_speaking = [
    "Public speaking can be intimidating. What part worries you most?",
    "I understand. Shall we go through strategies to reduce anxiety?",
    "Feeling nervous in front of others is common. Want to discuss it?",
    "I hear you. How do you prepare for speaking situations?",
    "Stage anxiety is normal. Can we practice visualization techniques?",
    "I understand. What thoughts make you most anxious before speaking?",
    "Speaking in public can trigger stress. Can we focus on one tip at a time?",
    "I hear you. How do past experiences affect your current confidence?",
    "Feeling jittery before speaking is human. Can we try breathing exercises?",
    "I understand. What helps calm you before addressing a group?",
    "Public speaking anxiety is common. Can we plan small practice sessions?",
    "I hear you. How do you handle unexpected questions or reactions?",
    "Stage fright can be overwhelming. Can we work on mindset shifts?",
    "I understand. Which part of presentation feels hardest?",
    "Speaking to audiences is normal to feel nervous. Can we break it down?",
    "I hear you. How do you recover after a presentation?",
    "Feeling tense is normal. Can we use positive self-talk strategies?",
    "I understand. What small victories can boost confidence?",
    "Public speaking stress can be reduced step by step. Can we try?",
    "I hear you. How can you focus on your message rather than fear?"
];

responses.anxious.panic = [
    "Panic feelings can be frightening. Can you describe what triggered it?",
    "I hear you. Let's focus on grounding techniques to calm down.",
    "Experiencing panic is tough. Deep breathing and slow steps can help.",
    "I understand. What physical sensations do you notice during panic?",
    "Panic attacks are common. Can we create a safe strategy to cope?",
    "I hear you. How long do these episodes usually last?",
    "Feeling overwhelmed is human. Can we explore calming exercises?",
    "I understand. Can visualization or grounding help you right now?",
    "Panic can be intense. Can we plan step-by-step actions to reduce fear?",
    "I hear you. How does environment affect your panic attacks?",
    "Feeling panicked sometimes is normal. Can we discuss triggers?",
    "I understand. What methods have worked before to calm yourself?",
    "Panic responses are physical and mental. Can we break them down?",
    "I hear you. How can you remind yourself that the feeling will pass?",
    "Feeling sudden anxiety is normal. Can we explore coping mechanisms?",
    "I understand. Would focusing on your breath help right now?",
    "Panic can be scary. Can we create a pre-emptive calming plan?",
    "I hear you. How do you recover after an episode?",
    "Experiencing panic is common. Can we list one action for next time?",
    "I understand. How can you remind yourself of safety in the moment?"
];

responses.anxious.sleep = [
    "Anxiety often affects sleep. Are racing thoughts keeping you awake?",
    "I understand. Let's discuss ways to improve sleep despite anxiety.",
    "Restlessness at night is common. Want to share what's on your mind before bed?",
    "I hear you. How does your bedtime routine look?",
    "Sleep anxiety is normal. Can we explore relaxation techniques?",
    "I understand. What thoughts keep returning when you try to sleep?",
    "Difficulty sleeping can heighten stress. Can we plan a calming routine?",
    "I hear you. How many hours of sleep are you getting?",
    "Sleep disruption is common. Can we identify triggers?",
    "I understand. What environment factors affect your rest?",
    "Feeling anxious at night is normal. Can we try guided meditation?",
    "I hear you. How does caffeine or screen time affect your sleep?",
    "Sleep and anxiety interact. Can we discuss breathing exercises?",
    "I understand. What small steps could improve your nightly routine?",
    "Restless nights are common. Can we focus on creating comfort?",
    "I hear you. How does your mind behave when trying to sleep?",
    "Sleep anxiety can repeat. Can we implement a bedtime checklist?",
    "I understand. What thoughts can we replace with calming imagery?",
    "Difficulty sleeping is normal. Can we explore journaling before bed?",
    "I hear you. How can we make your bedroom more restful?"
];

responses.anxious.performance_anxiety = [
    "Performance anxiety is common. What specifically worries you?",
    "I hear you. Let's find one actionable step to reduce stress.",
    "Feeling nervous before performance is normal. Can we practice coping strategies?",
    "I understand. What situation triggers the strongest anxiety?",
    "Performance worries can repeat. Can we focus on preparation techniques?",
    "I hear you. How does self-talk affect your anxiety?",
    "Feeling uneasy is normal. Can we break tasks into small steps?",
    "I understand. Which part of performance feels hardest?",
    "Performance anxiety is human. Can we plan a mental rehearsal?",
    "I hear you. How do past experiences influence your confidence?",
    "Feeling pressure is common. Can we explore visualization strategies?",
    "I understand. What positive reminders help reduce tension?",
    "Performance stress can be managed step-by-step. Shall we try?",
    "I hear you. How do you cope with audience expectations?",
    "Feeling anxious before tasks is normal. Can we list one coping skill?",
    "I understand. What helps you focus on the process rather than outcome?",
    "Performance anxiety can repeat. Can we identify triggers in advance?",
    "I hear you. How can preparation reduce your worry?",
    "Feeling tension is common. Can we practice relaxation techniques?",
    "I understand. Which small wins today can boost confidence?"
];

responses.anxious.change = [
    "Change can trigger anxiety. What recent change is affecting you?",
    "I understand. Want to talk about how to adjust to this change?",
    "Feeling anxious during transitions is normal. What's the hardest part?",
    "I hear you. How has this change impacted your routine?",
    "Adjustment takes time. Can we plan small steps to cope?",
    "I understand. What part of the change feels overwhelming?",
    "Change can be stressful. Can we focus on what you can control?",
    "I hear you. How do you usually handle transitions?",
    "Feeling uneasy during change is human. Can we explore support options?",
    "I understand. Which thoughts increase your worry?",
    "Change can feel heavy. Can we break it into manageable actions?",
    "I hear you. How can you stay grounded during transitions?",
    "Anxiety about change is normal. Can we explore new opportunities?",
    "I understand. What strengths can help you adapt?",
    "Feeling tension is common. Can we create a small routine for stability?",
    "I hear you. How do you visualize success during changes?",
    "Transition anxiety often repeats. Can we plan preventive steps?",
    "I understand. What mindset shifts could reduce stress?",
    "Feeling uncertain is normal. Can we focus on short-term goals?",
    "I hear you. How can you celebrate small successes during change?"
];

responses.anxious.environment = [
    "Sometimes surroundings increase anxiety. What setting is stressful?",
    "I hear you. Want to find ways to feel safer and calmer?",
    "Environmental stress can be tough. Can you explain what feels triggering?",
    "I understand. How does noise or crowd affect your mood?",
    "Feeling uneasy in certain places is normal. Can we identify triggers?",
    "I hear you. How do you usually cope in these environments?",
    "Stressful surroundings can repeat anxiety. Can we make a safe plan?",
    "I understand. Which environmental factors are hardest to tolerate?",
    "Feeling tension is common. Can we focus on one adjustment?",
    "I hear you. How do visual or auditory cues impact your anxiety?",
    "Environmental anxiety is normal. Can we plan grounding strategies?",
    "I understand. What small changes can make a difference?",
    "Feeling overwhelmed is human. Can we explore safe zones?",
    "I hear you. How can you regulate exposure to triggers?",
    "Environmental stress can repeat. Can we develop coping mechanisms?",
    "I understand. Which aspects feel controllable versus uncontrollable?",
    "Feeling uneasy is normal. Can we make step-by-step adjustments?",
    "I hear you. How do people around you affect anxiety levels?",
    "Environmental triggers can be managed. Can we plan ahead?",
    "I understand. What practices help you feel calm in these settings?"
];

responses.anxious.unknown = [
    "I hear you. Can you describe what's making you anxious?",
    "Anxiety can be unclear sometimes. Let's explore it together.",
    "Feeling uneasy without clear reason is normal. Can we break down your thoughts?",
    "I understand. How does uncertainty manifest in your body or mind?",
    "Unknown anxiety can feel heavy. Can we identify small triggers?",
    "I hear you. Which thoughts feel recurring or intense?",
    "Feeling uneasy without a clear cause is normal. Can we track patterns?",
    "I understand. How does this affect your daily routine?",
    "Unknown worries are common. Can we try grounding techniques?",
    "I hear you. How can awareness reduce anxiety?",
    "Feeling anxious without clarity is normal. Can we plan small steps?",
    "I understand. What part of your thoughts feels most uncomfortable?",
    "Unknown anxiety can repeat. Can we list one thing you can control?",
    "I hear you. How does your environment influence these feelings?",
    "Feeling uneasy is human. Can we practice calming exercises?",
    "I understand. What emotions accompany this anxiety?",
    "Unknown triggers can be challenging. Can we analyze one scenario?",
    "I hear you. How do you usually respond to unclear worry?",
    "Feeling anxious without cause is normal. Can we use mindfulness techniques?",
    "I understand. What small actions reduce tension in these moments?"
];

// Now the Anxious / Fear Category is fully complete with 20 responses per subcategory
