import Component from './index.js';
const TextInput = ({ parent }) => {
    const create = (props) => {
        const { min = 0, step = 1 } = props;
        const html = `
      <div class="relative flex flex-col-reverse gap-2 max-h-max">
        <input
          type="${props.type}"
          min=${min}
          name="${props.id}"
          step="${props.step}"
          class="cmp-textfield"
          placeholder="${props.placeholder}"
        />
        <label
          for="${props.id}"
          class="block"
        >${props.label}</label>
      </div>`;
        return new Component(html, parent);
    };
    return { create };
};
export default TextInput;
//# sourceMappingURL=TextInput.js.map