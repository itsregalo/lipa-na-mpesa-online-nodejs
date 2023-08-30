require("dotenv").config();
const axios = require("axios");


const date = new Date();
const timestamp =
    date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) +
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2);
    
const stk_push = async (req, res) => {
    const { phone, amount } = req.body;

    const phone_number = phone.substring(1);



    // const password = new Buffer.from(shortcode + passkey + timestamp).toString(
    //     "base64"
    // );

    await axios.post(
        "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
        {    
            "BusinessShortCode": "174379",    
            "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTYwMjE2MTY1NjI3",    
            "Timestamp":timestamp,    
            "TransactionType": "CustomerPayBillOnline",   // if customer buys goods: "CustomerBuyGoodsOnline" 
            "Amount": "1",    
            "PartyA":`254${phone_number}`,    
            "PartyB":"174379",    
            "PhoneNumber":`254${phone_number}`,    
            "CallBackURL": "https://mydomain.com/pat",    
            "AccountReference":"Payent Reference",    
            "TransactionDesc":"Test"
         },
         {
            headers: {
                Authorization: `Bearer ${req.token}`
         }
        })
    }

module.exports = {
    stk_push
}


