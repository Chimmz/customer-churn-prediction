import Checkbox from '../components/Checkbox.js';
import Select from '../components/Select.js';
import TextInput from '../components/TextInput.js';
import { shuffleArray } from '../utils.js';

const form = document.querySelector('form#predict')! as HTMLFormElement;

const NUMERIC_FEATURES = [
  ['tenure', 'Tenure'],
  ['MonthlyCharges', 'Monthly Charges'],
  ['TotalCharges', 'Total Charges']
];

const featureNamesInOrder = [
  'gender',
  'Partner',
  'Dependents',
  'tenure',
  'InternetService',
  'OnlineSecurity',
  'OnlineBackup',
  'DeviceProtection',
  'TechSupport',
  'Contract',
  'PaperlessBilling',
  'PaymentMethod',
  'MonthlyCharges',
  'TotalCharges'
];

const CHECKBOX_FIELDS = [
  ['Dependents', 'Has Dependents'],
  ['OnlineBackup', 'Has Online Backup'],
  ['DeviceProtection', 'Has Device Protection'],
  ['TechSupport', 'Has Tech Support'],
  ['Partner', 'Has Partner'],
  ['OnlineSecurity', 'Has Online Security'],
  ['PaperlessBilling', 'Paperless Billing']
];

const SELECTION_INPUTS = [
  ['InternetService', 'Internet Service', ['DSL', 'Fiber optic', 'No']],
  ['Contract', 'Contract Type', ['Month-to-month', 'One year', 'Two year']],

  ['gender', 'Gender', ['Female', 'Male']],
  [
    'PaymentMethod',
    'Payment Method',
    [
      'Electronic check',
      'Mailed check',
      'Bank transfer (automatic)',
      'Credit card (automatic)'
    ]
  ]
];

const inputInstance = TextInput({ parent: 'form#predict > #inputs-container' });
const numericsUI = NUMERIC_FEATURES.map(([feature, label]) => {
  return inputInstance.create({
    type: 'number',
    id: feature,
    name: feature,
    min: 0,
    step: feature === 'tenure' ? 1 : 0.1,
    label,
    placeholder: label
  });
});

const checkboxInstance = Checkbox({
  parent: 'form#predict > #inputs-container'
});
const checkboxesUI = CHECKBOX_FIELDS.map(([feature, label]) => {
  return checkboxInstance.create({ label, id: feature });
});

const selectionInstance = Select({
  parent: 'form#predict > #inputs-container'
});
const selectionsUI = SELECTION_INPUTS.map(([feature, label, optns]) => {
  return selectionInstance.create({
    name: feature as string,
    label: label as string,
    options: optns as string[]
  });
});

const inputComps = [...numericsUI, ...checkboxesUI, ...selectionsUI];

const getHtmlInputValue = (input: HTMLInputElement) => {
  return input.type === 'checkbox' ? +input.checked : +input.value;
};

const predict = async function (this: HTMLFormElement) {
  try {
    const obj: { [k: string]: (string | number)[] } = {};
    featureNamesInOrder.forEach(f => {
      obj[f] = [getHtmlInputValue(form[f])];
    });

    const res = await fetch('/predict', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();

    switch (data.status) {
      case 'success':
        const [pred] = data.predictions;
        window.alert(pred.msg);
        break;
      case 'error':
        window.alert(data.msg);
        break;
    }
  } catch (err) {
    window.alert((err as Error).message);
  }
};

const init = () => {
  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    predict.call(this);
  });

  shuffleArray(inputComps).forEach(cmp => cmp.render());
};

init();
