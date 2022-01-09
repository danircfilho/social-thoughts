const express = require('express')
const router = express.Router()
const ToughtController = require('../controllers/ToughtController')

//helpers (para proteção de rota)
const checkAuth = require('../helpers/auth').checkAuth

router.get('/add', checkAuth, ToughtController.createTought) //rota protegida (função checkAuth)
router.post('/add', checkAuth, ToughtController.createToughtSave) //rota protegida (função checkAuth)
router.get('/dashboard', checkAuth, ToughtController.dashboard) //rota protegida (função checkAuth)
router.get('/', ToughtController.showTougths)

module.exports = router