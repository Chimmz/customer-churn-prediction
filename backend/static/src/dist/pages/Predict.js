import Page from './index.js';
var Predict = function () {
    return new Page('div', {
        hash: '#predict',
        title: 'Predict',
        entryExit: ['zoom-in', 'slide-out-right'],
        className: 'leading-8',
        content: "\n      <form\n        action=\"\"\n        class=\"basis-[60%] grid grid-cols-responsive items-start gap-8 py-7 overflow-y-scroll scrollbar-gray scrollbar-thin scrollbar-rounded scrollbar-track-rounded\"\n      ></form>\n  \n      <button class=\"self-start mx-auto cmp-btn cmp-btn-pry cmp-btn-long\">\n        Predict\n      </button>\n    "
    });
};
// <div class="h-full absolute inset-0 flex flex-col gap-7 leading-8">
// </div
export default Predict;
//# sourceMappingURL=Predict.js.map