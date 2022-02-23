const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv/config')

app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute);

app.get('/', (req, res) => {
    res.send('Home Page');
});

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', () => { 
    console.log('Connected to Database');
});



app.listen(3000, () => console.log('Listening on port 3000'));  