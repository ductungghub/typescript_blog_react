import mongoose, { ConnectOptions } from "mongoose";

const URI = process.env.MONGODB_URL

async function connectToDatabase() {
  try {
    await mongoose.connect(`${URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log('DB Connected');
  } catch (err) {
    console.log(`Initial Distribution API Database connection error occurred -`, err);
  }
}


connectToDatabase();
