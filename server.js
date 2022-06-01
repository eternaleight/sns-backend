const express = require("express")
const app = express()
const PORT = 3000
const userRoute = require("./routes/users")
const postsRoute = require("./routes/posts")
const authRoute = require("./routes/auth")

//ミドルウェア
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
