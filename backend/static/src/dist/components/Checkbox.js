import Component from './index.js';
const Checkbox = ({ parent }) => {
    const create = (props) => {
        const html = `
      <div class="cmp-check relative max-w-max -translate-y-[7px]">
        <input type="checkbox" id="${props.id}" name="${props.id}" class="hidden" />
        <label for="${props.id}" class="relative flex flex-col gap-2 cursor-pointer">
          <span>${props.label}</span>
          <div class="w-20 h-8 bg-pry rounded-full relative">
            <div
              class="w-[60%] absolute inset-[2px] rounded-full bg-black transition-all"
            ></div>
          </div>
        </label>
      </div>`;
        return new Component(html, parent);
    };
    return { create };
};
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map