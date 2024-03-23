from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, FitFlex!'

if __name__ == "__main__":
    app.run(debug=True)

    #testing commit for github - Shaun Hardtke