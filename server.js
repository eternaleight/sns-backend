const express = require("express")
const app = express()
const userRoute = require("./routes/users")
const postsRoute = require("./routes/posts")
const authRoute = require("./routes/auth")
const PORT = 5001
const mongoose = require("mongoose")
require("dotenv").config()

//データベース接続
mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("DBと接続中...")
  })
  .catch((err) => {
    console.log(err)
  })


//ミドルウェア
app.use(express.json())
app.use("/api/users", userRoute)
app.use("/api/posts", postsRoute)
app.use("/api/auth", authRoute)

app.get("/",(req,res) => {
  res.send("hello express")
})

// app.get("/users",(req,res) => {
//   res.send("users express")
// })

app.listen(PORT, () => console.log("サーバーが起動しました"))
