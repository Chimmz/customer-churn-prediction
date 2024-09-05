import Component from './index.js';

interface SelectProps {
  options: string[];
  name: string;
  label: string;
}

const Select = ({ parent }: { parent: string | HTMLElement }) => {
  const create = (props: SelectProps) => {
    const getOptionUI = (optn: string, i: number) => {
      return `
        <option
          value="${i}"
          class="bg-black text-textdefault hover:bg-white"
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
