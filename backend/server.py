from flask import Flask, render_template

app = Flask(__name__)

@app.route('/') # Get model details like ML Model used, score, f1-score, accuracy, precision, recall, etc
def home():
  return render_template('index.html', me={'name': 'Chima', 'age': 24})

@app.route('/feature-performances')
def home():
  return render_template('index.html', me={'name': 'Chima', 'age': 24})

@app.route('/predict', methods=['POST'])
def home():
  return render_template('index.html', me={'name': 'Chima', 'age': 24})


app.run(debug=True)