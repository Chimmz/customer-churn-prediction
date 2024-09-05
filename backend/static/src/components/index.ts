class Component implements ComponentObj {
  public parent: ComponentObj['parent'];

  constructor(public html: string, parent: string | HTMLElement) {
    this.html = html;
    this.parent =
      typeof parent === 'string' ? document.querySelector(parent) : parent;

    // this.render();
  }

  render() {
    console.log('Rendering...');
    this.parent?.insertAdjacentHTML('beforeend', this.html);
  }
}

export default Component;
