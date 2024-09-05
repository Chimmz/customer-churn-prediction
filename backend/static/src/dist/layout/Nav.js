export class Nav {
    constructor() {
        this.mainElement = document.querySelector('aside#nav');
        this.links = [
            { to: '#about', label: 'About Model' },
            { to: '#predict', label: 'Predict Churn' },
            { to: '#features', label: 'Model Features' },
        ];
        this.getLinkUI = (link) => {
            const isCurrentUrl = location.hash === link.to;
            return `<li
      class="translate-x-[2.5px] text-right min-w-max pr-5 py-1 border-r-[3px] transition-colors duration-200 ${isCurrentUrl
                ? 'u-navlink-active'
                : 'hover:text-white border-r-transparent'}"
    >
      <a href="${link.to}">${link.label}</a>
    </li>`;
        };
        this.clearUI = () => {
            this.mainElement.innerHTML = '';
        };
        this.render();
        window.onhashchange = this.render.bind(this);
    }
    render() {
        this.clearUI();
        this.mainElement.insertAdjacentHTML('afterbegin', `<ul
          class="h-[50%] flex flex-col gap-7 border-r-[2.5px] border-white/15 py-7"
        >
          ${this.links.map(this.getLinkUI).join(' ')}
        </ul>`);
    }
}
Nav.navigate = (hash) => {
    if (!location.hash)
        location.href += hash;
};
export default new Nav();
//# sourceMappingURL=Nav.js.map