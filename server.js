const http = require('http');

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
  ];


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    const userNames = users.map(user => user.name);
    const passwords = users.map(user => user.password);
    const response = `User Names: ${userNames.join(', ')}\nPasswords: ${passwords.join(', ')}`;
    res.end(response);
});


server.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on http://127.0.0.1:3000/');
});