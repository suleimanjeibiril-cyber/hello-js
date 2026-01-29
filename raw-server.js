require('dotenv').config();

// in this we don't need npm
const http = require('http');//built-in module

const server = http.createServer((req, res) => {

    //when it's only "/"it's defult but "/about" it's for about us page
    if (req.method === 'GET' && req.url === '/') {

        res.writeHead(200, { 'Content-Type': 'text/plain'});
        res.end('My Week 2 API!')
    } else{
        res.writeHead(404, { 'Content-Type': 'text/plain'});
        res.end( 'Not Found :('); //basic errror
    }
});


const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`Raaw server running on http://localhost:${PORT}/`);   
});

/*//require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT;

const userData = [
  { id: 1, name: 'Suleiman', age: 25 },
];

app.use(express.json()); 

app.get('/', (req, res) => {
  res.status(200).json
  ({ message: 'My Week 2 API!' });
});

//for post route
app.post('/', (req, res) => {
  const { name, age } = req.body;
  
  if (!name || !age) {
    return res.status(400).json({ error: 'Name and age are required' });
  }
})

//Get
app.get('/user/:id', (req, res, next) => {
  const userId = parseInt(req.params.id);
  const user = user.find(u => u.id === userId);
});
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }

   //error
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
  });

  //port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) */


