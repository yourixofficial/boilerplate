const path = require('path');

module.exports = {
  entry: ['./src/js/script.js', './src/scss/main.scss'],
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname),
  },
  module: {
    rules: [
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
              {
                loader: "file-loader",
                options: { 
                    sassOptions: {
                        outputStyle: "compressed",
                    },  
                    outputPath: "./", 
                    name: "style.css" },
              },
              {
                loader: "sass-loader",
                options: {
                    implementation: require.resolve("sass"),
                    sassOptions: {
                        outputStyle: "compressed",
                    },    
                },
              },
            ],
        },
    ],
  },
  mode: 'development'
};