const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const shopSchema = new schema({
    nombre: String,
    descripcion: String,
    idTienda: String,
    idU: String
})

const shopModel = mongoose.model('shops', shopSchema)

module.exports = router

//Crear
router.post('/createshop', (req, res) => {
    const newShop = new shopModel({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        idTienda: req.body.idTienda,
        idU: req.body.idU
    })
    newShop.save(function (err) {
        if (!err) {
            res.send('Shop created!')
        } else {
            res.send(err)
        }
    })
})

//Obtener
router.get('/getshops', (req, res) => {
    shopModel.find({}, function (docs, err) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

router.post('/getmyshops', (req, res) => {
    shopModel.find({ idU: req.body.idU }, function (docs, err) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

router.post('/getstoredata', (req, res) => {
    shopModel.findOne({ idTienda: req.body.idTienda }, function (docs, err) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

//Editar
router.post('/updateshop', (req, res) => {
    const update = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    }
    shopModel.findOneAndUpdate({ idTienda: req.body.idTienda }, update, { new: true }, function (err, docs) {
        if (err) {
            console.log(err)
        } else {
            res.send(docs)
        }
    })
})