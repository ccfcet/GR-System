const express = require('express')
const router  = express.Router()

router.get('/',(req,res,next) => {
    res.send("Hello Grievance")
})

module.exports = router