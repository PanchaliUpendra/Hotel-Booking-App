const http = require('http');
const  app = require('./app');
const pool = require('./db');

require('dotenv').config();
const PORT = 8080;

const server = http.createServer(app);


async function startServer(){
    try{
        await pool.query('SELECT NOW()');
        console.log('connected to postgreSQL...');
        server.listen(PORT,"0.0.0.0",()=>{
            console.log(`server listening on PORT ${PORT}...`);
        });
    }catch(err){
        console.error('Error connecting to PostgreSQL:', err);
        process.exit(1); // Exit the process if MongoDB connection fails
    }
}

startServer();