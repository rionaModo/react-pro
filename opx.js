var webpack = require('webpack'),
  path = require('path')
module.exports = {
  entry: './src/main.js',
  context: path.join(__dirname, 'client'),
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'build.js'
  },
  module: {
    // avoid webpack trying to shim process
    noParse: /es6-promise\.js$/,
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        loader: 'file',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  babel: {
    presets: ['es2015','stage-3'],
    plugins: ['transform-runtime']
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
      'business': path.resolve(__dirname, './client/src/views/business'),
      'components': path.resolve(__dirname, './client/src/components'),
      'lib': path.resolve(__dirname, './client/src/lib'),
      'public': path.resolve(__dirname, './public'),
      'util': path.resolve(__dirname, './client/src/util')
    }
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
}
