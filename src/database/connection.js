const mongoose = require('mongoose');

const connect = async () => {
  try {
    const connection = await mongoose.connect(
      'mongodb+srv://Yatharth:123@cluster0.b7nygtc.mongodb.net/PortfolioMembers'
    );
    console.log('Connected to Database :)');
  } catch (e) {
    console.log('oop cant connect to database');
    console.log(e);
  }
};
connect();

module.exports = connect;
