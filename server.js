//load express
const express = require('express');
const hbs = require('hbs');

//making a new express app
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});
//route handlers

//for http GET method
app.get('/', (req, res) => {
  //res.send('Hello Express');
  //res.send('<h1>Hello Express!</h1>');
  // res.send({
  //   name: 'Erwin Pogi',
  //   likes: [
  //     'Biking',
  //     'Basketball',
  //     'Running'
  //   ]
  // });
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website'
  });
});

//setting up another route
app.get('/about', (req, res) => {
  //res.send('About page');
  res.render('about.hbs',{
    pageTitle: 'About Page'

  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req,res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

//making app listen to bind to a port to our machine
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
