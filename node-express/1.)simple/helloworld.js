const http=require('http')
const port=3000

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Hello world')
})

server.listen(port,()=>console.log(`server started on port ${port}; `+'Press ctrl-c to terminate....'))