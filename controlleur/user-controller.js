const User = require("../models/users");

module.exports = {

    readAll(req,res) {

        //console.log("GET request users");
        User.find({}).then((usersDB)=>{
            res.send(usersDB);
        });
    
    },
    
    read(req,res) {
    
        //console.log("GET request user");
        User.find({_id: req.params.id}).then((userDB)=>{
            res.send(userDB);
        });
            
    },
    
    create(req,res,next) {
    
        User.create(req.body).then((userDB)=>{
            res.send(userDB);
        }).catch(next);
        
    },

    delete(req,res) {
    
        //console.log("DELETE request user");
        User.findByIdAndRemove({_id: req.params.id}).then((userDB)=>{
            res.send(userDB);
        });

    },

    update(req,res){

        User.findByIdAndUpdate({_id: req.params.id},req.body).then(()=>{
            User.findOne({_id: req.params.id}).then((userDB)=>{
                res.send(userDB);
            });
        });
    },
}