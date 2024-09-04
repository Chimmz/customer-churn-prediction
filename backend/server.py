from flask import Flask, render_template
from flask import request, redirect, url_for
import joblib

app = Flask(__name__)

@app.route('/') # Get model details like ML Model used, score, f1-score, accuracy, precision, recall, etc
def home():
  model = joblib.load('forest_final_churn.pkl')

  feature_performances = dict(zip(model.feature_names_in_, model.feature_importances_))
  print(feature_performances)
  
  return render_template('index.html', data={'feature_performances': feature_performances})

# @app.route('/predict', methods=['POST'])
# def home():
#   return render_template('index.html', me={'name': 'Chima', 'age': 24})


app.run(debug=True)