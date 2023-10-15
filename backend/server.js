require('dotenv').config({ path: '.env' });

// create express instance
const express = require('express');
const app = express();
const cors = require('cors')

//middleware to handle req.body
app.use(cors());
app.use(express.json());

const mysql = require('mysql2');
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PSSWORD,
  database: process.env.DB_NAME
})

const realConnection = connection.promise();


app.post('/signup', async (req, res) => {
  const queryResult =  {
    rows: {}, 
    fields:{}, 
    error:{}
  };
  const values = [req.body.name[0], req.body.email[0], req.body.password[0]]
  console.log(values);
  try{
    const [rows, fields] = (await realConnection.execute(
      'INSERT INTO users (name,email,password) VALUES (?,?,?)',
      values));
  }
  catch(error){
    console.log('ERROREEEE')
    console.log(error)
    queryResult.error = error.sqlMessage;
    return res.status(400).json({success: false, content: queryResult.error});
  }
  console.log('OKOKOKOKOK')
  return res.status(201).json({success: true, content: queryResult.rows});
})

app.get('/', (req, res) => {
  return res.status(200).json({success: true, content: 'yeeee'});
})

// start listen to port 3000
const server = app.listen(5000, function () {
  const host = server.address().address
  const port = server.address().port
  console.log("Example app listening at "+host+":"+port)
})