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
import Component from '../components/index.js';
import Select from '../components/Select.js';
import TextInput from '../components/TextInput.js';
import { shuffleArray } from '../utils.js';
const form = document.querySelector('form#predict');
const FEATURES = [
    'gender',
    'Partner',
    'Dependents',
    'tenure',
    'MultipleLines',
    'InternetService',
    'OnlineSecurity',
    'OnlineBackup',
    'DeviceProtection',
    'TechSupport',
    'Contract',
    'PaymentMethod',
    'MonthlyCharges',
    'TotalCharges'
];
const FIELDS_CONTAINER = 'form#predict > #inputs-container';
const NUMERIC_FEATURES = [
    ['tenure', 'Tenure'],
    ['MonthlyCharges', 'Monthly Charges'],
    ['TotalCharges', 'Total Charges']
];
const CHECKBOX_FIELDS = [
    ['Dependents', 'Has Dependents'],
    ['MultipleLines', 'Has Multiple Lines'],
    ['OnlineBackup', 'Has Online Backup'],
    ['DeviceProtection', 'Has Device Protection'],
    ['TechSupport', 'Has Tech Support'],
    ['Partner', 'Has Partner'],
    ['OnlineSecurity', 'Has Online Security']
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
const inputInstance = TextInput({ parent: FIELDS_CONTAINER });
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
const checkboxInstance = Checkbox({ parent: FIELDS_CONTAINER });
const checkboxesUI = CHECKBOX_FIELDS.map(([feature, label]) => {
    return checkboxInstance.create({ label, id: feature });
});
const selectionInstance = Select({ parent: FIELDS_CONTAINER });
const selectionsUI = SELECTION_INPUTS.map(([feature, label, optns]) => {
    return selectionInstance.create({
        name: feature,
        label: label,
        options: optns
    });
});
const inputComps = [...numericsUI, ...checkboxesUI, ...selectionsUI];
const getInputValue = (input) => {
    return input.type === 'checkbox' ? +input.checked : +input.value;
};
const predict = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const inputs = Array.from(form.elements).slice(0, -1);
        const entries = inputs.map(el => [el.name, getInputValue(el)]);
        // Convert entries to object
        const obj = {};
        for (const [k, v] of entries)
            obj[k] = [v];
        const res = yield fetch('/predict', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(yield res.json());
    });
};
const init = () => {
    form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        predict.call(this);
    });
    shuffleArray(inputComps).forEach(cmp => cmp.render());
};
init();
//# sourceMappingURL=Predict.js.map