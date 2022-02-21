const express = require('express') ;
const mongoose = require('mongoose');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();

mongoose.Promise = global.Promise;
server.use(bodyParser.json());

server.use(cors());
server.use((request, response, next ) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//___initialize routes
routes(server);

server.listen(3050, () => {

    console.log("Ecoute sur le port 3050");
    //___connect to mongodb
    mongoose.connect('mongodb://localhost/pim',{
        useMongoClient: true
    });
    mongoose.connection
    .once('open',()=> console.log("Connexion à la mongoDB établie"))
    .on('error',(error) => {
        console.warn('Warning',error);
    });

});