const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRouteur = require('./router/apiRouter').router;
const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
server.use(bodyParser.json({limit: '50mb', extended: true}));
server.use('/api/', apiRouteur);

server.listen(8080, () => {
	console.log("connexion-ok");
});