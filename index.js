const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config/key');


mongoose.connect(config.mongoURI,
     { useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false }).then(() => {
    console.log('DB connected')
}).catch(err => console.error(err))

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());
app.use(cookieParser()); //parses cookies attached to the client request object

app.use('/api/users', require('./routes/users'));




app.listen(5000);