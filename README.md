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

