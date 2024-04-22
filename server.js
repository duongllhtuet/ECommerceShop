if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const connectDB = require('./config/data')

//init app & middleware
const app = express()

//db connection
connectDB()

app.use(express.static('assets'))

//templating Engine
app.use(expressLayouts)
app.set('layout', './layouts/layout') 
app.set('view engine', 'ejs')

const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session');

app.set('views', __dirname + '/views')
app.use(methodOverride('_method'))
app.use(express.json())
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

const indexRouter = require('./routers/index')
const groceryRouter = require('./routers/grocery')
const userRouter = require('./routers/user')

app.use(session({
    secret: 'secret', 
    cookie: { maxAge: 30000 },
    saveUninitialized: false
}));

app.use((req, res, next) => {
    const user = req.session.user;
    res.locals.user = user; // Truyền dữ liệu người dùng từ session vào biến locals
    next();
});

app.use('/', indexRouter) 
app.use('/grocery', groceryRouter)
app.use('/user', userRouter)

app.listen(5000 || process.env.PORT, () => {
    console.log("app listening on port 3000")    
}) 