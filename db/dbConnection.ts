import { MongoClient } from 'mongodb';

export async function mongodbClient() {
  const url = 'mongodb://localhost:27017/test';

  try {
    const connection: MongoClient = await MongoClient.connect(url, {
      useNewUrlParser: true
    });
    console.log('Connected to db');

    const db = connection.db('my-test-db');
    return { connection, db };
  } catch (error) {
    console.log('Unable to connect to db');
  }
}

process.on('SIGINT', async () => {
  const { connection } = await mongodbClient();
  connection.close();
  process.exit();
});
