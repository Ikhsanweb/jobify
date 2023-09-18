import mongoose from 'mongoose';

// const connectionString =
//   '';

const connectDB = (url) => {
  return mongoose.connect(url);
};
export default connectDB;
