const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const misrutas = require('./routes/rutas');

const app = express();
const port = process.env.PORT || 10000;

// Configurar CORS para solicitudes de origen cruzado
app.use(cors({
  origin: 'https://nodejs-render-jzcu.onrender.com',  
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', misrutas);

app.use(express.static(process.cwd() + '/public'));

app.listen(port, () => {
  console.log(`Server running on port en http://localhost:${port}`);
});
