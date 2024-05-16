
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import os
import subprocess
import json
import openai


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow CORS for all origins


openai.api_key = "Tom bro ithu nee settu aakanam, code njan whtsapp chaiyame"

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

    result = subprocess.run(['python', 'main.py'], capture_output=True, text=True)

    if result.returncode != 0:
        return jsonify({'error': 'Error processing audio file', 'details': result.stderr}), 500

    # Read the resulting JSON file
    try:
        with open('output.json', 'r') as f:
            response = json.load(f)
    except Exception as e:
        return jsonify({'error': 'Failed to read output file', 'details': str(e)}), 500

    # Return the JSON response
    return jsonify({'result': response})


# @app.route("/summary", methods=["GET"])
# def summary():


if __name__ == '__main__':
    app.run(debug=True)