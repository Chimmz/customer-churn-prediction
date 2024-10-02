**CUSTOMER CHURN PREDICTION FOR TELECOMMUNICATIONS COMPANY**

This project predicts customer churn using a machine learning model built on the Telco dataset. The solution is deployed end-to-end, featuring a frontend built with JavaScript and TypeScript, a Flask-based backend API, and is hosted on AWS.

**Project Overview**

Customer churn is a key business issue for telecommunications companies, impacting revenue and growth. This project aims to identify customers likely to churn using historical data, enabling timely interventions to retain them.

**Key Features**:

Predict customer churn: Uses Random Forest model to predict if a customer is likely to leave.
Interactive UI: A user-friendly web interface for making predictions and visualizing model performance.
Real-time API: Flask API for handling predictions.
Deployment: Hosted on AWS for scalability and accessibility.
Technologies Used
Frontend:
JavaScript/TypeScript: Used for building a responsive and interactive UI.
HTML/CSS/TailwindCSS: For static page structure and styling.
Backend:
Flask: Python framework for building RESTful API endpoints to handle prediction requests.
AWS: Cloud platform for deployment and hosting.
Machine Learning:
Random Forest Classifier: Model used for churn prediction.
Scikit-Learn, Pandas, NumPy: Python libraries for data manipulation and model building.

**Project Structure**:

![proj-structure](https://github.com/user-attachments/assets/ea9ffe59-56fc-4b99-aaad-58e179cf5d90)


**Setup and Installation**

1. Clone the repository:
  git clone https://github.com/Chimmz/customer-churn-prediction
  cd customer-churn-prediction
2. Install backend dependencies:
  cd backend
  pip install -r requirements.txt
3. Run the Flask API:
  python server.py
4. Run all TypeScript files via the command line:
  cd backend/static/src
  tsc --watch

**Usage**
- Access the application via the browser after deployment.
- Use the Predict page to input customer details and predict churn likelihood.
- View feature importances and model metrics on the Predictors page.
  
**Model Performance**
Accuracy: 83%
F1-Score: 90%
Precision: 89%

**Future Improvements**
Incorporate more advanced models like XGBoost or Neural Networks.
Add real-time analytics and enhance scalability with AWS Lambda.
  







