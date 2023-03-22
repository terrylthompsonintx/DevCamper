const mongoose = require ('mongoose')

const connectDb = async () => {
  const conn = await  mongoose.connect(process.env.MONGO_URI)

console.log(`MongoDb connected: ${conn.connection.host} `.green.underline.bold)
};

module.exports = connectDb;