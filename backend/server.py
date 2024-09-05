from flask import Flask, jsonify, render_template
from flask import request, redirect, url_for
import pandas as pd
import joblib

app = Flask(__name__)

@app.route('/') # Get model details like ML Model used, score, f1-score, accuracy, precision, recall, etc
def home():
  model = joblib.load('forest_final_churn.pkl')

  feature_performances = dict(zip(model.feature_names_in_, model.feature_importances_))
  print()
  return render_template('index.html',
                         data={'feature_names': model.feature_names_in_,
                               'feature_performances': feature_performances})

@app.route('/predict', methods=['POST'])
def predict():
  print('First: ', request.get_json().get('InternetService'))
  predictors = pd.DataFrame(request.json)
  print(predictors)

  model = joblib.load('forest_final_churn.pkl')
  pred = model.predict(predictors)
  
  print({'pred': pred})
  return {'pred': pred}


app.run(debug=True)