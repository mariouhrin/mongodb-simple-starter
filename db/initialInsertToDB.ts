import { mongodbClient } from './dbConnection';
import { createJsonCollection, createSequenceCollection } from './createCollections';
import { transformData } from './utils';
import data from './data.json';

async function insertJSON() {
  try {
    const { db } = await mongodbClient();

    const jsonDataCollection = await createJsonCollection(db);
    const jsonData = transformData(data);
    await jsonDataCollection.createIndex({ index: 1 }, { unique: true });
    await jsonDataCollection.insertMany(jsonData);

    const sequenceCollection = await createSequenceCollection(db);
    await sequenceCollection.insertOne({ seqNumber: 33, seqRef: 'ref' });
  } catch (err) {
    console.log(`got error: ${err}`);
  }
}

insertJSON();
