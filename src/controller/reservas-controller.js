
const Reserva = require('../model/Reservas')
const ReservasDAO = require('../DAO/ReservasDAO')



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
        const novaReserva = new Reserva(body.nome,body.dia_entrada,body.dia_saida,body.num_quarto,body.num_pessoas,body.pagamento)

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
            res.status(404).json(error)
        }
    })



    app.delete('/reservas/:id', async (req,res)=>{
        const id = parseInt(req.paramns.id)
        try{
            const res = await novaReservaDAO.deletaReserva(id)
            res.json(resp)

        }catch (error){
            res.status(404).json({
                "mensagem":error.message,
                "erro":true
            })
        }



    })


    app.patch('/reservas/:id', async (req,res)=>{
        const id = parseInt(req.paramns.id)
        try{
            const res = await novaReservaDAO.atualizaReserva(id,novaReserva)
            res.json(resp)

        }catch (error){
            res.status(404).json({
                "mensagem":error.message,
                "erro":true
            })
        }
    })

}

module.exports = reservas