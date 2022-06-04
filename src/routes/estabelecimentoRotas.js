const express = require('express');

const controller = require('../controllers/estabelecimentoController');

const router = express.Router();

router.get("/lista", controller.findAllBusiness)
router.get("/pesquisar", controller.searchBusiness)
router.post("/adicionar", controller.createBusiness)
router.patch("/atualizar/:id", controller.updateAddress)
router.patch("/curtir/:id", controller.addLikes)
router.patch("/descurtir/:id", controller.deslike)


module.exports = router
