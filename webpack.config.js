//? arquivo onde manterá todas as configurações da nossa aplicação
//? variavel path utilizada para criar um path relativo ao SO
const path = require("path");

module.exports = {
    mode: 'development',
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  //?tipos de arquivos que poderá ler
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  //? configurações quando importar cada tipo de arquivo
  module: {
    //?regras
    rules: [{
        //?regex para dizer se é javascript ou não
        test: /\.jsx$/,
        //?excluir arquivos da node_modules
        exclude: /node_modules/,
        //? converter o arquivo jsx para o browser
        use: 'babel-loader',
      }],
  }
};
