const express = require('express')

module.exports = function(server){    
  //ROTAS DA API
  const router = express.Router()
  server.use('/api', router)

  //rotas todo    
  const todoService = require('../api/todo/todoService')
  todoService.register(router, '/todos')
}
