const restify = require('restify');
const mongoose = require('mongoose');
const morgan = require('morgan');

const db = require('./config/db');
mongoose.connect(db.url);

const port = process.env.PORT || 30001;

const server = restify.createServer();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(morgan('dev'));  //LOGGER

// CORS
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

server.listen(process.env.PORT || 3001, () => {
    console.log('Server started @ ', port);
});