# Front-end Web

## Requisitos

Para criar uma aplicação, é necessário instalar o NodeJS.

- Acesse o site do NodeJS e faça o download da versão LTS mais atualizada e que corresponda ao seu sistema operacional. [Baixe clicando aqui](https://nodejs.org/en/download/).

- Faça a instalação do software seguindo as opções padrão. Caso você esteja no Windows, o software npm (node package manager) também será instalado.

Para facilitar a formatação do script, você pode utilizar a extensão _Prettier - Code formatted_ (Extension ID: esbenp.prettier-vscode).

> Para habilitar essa extensão, você deve acessar **File** >> **Preferences** >> **Settings**. No campo de busca (search settings), busque por _format_. Em **Editor: Default Formatter**, selecione a opção _Prettier - Code formatted (esbenp.prettier-vscode)_ e habilite a opção **Editor: Format on Save**.

## Iniciando um novo projeto

No _terminal_ do Visual Studio Code, selecione uma pasta onde será salvo o arquivos do projeto.

```
cd C:/Ariana/Documentos/Projetos
```

Ou então abra a pasta desejada e clique em **Arquivo** > **Abrir o Windows PowerShell** (como administrador).

Uma vez selecionado o diretório de trabalho da aplicação, digitar no _terminal_ ou no _PowerShell_

```
npx create-react-app nome_da_aplicacao
```

Para testar a aplicação, digite o comando

```
cd nome_da_aplicacao
```

Após isso, digite

```
npm start
```

para rodar o site localmente.

## Selecionando os arquivos necessários para a aplicação

No Visual Studio Code, abra a pasta onde foi criado o projeto.

> **File** >> **Open Folder**

Na pasta **src**, deixe apenas os arquivos **index.css** e **index.js**. Observe que será o arquivo **index.js** onde implementaremos nossa aplicação.

## 

```
npm start
```
## Instalando a dependência para alternar entre rotas 

````
npm i react-router-dom
````

# Integrando front-end e back-end

## Instalar Thunder Client ⚡️

`Extensions > Thunder Client > New Request` 

No `GET`, digitar `localhost3000` e clicar em `Send`.
