type EntryAnimation = `zoom-in` | 'slide-from-right';
type ExitAnimation = `zoom-out` | 'slide-out-right';
type PageAnimation = EntryAnimation | ExitAnimation;

interface PageObj {
  tagName: keyof HTMLElementTagNameMap;
  hash: `#${string}`;
  title: string;
  content: string;
  entryExit: [EntryAnimation, ExitAnimation];
  className?: string;
}

interface ComponentObj {
  html: string;
  parent: Element | null;
}

type SubmitHandler = GlobalEventHandlers['onsubmit'];
