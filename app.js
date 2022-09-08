const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//using body parser
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const route = require('./src/router/router');
const hbs = require('hbs');
const database = require('./src/database/connection');
const Model2 = require('./src/models/schema');
//setting up view engine
app.set('view engine', 'hbs');
app.set('views', './src/views');

//setting static files as public
app.use(express.static('./public'));
app.use(route);
app.listen(process.env.PORT || 3000, () => {
  console.log(`server is running on port ${process.env.PORT || 3000}`);
});
