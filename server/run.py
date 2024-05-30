
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import os
import subprocess
import json
import openai


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow CORS for all origins


openai.api_key = "sk-proj-7BbzRmYJLH1EoxscwoLZT3BlbkFJ47bkkbzd7eCOxi8UwqvV"

def get_response(question):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": "You are a helper, who Helps in summarition the meating in 200 words,With detail Explaination",
            },
            {
                "role": "user",
                "content": question
            }
        ],
        temperature=1,
        max_tokens=256,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    
    processed = response["choices"][0]["message"]["content"]
    return processed


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

    result = subprocess.run(['python3', 'main.py'], capture_output=True, text=True)

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


@app.route("/summary", methods=["GET"])
def summary():
    # Read JSON data from file
    with open('./output.json') as f:
        data = json.load(f)

    # Prepare question from JSON data including speaker information
    question = '\n'.join([f"{item['Speaker']}: {item['Utterance']}" for item in data])

    # Get response
    processed_response = get_response(question)

    # Return processed response to the frontend
    return jsonify({'summary': processed_response})


if __name__ == '__main__':
    app.run(debug=True)