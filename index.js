const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Hello from Render! Message: ${process.env.MESSAGE || 'none set'}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
