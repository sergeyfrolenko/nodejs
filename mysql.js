const http = require('http');
const mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'user',
  password : config.PASSWORD,
  database : 'nodejs'
});

connection.connect(e=>{
  if(e) console.log(e);
  console.log('connected');
});

connection.query('SELECT * FROM pet', (err,result,field)=>{
  console.log(err);
  console.log(result);
  console.log(field);
});

connection.end(e=>{
  if(e) console.log(e);
  console.log('exit mysql connection');
});

http.createServer((req,res)=>{
  
  switch(req.url) {
    case '/' : res.end('/'); break;
    case '/index' : res.end('/index'); break;
    default: res.end('404'); break;
  }

  console.log(req.url);

}).listen(8888);
