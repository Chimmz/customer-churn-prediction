import './pages/Predict.js';
const screens = document.querySelectorAll('main > *');
const navlinks = (document.querySelectorAll('aside > ul a'));
const handleLinkChange = () => {
    navlinks.forEach(link => {
        const listItem = link.parentElement;
        const isCurrentHash = link.href.split('/').slice(-1).pop() === location.hash;
        if (isCurrentHash) {
            listItem.classList.add('u-navlink-active');
            listItem.classList.remove('hover:text-white');
        }
        else {
            listItem.classList.remove('u-navlink-active');
            listItem.classList.add('hover:text-white');
        }
    });
};
const getWindowHashValue = () => location.hash.replace('#', '');
const handleScreenChange = () => {
    screens.forEach(sc => {
        if (sc.id === getWindowHashValue())
            sc.classList.remove('hidden');
        else
            sc.classList.add('hidden');
    });
};
const handleHashChange = function () {
    handleLinkChange();
    handleScreenChange();
};
const init = () => {
    window.onhashchange = handleHashChange;
    if (!getWindowHashValue())
        location.hash = '#about';
    handleHashChange();
};
window.onload = init;
//# sourceMappingURL=main.js.map