const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const url = require('url');
const path = require('path')

app.use(express.static('public'))
app.use(express.static('files'))

const HTMLPATH = './public/'
const CITIES = './files/cities.json';
const INDEX = 'index.html';
const PROP  = 'properties.html'

app.get('/', (req, res) => {
  fs.readFile(path.join(HTMLPATH,INDEX), function (err, data) {
    res.send(data);
  });
});
//localhost:3000/?search=Domlur
app.get('/?', (req, res) => {
  var q = url.parse(req.url, true);
  console.log(q.query);
  var search = q.query.search;
  fs.readFile(CITIES, function (err, data) {
    if (err) { res.status(404).send('File not found :('); }
    else {
      const loc = JSON.parse(data);
      if (loc.localities.includes(search)) {
        console.log('found');
      } else {
        res.status(404).send("locality not found");
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})