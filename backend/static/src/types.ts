type EntryAnimation = `zoom-in` | 'slide-from-right';
type ExitAnimation = `zoom-out` | 'slide-out-right';

interface PageObj {
  element: keyof HTMLElementTagNameMap;
  hash: string;
  title: string;
  content: string;
  entryExit: [EntryAnimation, ExitAnimation];
  extraContainerClass?: string;
}
