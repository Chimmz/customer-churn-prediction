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

├── backend/

│   ├── server.py                  # Flask API for predictions

│   ├── forest_final_churn.pkl     # Pre-trained Random Forest model

│   ├── requirements.txt           # Python dependencies

│   ├── static/

│   │   ├── src/

│   │   │   ├── main.ts            # Entry point for TypeScript frontend logic

│   │   │   ├── components/        # TypeScript components (e.g., forms, buttons)

│   │   │   ├── dist/              # Transpiled JavaScript files

│   │   │   ├── pages/             # Page templates (e.g., home, predict)

│   ├── templates/

│   │   ├── index.html             # HTML template for the application

│

├── aws_deployment/

│   ├── deploy.sh                  # Deployment script for AWS EC2

│   ├── instance_config.yml        # EC2 instance configuration

│

├── datasets/

│   ├── WA_Fn-UseC_-Telco-Customer-Churn.csv          # Dataset used for training the model

|

└── README.md                    # Project documentation



**Setup and Installation**

1. Clone the repository:
  git clone https://github.com/your-username/customer-churn-prediction.git
  cd customer-churn-prediction
2. Install backend dependencies:
  cd backend
  pip install -r requirements.txt
3. Run the Flask API:
  python server.py
4. Install TypeScript dependencies:
  cd backend/static/src
  npm install
  npm run build

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
  







