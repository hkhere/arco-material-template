// 自定义 webpack 构建配置
const path = require('path');
const merge = require('webpack-merge');

/**
 * @param config {import('@arco-design/arco-scripts').WebpackConfig}
 */
module.exports = (config) => {
  const entry = {
    arco: path.resolve('./components/index.tsx'),
  };

  const output = {};
  const { umd } = require(path.resolve('package.json'));
  if (umd) {
    output.filename = (chunkData) =>
      chunkData.chunk.name === 'arco' ? path.basename(umd.file) : '[name].min.js';
    output.library = umd.module;
  }

  return merge(config, {
    entry,
    output,
  });
};
