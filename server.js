//Add required modules
const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

//Read URL or JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Import routes 
const routes = require('./controllers/burgers_controller.js');

app.use(routes);

//Listener
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);

