const express = require('express');
const todoController = require('./controllers/todoController');
const app = express();

//setting view engine 
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));

//start controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('listening to port 3000'); 