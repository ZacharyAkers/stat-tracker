const express = require('express');
const bodyParser = require('body-parser');
const validator = require('express-validator');
const router  = require('./routes/router');

const app = express();

app.set('port', (process.env.PORT || 3000) );

app.use( bodyParser.urlencoded( {extended: true} ) );
app.use( bodyParser.json() );
app.use( validator() );

app.use(router);

app.listen(app.get('port'), () =>
  console.log("App listening on port:3000 ", app.get('port') ) );