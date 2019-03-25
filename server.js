const express = require('express');



const app = express();



app.get('/', () => {
  res.render('hello world');
});

const port = process.env.PORT || 7500;


app.listen(port, console.log(`Server running on ${port}`));
