const http = require('http');
const fs = require('fs');



const server = http.createServer((req,res)=>{

if(req.url === '/'){
    fs.readFile('./views/index.html',(err,data)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(data);
    res.end()
    })
}

})

server.listen(process.env.PORT,()=>{
    console.log('server is running')
})
