from flask import Flask, render_template, request, jsonify
import os
from dotenv import load_dotenv
from openai import Completion, OpenAI

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
app.debug = True

# Set your OpenAI API key
openai_api_key = os.getenv('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')

# Initialize OpenAI client
openai = OpenAI(api_key=openai_api_key)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    data = request.get_json()
    user_input = data['text']

    response = ask_gpt(user_input)

    return jsonify({'response': response})

def ask_gpt(prompt):
    try:
        response = Completion.create(
            model="text-davinci-003",  # Adjust model to the desired model
            prompt=prompt, 
            max_tokens=50,
            api_key=openai_api_key
        )
        return response.choices[0].text.strip()
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    app.run(debug=True)
