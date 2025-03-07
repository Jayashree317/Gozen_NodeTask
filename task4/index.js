const express = require('express');
const app = express();
const port = 3000;

const routes = require('./router_task4');

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});