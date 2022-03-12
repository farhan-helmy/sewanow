const CryptoJS = require("crypto-js")

const signChecksum = async (tenant) => {
  console.log(tenant.amount)
  const callback_url = "https://webhook.site/ae3aa520-70ba-49ea-952c-b9db12f775ad"
  const uid = "952f4512-357d-4e82-abbd-03e4bc1fd7e3"
  const checsum = "76519d9a473d3d51f6b53fe57083924e7fcf4b9eee48201f17ae09a0c6d14d64"

  const info = tenant.email + "|" + tenant.name + "|" + "" + "|" + callback_url + "|" + "1234" + "|" + "topup" + "|" + "https://webhook.site/ae3aa520-70ba-49ea-952c-b9db12f775ad" + "|" + tenant.amount + "|" + uid

  const hash = CryptoJS.HmacSHA256(info, checsum).toString(CryptoJS.enc.Hex)

  return hash

}

module.exports = signChecksum


//buyer_email|buyer_name|buyer_phone|callback_url|order_number|product_description|redirect_url|transaction_amount|uid 
