const HtmlWebpackPlugin = require("html-webpack-plugin");

const rulesForStyles = {
  test: /\.(css|scss)$/,
  use:['style-loader','css-loader']
}

const rulesForImages = {
  type: "asset/resource",
  test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
  use: [{
    loader: 'image-webpack-loader',
    options: {
      mozjpeg: {
        progressive: true,
        },
        // optipng.enabled: false will disable optipng
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: [0.65, 0.90],
          speed: 4
        },
        gifsicle: {
          interlaced: false,
        },
        // the webp option will enable WEBP
        webp: {
          quality: 75
        }
      }
    }
  ]
}

const rules = [rulesForStyles,rulesForImages]

module.exports = {
    //...
    entry: {
      Inicio: './src/App/Components/Inicio.js',
      Mono: './src/App/Components/Mono.js',
      Leon: './src/App/Components/Leon.js',
    },
    plugins: [
      new HtmlWebpackPlugin({filename: "./Inicio.html",template: './Inicio.html', chunks: ['Inicio']}),
      new HtmlWebpackPlugin({filename: "./Leon.html",template: './src/App/Components/Leon.html',chunks: ['Leon']}),
      new HtmlWebpackPlugin({filename: "./Mono.html",template: './src/App/Components/Mono.html',chunks: ['Mono']}),
    ],
    module: {rules},
    mode: "production",
  };