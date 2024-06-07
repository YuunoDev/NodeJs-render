const express = require('express');
const router = express.Router();
const cuadrado = require('../calculos');

// router.get('/', (req, res) => {
//     res.send({ message: 'Hola mundo soy Adrian Alonso Arambula' });
// });

router.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/public/index.html');
});

// router.get('/ayuda', (req, res) => {
//   res.send({ message: 'En que te ayudo soy Adrian Alonso Arambula' });
// });

// router.get('/ayuda/:name', (req, res) => {
//   res.send({ message: `Hola ${req.params.name} en que te ayudo` });
// });

router.get('/prueba', (req, res) => {
    res.send({ message: `Hola ${req.query.name} ${req.query.apellido}` });
});


router.get('/datos', (req, res) => {
    res.send(
        {
            "secretBase": "Super tower",
            "active": true,
            "members": [
                {
                    "name": "Adrian Alonso Arambula",
                    "age": 20,
                    "secretIdentity": "YuunoDev",
                    "powers": [
                        "Radiation resistance",
                        "Turning tiny",
                        "Radiation blast"
                    ]
                },
                {
                    "name": "Madame Uppercut",
                    "age": 39,
                    "secretIdentity": "Jane Wilson",
                    "powers": [
                        "Million tonne punch",
                        "Damage resistance",
                        "Superhuman reflexes"
                    ]
                },
                {
                    "name": "Eternal Flame",
                    "age": 1000000,
                    "secretIdentity": "Unknown",
                    "powers": [
                        "Immortality",
                        "Heat Immunity",
                        "Inferno",
                        "Teleportation",
                        "Interdimensional travel"
                    ]
                }
            ]
        });
});

router.post('/ayuda', (req, res) => {
    console.log("Cuerpo de la peticion", req.body);
    res.send({ message: 'Hola mundo en que te puedo ayudar, Soy una peticion POST' });
});

router.post("/producto", (req, res) => {
    console.log("Cuerpo de la peticion", req.body);
    const { nombre, sueldo, categoria } = req.body;
    console.log(nombre);
    console.log(sueldo);
    console.log(categoria);
    res.send({ message: 'Producto recibido' });
});

router.post('/producto/:id', (req, res) => {
    const { id } = req.params;
    const { motor } = req.query;
    const { precio } = req.body;
    console.log(id, motor, precio);
    res.json({
        stockmin: 10,
        stockmax: 15,
        existencia: 7
    });
});

router.get('/calculos/:width', (req, res) => {
    const { width } = req.params;
    let a = cuadrado.area(width);
    let b = cuadrado.perimetro(width);
    console.log(width, a, b);
    res.send({ acho: width, area: a, perimetro: b });
});

const bonost = {
    A: 3000,
    B: 2500,
    C: 2000,
};

router.post('/bono', (req, res) => {
    console.log("Cuerpo de la peticion", req.body);
    const { nombre, horas, pago } = req.body;
    const categoria = req.body.categoria.toUpperCase();	
    const todsueldo = horas * pago;
    const bono = bonost[categoria];
    const todsueldoatimpuesto = todsueldo + bono;
    const impuesto = todsueldoatimpuesto * 0.1;
    const todsueldoposimpuesto = todsueldoatimpuesto - impuesto;

    const response = {
        nombre,
        categoria,
        todsueldo,
        bono,
        todsueldoatimpuesto,
        impuesto,
        todsueldoposimpuesto
    };
    
    console.log(response);
    res.json(response);
});

module.exports = router;