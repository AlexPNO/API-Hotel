const express= require('express')
const app = express()
const port = 3000

const reservas = require('./controller/reservas-controller')



reservas(app,bd)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


// module.exports = app