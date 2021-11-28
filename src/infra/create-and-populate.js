/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'database.db')
const db = new sqlite3.Database(caminhoArq);

//==== Reservas
const RESERVAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "RESERVAS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "DATA_DE_ENTRADA" varchar(64),
    "DATA_DE_SAIDA" varchar(64),
    "QUARTO" integer,
    "NUMERO_PESSOAS" integer,
    "STATUS_PAGAMENTO" varchar(32) 

  );`;

const ADD_RESERVAS_DATA = `
INSERT INTO RESERVAS (ID, NOME, DATA_DE_ENTRADA, DATA_DE_SAIDA, QUARTO, NUMERO_PESSOAS, STATUS_PAGAMENTO)
VALUES 
    (1, 'Eugênio Oliveira', '30/02/2022', '02/03/2022',1,2,'feito'),
    (2, 'Olívia Ribeiro', '29/12/2021', '02/01/2022',4,5,'a fazer'),
    (3, 'Mirtes Faria Lima', '30/12/2021', '03/01/2022',2,10, 'feito')
`

function criaTabelaRes() {
    db.run(RESERVAS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de reservas"+ error);
    });
}


function populaTabelaRes() {
    db.run(ADD_RESERVAS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de reservas"+ error);
    });
}


db.serialize( ()=> {
    criaTabelaRes();
    populaTabelaRes();
    
});