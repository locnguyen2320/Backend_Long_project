require('dotenv').config()
const jwt = require("jsonwebtoken")
const verifyToken = (req,res,next) => {
    const token = req.headers["x-access-token"]
    if (!token)
        return res.status(403).json({ message: "chưa truyền token" })
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)   
        req.user = decoded
        return next()
    } catch (error) {
        (error.toString())
        return res.status(401).json({ message: "token không hợp lệ" })
    }
}

module.exports = {verifyToken}