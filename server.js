// Require express - routes - controllers - session - helpers and - handlebars
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utilis/helpers');

// Const sequelize store.
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Gets the express app and port.
const app = express();
const PORT = process.env.PORT || 3007;
const API = process.env.API;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Import sequelize connection
const sess = {
  secret: process.env.SECRET,
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Sets up the session.
app.use(session(sess));

// Set the view engine to handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Use express static json and urlencoded.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Applies routes to the application.
app.use(routes);

// Turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
  });