
const reservas=(app,bd)=>{
    app.get('/reservas',(req,res)=>{
        res.json({
            'nome':'Galo',
            'vulgo':'Atletico-MG'
            
            
        })
    })

    app.post('/reservas',(req,res)=>{
        try{ res.send('Galo forte e vingador')

        }
        catch{
            throw new Error('Teste de erro')

        }
    })

    app.delete('/reservas',(req,res)=>{



    })


    app.put('/reservas',(req,res)=>{

    })

}

module.exports = reservas