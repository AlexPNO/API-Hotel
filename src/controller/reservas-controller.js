
const Reserva = require('../model/Reservas')
const ReservasDAO = require('../DAO/ReservasDAO')



const reservas=(app,bd)=>{
    const novaReservaDAO = new ReservasDAO(bd)
    app.get('/reservas',async (req,res)=>{
        try{ 
            const resp = await novaReservaDAO.AllReservas()
            res.json(resp)
            
            
        } catch(error){
            res.json(error.message)
        }
    })



       

    app.post('/reservas', async (req,res)=>{
        try{ 
            console.log("testando 1")
        const body = req.body
        const novaReserva = new Reserva(body.nome,body.data_de_entrada,body.data_de_saida,body.num_quarto,body.num_pessoas,body.status_pagamento)
        console.log(novaReserva)
        const resp = await novaReservaDAO.insereReserva(novaReserva)
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
            res.status(404).json(error.message)
        }
    })



    app.delete('/reservas/:id', async (req,res)=>{
        const id = req.paramns.id
        
        try{
            const response = await novaReservaDAO.deletaReserva(id)
            res.json(response)

        }catch (error){
            res.status(404).json({
                "mensagem":error.message,
                "erro":true
            })
        }



    })


    app.patch('/reservas/:id', async (req,res)=>{
        const id = parseInt(req.paramns.id)
        const body = req.body

        try{
            const reservahttp = novaReservaDAO.buscaReservaId(id)
            const reservaalvo = reservahttp.requisicao[0]

            if(reservaalvo){
                const reservaatualizada = new Reserva(

                )
            }
         

        }catch (error){
            res.status(404).json({
                "mensagem":error.message,
                "erro":true
            })
        }
    })

}

module.exports = reservas