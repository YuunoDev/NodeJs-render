const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const misrutas = require('./routes/rutas');

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', misrutas);

app.use(express.static(process.cwd() + '/public'));

app.listen(port, () => {
  console.log(`Server running on port en  http://localhost:${port}`);
});

