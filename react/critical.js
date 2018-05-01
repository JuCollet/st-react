const path = require('path');
const critical = require('critical');

critical.generate({
  base: path.join(path.resolve(__dirname), 'dist/'),
  src: 'index.html',
  dest: 'index.html',
  inline: true,
  minify: true,
  extract: true,
  include: [
    '.home-header', '.nav', '.main', '.section1', '.section2', '.section-content-left', '.section-content-right', '.wrapper', '.section-content', '.section1-art', '.section2-background', '.section-content', '.section-content', '.btn', '.btn-blue', '.btn-md',
  ],
  ignore: ['@font-face'],
});
