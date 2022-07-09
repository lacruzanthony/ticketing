import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../app';
import jwt from 'jsonwebtoken';

declare global {
  var signin: () => string[];
}

let mongo: any;

beforeAll(async () => {
  process.env.JWT_KEY = 'abcd';
  mongo = await MongoMemoryServer.create();
  const mongoUri = await mongo.getUri();

  await mongoose.connect(mongoUri);
}, 9999);

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
}, 9999);

afterAll(async () => {
  if (mongo) {
    await mongo.stop();
  }
  await mongoose.connection.close();
}, 999999);

global.signin = () => {
  // Build a JWT payload. { id, email }.
  const payload = {
    id: new mongoose.Types.ObjectId().toHexString(),
    email: 'test@test.com'
  };
  // create the JWT.
  const token = jwt.sign(payload, process.env.JWT_KEY!);
  // Build session Object. { jwt: MY_JWT }.
  const session = { jwt: token };
  // turn that session into JSON.
  const sessionJSON = JSON.stringify(session);
  // Take JSON and encode ig as base64.
  const base64 = Buffer.from(sessionJSON).toString('base64');
  // return a string thats the cookie with the encoded data.
  return [`session=${base64}`];
};
