const router=require('express').Router()
const capi=require('../controller/controller')

router.post('/register',capi.register)
router.get('/findreg',capi.findreg)
router.delete('/deletereg/:id',capi.deletereg)
router.put('/update/:id',capi.update)
router.post('/findUpdateuser/:id',capi.findUpdateuser)


module.exports = router; 