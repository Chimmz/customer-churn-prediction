const ANIMATIONS: PageAnimation[] = [
  'zoom-in',
  'zoom-out',
  'slide-from-right',
  'slide-out-right'
];

class Page implements PageObj {
  parentEl = document.querySelector('main')!;

  public readonly tagName: PageObj['tagName'];
  public readonly hash: PageObj['hash'];
  public readonly title: string;
  public readonly content: string;
  public readonly entryExit: [EntryAnimation, ExitAnimation];
  public readonly className?: string;
  private element: HTMLElement | null = null;

  constructor(
    tagName: keyof HTMLElementTagNameMap,
    config: Omit<PageObj, 'tagName'>
  ) {
    this.tagName = tagName;
    this.hash = config.hash;
    this.title = config.title;
    this.content = config.content;
    this.entryExit = config.entryExit;
    this.className = config.className;

    this.render();
    window.onhashchange = this.handleHashChange.bind(this);
  }

  private isCurrentWindowHash = () => window.location.hash === this.hash;

  private hide = () => this.element?.classList.add('hidden');
  private show = () => this.element?.classList.remove('hidden');

  handleHashChange = () => {
    console.log('In ' + this.hash, 'w-hash: ', location.hash);
    // if (!this.element) return; // If element isn't rendered
    const isCurrentHash = this.isCurrentWindowHash();
    isCurrentHash ? this.show() : this.hide();
  };

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
