const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars').create({
    extname: '.hbs',
});

const route = require('./routes/appRoutes.js');
const db = require('./config/db');
const { homedir } = require('os');

// Connect to db
db.connect();

const app = express();
const port = 3000;

// Apply middleware cho post
app.use(
    express.urlencoded({
        extended: true,
    }),
);
// XMLHttp request, fetch, axios, ajax
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

console.log(path.join(__dirname, 'public'));

// HTTP loger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// route init
route(app);

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`),
);
