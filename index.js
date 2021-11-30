const express = require('express')
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Welcome to Mock prep!')
});

app.listen(port, () => {
  console.log(`Mock Prep listening on port ${port}!`)
});