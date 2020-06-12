const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
  let u = req.url
  // console.log(req.url); 
  // console.log(req.method); 
  // console.log(req.headers); 
  if(u != '/favicon.ico'){
    res.writeHead(200, {'Content-type': 'text/html'})
    // res.statusCode=404;
    // res.setHeader('Content-type', 'text/plain')
    if(u=='/') u='/index'
    fs.readFile('pages'+u+'.html', (e,d)=>{
      if(!e) {
        res.statusCode=200
        res.write(d)
        res.end() 
      } else {
        fs.readFile('pages/error404.html',(er,da)=>{
          res.statusCode=404
          if(er) {
            res.write('<h1>page not found</h1>')
            res.end() 
          } else {
            res.write(da)
            res.end() 
          }  
        })
      }
    })
  }
}).listen(8888)
