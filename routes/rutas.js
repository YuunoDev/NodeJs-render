const express = require('express');
const router = express.Router();
const cuadrado = require('../calculos.js');

router.get('/calculos/:width', (req, res) => {
    const { width } = req.params;
    let a = cuadrado.area(width);
    let b = cuadrado.perimetro(width);
    console.log(width, a, b);
    res.send({ ancho: width, area: a, perimetro: b });
});

router.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/public/index.html');
});

module.exports = router;
