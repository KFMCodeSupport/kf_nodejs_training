const users = require("../models/user.model")
module.exports = {
  handleLogin: (req, res, next)=> {
    const reqUser = req.body || {}
    for(const user of users){
      if(user.username === reqUser.username && user.password === reqUser.password)
      {
        return res.send('OK')
      }
    }
    return res.send('NOT OK')
  },
  handleSearchByName: (req, res)=> {
    const { search_text } = req.body
    const results = []
    for(const user of users){
      if(user.name.includes(search_text)) {
        results.push(user)
      }
    }
    return res.send(results)
  },
  handleFindAge: (req, res)=> {
    const { gt, lt } = req.query
    const objResult = { gt: [], lt: [] }
    for(const user of users){
      if(user.age < lt) objResult.lt.push(user)
      if(user.age > gt) objResult.gt.push(user)
    }
    return res.send(objResult)
  }
}
