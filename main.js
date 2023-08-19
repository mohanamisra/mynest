const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const url = require('url');

app.use(express.static('public'))
app.use(express.static('files'))

app.get('/', (req, res) => {
  fs.readFile('./public/index.html', function (err, data) {
    res.send(data);
  });
});
app.get('/search-results.html?', (req, res) => {
  //console.log(req.url);
  var q = url.parse(req.url, true);
  console.log(q.query);
  var search = q.query.search;
  fs.readFile('./files/cities.json', function (err, data) {
    if (err) { res.status(404).send('File not found :('); }
    else {
      const loc = JSON.parse(data);
      if (loc.localities.includes(search)) {
        
      } else {
        res.status(404).send("locality not found");
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})