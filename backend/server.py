from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
  return render_template('index.html', me={'name': 'Chima', 'age': 24})

app.run(debug=True)