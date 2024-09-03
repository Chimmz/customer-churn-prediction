import Nav from './layout/Nav.js';
import { Nav as NavClass } from './layout/Nav.js';
import Page from './pages/index.js';
var AboutPage = new Page('div', {
    hash: '#about',
    title: 'About Model',
    entryExit: ['slide-from-right', 'zoom-out'],
    content: "\n      <main class=\"h-full flex flex-col gap-7 leading-8\">\n        <p>\n          Lorem ipsum dolor sit amet consectetur. Adipiscing a enim ut bibendum.\n          Placerat euismod blandit sed sed ut. Varius auctor scelerisque sem\n          neque sagittis imperdiet urna habitant sagittis. Sed a facilisis\n          tincidunt fringilla eu iaculis lectus posuere metus.\n        </p>\n        <p>\n          Lorem ipsum dolor sit amet consectetur. Adipiscing a enim ut bibendum.\n          Placerat euismod blandit sed sed ut. Varius auctor scelerisque sem\n          neque sagittis imperdiet urna habitant sagittis. Sed a facilisis\n          tincidunt fringilla eu iaculis lectus posuere metus.\n        </p>\n        <a href=\"#predict\" class=\"self-start cmp-btn cmp-btn-pry\">Test model</a>\n      </main>",
});
var PredictPage = new Page('div', {
    hash: '#predict',
    title: 'Predict',
    entryExit: ['zoom-in', 'slide-out-right'],
    extraContainerClass: 'leading-8',
    content: "\n    <form\n      action=\"\"\n      class=\"basis-[60%] grid grid-cols-responsive items-start gap-8 py-7 overflow-y-scroll scrollbar-gray scrollbar-thin scrollbar-rounded scrollbar-track-rounded\"\n    ></form>\n\n    <button class=\"self-start mx-auto cmp-btn cmp-btn-pry cmp-btn-long\">\n      Predict\n    </button>",
});
var FeaturesPage = new Page('div', {
    hash: '#features',
    title: 'Model Features',
    entryExit: ['slide-from-right', 'zoom-out'],
    content: "\n    <p>\n      Lorem ipsum dolor sit amet consectetur. Adipiscing a enim ut bibendum.\n      Placerat euismod blandit sed sed ut. Varius auctor scelerisque sem\n      neque sagittis imperdiet urna habitant sagittis. Sed a facilisis\n      tincidunt fringilla eu iaculis lectus posuere metus.\n    </p>\n    <p>\n      Lorem ipsum dolor sit amet consectetur. Adipiscing a enim ut bibendum.\n      Placerat euismod blandit sed sed ut. Varius auctor scelerisque sem\n      neque sagittis imperdiet urna habitant sagittis. Sed a facilisis\n      tincidunt fringilla eu iaculis lectus posuere metus.\n    </p>\n    <a href=\"/predict\" class=\"self-start cmp-btn cmp-btn-pry\">Test model</a>",
});
var init = function () {
    NavClass.navigate('#about');
    // AboutPage.render();
    // PredictPage.render();
    // FeaturesPage.render();
};
init();
