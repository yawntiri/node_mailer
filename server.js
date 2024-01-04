const express = require('express');
const app = express();
const port = 3000;
const appRoutes = require('./routes/route.js');
// data should print in json format
app.use(express.json());

//middleware to handle api endpoint requests
app.use('/api', appRoutes)
app.listen(port, ()=>{
  console.log(`server is live at ${port}`);
})