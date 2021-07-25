import { createServer } from 'http';
import { parse } from 'url';
import fs from 'fs';

createServer(function(req, res){
    const pathname=parse(req.url).pathname
    const ext = pathname.split('.')[1]
    const mimeType = 
        ext === "html" ? "text/html" :
        ext === "js" ? "text/javascript" :
        ext === "mjs" ? "text/javascript" :
        ext === "json" ? "application/json" :
        ext === "css" ? "text/css" :
        ext === "png" ? "image/png" : 
        ext === "ico" ? "image/x-icon" : "text"


        fs.readFile(`public${pathname}`, function (err, html) {
            if (err) {
                throw err
            }  
            res.statusCode = 200;
            res.setHeader(
                'Content-type', mimeType
            );     
            res.write(html)
            res.end()
        })
    }
).listen(8080);

console.log("listening on port 8080")