const express = require ('express')
const app = express()
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require ('body-parser')
const cors = require('cors')
const vehiclesList = require('./API/vehicles.json')

app.use(bodyParser.json());
app.use(cors());

app.get('/vehicles', (req,res) => {
    res.json(vehiclesList)
})


app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });


app.listen(port, ()=> console.log(`Listetning on ${port}`))