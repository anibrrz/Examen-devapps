import process from 'process';
import { MongoClient, Db } from 'mongodb';
import { getLogger } from './logger.config';

const uri = process.env.MONGODB_URI ?? "mongodb://localhost:27017";
const dbName = process.env.DB_NAME ?? "Examen";
let db: Db;

export const connectToDatabase = async () => {
  getLogger().debug('Conectando la base de datos...');

  const client = new MongoClient(uri);
  await client.connect();
  db = client.db(dbName);

  getLogger().info('📦 Conectado a MongoDB');
}

export const getDb = (): Db => {
  if (!db) throw new Error('Base de datos no conectada');
  return db;
}
