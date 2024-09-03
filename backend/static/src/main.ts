import Nav from './layout/Nav.js';
import { Nav as NavClass } from './layout/Nav.js';
import Page from './pages/index.js';

const AboutPage = new Page('div', {
  hash: '#about',
  title: 'About Model',
  entryExit: ['slide-from-right', 'zoom-out'],
  content: `
      <main class="h-full flex flex-col gap-7 leading-8">
        <p>
          Lorem ipsum dolor sit amet consectetur. Adipiscing a enim ut bibendum.
          Placerat euismod blandit sed sed ut. Varius auctor scelerisque sem
          neque sagittis imperdiet urna habitant sagittis. Sed a facilisis
          tincidunt fringilla eu iaculis lectus posuere metus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Adipiscing a enim ut bibendum.
          Placerat euismod blandit sed sed ut. Varius auctor scelerisque sem
          neque sagittis imperdiet urna habitant sagittis. Sed a facilisis
          tincidunt fringilla eu iaculis lectus posuere metus.
        </p>
        <a href="#predict" class="self-start cmp-btn cmp-btn-pry">Test model</a>
      </main>`,
});

const PredictPage = new Page('div', {
  hash: '#predict',
  title: 'Predict',
  entryExit: ['zoom-in', 'slide-out-right'],
  extraContainerClass: 'leading-8',
  content: `
    <form
      action=""
      class="basis-[60%] grid grid-cols-responsive items-start gap-8 py-7 overflow-y-scroll scrollbar-gray scrollbar-thin scrollbar-rounded scrollbar-track-rounded"
    ></form>

    <button class="self-start mx-auto cmp-btn cmp-btn-pry cmp-btn-long">
      Predict
    </button>`,
});

const FeaturesPage = new Page('div', {
  hash: '#features',
  title: 'Model Features',
  entryExit: ['slide-from-right', 'zoom-out'],
  content: `
    <p>
      Lorem ipsum dolor sit amet consectetur. Adipiscing a enim ut bibendum.
      Placerat euismod blandit sed sed ut. Varius auctor scelerisque sem
      neque sagittis imperdiet urna habitant sagittis. Sed a facilisis
      tincidunt fringilla eu iaculis lectus posuere metus.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur. Adipiscing a enim ut bibendum.
      Placerat euismod blandit sed sed ut. Varius auctor scelerisque sem
      neque sagittis imperdiet urna habitant sagittis. Sed a facilisis
      tincidunt fringilla eu iaculis lectus posuere metus.
    </p>
    <a href="/predict" class="self-start cmp-btn cmp-btn-pry">Test model</a>`,
});

const init = function () {
  NavClass.navigate('#about');
  // AboutPage.render();
  // PredictPage.render();
  // FeaturesPage.render();
};
init();

export {};
