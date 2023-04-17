const Router = require('express').Router
const userController = require('../controllers/user-controller')
const dogovorController = require('../controllers/dogovor-controller')
const router = new Router()
const {body} = require('express-validator')
const authMiddleware = require('../middleware/auth-middleware')

router.post('/registration',
    body('email').isEmail().withMessage('Введите корректный email'),
    body('password').isLength({min: 8, max: 32}).withMessage('Пароль не должен быть меньше 8 и больше 32 символов'),
    userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.post('/send-link-active', userController.sendLinkActive)
router.get('/refresh', userController.refresh)
router.get('/users', authMiddleware, userController.getUsers)

// договора
router.post('/dogovors/employed',
    body('fio').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('inn').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('birth').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('phone').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('email').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('passnumber').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('passdata').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('passwho').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('adres').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('bank').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('numberschet').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('korschet').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('bik').notEmpty().withMessage('Это поле не должно быть пустым'),
    dogovorController.dogEmployed)

router.post('/dogovors/ip',
    body('fio').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('inn').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('yradres').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('faktadres').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('bik').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('raschet').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('directorfio').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('phone').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('email').notEmpty().withMessage('Это поле не должно быть пустым'),
    dogovorController.dogIp)

router.post('/dogovors/yr',
    body('name').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('inn').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('faktadres').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('numbersvid').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('datasvid').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('bik').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('raschet').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('thisfio').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('directorfio').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('phone').notEmpty().withMessage('Это поле не должно быть пустым'),
    body('email').notEmpty().withMessage('Это поле не должно быть пустым'),
    dogovorController.dogYr)

module.exports = router
