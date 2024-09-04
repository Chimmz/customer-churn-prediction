"use strict";
var navlinks = (document.querySelectorAll('aside > ul a'));
var screens = document.querySelectorAll('main > *');
// const pageHashes = {'#about': , '#predict', '#features'};
var handleLinkChange = function () {
    navlinks.forEach(function (link) {
        var isCurrentHash = link.href.split('/').slice(-1).pop() === location.hash;
        if (isCurrentHash) {
            link.parentElement.classList.add('u-navlink-active');
            link.parentElement.classList.remove('hover:text-white');
        }
        else {
            link.parentElement.classList.remove('u-navlink-active');
            link.parentElement.classList.add('hover:text-white');
        }
    });
};
var handleScreenChange = function () {
    screens.forEach(function (sc) {
        if (sc.id === location.hash.replace('#', ''))
            sc.classList.remove('hidden');
        else
            sc.classList.add('hidden');
    });
};
var handleHashChange = function () {
    handleLinkChange();
    handleScreenChange();
};
console.log(screens);
window.onhashchange = handleHashChange;
window.onload = function () {
    if (location.hash.replace('#', ''))
        return;
    location.hash = '#about';
};
handleHashChange();
//# sourceMappingURL=entry.js.map