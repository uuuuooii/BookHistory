import mongoose from 'mongoose';

const connect = async () => {
  const mongoURI = process.env.MONGO;
  try {
    await mongoose.connect(String(mongoURI));
  } catch (error) {
    throw new Error('Connection failed!');
  }
};

export default connect;
