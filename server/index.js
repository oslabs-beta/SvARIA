import fs from 'fs';
import pg from 'pg';
import url from 'url';
import dotenv from 'dotenv';

dotenv.config();
const password = process.env.Database_Password
const database_url = process.env.Database_URL
const certificate = process.env.Database_Certificate
const user = process.env.Database_User

const config = {
    user: `${user}`,
    password: `${password}`,
    host: `${database_url}`,
    port: 21060,
    database: "defaultdb",
    ssl: {
        rejectUnauthorized: true,
        ca: `${certificate}`,
    },
};
const db = new pg.Client(config);

db.connect(function (err) {
    console.log('connected to db')
    if (err){
        throw err;
    } 
   
    db.query("SELECT VERSION()", [], function (err, result) {
        if (err) {
            throw err;
        }
     
        console.log(result.rows[0].version);
   
    });
});

db.on('error', (err) => {
    console.error('Unexpected error on database client', err);
    // Attempt to reconnect
    db.end().catch(() => {});
    setTimeout(() => db.connect(), 1000);
});

export default db; 
