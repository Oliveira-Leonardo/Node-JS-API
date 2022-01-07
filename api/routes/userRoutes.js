'use strict'
module.exports = function(app){
    var usersControllers = require('../controller/usersControllers')

    app.route('/user')
        .get(usersControllers.lista_todos_usuarios)
        .post(usersControllers.insere_usuario)
    app.route('/user/:usersId')
        .get(usersControllers.lista_um_usuario)
        .put(usersControllers.atualiza_usuario)
        .delete(usersControllers.deleta_usuario)
}