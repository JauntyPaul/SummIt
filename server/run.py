from flask import Flask, render_template, request, jsonify
import os
import numpy as np

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict_audio():
    if 'audio' not in request.files:
        return jsonify({'error': 'No file provided'})
    
    file = request.files['audio']
    print("filename",file.name)
    audio, _ = tf.audio.decode_wav(file.read(), desired_channels=1)
    prediction = predict(audio) 
    return jsonify({'prediction': prediction})


if __name__ == '_main_':
    app.run(debug=True)