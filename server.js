const express = require('express');
const app = express();
const port = 3000;
const appRoutes = require('./routes/route.js');

//middleware to handle api endpoint requests
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(__dirname +'/public'));
app.use('/', appRoutes)

// listern port
app.listen(port, ()=>{
  console.log(`server is live at ${port}`);
})