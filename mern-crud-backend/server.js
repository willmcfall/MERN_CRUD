const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;

// Starts server and listens for requests on defined port
app.use(cors());
app.use(bodyParser.json());
app.listen(PORT, function(){
    console.log('Successfully started server on port: ' + PORT + '....nice!')
})


