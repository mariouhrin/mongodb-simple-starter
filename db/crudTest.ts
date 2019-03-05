import { mongodbClient } from './dbConnection';

async function insertData() {
  const { db } = await mongodbClient();
  // const myCollection = db.collection('my-collection');
  try {
    const myCollection = await db.createCollection('testcollection', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['name', 'surname'],
          properties: {
            name: {
              bsonType: 'string',
              description: 'must be a string and is required'
            },
            surname: {
              bsonType: 'string',
              description: 'must be a string and is required'
            },
            age: {
              bsonType: 'int',
              minimum: 18,
              description: 'must be an integer '
            }
          }
        }
      }
    });

    await myCollection.insertOne({ name: 'johny', surname: 'bravo', age: 22 });
    await myCollection.insertMany([
      { name: 'john', surname: 'doe', age: 32 },
      { name: 'mary', surname: 'jane', age: 22 },
      { name: 'janko', surname: 'hrasko', age: 99 }
    ]);
    const data = await myCollection.find({}).toArray();
    console.log(data);
  } catch (e) {
    console.log(`error: ${e}`);
  }
}

insertData();
