
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
        const id = req.params.id     
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
        
        const id = parseInt(req.params.id)
        
        const body = req.body

        try{
            const reservahttp = await novaReservaDAO.buscaReservaId(id)
            console.log(reservahttp.busca.ID)
            // const reservaalvo = reservahttp.busca.ID
            if(id){
                
                const resposta = await novaReservaDAO.atualizaReserva(id,reservahttp)
                res.json(resposta)     

            } else {
                res.json({
                    "mensagem": `Usuário com id "${id}" não existe`,
                    "error" : true
                })
            

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