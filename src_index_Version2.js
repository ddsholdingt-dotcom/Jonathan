require('dotenv').config();
const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => res.send('Welcome to Jonathan API'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});