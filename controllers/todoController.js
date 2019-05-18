const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Connect to database
mongoose.connect('mongodb://nonso:winner@localhost:27017/todos',{useNewUrlParser: true});

//Create a schema 
let todoSchema = new mongoose.Schema({
    item: String
});

let Todo = mongoose.model('Todo',todoSchema,'items');
// let itemOne = Todo({item: 'buy flowers'}).save(err=>{
//     if(err)throw err;
//     console.log('item saved');
// });
//  let data =[{item: 'Pray for love'},{item:"learn Ajax"},{item:'node'}];

 const urlencodedParser = bodyParser.urlencoded({extended: false});
 
 module.exports = (app)=>{
    app.get('/todo',(req,res)=>{
        //get data from mongo using mongoose
        Todo.find({},(err,data)=>{
            if(err)throw err;
            res.render('todo',{todos:data});
        });
        
    });

    app.post('/todo',urlencodedParser,(req,res)=>{
        //add data to mongodb using mongoose
        let newTodo = Todo(req.body).save((err,data)=>{
            if(err)throw err;
            res.json(data);
        });
    });

    app.delete('/todo/:item',(req,res)=>{
        // to delete items from mongodb
        Todo.deleteOne({item: req.params.item.replace(/\-/g," ")},(err,data)=>{
            if(err)throw err;
            res.json(data);
        });

    });
 };  
