//give us ENTIRETY OF express NOT ./
const express = require('express');

// call express function, create a server, save in app
const app = express();
const PORT = 5000;

// Serve static files! HTML, CSS, JS, etc
app.use(express.static('server/public'));

// SERVE DATA
const people = ['Gabin', 'Josh', 'Joe'];

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

