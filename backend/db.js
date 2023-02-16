const Pool = require("pg").Pool;

const pool = new Pool({

    user: 'postgres',
    host: '43.205.216.49', 
    database: 'hvpnl',
    password: 'Ubuntu#0223',
    port: 5432  
  });

  module.exports =pool;