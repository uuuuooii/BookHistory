import mongoose from 'mongoose';

const connect = async () => {
  const mongoURI = process.env.MONGO;
  console.log(mongoURI);
  try {
    await mongoose.createConnection(String(mongoURI));
  } catch (error) {
    console.error(error);
    throw new Error('Connection failed!');
  }
};

export default connect;
