const {Router} = require('express')
const router = Router({mergeParams:true})

const {router:categoryRouter} = require('./CategoryRoute') 
const {router:trademarkRouter} = require('./TrademarkRoute')
const {router:userRouter} = require('./UserRoute')

router.use('/category',categoryRouter)//tại sao dùng '' mà có chỗ dùng ""
router.use('/trademark',trademarkRouter)
router.use('/user',userRouter)

module.exports = router