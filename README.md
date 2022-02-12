# Next Soft

Teste de projeto simples para CRUD

## Iniciar o projeto

Vá até a pasta api-next-soft dentro dela rode o comando
```bash
npm install
```
depois rode o comando

```bash
npm i -g nodemon
```
e rode a gora o servidor

```bash
nodemon server.js
```
mas lembre já de ter importado o arquivo SQL para o seu banco de dados para  não ter erro, dentro da pasta api-next-soft o arquivo RegistroController.js ele tera todas as configurações do servidor:

```bash
const connection = mysqlServer.createPool({
    connectionLimit : 10,
    host:'localhost',
    user: 'root',
    password: '',
    database: 'next_soft',
    port: 3306
})
```

## Usando

![projeto](https://i.imgur.com/WdO4GxL.png)

Coloque o arquivo da pasta netxsoft em algum servidor apache para rodar o arquivo sem nenhum problema e acesse o seu endereço local para usar no meu caso usei o WampServer para criar um servidor local e no meu endereço local usei a seguinte url para acesso ao site do projeto: **http://127.0.0.1/netxsoft**

A **api** ficou com a seguinte estrutura:

```bash
POST    'http//localhost:3333/usuario' 
PUT     'http//localhost:3333/usuario/:id' 
DELETE  'http//localhost:3333/usuario/:id' 
GET     'http//localhost:3333/usuarios' 
GET     'http//localhost:3333/usuario/:id' 
```



## Premissa
Construa uma aplicação web para cadastrar clientes com os seguintes dados:
- CPF
- Nome 
- E-mail
- Telefone
- Endereço
- Logradouro
- Número
- Complemento
- Bairro
- Cidade
- Estado

O cliente pode cadastrar mais de um endereço definindo o “Tipo”. Exemplos de tipo de endereço: Entrega, Cobrança, Geral... 

Utilizando a estrutura de dados acima, construa uma API para cadastrar e consultar todos os dados cadastrais deste cliente

Utilizando a API acima, construa uma aplicação Windows que ao digitar o CPF do cliente ela exiba todos os dados dele e permita cadastrar, editar e excluir um cliente cadastrado. 


## License
[MIT](https://choosealicense.com/licenses/mit/)