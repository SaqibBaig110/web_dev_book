const http=require('http')
const fs=require('fs')
const port=3000

function serveStaticFile(res,path,contentType,responseCode=200){
    fs.readFile(__dirname+path,(err,data)=>{                 //if my script resolves in /home/sites/app.js,__dirname will resolve to home/sites
        if(err){
            console.error(`Error reading file: ${err}`);  // Log errors to console
            res.writeHead(500,{'Content-Type':'text/plain'})
            return res.end('500-Internal Error')
        }
        res.writeHead(responseCode,{'Content-Type':contentType})
        res.end(data)
    })
}

const server=http.createServer((req,res)=>{
    const path=req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase()
    switch(path){
        case '':
            serveStaticFile(res,'/home.html','text/html')
            break
        case '/about':
            serveStaticFile(res,'/about.html','text/html')
            break
        case '/img/logo.png':
            serveStaticFile(res,'/img/logo.png','image/png')
            break
        default:
            serveStaticFile(res,'/404.html','text/html',404)
            break            
    }
})

server.listen(port,()=>console.log(`server started on port ${port};`+'press ctrl-c to terminate...'))