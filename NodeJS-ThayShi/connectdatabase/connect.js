const mongoose = require('mongoose');

// Thay đổi chuỗi kết nối dưới đây bằng chuỗi kết nối MongoDB của bạn
const url = 'mongodb+srv://longhoangngoc:lsk4jzgv@cluster0.clweeai.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    mongoose.connection.db.listCollections().toArray((err, collections) => {
      if (err) {
        console.error('Error fetching collections:', err);
        return;
      }

      const collectionNames = collections.map(collection => collection.name);
      console.log('Collections:', collectionNames);

      mongoose.disconnect();
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });



