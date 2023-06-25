const http = require("http")

const users = [
    {
      username: 'userA',
      password: 'passwordA',
      age: 25,
      name: 'User A'
    },
    {
      username: 'userB',
      password: 'passwordB',
      age: 30,
      name: 'User B'
    },
    {
      username: 'userC',
      password: 'passwordC',
      age: 35,
      name: 'User C'
    },
    // Thêm người dùng khác tại đây nếu cần
  ];

  console.log(JSON.stringify(users));


  const app = http.createServer(processRequest)

  app.listen(3000, () => {
    log("Server is starting 3000")
  })