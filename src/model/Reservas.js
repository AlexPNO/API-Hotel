
class Reserva{
    constructor(nome,dia_entrada,dia_saida,num_quarto,num_pessoas,status_pagamento){
    this.nome=nome
    this.dia_entrada=dia_entrada
    this.dia_saida=dia_saida
    this.num_quarto=num_quarto
    this.num_pessoas=num_pessoas
    this.status_pagamento=this.validaStatus(status_pagamento)
    }



    validaEntrada(){

    }

    validaSaida(){

    }

    validaStatus(status_pagamento){
        const valida=['a fazer','feito']
        if(valida.indexOf(status_pagamento>-1)){
            return status_pagamento
        }
        else{
            throw new Error("O status dever ser igual a: a fazer ou feito")
        }
        
    }


}

module.exports = Reserva

