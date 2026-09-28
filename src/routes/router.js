const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')

//Rutas para las Vistas 'Views'
router.get('/', authController.isauthenticated,(req,res)=>{
    res.render('index', {email:req.email})
})

router.get('/login',(req,res)=>{
    res.render('login',{alert:false})
})
router.get('/register',(req,res)=>{
    res.render('register')
})

router.get('/register2',(req,res)=>{
    res.render('register2')
})

//Router para los metodos de controllers s
 router.post('/register', authController.register)
 router.post('/register2', authController.register)
 router.post('/login', authController.login)
 router.get('/logout',authController.logout)

//Crud de usuarios
 router.get('/users', authController.isauthenticated, authController.listUsers)
 router.get('/users/edit/:id', authController.isauthenticated, authController.editUserForm)
 router.post('/users/edit/:id', authController.isauthenticated, authController.updateUser)
 router.post('/users/delete/:id', authController.isauthenticated, authController.deleteUser)

module.exports= router

