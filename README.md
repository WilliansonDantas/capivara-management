# <img height="20" src="https://raw.githubusercontent.com/innng/innng/master/assets/soulgem-sayaka.gif"/> Capivara Management

API para catalogação eficiente de informações sobre as capivaras.

## <img height="20" src="https://raw.githubusercontent.com/innng/innng/master/assets/soulgem-sayaka.gif"/> Tecnologias

- **Typescript**
- **Node.js**
- **NestJS**
- **MySQL**
- **TypeORM**
- **Git para Versionamento**

## <img height="20" src="https://raw.githubusercontent.com/innng/innng/master/assets/soulgem-sayaka.gif"/> Como Rodar

### Pré-requisitos

- Docker
- Docker Compose
- Git

### Passos

1. Clone o repositório:
    ```bash
   git@github.com:WilliansonDantas/capivara-management.git
    ```

2. Navegue para o diretório do projeto:
    ```bash
    cd capivara-management
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Configure as variáveis de ambiente:
    - Crie um arquivo `.env` na raiz com as seguintes variáveis:
        ```
        DATABASE_TYPE=mysql
        DATABASE_HOST=localhost
        DATABASE_PORT=3306
        DATABASE_USERNAME=seu_usuario
        DATABASE_PASSWORD=sua_senha
        DATABASE_NAME=capivara_management
        ```

5. Suba os contêineres com Docker Compose:
    ```bash
    docker-compose up --build -d
    ```

6. Inicie a aplicação:
    ```bash
    npm run start:dev
    ```

## <img height="20" src="https://raw.githubusercontent.com/innng/innng/master/assets/soulgem-sayaka.gif"/> Acesse a documentação da API via Swagger em [http://localhost:3000/api](http://localhost:3000/api)
