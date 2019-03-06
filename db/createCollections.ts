import { Collection, Db } from 'mongodb';

export async function createJsonCollection(db: Db): Promise<Collection<any>> {
  const jsonDataCollection = await db.createCollection('jsoncollection', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: [
          'balance',
          'age',
          'name',
          'gender',
          'company',
          'email',
          'phone',
          'address',
          'registered'
        ],
        properties: {
          _id: {
            bsonType: 'objectId'
          },
          index: {
            bsonType: 'int',
            minimum: 0
          },
          guid: {
            bsonType: 'string'
          },
          isActive: {
            bsonType: 'bool'
          },
          balance: {
            bsonType: 'int'
          },
          age: {
            bsonType: 'int'
          },
          name: {
            bsonType: 'string'
          },
          gender: {
            enum: ['male', 'female']
          },
          company: {
            bsonType: 'string'
          },
          email: {
            bsonType: 'string'
          },
          phone: {
            bsonType: 'string'
          },
          address: {
            bsonType: 'string'
          },
          registered: {
            bsonType: 'string'
          }
        }
      }
    }
  });

  return jsonDataCollection;
}

export async function createSequenceCollection(db: Db): Promise<Collection<any>> {
  const sequenceCollection = await db.createCollection('sequence', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        properties: {
          sequenceReference: {
            bsonType: 'string'
          },
          sequenceNumber: {
            bsonType: 'int'
          }
        }
      }
    }
  });

  return sequenceCollection;
}
