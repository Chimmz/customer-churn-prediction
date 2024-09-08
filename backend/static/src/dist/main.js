import './pages/predict.js';
import * as features from './pages/features.js';
import { loadFeatureImportances } from './pages/features.js';
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
const onHashChange = function () {
    handleLinkChange();
    handleScreenChange();
};
const init = () => {
    window.onhashchange = onHashChange;
    switch (getWindowHashValue()) {
        case '':
            location.hash = '#about';
            break;
        case 'features':
            features.loadFeatureImportances();
            break;
    }
    onHashChange();
};
window.onload = init;
//# sourceMappingURL=main.js.map