import Page from './index.js';
var About = function () {
    return new Page('div', {
        hash: '#about',
        title: 'About Model',
        entryExit: ['slide-from-right', 'zoom-out'],
        content: "\n      <p>\n        Lorem ipsum dolor sit amet consectetur. Adipiscing a enim ut bibendum.\n        Placerat euismod blandit sed sed ut. Varius auctor scelerisque sem\n        neque sagittis imperdiet urna habitant sagittis. Sed a facilisis\n        tincidunt fringilla eu iaculis lectus posuere metus.\n      </p>\n      <p>\n        Lorem ipsum dolor sit amet consectetur. Adipiscing a enim ut bibendum.\n        Placerat euismod blandit sed sed ut. Varius auctor scelerisque sem\n        neque sagittis imperdiet urna habitant sagittis. Sed a facilisis\n        tincidunt fringilla eu iaculis lectus posuere metus.\n      </p>\n      <a href=\"#predict\" class=\"self-start cmp-btn cmp-btn-pry\">Continue</a>\n      "
    });
};
// <div class="h-full absolute inset-0 flex flex-col gap-7 leading-8">
// </div>
export default About;
//# sourceMappingURL=About.js.map