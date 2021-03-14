const express = require ('express')
const app = express()
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require ('body-parser')

const vehiclesList = require('./API/vehicles.json')

app.use(bodyParser.json());


app.get('/vehicles', (req,res) => {
    res.json(vehiclesList)
})


app.listen(port, ()=> console.log(`Listetning on ${port}`))