class Component implements ComponentObj {
  public parent: ComponentObj['parent'];

  constructor(public html: string, parent: string | HTMLElement) {
    this.html = html;
    this.parent =
      typeof parent === 'string' ? document.querySelector(parent) : parent;
  }
  render() {
    this.parent?.insertAdjacentHTML('beforeend', this.html);
  }
}

export default Component;
