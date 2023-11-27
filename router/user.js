const express = require('express')
const router = express.Router()
const userscontroller = require('../controllers/users')

router.get('/user', userscontroller.index )

router.get('/user/:id', userscontroller.show)  

  router.post('/user', userscontroller.store)
  
  router.put('/user/:id', userscontroller.update)
  
  router.delete('/user/:id', userscontroller.delete)

  module.exports = router