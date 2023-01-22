
let urlModel = require('../model/urlDb')
let randomId = require('random-id')
require('dotenv').config()

let baseUrl = process.env.BASE_URL


module.exports.home=(req,res)=>{
    
    res.render('home')
}

module.exports.urlShort = async (req, res) => {
    try {

        let longUrl = req.body.longUrl
     

        let uniqueId = randomId(4, 'aA0')

        let Urldetails = await urlModel.create({ longUrl, uniqueId })

        let fullUrl = `${baseUrl}${Urldetails.uniqueId}`

        res.render('home',{fullUrl})

    } catch (error) {
        res.status(400).send(error)
    }
}


module.exports.redierectShort = async (req, res) => {

    try {

        let orginalUrl = await urlModel.findOne({ uniqueId: req.params.code })

console.log(orginalUrl);
        res.redirect(orginalUrl.longUrl)

    } catch (error) {
        res.send(error)
    }

}
