let express=require('express')
let app=express()
let mongoose=require('mongoose')
let urlRoute=require('./routes/urlRoute')
let { engine } = require('express-handlebars')
let path=require('path')



app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/',urlRoute)


app.set('views', path.join(__dirname + '/views'))
app.set('view engine', 'hbs')
app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: false,
    layoutsDir: false,
    partialsDir: false
}))

mongoose.connect('mongodb://127.0.0.1:27017/urlShort').then((result)=>{
    
app.listen(3000, () => console.log('listening'))
})