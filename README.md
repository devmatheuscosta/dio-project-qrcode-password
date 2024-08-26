# Projeto NodeJS - Ferramentas: Gerador de QR Code e Senha

Este projeto é uma aplicação Node.js que oferece duas funcionalidades principais: geração de QR Code e criação de senhas seguras. O usuário pode interagir com a aplicação pelo terminal para escolher a ferramenta desejada e fornecer as informações necessárias.

## Funcionalidades

1. **Gerador de QR Code**: Permite gerar um QR Code a partir de um link fornecido pelo usuário. O QR Code pode ser exibido em formato normal ou no terminal.
2. **Gerador de Senha**: Gera uma senha segura com base nas opções configuradas no arquivo `.env`.

## Estrutura do Projeto

- **`src/index.js`**: Arquivo principal que inicializa a aplicação e gerencia a escolha da ferramenta.
- **`prompts-schema/`**: Contém os esquemas de perguntas (prompts) para interação com o usuário.
  - **`prompt-schema-main.js`**: Schema para escolher entre o gerador de QR Code e o gerador de senha.
  - **`prompt-schema-qrcode.js`**: Schema para gerar QR Code.
- **`services/`**: Contém a lógica de criação de QR Code e senhas.
  - **`create.js`**: Função que gerencia a interação com o usuário e direciona para a função apropriada.
  - **`createQRCode.js`**: Função que gera QR Code com base no link fornecido.
  - **`handle.js`**: Função que processa a geração do QR Code e exibe o resultado.
  - **`password/create.js`**: Função que gera a senha com base nas opções configuradas.
  - **`password/handle.js`**: Função que lida com a geração da senha.
  - **`password/utils/permitted-characters.js`**: Função que define os caracteres permitidos para a senha.

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- NPM

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/devmatheuscosta/dio-project-qrcode-password.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd nome-do-projeto
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente criando um arquivo `.env` na raiz do projeto:

   ```bash
   # Exemplo de .env

   # Configurações para o Gerador de Senha
   PASSWORD_LENGTH=12
   UPPERCASE_LETTERS=true
   LOWERCASE_LETTERS=true
   NUMBERS=true
   SPECIAL_CHARACTERS=true
   ```

5. Execute o projeto:

   ```bash
   npm run start:dev
   ```

6. Escolha uma das opções no terminal:
   - 1: Gerar QR Code
   - 2: Gerar Senha

## Scripts Disponíveis

- **`start:dev`**: Executa o projeto em modo de desenvolvimento.
- **`start:watch`**: Executa o projeto com monitoramento de arquivos.

## Como Funciona

- **Gerar QR Code**:

  - O usuário é solicitado a fornecer um link e escolher o tipo de QR Code (normal ou terminal).
  - O QR Code é gerado e exibido no terminal.

- **Gerar Senha**:
  - A senha é gerada com base nas opções definidas no arquivo `.env` e exibida no terminal.

## Tecnologias Utilizadas

- **Node.js**: Plataforma utilizada para execução do JavaScript no lado do servidor.
- **chalk**: Biblioteca para estilizar a saída do terminal.
- **prompt**: Biblioteca para capturar entradas do usuário no terminal.
- **qrcode-terminal**: Biblioteca utilizada para gerar e exibir QR Codes no terminal.

## Contribuidores

- **Autor:** Matheus Costa

## Licença

Este projeto está licenciado sob os termos da licença ISC.
