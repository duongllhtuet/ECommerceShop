const userLoginRouter = require('./user/login/loginRoutes.js');
const userSignUpRouter = require('./user/signup/signupRoutes.js'); 
const userProfileRouter = require('./user/profile/profileRoutes.js'); 
const userPurchaseRouter = require('./user/purchase/purchaseRoutes.js');

const groceryRouter = require('./grocery/groceryRoutes.js');

const homeRouter = require('./home/homeRoutes.js'); // Sửa tên file router

function route(app) {
    app.use('/login', userLoginRouter);
    app.use('/signup', userSignUpRouter);
    app.use('/profile', userProfileRouter);
    app.use('/purchase', userPurchaseRouter);

    app.use('/grocery', groceryRouter);

    app.use('/', homeRouter);
}

module.exports = route;
