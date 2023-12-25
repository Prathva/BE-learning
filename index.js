require('dotenv').config()

const express = require('express')
const app = express()

console.log(process.env.PORT);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dashboard',(req, res) =>{
    res.send('Hey, Welcome to the Dashboard!')
})

app.get('/login', (req, res) =>{
    res.send('<h1>Please login at BE Dev</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2> chai aur code</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})