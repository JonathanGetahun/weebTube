const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config/key');
const userRouter = require('./routes/users');


const connect = mongoose.connect(config.mongoURI,
    {
      useNewUrlParser: true, useUnifiedTopology: true,
      useCreateIndex: true, useFindAndModify: false
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());
app.use(cookieParser()); //parses cookies attached to the client request object

app.use('/api/users', userRouter);

app.get("/", (req,res) => {
    res.json({
        "yoo":"broo"
    })
})

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
});