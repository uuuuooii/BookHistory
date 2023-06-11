import mongoose from 'mongoose';

const connect = async () => {
  try {
    if (process.env.MONGO) {
      await mongoose.connect(process.env.MONGO);
      console.log('MongoDB connected');
    }
  } catch (error) {
    console.error('Connection failed:', error);
    throw new Error('Connection failed!');
  }
};

export default connect;
