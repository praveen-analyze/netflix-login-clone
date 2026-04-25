const express = require('express')
const cors =require('cors')

const app = express()
app.use(cors())

var username = "praveen"
var userpass = "123"



   app.get("/login", (req, res) => {
    if (req.query.username === username && req.query.userpass === userpass) {
        res.send(true)
    } else {
         res.send(false)
        
    }
})
app.listen(3000,function(){
    console.log("server stated")
})

