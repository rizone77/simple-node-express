const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res )=>{
    res.send('Wow I am Exxited with node js');
});
  
const users = [
    {id:0, name:'Shabana', email:'Shabana@gmail.com', phone:'0188888888'},
    {id:1, name:'Shabnoor', email:'sabnor@gmail.com', phone:'0188888888'},
    {id:2, name:'Shrabonti', email:'srabinti@gmail.com', phone:'0188888888'},
    {id:3, name:'Suchorita', email:'suchorita@gmail.com', phone:'0188888888'},
    {id:4, name:'Soniya', email:'soniya@gmail.com', phone:'0188888888'},
    {id:5, name:'Susmita', email:'susmita@gmail.com', phone:'0188888888'},
]

app.get('/users',(req, res)=>{
   const search  = (req.query.search);
   if(search){
const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
res.send(searchResult);
   }
   else{
    res.send(users)
   }
    
});
// app.METHOD
 app.post('/users', (req, res)=>{
     const newUser = req.body;
     newUser.id = users.length;
     users.push(newUser);
     console.log('hitting the post', req.body)
    //  res.send(JSON.stringify(newUser))
    res.json(newUser)
 })

 // dynamic api
app.get('/users/:id',(req, res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res)=>{
    res.send(['mango', 'oranges', 'banana','apple' ])
})

app.get('/fruits/mangoes/fazli',(req, res)=>{
    res.send('Yummy Yummy tok marka fazli');
})

app.listen(port, ()=> {
    console.log('Listening tp port', port)
})
