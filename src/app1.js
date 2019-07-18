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
  if (errors.length>0) {
    res.status(400);
    res.json({ error: errors   })
  }


  // if (isNaN(a) && isNaN(b)) {
  //   res.status(400);
  //   //res.send('');   
  //   res.json({
  //     error: "a i be jest bardzo złe"
  //   })

  // } else 
  // if (isNaN(a) || isNaN(b)) {
  //   res.status(400);
  //   if (isNaN(a)) {
  //     res.json({
  //       error: "a jest złe"
  //     })
  //   } else {
  //     res.json({
  //       error: "be jest złe"
  //     })
  //   }
  // }



  res.header('Content-Type', 'application/json; charset=utf-8')
  res.json({
    sum: parseInt(req.body.a) + parseInt(req.body.b) + parseInt(req.body.c)
  })
})
//   app.put('/user', function (req, res) {
//     res.send('Got a PUT request at /user')
//   })
//   app.delete('/user', function (req, res) {
//     res.send('Got a DELETE request at /user')
//   })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))











