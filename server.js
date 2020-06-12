const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req,res)=>{
  // console.log(req.url); 
  // console.log(req.method); 
  // console.log(req.headers); 
  let u = req.url
  if(u=='/') u='/index'

  if(u != '/favicon.ico'){
    if(u.startsWith('/public')) {
      res.statusCode=200
      switch(path.extname(u)){
        case '.css':
          res.setHeader('Content-type', 'text/css')
        case '.js':
          res.setHeader('Content-type', 'text/javascript')
        default:
          u=u.substr(1)
          console.log(path.extname(u)); 
          fs.readFile(u,(e3,d3)=>{
            if(e3) console.log(u); 
            res.end(d3)
          })
          break;
      }
    } else {
    res.writeHead(200, {'Content-type': 'text/html'})
    // res.statusCode=404;
    // res.setHeader('Content-type', 'text/plain')
    fs.readFile('pages'+u+'.html', 'utf-8', (e,d)=>{
      if(!e) {
        fs.readFile('layout/menu.html', 'utf-8', (err, menu)=>{
          if(err) throw err
          d=d.replace(/\{\{menu\}\}/, menu)
          fs.readFile('layout/header.html','utf-8',(e2,header)=>{
            if(e2) throw e2
            d=d.replace(/\{\{header\}\}/, header)
            res.statusCode=200
            res.write(d)
            res.end() 
          })
        })
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
  }}
}).listen(8888)
