const express = require('express')
const router = express.Router()
const itemController = require('../controller/item')
const authController = require('../controller/authentication')
const customerController = require('../controller/customer')

/* customer */
router.post('/customer', authController.verifyToken, customerController.createCustomerInfo)

router.put('/customer', authController.verifyToken, customerController.updateCustomerInfo)

router.get('/customer', authController.verifyToken, customerController.getCustomerInfo)

router.delete('/customer', authController.verifyToken, customerController.deleteCustomer)

// melihat daftar user
router.get('/users', authController.verifyToken, authController.findAll)

router.post('/signin', authController.signIn)

router.post('/signup', authController.signUp)

// item
router.get('/list', authController.verifyToken, itemController.getAllData)

router.post('/item', authController.verifyToken, itemController.createData)

// confirmation customer
router.post('/confirmation', customerController.confirmation)

module.exports = router
