// importing express library to use it as a server
const express = require ('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

//Routes
app.get('/first-server', (request, response) => {
    //sending info to the client that makes a request to the server
    response.send('Hello from the server!')
})

//Last
//Port with callback function
app.listen(8080, () => {
    console.log('http://127.0.0.1:8080')
})