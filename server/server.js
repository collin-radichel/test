//give us ENTIRETY OF express NOT ./
const express = require('express');
const bodyParser = require('body-parser');

// call express function, create a server, save in app
const app = express();
const PORT = 5000;

// Serve static files! HTML, CSS, JS, etc
app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended : true}));



// SERVE DATA
const people = [{name: 'Gabin'}, {name: 'Josh'}, {name : 'Joe'}];

//POST ROUTE
app.post('/data', (req, res) => {

    // retrieve sent data
    let newPerson = req.body.name

    people.push(newPerson);
    // 200 is OK 201 is CREATED
    res.sendStatus(201)

})

// GET ROUTE
app.get('/data', (req, res) => {
    console.log('you got to /data!');
    //ALL SERVER REQ need RES
    res.send(people);
});

//START UP SERVER!
app.listen(PORT, () => {
    // this will run when server starts!
    console.log('Server running on PORT', PORT)
});

