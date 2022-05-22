const express = require('express')
const req = require('express/lib/request')
const http = require('http')
const app = express()
const server = http.createServer(app)
const PORT = 9999
const path = require('path')
const axios = require('axios')

server.listen(PORT,()=>{
  console.log(`正在监听${PORT}端口`);
})

app.get('/',(req,res)=>{
  const query = req.query
  const isFromWechatServe = require('./checkSignature')(query)
  console.log(isFromWechatServe);
  if(isFromWechatServe){
    res.send(query.echostr)
  }else{
    res.send('')
  }
})

app.get('/code/',async (req,res)=>{
  axios.defaults.baseURL = "https://api.weixin.qq.com"
  const ACCESS_TOKEN_RES =  await axios({
    url:'/sns/oauth2/access_token',
    params:{
      appid:'wx5808206a546d8ed1',
      secret:'9ad2af675196e1d7735b813ab3aad8f2',
      code:req.query.code,
      grant_type:'authorization_code'
    }
  })
  const {access_token,openid} = ACCESS_TOKEN_RES.data
  const USER_INFO_RES = await  axios({
    url:'/sns/userinfo',
    params:{
      access_token: access_token,
      openid: openid,
      lang:"zh_CN ",
    }
  })
  console.log(USER_INFO_RES.data);
  const { headimgurl , nickname } = USER_INFO_RES.data
  res.send(`<h1>${nickname}<h1/><img src="${headimgurl}"/>`)
})

app.use('/wepage', require('./wepage'))