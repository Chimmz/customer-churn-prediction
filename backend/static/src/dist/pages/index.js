const ANIMATIONS = [
    'zoom-in',
    'zoom-out',
    'slide-from-right',
    'slide-out-right'
];
class Page {
    constructor(tagName, config) {
        this.parentEl = document.querySelector('main');
        this.element = null;
        this.isCurrentWindowHash = () => window.location.hash === this.hash;
        this.hide = () => { var _a; return (_a = this.element) === null || _a === void 0 ? void 0 : _a.classList.add('hidden'); };
        this.show = () => { var _a; return (_a = this.element) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden'); };
        this.handleHashChange = () => {
            console.log('In ' + this.hash, 'w-hash: ', location.hash);
            // if (!this.element) return; // If element isn't rendered
            const isCurrentHash = this.isCurrentWindowHash();
            isCurrentHash ? this.show() : this.hide();
        };
        this.tagName = tagName;
        this.hash = config.hash;
        this.title = config.title;
        this.content = config.content;
        this.entryExit = config.entryExit;
        this.className = config.className;
        this.render();
        window.onhashchange = this.handleHashChange.bind(this);
    }
    render() {
        const { tagName, hash, content, title } = this;
        const id = hash.replace('#', '');
        // Create page container
        const el = `
      <${tagName} id=${id} class='border border-yellow-500 h-full flex flex-col gap-7 transition-all duration-1000 delay-200'>
        <h2 class="text-3xl text-white/90">${title}</h2>
        ${content}
      </${tagName}>
    `;
        // Insert page into main
        this.parentEl.insertAdjacentHTML('beforeend', el);
        this.element = this.parentEl.querySelector(hash); // this.element is no longer null
        this.handleHashChange();
    }
}
export default Page;
//# sourceMappingURL=index.js.map