const userService = require("../services/user.service")

const route = require("express").Router()

route.post("/login", userService.handleLogin)
route.post("/search-by-name", userService.handleSearchByName)
route.get("/filter-age", userService.handleFindAge)


module.exports = route



