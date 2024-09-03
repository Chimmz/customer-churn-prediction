class Page implements PageObj {
  public element: keyof HTMLElementTagNameMap;
  public hash: string;
  public title: string;
  public content: string;
  public entryExit: [EntryAnimation, ExitAnimation];
  public extraContainerClass?: string;
  parentEl = document.querySelector('main')!;

  constructor(
    element: keyof HTMLElementTagNameMap,
    config: Omit<PageObj, 'element'>
  ) {
    this.element = element;
    this.hash = config.hash;
    this.title = config.title;
    this.content = config.content;
    this.entryExit = config.entryExit;
    this.extraContainerClass = config.extraContainerClass;

    window.onhashchange = this.render.bind(this);
  }

  isCurrentWindowHash = () => window.location.hash === this.hash;

  render() {
    // Select entry animation if page's hash is current window hash
    const el = document.createElement(this.element);
    el.className =
      'h-full flex flex-col gap-7 transition-all duration-1000 delay-200';

    if (this.extraContainerClass) el.classList.add(this.extraContainerClass);

    const animation = this.entryExit[+!this.isCurrentWindowHash()];
    const animationClasses = {
      'zoom-in': 'scale-100 opacity-1',
      'zoom-out': 'scale-50 opacity-0',
      'slide-from-right': 'translate-x-0 opacity-1',
      'slide-out-right': 'translate-x-[400px] opacity-0',
    };

    const addOrRemove = this.isCurrentWindowHash() ? 'add' : 'remove';
    el.classList[addOrRemove](animationClasses[animation]);

    el.insertAdjacentHTML(
      'afterbegin',
      ` <h2 class="text-3xl text-white/90">
        ${this.title}</h2> ${this.content}
      `
    );
    this.parentEl.insertAdjacentElement('beforeend', el);
  }
}

export default Page;
