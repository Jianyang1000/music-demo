
module.exports = {
  entry: './src/home.js',
  output: {
    filename: './bundle.js'
  
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader','css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '../images/[name].[ext]'
        }
      },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        },{
          loader: 'expose-loader',
          options: '$'
        }]
      }
    ],
  },
  resolve: {
        //extensions: ['', '.js', '.es6', '.vue'],
        alias: {
            //  也可以不写
            jquery: './vendors/jquery.min.js',
	    AV: './vendors/av-min.js'
        }
  },
  externals: {
    'jquery': 'window.jQuery',
  },
  mode: 'development'
};
