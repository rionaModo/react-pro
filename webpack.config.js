var path=require('path');
module.exports = {
  entry: "./client/main.jsx",
  output: {
    path: path.join(__dirname, '/client/public/js'),
    filename: "bundle.js",
    publicPath:'/static/js/'

  },
  /*module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.jsx$/, loaders: 'jsx-loader' },
      {
        test: /\.js$/, loaders: 'babel-loader',
        query: {
          //添加两个presents 使用这两种presets处理js或者jsx文件
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.js$/,
        loaders: 'jsx-loader',
        query: {
          //添加两个presents 使用这两种presets处理js或者jsx文件
          presets: ['es2015', 'react']
        }
      }
    ]
  }*/
  module:{
    rules:[
      {
        test:/\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: { presets: ["react","es2015"] }
        }],
      },
      { test: /\.(css|less)$/,
        use:["style-loader","css-loader","less-loader"],
        /*options:{
          modules:true
        }
*/
      }

    ]
  },
  resolve:{
    modules: ['./node_modules']
  },
  devtool:'#source-map'


/*
  module: {

    //使用ES6时，才需要添加此loaders
    loaders:[
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.js$/,
        loader: 'babel'

      }
    ]
  },
   babel: {
    presets: ['es2015','stage-3'],
   // plugins: ['transform-runtime']
  }*/
};


//module.exports.devtool = '#source-map';