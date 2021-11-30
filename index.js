const express = require('express')
const app = express();
const port = process.env.PORT || 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('Welcome to Mock prep!')
});

app.listen(port, () => {
  console.log(`Mock Prep listening on port ${port}!`)
});