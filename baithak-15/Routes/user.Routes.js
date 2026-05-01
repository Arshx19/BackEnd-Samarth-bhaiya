const { register, login } = require("../Controllers/User.Controller");


function userRoutes(app){
    // app.get()
    app.post('/api/register' , register)
    app.post('/api/login' , login)
}

module.exports = userRoutes;