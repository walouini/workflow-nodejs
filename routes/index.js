userController = require("../controlleur/user-controller");
const cors = require('cors');

module.exports = (route) =>{

    route.get("/users", cors(),userController.readAll);

    route.get("/user/:id", cors(),userController.read);
    
    route.post('/user', cors(),userController.create);

    route.delete('/user/:id', cors(),userController.delete);
    
};