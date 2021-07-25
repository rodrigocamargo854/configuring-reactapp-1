# Olimpo

Está aplicação tem como objetivo efetuar a leitura dos e-mails provenientes de um sistema externo por meio do Microsoft Graph.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Você deve ter o SDK do .NET Core instalado em seu computador de desenvolvimento. 

Você também deve ter uma conta pessoal da Microsoft com uma caixa de correio Outlook.com.

### 🔧 Instalação

## Azure Active Directory
Registrar o aplicativo no portal: https://aad.portal.azure.com
Você criará um novo aplicativo do Azure AD usando o centro de administração do Azure Active Directory.

Abra um navegador, navegue até o centro de administração do Azure Active Directory e faça logon usando uma conta pessoal (também conhecida como conta da Microsoft) ou Conta Corporativa.

Selecione Azure Active Directory na navegação esquerda e selecione Registros de aplicativos em Gerenciar.
Selecione Novo registro. Na página Registrar um aplicativo, defina os valores da seguinte forma.

Defina Tipos de conta com suporte para Contas em qualquer diretório organizacional e contas pessoais da Microsoft.
Em URI de redirecionamento, altere o menu suspenso para cliente público (Desktop & móvel) e defina https://login.microsoftonline.com/common/oauth2/nativecliento valor como.

Inicialize o repositório de segredo de desenvolvimento do .net abrindo sua CLI no diretório que contém GraphConsumer.csproj e executando o comando a seguir.

```dotnet restore```
```dotnet run```

## ⚙️ Executando os testes

Abrir pasta AmbevTech.Olimpo.UnitTests no terminal e exucutar o comando a seguir.

```dotnet test```

## 💻 Tecnologias Utilizadas

<img alt="C#" src="https://img.shields.io/badge/c%23%20-%23239120.svg?&style=for-the-badge&logo=c-sharp&logoColor=white&style=Plastic"/>


## 🛠️ Construído com

* [Visual Studio Code](https://code.visualstudio.com/download) - IDE

## 📌 Versão

1.0.0 Beta

## 📄 Licença

Este projeto está sob a licença da AmbevTech.