const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

app.use(express.static('public'))
app.use(express.static('files'))

app.get('/', (req, res) => {
  fs.readFile('./public/index.html',function (err,data){
    res.send(data);
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})