const navlinks = <NodeListOf<HTMLLinkElement>>(
  document.querySelectorAll('aside > ul a')
);
const screens = document.querySelectorAll('main > *');

// const pageHashes = {'#about': , '#predict', '#features'};

const handleLinkChange = () => {
  navlinks.forEach(link => {
    const isCurrentHash =
      link.href.split('/').slice(-1).pop() === location.hash;

    if (isCurrentHash) {
      (link.parentElement as HTMLElement).classList.add('u-navlink-active');
      (link.parentElement as HTMLElement).classList.remove('hover:text-white');
    } else {
      (link.parentElement as HTMLElement).classList.remove('u-navlink-active');
      (link.parentElement as HTMLElement).classList.add('hover:text-white');
    }
  });
};

const handleScreenChange = () => {
  screens.forEach(sc => {
    if (sc.id === location.hash.replace('#', '')) sc.classList.remove('hidden');
    else sc.classList.add('hidden');
  });
};

const handleHashChange = function () {
  handleLinkChange();
  handleScreenChange();
};

console.log(screens);

window.onhashchange = handleHashChange;
window.onload = () => {
  if (location.hash.replace('#', '')) return;
  location.hash = '#about';
};

handleHashChange();
