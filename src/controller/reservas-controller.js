const Reservas = require('../model/Reservas')
const ReservasDAO = require('../DAO/ReservasDAO')
const Reserva = require('../model/Reservas')


const reservas=(app,bd)=>{
    const novaReservaDAO = new ReservasDAO(bd)
    app.get('/reservas',async (req,res)=>{
        try{ 
            const resp = await novaReservaDAO.AllReservas()
            res.json(resp)
            
            
        } catch(error){
            res.json(error)
        }
    })



       

    app.post('/reservas', async (req,res)=>{
        try{ 
        const body = req.body
        const novaReserva = new Reserva(body.nome,body.dia_entrada,body.dia_entrada,body.num_quarto,body.num_pessoas,body.status_pagamento)

        const resp = await novaReservaDAO.InsereReserva(novaReserva)
        res.json(resp)


        }
        catch(error){
            res.json({
                "mensagem":error.message,
                "erro":true
            })

        }
    })

    app.get('/reservas/:id',async (req,res)=>{
        const id =req.params.id
        try{
            const resp = await novaReservaDAO.buscaReservaId(id)
            res.json(resp)
        } catch(error){
            res.status(404).json(error)
        }
    })



    app.delete('/reservas/:id', async (req,res)=>{
        const id = parseInt(req.paramns.id)
        try{
            const res = await novaReservaDAO.deletaReserva(id)

        }



    })


    app.patch('/reservas',(req,res)=>{

    })

}

module.exports = reservas