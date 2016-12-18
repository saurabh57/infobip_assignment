const path = require('path');
const srcPath = path.join(__dirname, './app');

var config = {
   entry: './app/main.js',

   output: {
      path:'./',
      filename: 'index.js',
   },
   resolve: {
     extensions: ['', '.js', '.jsx'],
     alias: {
       components: `${srcPath}/components`,
       styles:`${srcPath}/styles`,
       container:`${srcPath}/container`,
       sources:`${srcPath}/sources`,
       images:`${srcPath}/images`
     }
   },
   devServer: {
     contentBase: './app/',
     historyApiFallback: true,
     hot: true,
     port: 8000,
     inline:true
   },

   module: {
      loaders: [
         {
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.css?$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader'
         },
         {
             test: /.*\.(gif|png|jpe?g|svg)$/i,
             loaders: [
               'file?hash=sha512&digest=hex&name=[hash].[ext]',
               'image-webpack'
             ]
         },
         {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000',
        }
      ]
   }
}

module.exports = config;
