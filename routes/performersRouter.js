const express = require()
const router = express.Router()
const performerCtrl = require('../controllers/performersController')


//GET /performers: Returns a list of all performers.
router.get('/', performerCtrl.index)
//POST /performers: Accepts performer data and creates a new performer.
router.post('/', performerCtrl.create)


module.export = router