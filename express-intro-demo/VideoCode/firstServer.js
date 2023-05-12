const express = require('express');

const app = express();

app.get('/dogs', function (request, response) {
  return response.send('Dogs go bark bark!');
});

app.listen(3000, () => {
  console.log("Server running on port 3000")
});

