// importing express library to use it as a server
const express = require ('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

//Routes
//syntax for GET: app.get('/route',()=>{})
//similar to document.addEventListener("eventName",(e)=>{})
app.get('/',(request, response)=>{
//response will contain all if the information we send back from the server to the client
    console.log("received a request at / route")
    //ALWAYS respond
    response.send('this is <em>some</em> data!')
})

//GET /first-server, ccallback function
app.get('/first-server', (request, response)=>{
    //sending info to the client that makes a request to the server
    response.send('Hello from the server!')
})

app.post('/form-upload', (request,response)=>{
    response.redirect("/");
})

//Last
//Port with callback function
app.listen(8080, () => {
    console.log('http://127.0.0.1:8080/')
})