import uuidv4 from 'uuid/v4';
import moment from 'moment';

import { mongodbClient } from './dbConnection';
import { getNextSeq } from './utils';

async function insertNewDocument() {
  try {
    const { db } = await mongodbClient();

    const sequenceCollection = await db.collection('sequence');
    const jsonDataCollection = await db.collection('jsoncollection');

    await jsonDataCollection.insertOne({
      index: await getNextSeq(sequenceCollection),
      guid: uuidv4(),
      isActive: false,
      balance: 1246,
      age: 21,
      name: 'Mario Uhrin',
      gender: 'male',
      company: 'KENGEN',
      email: 'mejiathompson@kengen.com',
      phone: '+1 (985) 570-2837',
      address: '734 Neptune Avenue, Saranap, Wisconsin, 1131',
      registered: moment.utc(new Date()).format('YYYY-MM-DD')
    });

    const result = await jsonDataCollection.find({}, { sort: { $natural: 1 } }).toArray();

    console.log(result);
  } catch (err) {
    console.log(`got error: ${err}`);
  }
}

insertNewDocument();
