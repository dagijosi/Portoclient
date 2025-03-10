interface NodeRequire extends NodeJS.Require {
  context(directory: string, useSubdirectories: boolean, regExp: RegExp): any;
}

declare var require: NodeRequire;

const images = require.context('../image', false, /\.(png|jpe?g|svg)$/);

const imagePaths = images.keys().map(images);

export { images };
export default imagePaths;