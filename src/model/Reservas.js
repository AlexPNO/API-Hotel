var id=0;

class Reserva{
    constructor(nome,dia_entrada,dia_saida,num_quarto,num_pessoas,pagamento){
    this.id=id++
    this.nome=nome
    this.dia_entrada=dia_entrada
    this.dia_saida=dia_saida
    this.num_quarto=num_quarto
    this.num_pessoas=num_pessoas
    this.status_pagamento=this.validaStatus
    }



    validaEntrada(){

    }

    validaSaida(){

    }

    validaStatus(status){
        const valida=['a fazer','feito']
        if(valida.indexOf(status>-1)){
            return status
        }
        else{
            throw new Error("O status dever ser igual a: a fazer ou feito")
        }
        
    }


}