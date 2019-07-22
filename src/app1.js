const express = require('express');;
const app = express();
const port = 43000;
const version = "1.2.3"; // X-Version

const addToHeader = function (req, res, next) {
  res.header('Version', version);
  next();
}
const showContentType = (req, res, next) => {
  console.log(req.path);
  // console.log(req.originalUrl);
  next();
}
var bodyParser = require('body-parser')
app.use(addToHeader)
app.use(showContentType)
app.use(bodyParser.json())
app.get('/', function (req, res, next) {
  res.send('GET request to the homepage')
})
app.post('/user', (req, res) => {
  // res.send('Hello '+req.body.name)
  res.json({
    greetings: "Hello " + req.body.name
  })
})
//------> ERRORS
app.post('/numbers', (req, res) => {
  let a = req.body.a;
  let b = req.body.b;
  let c = req.body.c;
  let errors = [];
  if (isNaN(a)) {
    errors.push("a jest złe")
  }
  if (isNaN(b)) {
    errors.push("be jest złe")
  }
  if (isNaN(c)) {
    errors.push("c jest złe")
  }
  if (errors.length > 0) {
    res.status(400);
    res.json({
      error: errors
    })
  }
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.json({
    sum: parseInt(req.body.a) + parseInt(req.body.b) + parseInt(req.body.c)
  })
})
app.listen(port, () => console.log(`listening at port ${port}!`))