

let express = require('express')
const { urlShort, redierectShort, home } = require('../controller/urlController')

let router = express.Router()


router.get('/', home)

router.post('/shortUrl', urlShort)

router.get('/:code', redierectShort)



module.exports = router