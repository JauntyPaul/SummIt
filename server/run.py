from flask import Flask, request, jsonify
import speech_recognition as sr
import pandas as pd
import os

app = Flask(__name__)

def predict(audio_file):
    def rttm_to_dataframe(rttm_file_data):
        # Define column names for database
        columns = ["Type", "File ID", "Channel", "Start Time", "Duration", "Orthography", "Confidence", "Speaker", 'x', 'y']

        # Process each line of RTTM file
        lines = rttm_file_data.strip().split('\n')
        data = [line.strip().split() for line in lines]

        # Create the dataframe
        df = pd.DataFrame(data, columns=columns)
        df = df.drop(['x', 'y', "Orthography", "Confidence"], axis=1)  # Dropping certain redundant columns
        return df

    def extract_text_from_audio(audio_data, start_time, end_time):
        # Initialize the recognizer
        r = sr.Recognizer()

        # Load audio data
        with sr.AudioData(audio_data, None) as source:
            audio = r.record(source, duration=end_time, offset=start_time)

        # Perform speech to text
        text = r.recognize_google(audio)

        return text

    # Process audio
    rttm_file_data = audio_file.read().decode("utf-8")
    df = rttm_to_dataframe(rttm_file_data)
    df = df.astype({'Start Time': 'float'})
    df = df.astype({'Duration': 'float'})
    df['Utterance'] = None
    df['End Time'] = df['Start Time'] + df['Duration']

    for ind in df.index:
        start_time = df['Start Time'][ind]
        end_time = df['End Time'][ind]

        try:
            transcription = extract_text_from_audio(audio_file.read(), start_time, end_time)
            df.at[ind, 'Utterance'] = transcription
        except:
            df.at[ind, 'Utterance'] = 'Not Found'

    # Convert dataframe to JSON
    json_result = df.to_json(orient='records')

    return json_result


@app.route('/predict', methods=['POST'])
def predict_audio():
    if 'audio' not in request.files:
        return jsonify({'error': 'No file provided'})

    audio_file = request.files['audio']
    result = predict(audio_file)

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
