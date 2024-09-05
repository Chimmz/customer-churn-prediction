import Page from './index.js';
const About = () => {
    return new Page('div', {
        hash: '#about',
        title: 'About Model',
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
      <a href="#predict" class="self-start cmp-btn cmp-btn-pry">Continue</a>
      `
    });
};
// <div class="h-full absolute inset-0 flex flex-col gap-7 leading-8">
// </div>
export default About;
//# sourceMappingURL=About.js.map