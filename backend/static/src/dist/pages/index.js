var Page = /** @class */ (function () {
    function Page(element, config) {
        var _this = this;
        this.parentEl = document.querySelector('main');
        this.isCurrentWindowHash = function () { return window.location.hash === _this.hash; };
        this.element = element;
        this.hash = config.hash;
        this.title = config.title;
        this.content = config.content;
        this.entryExit = config.entryExit;
        this.extraContainerClass = config.extraContainerClass;
        window.onhashchange = this.render.bind(this);
    }
    Page.prototype.render = function () {
        // Select entry animation if page's hash is current window hash
        var el = document.createElement(this.element);
        el.className =
            'h-full flex flex-col gap-7 transition-all duration-1000 delay-200';
        if (this.extraContainerClass)
            el.classList.add(this.extraContainerClass);
        var animation = this.entryExit[+!this.isCurrentWindowHash()];
        var animationClasses = {
            'zoom-in': 'scale-100 opacity-1',
            'zoom-out': 'scale-50 opacity-0',
            'slide-from-right': 'translate-x-0 opacity-1',
            'slide-out-right': 'translate-x-[400px] opacity-0',
        };
        var addOrRemove = this.isCurrentWindowHash() ? 'add' : 'remove';
        el.classList[addOrRemove](animationClasses[animation]);
        el.insertAdjacentHTML('afterbegin', " <h2 class=\"text-3xl text-white/90\">\n        ".concat(this.title, "</h2> ").concat(this.content, "\n      "));
        this.parentEl.insertAdjacentElement('beforeend', el);
    };
    return Page;
}());
export default Page;
