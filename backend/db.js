const Pool = require("pg").Pool;

const pool = new Pool({

    user: 'postgres',
    host: '13.127.131.199', 
    database: 'hvpnl',
    password: 'Ubuntu#0223',
    port: 5432  
  });

  module.exports =pool;
