import Page from './index.js';

const Predict = () => {
  return new Page('div', {
    hash: '#predict',
    title: 'Predict',
    entryExit: ['zoom-in', 'slide-out-right'],
    className: 'leading-8',
    content: `
      <form
        action=""
        class="basis-[60%] grid grid-cols-responsive items-start gap-8 py-7 overflow-y-scroll scrollbar-gray scrollbar-thin scrollbar-rounded scrollbar-track-rounded"
      ></form>
  
      <button class="self-start mx-auto cmp-btn cmp-btn-pry cmp-btn-long">
        Predict
      </button>
    `
  });
};
// <div class="h-full absolute inset-0 flex flex-col gap-7 leading-8">
// </div
export default Predict;
