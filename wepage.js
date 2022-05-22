const express = require('express')
const path = require('path')
const router  = express.Router()

router.use(express.static(path.resolve(__dirname,'static')))
router.use((req,res)=>{
  res.sendFile(path.resolve(__dirname,'static/index.html'))
})

module.exports = router