

## Introdução

O projeto visa solucionar de forma rápida e simples os desafios propostos. 

O projeto pussue 8 endpoints, 7 que já haviam sido implementados e um 8º que adicionei para autenticação.  São elas:

| **Método** | **Rota**      | **Autenticado** | **Função**  
|------------|---------------|-----------------|------------------------------------------------|
| GET        | /user         | Não             | procura por um usuário                         |
| GET        | /users        | Não             | retorna todos usuários                         |
| POST       | /users        | Não             | cria um usuário                                |
| DELETE     | /users/:id    | Sim             | apaga um usuário                               |
| PUT        | /users/:id    | Sim             | altera um usuário                              |     
| GET        | /users/access | Não             | verifica quantas vezes o usuário foi procurado |
| GET        | /             | Não             | retorna todas as rotas                         |
| POST       | /login        | Não             | faz o login na aplicação                       |
|            |               |                 |                                                |


Para autenticar na aplicação é necessário informar o nome completo, da mesma forma que está escrito no "banco de dados", será gerado uma string base64 contendo o nomeDoUsuario:jobDoUsuario. Essa string precisa ir no header das requisições do teste3 e 4, na propriedade "authorization". 


