const Jimp = require('jimp');
 
const imgName = 'lava';
const imgSizeSmall = 640;
const imgSizeMedium = 1200;
const imgSizeLarge = 1400;


Jimp.read(`raw/${imgName}.jpeg`, (err, img) => {
  if (err) throw err;
  img
    .resize(imgSizeSmall, Jimp.AUTO) 
    .quality(100) 
    .write(`processed/${imgName}-small.jpg`)
});

