import Component from './index.js';
const Select = ({ parent }) => {
    const create = (props) => {
        const getOptionUI = (optn, i) => {
            return `
        <option value="${i}" class="bg-black text-textdefault hover:bg-white"
          ${i === 0 && 'selected'}
        >
          ${optn}
        </option>
      `;
        };
        const html = `
      <div class="flex flex-col gap-2 relative">
        <label for="">${props.label}</label>
        <select
          name="${props.name}"
          id=""
          class="cmp-textfield bg-bgdefault p-3 px-4 rounded-md cursor-pointer"
        >
        ${props.options.map(getOptionUI).join(' ')}
        </select>
      </div>`;
        return new Component(html, parent);
    };
    return { create };
};
export default Select;
//# sourceMappingURL=Select.js.map