const express = require('express')

const mouth = express();
const port = 3000

mouth.use(express.static(__dirname + '/../client/dist'));

mouth.get('/', (req, res) => {
  res.send('Hello World!')
});

mouth.listen(port, () => {
  console.log(`Example mouth listening at http://localhost:${port}`)
});


