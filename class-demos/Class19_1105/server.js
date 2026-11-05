let express = require ('express');
let nedb = require('@seald-io/nedb');

//set variables
let app = express();
let database = new nedb({ 
    filename: 'mydatabase.db',
    autoload: true 
});

//set up a normal server
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => {
    response.send("server is running");
});

app.post('/add-data', (request, response) => {
    console.log(request.body)
    let dataToBeAdded = {
        message: request.body.newMessage,
        timestamp: Date.now()
    }
    //add to database
    database.insert(dataToBeAdded, (error, newData) => {
        if (error) {
            console.log(error);
            response.send("Error! Data was not added");
        } else {
            console.log(newData);
            response.send("Data added successfully");
        }
    });
}); 

app.get('/get-data', (request, response) => {
    let query = {};
    database.find(query, (error, retrievedData) => {
        console.log(retrievedData);
        response.json({retrievedData});
    })
})

app.listen(6001, () => {
    console.log("server is running on port http://localhost:6001/");
});