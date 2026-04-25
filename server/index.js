const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const username = "praveen"
const userpass = "123"

app.get("/", (req, res) => {
  res.send("Netflix Login API Running")
})

app.get("/login", (req, res) => {
  if (req.query.username === username && req.query.userpass === userpass) {
    res.json(true)
  } else {
    res.json(false)
  }
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("server started on", PORT)
})