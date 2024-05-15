from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import speech_recognition as sr
import pandas as pd
import os
import tempfile
from pyannote.audio import Pipeline

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

def predict(audio_file, num_speakers):
    def rttm_to_dataframe(rttm_file_path):
        columns = ["Type", "File ID", "Channel", "Start Time", "Duration", "Orthography", "Confidence", "Speaker", 'x', 'y']
        with open(rttm_file_path, 'r') as file:
            lines = file.readlines()
        data = [line.strip().split() for line in lines]
        df = pd.DataFrame(data, columns=columns)
        df = df.drop(['x', 'y', "Orthography", "Confidence"], axis=1)
        return df

    def extract_text_from_audio(audio_file_path, start_time, end_time):
        r = sr.Recognizer()
        with sr.AudioFile(audio_file_path) as source:
            audio = r.record(source, offset=start_time, duration=end_time - start_time)
        try:
            text = r.recognize_google(audio)
        except sr.UnknownValueError:
            text = 'Not Found'
        return text

    with tempfile.NamedTemporaryFile(suffix='.wav', delete=False) as temp_audio_file:
        temp_audio_file.write(audio_file.read())
        temp_audio_file_path = temp_audio_file.name

    pipeline = Pipeline.from_pretrained(
        "pyannote/speaker-diarization",
        use_auth_token="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"
    )
    diarization = pipeline(temp_audio_file_path, num_speakers=num_speakers)

    with tempfile.NamedTemporaryFile(suffix='.rttm', delete=False) as temp_rttm_file:
        diarization.write_rttm(temp_rttm_file)
        temp_rttm_file_path = temp_rttm_file.name

    df = rttm_to_dataframe(temp_rttm_file_path)
    df = df.astype({'Start Time': 'float'})
    df = df.astype({'Duration': 'float'})
    df['Utterance'] = None
    df['End Time'] = df['Start Time'] + df['Duration']

    for ind in df.index:
        start_time = df['Start Time'][ind]
        end_time = df['End Time'][ind]
        transcription = extract_text_from_audio(temp_audio_file_path, start_time, end_time)
        df.at[ind, 'Utterance'] = transcription

    json_result = df.to_json(orient='records')

    os.remove(temp_audio_file_path)
    os.remove(temp_rttm_file_path)

    return json_result

@app.route('/predict', methods=['POST'])
@cross_origin()
def predict_audio():
    if 'audio' not in request.files:
        return jsonify({'error': 'No file provided'})

    #audio_file = request.files['audio']
    #num_speakers = int(request.form.get('num_speakers', 2))
    result = predict("../../../home/adil/Downloads/txt2spchtestfile3.wav", 2)

    response = jsonify(result)
    response.headers.add("Access-Control-Allow-Origin", "*")

    return response
predict_audio()
if __name__ == '__main__':
    app.run(debug=True)
