const {Router} = require('express')
const router = Router({mergeParams:true})

const {router:categoryRouter} = require('./CategoryRoute') 
const {router:trademarkRouter} = require('./TrademarkRoute')
const {router:userRouter} = require('./UserRoute')
const {router:productRouter} = require('./ProductRoute')
const {router:productDetailRouter}=require('./ProductDetailRoute')

router.use('/category',categoryRouter)
router.use('/trademark',trademarkRouter)
router.use('/user',userRouter)
router.use('/product',productRouter)
router.use('/productdetail',productDetailRouter)

module.exports = router