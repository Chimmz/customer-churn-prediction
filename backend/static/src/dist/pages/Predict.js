var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Checkbox from '../components/Checkbox.js';
import Select from '../components/Select.js';
import TextInput from '../components/TextInput.js';
import { shuffleArray } from '../utils.js';
const form = document.querySelector('form#predict');
const btnSubmit = form.querySelector('button[type="submit"]');
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
const customInputInstance = TextInput({
    parent: 'form#predict > #inputs-container'
});
const numericsUI = NUMERIC_FEATURES.map(([feature, label]) => {
    return customInputInstance.create({
        id: feature,
        type: 'number',
        name: feature,
        min: 0,
        step: feature === 'tenure' ? 1 : 0.5,
        dataType: feature === 'tenure' ? 'numeric' : 'decimal',
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
        name: feature,
        label: label,
        options: optns
    });
});
const inputsUI = [...numericsUI, ...checkboxesUI, ...selectionsUI];
const getHtmlInputValue = (input) => {
    return input.type === 'checkbox' ? +input.checked : +input.value;
};
const predict = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const obj = {};
            featureNamesInOrder.forEach(f => {
                obj[f] = [getHtmlInputValue(this[f])];
            });
            const res = yield fetch('/predict', {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: { 'Content-Type': 'application/json' }
            });
            const data = yield res.json();
            btnSubmit.textContent = 'Predict';
            switch (data.status) {
                case 'success':
                    const [pred] = data.predictions;
                    window.alert(pred.msg);
                    break;
                case 'error':
                    window.alert(data.msg);
                    break;
            }
        }
        catch (err) {
            window.alert(err.message);
        }
    });
};
const init = () => {
    shuffleArray(inputsUI).forEach(cmp => cmp.render());
    form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        btnSubmit.textContent = 'Predicting...';
        predict.call(this);
    });
};
init();
//# sourceMappingURL=predict.js.map