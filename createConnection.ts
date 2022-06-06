import * as dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import hotels_csv from './hotels_csv';

dotenv.config();

createConnection({
    url: process.env.DATABASE,
    type: "postgres",
    entities: [hotels_csv],
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})