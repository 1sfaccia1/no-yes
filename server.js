const express = require('express');
const mongoose = require('mongoose');


const app = express();

const db = require('./config/keys').mongoURI;

mongoose.connect(db,{ useNewUrlParser: true })
  .then(() => console.log('mongodb is good'))
  .catch(err => console.log(err));

app.get('/', () => {
  res.render('hello world');
});

const port = process.env.PORT || 7500;


app.listen(port, console.log(`Server running on ${port}`));
