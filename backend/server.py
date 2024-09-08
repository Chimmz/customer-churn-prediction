from flask import Flask, jsonify, render_template
from flask import request, redirect, url_for
import pandas as pd
import numpy as np
import joblib
import json

app = Flask(__name__)

@app.route('/') # Get model details like ML Model used, score, f1-score, accuracy, precision, recall, etc
def home():
  model = joblib.load('forest_final_churn.pkl')
  return render_template('index.html',
                         data={'feature_names': model.feature_names_in_})

@app.route('/features') # Get model details like ML Model used, score, f1-score, accuracy, precision, recall, etc
def features():
  try:
    model = joblib.load('forest_final_churn.pkl')

    importances = map(lambda x: int(np.round(x, 3) * 100), model.feature_importances_)
    feature_importances = dict(zip(model.feature_names_in_, importances))
    return {'status': 'success',
            'feature_importances': feature_importances}
  
  except Exception as e:
    return {'status': 'error', 'msg': json.dump(e)}

@app.route('/predict', methods=['POST'])
def predict():
  try:
    X = pd.DataFrame(request.json)
    print(X)
    model = joblib.load('forest_final_churn.pkl')
    preds = model.predict(X)
    print({'preds': preds})

    def decode_pred(pred: int):
      return {'churn': bool(pred),
              'msg': f"This customer is predicted {'' if pred else 'NOT'} to churn"}
    
    return {'status': 'success',
            'predictions': list(map(decode_pred, preds)),
            'total_preds': len(preds)}
  
  except Exception as err:
    return {'status': 'error', 'msg': json.dump(err)}

app.run(debug=True)