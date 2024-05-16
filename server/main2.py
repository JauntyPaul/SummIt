import pandas as pd
import speech_recognition as sr
from pyannote.audio import Pipeline

# Load pretrained speaker diarization model
pipeline = Pipeline.from_pretrained("pyannote/speaker-diarization",use_auth_token="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")

# Apply pipeline to audio file
diarization = pipeline("./uploads/input_audio.wav", num_speakers=2)

# Dump diarization output to disk using RTTM format
with open("sample.rttm", "w") as rttm:
    diarization.write_rttm(rttm)

def rttm_to_dataframe(rttm_file_path):
    # Define column names for database
    columns=["Type","File ID","Channel","Start Time","Duration","Orthography","Confidence","Speaker",'x','y']

    # Read the RTTM File
    with open(rttm_file_path,"r") as rttm_file:
        lines = rttm_file.readlines()

    # Create an empty list to store data
    data=[]

    # Process each line of rttm file
    for line in lines:
        line = line.strip().split()
        data.append(line)

    # Create the dataframe
    df = pd.DataFrame(data, columns=columns)
    df = df.drop(['x','y',"Orthography","Confidence"], axis=1) # Dropping redundant columns
    return df

def extract_text_from_audio(audio_file_path, start_time, end_time):
    # Initialize the recognizer
    r = sr.Recognizer()

    # Load audio file
    with sr.AudioFile(audio_file_path) as source:
        audio = r.record(source, duration=end_time, offset=start_time)

    # Perform speech to text
    text = r.recognize_google(audio)

    return text

# Usage example
rttm_file_path = "./sample.rttm"
df = rttm_to_dataframe(rttm_file_path)
df = df.astype({'Start Time': 'float'})
df = df.astype({'Duration': 'float'})
df['Utterance'] = None
df['End Time'] = df['Start Time'] + df['Duration']
for ind in df.index:
    start_time = df['Start Time'][ind]
    end_time = df['End Time'][ind]
    audio_file_path = './uploads/input_audio.wav'

    try:
        transcription = extract_text_from_audio(audio_file_path, start_time, end_time)
        df['Utterance'][ind] = transcription
    except:
        df['Utterance'][ind] = 'Not Found'

# Print dataframe
print(df)

# Drop unnecessary columns
df = df.drop(["Type", "File ID", "Channel"], axis=1)

df
