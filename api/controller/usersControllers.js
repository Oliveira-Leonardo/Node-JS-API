'use strict'
var mongoose = require('mongoose')
var user = mongoose.model('users')
var userModel = mongoose.model('users')

//get all
exports.lista_todos_usuarios = function(req, res){
    user.find({}, function(err, users){
        if(err){
            res.send(err)
        }
        res.json(users)
    })
}

//get byId
exports.lista_um_usuario = function(req, res){
    user.findOne({"_id": req.params.usersId}, function(err, user){
        if (err){
            res.send(err)
        }
        res.json(user)
    })
}

//post
exports.insere_usuario = function(req,res){
    var novo_usuario = new userModel(req.body) 
    novo_usuario.save(function(err,user){
        if(err){
            res.send(err)
        }
        res.json(user)
    })
}

//put
exports.atualiza_usuario = function(req,res){
    user.findOneAndUpdate({_id: req.params.usersId}, req.body, {new: true},
        function(err, user){
            if (err){
                res.send(err)
            }
            res.json(user)
        })
}


//delete

exports.deleta_usuario = function(req,res){
    user.remove({_id: req.params.usersId}, function(err, user){
        if(err){
            res.send(err)
        }
        res.json("usuario deletado")
    })
}