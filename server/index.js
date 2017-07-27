const express = require('express');
const parser = require('body-parser');
const db = require('./db/config');
const models = require('./db/index');
const router = require('./routers/router');
const path = require('path');

let app = express();
let PORT = process.env.PORT || 3000;

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());
app.use(express.static(path.join(__dirname, '../client/public')))

app.use('/api', router);



app.listen(PORT, (err) => {
    if(err){
        console.log('Server connection unsuccessful');
    } else {
        console.log('Server connected');
    }
})