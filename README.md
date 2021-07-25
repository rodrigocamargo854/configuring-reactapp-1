# Configurando uma aplicação react sem utilizar o create-react-app

ESte repositório contêm a configuração passo a passo de uma aplicação react sem utilizar o o pacote create-react-app.


## 🚀 Começando

Antes de prosseguir na leitura desse artigo, é necessário que a versão 10.x ou superior do NodeJS esteja instalada em sua máquina. Caso não tenha NodeJS instalado, acesse o link abaixo e faça download do instalador.

### [Node.js](https://nodejs.org/en/)

### [Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine.](https://nodejs.org/en/)

[nodejs.org](https://nodejs.org/en/)

Assim que o NodeJS for instalado, o Node Package Manager (npm) também deverá estar disponível em sua máquina. Para verificar se instalação foi bem sucedida, execute os seguintes comandos no CMD ou Terminal:

```
node --version
npm --version
```
Crie um diretorio com o nome que desejar, criarei um diretório chamado meuApp

![https://cdn-images-1.medium.com/max/800/1*K2YxWClaABNu3AQT7iSEgg.png](https://cdn-images-1.medium.com/max/800/1*K2YxWClaABNu3AQT7iSEgg.png)

Após a criação do diretório, digite ***code .*** para abrir o vscode dentro deste diretório.

Utilizar o comando ***yarn init -y*** para criação do arquivo **package.json3**

Utilizaremos o comando ***yarn*** para carregar todos os modulos do node (node_modules).

Para isso digite *yarn* e aguarde a instalação.

Caso o comando yarn não seja reconhecido, instale com o comando

***npm install -g yarn***

![https://cdn-images-1.medium.com/max/800/1*yOvq1cSuQbpN3IFUMEcQ6A.png](https://cdn-images-1.medium.com/max/800/1*yOvq1cSuQbpN3IFUMEcQ6A.png)

![https://cdn-images-1.medium.com/max/800/1*PupVI_3qyoL-Zn9T1RRRhg.png](https://cdn-images-1.medium.com/max/800/1*PupVI_3qyoL-Zn9T1RRRhg.png)

Utilizararemos o comando ***yarn add react-dom***

para a comunicação com a árvore de elementos.

Criaremos dois diretórios, um diretório **src** e outro **public**.

![https://cdn-images-1.medium.com/max/800/1*meu7MThdHVwx657HsO_h8g.png](https://cdn-images-1.medium.com/max/800/1*meu7MThdHVwx657HsO_h8g.png)

Dentro do diretório **public** criaremos um arquivo *index.html*

Podemos digitar html para criarmos a estrutura inicial da página

![https://cdn-images-1.medium.com/max/800/1*ztDXPV7y9R-T8FIsPWlqAg.png](https://cdn-images-1.medium.com/max/800/1*ztDXPV7y9R-T8FIsPWlqAg.png)

Dentro da estrutura do index.html , inserir

<div *id*=’root’></div>

![https://cdn-images-1.medium.com/max/800/1*bDXDxtAvFfOoCAsd3COHcA.png](https://cdn-images-1.medium.com/max/800/1*bDXDxtAvFfOoCAsd3COHcA.png)

Essa div será referência no index.jsx dentro da pasta src do projeto.

Dentro da pasta src, criaremos dois arquivos jsx

![https://cdn-images-1.medium.com/max/1200/1*nE_C_k55KKs2mCzEDz_07Q.png](https://cdn-images-1.medium.com/max/1200/1*nE_C_k55KKs2mCzEDz_07Q.png)

**App.jsx**

![https://cdn-images-1.medium.com/max/1200/1*spxlzKwWsgOQ7WLV85tO0g.png](https://cdn-images-1.medium.com/max/1200/1*spxlzKwWsgOQ7WLV85tO0g.png)

**index.jsx**

![https://cdn-images-1.medium.com/max/800/1*sGUveIRoa3zZ8Y26hf5PNA.png](https://cdn-images-1.medium.com/max/800/1*sGUveIRoa3zZ8Y26hf5PNA.png)

Agora instaremos alguns pacotes necessários para a configuração do ambiente.

### **BABEL**

O Babel auxiliará a conversão do nosso código para que todo ambiente da aplicação entenda

instalação:

Instalaremos o babl/core, babel/cli, babel/preset-env , lembrando que todos estes pacotes serão instalados no ambiente de desenvolvimento.

Para isso utilizaremos o comando

***yarn add [@babel/core](http://twitter.com/babel/core) [@babel/cli](http://twitter.com/babel/cli) [@babel/preset-env](http://twitter.com/babel/preset-env) -D***

Criar o arquivo

**babel.config.js**

Dentro do arquivo inserir a configuração

![https://cdn-images-1.medium.com/max/800/1*FKTRwZlJu6Nhe3vlV0510Q.png](https://cdn-images-1.medium.com/max/800/1*FKTRwZlJu6Nhe3vlV0510Q.png)

Renomear o arquivo index.jsx para index.js e executar o comando

***yarn babel src/index.js — out-file dist/bundle.js***

Com isso será criado um diretório dist, dentro deste diretório será criado a conversão do arquivo js.

Para que possamos converter diretamente arquivos jsx, utilizaremos o comando

***yarn add [@babel/preset-react](http://twitter.com/babel/preset-react) -D***

Mudar op comando de conversão para

yarn babel src/index.**jsx** — out-file dist/bundle.js

### **Configuração do WEBPACK**

Criar arquivo webpack.config.js

![https://cdn-images-1.medium.com/max/800/1*o8af5UnIwqBS6bCNeKI8aw.png](https://cdn-images-1.medium.com/max/800/1*o8af5UnIwqBS6bCNeKI8aw.png)

Este arquivo deve ter o seguinte conteudo

![https://cdn-images-1.medium.com/max/800/1*HeHP31_KVQx-Ux0qStnMUg.png](https://cdn-images-1.medium.com/max/800/1*HeHP31_KVQx-Ux0qStnMUg.png)

Dentro do arquivo index.jsx importar a função render

![https://cdn-images-1.medium.com/max/800/1*5hcOr_ZUbzm7HJFVU7Jo8g.png](https://cdn-images-1.medium.com/max/800/1*5hcOr_ZUbzm7HJFVU7Jo8g.png)

No index.thml na pasta public inserir a tag de script

![https://cdn-images-1.medium.com/max/800/1*uq8hwZ1i39RRveGZFk7stQ.png](https://cdn-images-1.medium.com/max/800/1*uq8hwZ1i39RRveGZFk7stQ.png)

Rodar o comando yarn webpack

## 🛠️ Construído com

* [Visual Studio Code](https://code.visualstudio.com/download) - IDE

## 📌 Versão

1.0.0 Beta

## 📄 Licença
