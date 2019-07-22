const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send('It works!');
})
app.post('/user', (req, res) => {
    // res.json({
    //     'status': 'sukces!'   
    // })
    res.send(req.body.status)
})
app.listen(port, () => {
    console.log(`Listening!`);
})

























// const http = require('http');
// const hostname= '127.0.0.1';
// const port=3000;
// const server= http.createServer((req,res)=>{
//     res.statusCode=200;
//     res.setHeader('Content-Type','text/plain');
//     res.end('Hello World\n');
// });

// server.listen(port,hostname,()=>{
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

//----->
// const express= require('express');
// const app= express();

// app.get('/', (req, res, next)=>{
//     res.json({
//         'status':'sukces!'
//     });
// })
// app.listen(8000,()=>{
//     console.log('Listening!');
// });