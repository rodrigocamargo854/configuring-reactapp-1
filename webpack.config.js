//? arquivo onde manterá todas as configurações da nossa aplicação
//? variavel path utilizada para criar um path relativo ao SO
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== 'production';


module.exports = {
  mode: "development",
  devtool: 'eval-source-map',
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  //?tipos de arquivos que poderá ler
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public", "index.html"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],

  //? configurações quando importar cada tipo de arquivo
  module: {
    //?regras
    rules: [
      {
        //?regex para dizer se é javascript ou não
        test: /\.jsx$/,
        //?excluir arquivos da node_modules
        exclude: /node_modules/,
        //? converter o arquivo jsx para o browser
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ],
  },
};
