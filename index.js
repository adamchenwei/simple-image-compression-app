console.log('index stuff');

//import testImage from './src/test.jpg';
//import GetImagesInSrc from './src/GetImagesInSrc';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./src/', false, /\.(png|jpe?g|svg|jpg)$/));
//console.log(images);