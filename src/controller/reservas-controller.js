
const reservas=(app)=>{
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
            throw new Error

        }
    })


}

module.exports = reservas