const crypto = require('crypto')
module.exports = (opts) => {
  const {
    signature,
    timestamp,
    nonce
  } = opts

  const MY_TOKEN = '123456'; //替换成自己设置的Token

  const array = new Array(MY_TOKEN,timestamp,nonce)

  const MY_SIGNATURE = crypto.createHash('sha1')
  .update(array.sort().toString().replace(/,/g,""),'utf-8')
  .digest('hex')

  console.log("微信服务器signature：",signature);
  console.log("我们校验后的signature：",MY_SIGNATURE);

  return MY_SIGNATURE == signature
}