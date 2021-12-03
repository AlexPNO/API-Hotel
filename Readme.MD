## Hotel API

### Link da API no HEROKU:
https://apireservas.herokuapp.com/

### Bibliotecas utilizadas:
* [Nodemon](https://nodemon.io/) - recarregamento automático durante desenvolvimento.
* [Supertest](https://github.com/visionmedia/supertest#readme) - para testar as rotas.


### Banco de dados
[Sqlite3](https://www.npmjs.com/package/sqlite3).
---

## Iniciando o projeto
Abra o terminal (Linux/Mac) ou o PowerShell (Windows) e siga os passos abaixo.
* Clone o repositório em sua máquina

    `git clone git@github.com:ALexPNO/API-Hotel.git`

* Acesse a pasta criada 

    `cd API-Hotel`

* Instale os pacotes

    `npm install`

* Para iniciar os projetos use o comando abaixo

    `npm run start`

    A porta padrão é a __3000__.

---

## Estrutura da API
HTTP: GET, POST, PATCH e DELETE.

### **Resumo das rotas**
Segue abaixo um resumo das rotas da API. Em seguida terão mais informações sobre cada uma delas.

* GET: *URL_BASE/reservas*
* GET: *URL_BASE/reservas/{id}*
* POST: *URL_BASE/reservas*
* PATCH: *URL_BASE/reservas/{id}*
* DELETE: *URL_BASE/reservas/{id}*


### **Retornando as reservas**

GET: *URL_BASE/reservas*

RESPOSTA

~~~JSON
  {
  
  "reservas": [
    {
      "ID": 1,
      "NOME": "Eugênio Oliveira",
      "DATA_DE_ENTRADA": "30/02/2022",
      "DATA_DE_SAIDA": "02/03/2022",
      "QUARTO": 1,
      "NUMERO_PESSOAS": 2,
      "STATUS_PAGAMENTO": "feito"
    },
    {
      "ID": 2,
      "NOME": "Olívia Ribeiro",
      "DATA_DE_ENTRADA": "29/12/2021",
      "DATA_DE_SAIDA": "02/01/2022",
      "QUARTO": 4,
      "NUMERO_PESSOAS": 5,
      "STATUS_PAGAMENTO": "a fazer"
    },
    {
      "ID": 3,
      "NOME": "Mirtes Faria Lima",
      "DATA_DE_ENTRADA": "30/12/2021",
      "DATA_DE_SAIDA": "03/01/2022",
      "QUARTO": 2,
      "NUMERO_PESSOAS": 10,
      "STATUS_PAGAMENTO": "feito"
    }
  ],
  "linhas": 3,
  "erro": false
}
~~~

GET: *URL_BASE/reservas/{id}*

Resposta para id = 1:
~~~JSON
 {
  "busca": {
    "ID": 1,
    "NOME": "Eugênio Oliveira",
    "DATA_DE_ENTRADA": "30/02/2022",
    "DATA_DE_SAIDA": "02/03/2022",
    "QUARTO": 1,
    "NUMERO_PESSOAS": 2,
    "STATUS_PAGAMENTO": "feito"
  },
  "erro": false
}
~~~

### **Inserindo nova fatura**

POST: *URL_BASE/reservas*

~~~JSON
{

	"nome":"Marjani Satrapi",
	"data_de_entrada":"10/01/2022",
	"data_de_saida":"30/01/2022",
	"num_quarto":7,
	"num_pessoas":1,
	"status_pagamento":"feito"
  
}
~~~
 
 Resposta:
 ~~~JSON
 {
  "nova entrada": {
    "nome": "Marjani Satrapi",
    "dia_entrada": "10/01/2022",
    "dia_saida": "30/01/2022",
    "num_quarto": 7,
    "num_pessoas": 1,
    "status_pagamento": "feito"
  },
  "id": 15,
  "error": false
}
~~~

### **Atualizando reserva**

PUT: *URL_BASE/reservas/{id}*

Modelo a ser utilizado no body, no formato JSON. **Não é obrigatório** conter todos atributos:

~~~JSON
{
  "busca": {
    "ID": 8,
    "NOME": "Alexandre",
    "DATA_DE_ENTRADA": "29/08/2021",
    "DATA_DE_SAIDA": "30/08/2021",
    "QUARTO": 2,
    "NUMERO_PESSOAS": 3,
    "STATUS_PAGAMENTO": "a fazer"
  },
  "erro": false
}
~~~
Resposta:
 ~~~JSON
{
  "mensagem": "Reserva com id 8 atualizado",
  "erro": false
} 
~~~

### **Deletando reserva**

DELETE: *URL_BASE/reservas/{id}*

Resposta:
~~~JSON

{
  "busca": {
    "ID": 9,
    "NOME": "Alexandre",
    "DATA_DE_ENTRADA": "29/08/2021",
    "DATA_DE_SAIDA": "30/08/2021",
    "QUARTO": 2,
    "NUMERO_PESSOAS": 3,
    "STATUS_PAGAMENTO": "a fazer"
  },
  "erro": false
}
~~~
Resposta:

 ~~~JSON
{
  "mensagem": "Reserva com id: 9 foi excluido",
  "erro": false
}
~~~

---

