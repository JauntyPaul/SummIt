
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import os
import subprocess
import json


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow CORS for all origins

import openai


app = Flask(__name__)
CORS(app, resources={r"/": {"origins": ""}})  # Allow CORS for all origins


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

    subprocess.run(['python3', 'main.py'])

    # Read the resulting JSON file
    try:
        with open('output.json', 'r') as f:
            response = json.load(f)
            return jsonify({'result': response}), 200
    except Exception as e:
        return jsonify({'error': 'Failed to read output file', 'details': str(e)}), 500

@app.route("/summary", methods=["GET"])
def summary():
    try:
        # Get any parameters needed for the completion request
        prompt = request.args.get('prompt', '')
        # Additional parameters you may need, like temperature, max_tokens, etc.

        # Generate summary using OpenAI API
        model = "text-davinci-003"
        completions = openai.Completion.create(engine=model, prompt=prompt, max_tokens=1024, n=1, stop=None, temperature=0.7)
        summary_text = completions.choices[0].text

        # Return the summary to the client
        return jsonify({'summary': summary_text}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '_main_':
    app.run(debug=True)