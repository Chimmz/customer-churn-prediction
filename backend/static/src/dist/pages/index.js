var ANIMATIONS = [
    'zoom-in',
    'zoom-out',
    'slide-from-right',
    'slide-out-right'
];
var Page = /** @class */ (function () {
    function Page(tagName, config) {
        var _this = this;
        this.parentEl = document.querySelector('main');
        this.element = null;
        this.isCurrentWindowHash = function () { return window.location.hash === _this.hash; };
        this.hide = function () { var _a; return (_a = _this.element) === null || _a === void 0 ? void 0 : _a.classList.add('hidden'); };
        this.show = function () { var _a; return (_a = _this.element) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden'); };
        this.handleHashChange = function () {
            console.log('In ' + _this.hash, 'w-hash: ', location.hash);
            // if (!this.element) return; // If element isn't rendered
            var isCurrentHash = _this.isCurrentWindowHash();
            isCurrentHash ? _this.show() : _this.hide();
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
    Page.prototype.render = function () {
        var _a = this, tagName = _a.tagName, hash = _a.hash, content = _a.content, title = _a.title;
        var id = hash.replace('#', '');
        // Create page container
        var el = "\n      <".concat(tagName, " id=").concat(id, " class='border border-yellow-500 h-full flex flex-col gap-7 transition-all duration-1000 delay-200'>\n        <h2 class=\"text-3xl text-white/90\">").concat(title, "</h2>\n        ").concat(content, "\n      </").concat(tagName, ">\n    ");
        // Insert page into main
        this.parentEl.insertAdjacentHTML('beforeend', el);
        this.element = this.parentEl.querySelector(hash); // this.element is no longer null
        this.handleHashChange();
    };
    return Page;
}());
export default Page;
//# sourceMappingURL=index.js.map