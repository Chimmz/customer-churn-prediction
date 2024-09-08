import Component from './index.js';

interface TextInputProps {
  type: HTMLInputElement['type'];
  inputMode?: HTMLInputElement['inputMode'];
  dataType?: 'text' | 'numeric' | 'decimal';
  min: number;
  step?: number;
  value?: number | string;
  name: string;
  id: string;
  placeholder: HTMLInputElement['placeholder'];
  // class: HTMLInputElement['className'];
  label: string;
}

const TextInput = ({ parent }: { parent: string | HTMLElement }) => {
  const create = (props: TextInputProps) => {
    const { min = 0, step = 1, inputMode = 'text' } = props;

    const html = `
      <div class="relative flex flex-col-reverse gap-2 max-h-max">
        <input
          type="${props.type}"
          inputmode="${inputMode}"
          min=${min}
          name="${props.id}"
          step="${props.step}"
          class="cmp-textfield"
          placeholder="${props.placeholder}"
        />
        <label for="${props.id}" class="block">${props.label}</label>
      </div>`;
    return new Component(html, parent);
  };
  return { create };
};

export default TextInput;
