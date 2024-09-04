var Nav = /** @class */ (function () {
    function Nav() {
        var _this = this;
        this.mainElement = document.querySelector('aside#nav');
        this.links = [
            { to: '#about', label: 'About Model' },
            { to: '#predict', label: 'Predict Churn' },
            { to: '#features', label: 'Model Features' },
        ];
        this.getLinkUI = function (link) {
            var isCurrentUrl = location.hash === link.to;
            return "<li\n      class=\"translate-x-[2.5px] text-right min-w-max pr-5 py-1 border-r-[3px] transition-colors duration-200 ".concat(isCurrentUrl
                ? 'u-navlink-active'
                : 'hover:text-white border-r-transparent', "\"\n    >\n      <a href=\"").concat(link.to, "\">").concat(link.label, "</a>\n    </li>");
        };
        this.clearUI = function () {
            _this.mainElement.innerHTML = '';
        };
        this.render();
        window.onhashchange = this.render.bind(this);
    }
    Nav.prototype.render = function () {
        this.clearUI();
        this.mainElement.insertAdjacentHTML('afterbegin', "<ul\n          class=\"h-[50%] flex flex-col gap-7 border-r-[2.5px] border-white/15 py-7\"\n        >\n          ".concat(this.links.map(this.getLinkUI).join(' '), "\n        </ul>"));
    };
    Nav.navigate = function (hash) {
        if (!location.hash)
            location.href += hash;
    };
    return Nav;
}());
export { Nav };
export default new Nav();
//# sourceMappingURL=Nav.js.map