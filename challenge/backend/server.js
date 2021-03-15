const express = require ('express')
const app = express()
const port = process.env.PORT || process.argv[2] || 8080
const bodyParser = require ('body-parser')
const cors = require('cors')
const vehiclesList = require('./API/vehicles.json')
const userInfo=require('./API/userauth.json')

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


  //this is incomplete
// Route to issue JWT when a user logs in with basic authentication
// server.get('/user_token', (req, res) => {
//   const user = auth(req)
//   const db = router.db
//   const users = db.get('users').value()
//   // This is a naive way to validate username and password, the password should be hashed
//   const foundUser = users.find((u) => u.username === user.name && u.password === user.pass)
//   if (foundUser) {
//     const token = jwtBase.sign({
//       id: foundUser.id,
//       username: foundUser.username,
//       role: foundUser.role
//     }, secret)
//     res.json({
//       username: foundUser.username,
//       role: foundUser.role,
//       token: token
//     })
//   } else res.status(401).json({error: 'Incorrect credentials'})
// })

app.listen(port, ()=> console.log(`Listetning on ${port}`))