const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// enable CORS
app.use(cors());


app.get('/', (req,res) => res.send('api running'));

//define routes
app.use('/api/weather', require('./routes/api/weather'));



const PORT = process.env.PORT || 5000;
app.listen(PORT,async() => 
{

console.log(`server started at port ${PORT}`);
}
);
