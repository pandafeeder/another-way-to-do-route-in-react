const path = require('path');


module.exports = {
  entry: {
    react_router_demo: './react_router_demo/react_router_demo_entry',
    universal_router_demo: './universal_router_demo/universal_router_demo_entry'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modeuls/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  devServer: {
    contentBase: './dist',
    compress: true,
  }
}