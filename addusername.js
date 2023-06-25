const { MongoClient } = require('mongodb');

async function addAccountsToDB() {
  const uri = 'mongodb://192.168.100.250:27017'; // Đường dẫn kết nối MongoDB
  const client = new MongoClient(uri);

  try {
    await client.connect(); // Kết nối tới MongoDB

    const database = client.db('mydb'); // Tên của cơ sở dữ liệu
    const collection = database.collection('users'); // Tên của collection

    // Mảng chứa 5 tài khoản cần thêm vào collection
    const accounts = [
      { username: 'user1', password: 'pass1', tuoi: 25, ten: 'Người dùng 1' },
      { username: 'user2', password: 'pass2', tuoi: 30, ten: 'Người dùng 2' },
      { username: 'user3', password: 'pass3', tuoi: 35, ten: 'Người dùng 3' },
      { username: 'user4', password: 'pass4', tuoi: 40, ten: 'Người dùng 4' },
      { username: 'user5', password: 'pass5', tuoi: 45, ten: 'Người dùng 5' },
    ];

    const result = await collection.insertMany(accounts); // Thêm tài khoản vào collection

    console.log(`${result.insertedCount} tài khoản đã được thêm vào collection.`);

  } catch (error) {
    console.log('Error:', error);
  } finally {
    await client.close(); // Đóng kết nối với MongoDB
  }
}

addAccountsToDB();