const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const itemSchema = new schema({
    nombre: String,
    precio: String,
    descripcion: String,
    idProducto: String,
    idTienda: String,
    nombreTienda: String,
    idU: String
})

const itemModel = mongoose.model('items', itemSchema)

module.exports = router

//Crear
router.post('/createitem', (req, res) => {
    const newItem = new itemModel({
        nombre: req.body.nombre,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        idProducto: req.body.idProducto,
        idTienda: req.body.idTienda,
        nombreTienda: req.body.nombreTienda,
        idU: req.body.idU
    })
    newItem.save(function (err) {
        if (!err) {
            res.send('Item created!')
        } else {
            res.send(err)
        }
    })
})

//Obtener
router.post('/getstoreitems', (req, res) => {
    itemModel.find({ idTienda: req.body.idTienda }, function (docs, err) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

router.post('/getdataitem', (req, res) => {
    itemModel.findOne({ idProducto: req.body.idProducto }, function (docs, err) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})