const express = require("express")
const config = require("./config")
const app = require("./helpers").makeApp()
const userController = require("./controllers/user.controller")

const callback = () => {
  console.log("Server is started at port ", config.port)
}

app.use(express.json())

app.use("/v1/users", userController)

app.listen(config.port || 3000, callback)

