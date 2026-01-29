require('dotenv').config();
const express = require('express');
const app = express();

//the port 
const port = process.env.PORT; 

//id part
let userData = [ 
  { id: 1, name: 'Suleiman', email: 'suleiman@example.com', },
];

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'My Week 2 API!' });
});

// For post route
app.post('/user', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {

    // to stop execution after sending response
    return res.status(400).json({ error: 'Name and email are required' }); 
  }
  //  new user add to array
  const newUser = { id: userData.length + 1, name, email };
  userData.push(newUser);

  // Send the newly created user
  res.status(201).json(newUser); 
});

// Get user by ID route
app.get('/user/:id', (req, res, next) => {
  const userId = parseInt(req.params.id);
  // Correct variable name from `user` to `userData`
  const user = userData.find(u => u.id === userId); 

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
}); // Add the closing handler

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
