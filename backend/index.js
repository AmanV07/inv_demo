const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a todo
// Petrol Table


  //get all petrol

  app.get("/inv", async (req, res) => {
    try {
      const allinv = await pool.query("SELECT * FROM inv_demo");
      res.json(allinv.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

  //delete a petrol

 
  

  app.listen(5000, () => {
    console.log("server has started on port 5000");
  });