import { createServer } from 'http'
import { parse } from 'url'
import fs from 'fs'

createServer(function(req, res){
    const pathname=parse(req.url).pathname
    const ext = pathname.split('.')[1]
    const mimeType = 
        ext === "html" ? "text/html" :
        ext === "js"   ? "text/javascript" :
        ext === "mjs"  ? "text/javascript" :
        ext === "json" ? "application/json" :
        ext === "css"  ? "text/css" :
        ext === "png"  ? "image/png" : 
        ext === "ico"  ? "image/x-icon" : 
        ext === "svg"  ? "image/svg+xml" : "text";


        fs.readFile(`public${pathname}`, function (err, html) {
            if (err && err.code === "ENOENT") {
                res.statusCode = 404
                res.write("404 Not Found")
                res.end()
            } else {
                res.statusCode = 200
                res.setHeader(
                    'Content-type', mimeType
                )     
                res.write(html)
                res.end()
            }
        })
    }
).listen(8080)