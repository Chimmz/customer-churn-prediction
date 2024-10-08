class Component {
    constructor(html, parent) {
        this.html = html;
        this.html = html;
        this.parent =
            typeof parent === 'string' ? document.querySelector(parent) : parent;
    }
    render() {
        var _a;
        (_a = this.parent) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', this.html);
    }
}
export default Component;
//# sourceMappingURL=index.js.map