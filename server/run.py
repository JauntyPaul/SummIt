from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import os
import subprocess
import json

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow CORS for all origins

UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@app.route('/predict', methods=['POST'])
def predict_audio():
    if 'audio' not in request.files:
        return jsonify({'error': 'No audio file provided'}), 400

    audio_file = request.files['audio']
    if audio_file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    file_path = os.path.join(UPLOAD_FOLDER, "input_audio.wav")
    audio_file.save(file_path)
    
    # Now call your main program
    subprocess.run(['python3', 'main.py'])

    # Read the resulting JSON file
    try:
        with open('output.json', 'r') as f:
            response = json.load(f)
            return jsonify({'result': response}), 200
    except Exception as e:
        return jsonify({'error': 'Failed to read output file', 'details': str(e)}), 500

@app.route('/summary', methods=['GET'])
def summary():
    return "test", 200



if __name__ == '__main__':
    app.run(debug=True)
