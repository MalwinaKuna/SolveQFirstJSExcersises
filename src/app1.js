const express = require('express');;
const app = express();
const port = 43000;
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

app.post('/user', (req, res) => {

  res.header('Content-Type', 'application/json; charset=utf-8')
  // res.send('Hello '+req.body.name)
  res.json({
    greetings: "Hello " + req.body.name
  })

})

//------> ERRORS
app.post('/numbers', (req, res) => {
  let a = req.body.a;
  let b = req.body.b;
  
  if (isNaN(a) || isNaN(b)) {
    res.status(400);
    //res.send('');   
    res.json({
      error: "a i bbbe jest bardzo złe"
    })

  }
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.json({
    sum: parseInt(req.body.a) + parseInt(req.body.b)
  })

})
//   app.put('/user', function (req, res) {
//     res.send('Got a PUT request at /user')
//   })
//   app.delete('/user', function (req, res) {
//     res.send('Got a DELETE request at /user')
//   })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))












/*//------> ERRORS
app.post('/numbers', (req, res) => {
  let a = req.body.a;
  let b = req.body.b;
  
  if (isNaN(a) && isNaN(b)) {
    res.status(400);
    // res.send('');
    res.json({
      error: "a i bbbe jest bardzo złe"
    })
  } else if ((isNaN(a) || isNaN(b))) {
    const errors= [];
    if(isNaN(a)){
      errors.push(res.json({
        error: "a jest bardzo złe"
      }))

    }
  }*/