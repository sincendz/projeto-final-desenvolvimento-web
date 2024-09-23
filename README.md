# :checkered_flag: Coffeeshop ☕


Uma loja de venda de cafés e equipamentos para a produção de café.

## :technologist: Membros da equipe

542056 - Mário Martins Aragão - Ciência da Computação

## :people_holding_hands: Papéis ou tipos de usuário da aplicação

- Administrador
- Usuário registrado
- Usuário não registrado

## :spiral_calendar: Entidades ou tabelas do sistema

- Produto
- Pedido
- Usuário

## :triangular_flag_on_post:	 Principais funcionalidades da aplicação

- Administrador : Poderá adicionar,atualizar e remover produtos do catalogo.
- Usuário registrado: Poderá visualizar os produtos e adicionar ao carrinho.
- Usuário nao registrado: Poderá visualizar os produtos.


----

:warning::warning::warning: As informações a seguir devem ser enviadas juntamente com a versão final do projeto. :warning::warning::warning:


----

# Rodando o projeto em linux.

# Instalação do Node.js (Versão 20) no Debian

É necessário ter o Node.js na versão 20 para rodar (requerido: { node: '>=18.0.0 <=20.x.x', npm: '>=6.0.0' }). A distribuição que eu uso é Debian, então o passo a passo para instalar é o seguinte:


1. instala a fnm (Fast Node Manager, ou Gestor Rápido de Node)
   ```bash
     curl -fsSL https://fnm.vercel.app/install | bash
3. ativar a fnm
    ```bash
     source ~/.bashrc

5. decarregar e instalar a Node.js
     ```bash
     fnm use --install-if-missing 20

7. verifica se a versão correta da Node.js está no ambiente
   ```bash
     node -v # deve imprimir `v20.17.0`

9. verifica se a versão correta da npm está no ambiente
   ```bash
     npm -v # deve imprimir `10.8.2`


## Apos a instalação 


# Rodando o Front-end
1. Entre na pasta /front-end e execute os seguintes comandos:

2. npm install
     ```bash
     npm install

3. npm run dev
      ```bash
      npm run dev


# Rodando o Back-end
1. Entre na pasta /back-end e execute os seguintes comandos:

2. npm install
     ```bash
     npm install

4. npm run develop
      ```bash
      npm run develop

# Usuario Admin
Login : bruno@ufc.br
senha: bruno@ufc.br

Como eu já tenho o Node.js 22 instalado, precisamos mudar a versão.

## Passos

1. **Instalar o NVM**: Se você ainda não tiver o NVM instalado, execute o seguinte comando (certifique-se de que o `curl` está instalado):
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
2. Feche o terminal e abra novamente.

3. Listar versões disponíveis do Node.js: Para ver as versões disponíveis, você pode usar:
   ```bash
     nvm ls-remote
4. Instalar a versão desejada (por exemplo, 20.x): Para instalar a versão 20, execute:
    ```bash
        nvm install 20

5. Usar a versão instalada: Para usar a versão instalada, execute:
    ```bash
      nvm use 20
6. Verificar a versão ativa: Você pode verificar se a versão foi mudada com:
    ```bash
      node -v


# Problemas no Back-end que eu encarei

Problema 1: Permissão negada ao rodar o Strapi

    ```bash
    mario@debian:~/Área de trabalho/projeto-final-desenvolvimento-web/back-end$ npm run develop
    > back-end@0.1.0 develop
    > strapi develop
    sh: 1: strapi: Permission denied
Solução:

    ```bash
    chmod +x node_modules/.bin/strapi
(Faz com que o Strapi execute com as máximas permissões)

Problema 2: Erro ao carregar o arquivo de configuração do Strapi

    ```bash
      Error: Could not load js config file /home/mario/Área de trabalho/projeto-final-desenvolvimento-web/back-end/node_modules/@strapi/plugin-upload/strapi-server.js:
      Something went wrong installing the "sharp" module
      
Solução:

    ```bash
    rm -rf node_modules
    npm install

   Após isso, no meu sistema Debian GNU/Linux 12, eu consegui rodar.



Esse é o passo a passo completo para configurar o Node.js 20 no Debian e solucionar possíveis problemas ao rodar o Strapi.



#Já sem problemas, dentro da pasta do backend, rode os seguinte comando:

    ```bash
        npm run develop





# Tecnologias Utilizadas

## Frontend

- HTML
- CSS
- TypeScript (TS)
- Vue 3
- Pinia
- Axios
- Bootstrap

## Backend

- Strapi



## :shipit: Operações implementadas para cada entidade da aplicação


| Entidade| Criação | Leitura | Atualização | Remoção |
| --- | --- | --- | --- | --- |
| Usuário| X |    |  |  |
| Pedido | X |  X  |  X | X |
| Carrinho | X |  X  | X | X |

> Lembre-se que é necessário implementar o CRUD de pelo menos duas entidades.

## :neckbeard: Rotas da API REST utilizadas

| Método HTTP | URL |
| --- | --- |
| GET | api/cafes/|
| POST | api/cafes |
|PUT|  api/cafes/id
| DELETE| api/cafes/id
| GET | api/users/|
| POST | api/auth/local/register |
|PUT|  api/users/id
| DELETE| api/cafes/id
| GET | api/pedidos/|
| POST | api/pedidos |
|PUT|  api/pedidos/id
| DELETE| api/pedidos/id

