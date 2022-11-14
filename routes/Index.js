const {Router} = require('express')
const router = Router({mergeParams:true})

const {router:categoryRouter} = require('./CategoryRoute') 
const {router:trademarkRouter} = require('./TrademarkRoute')

router.use('/category',categoryRouter)//tại sao dùng '' mà có chỗ dùng ""
router.use('/trademark',trademarkRouter)

module.exports = router