const http = require('http');
const fs = require('fs');
const path = require('path');
const { fileURLToPath } = require('url');


const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log("Request for " + req.url + 'by method' + req.method);

    if (req.method == 'GET') {
        var fileUrl;
        if (req.url == '/') {
            fileUrl = '/index.html';
        } else {
            fileUrl = req.url;
        }

        var filePath=path.resolve('./public'+fileUrl);
        const fileExt=path.extname(filePath);
        if(fileExt=='.html'){
            fs.exists(filePath,(exist)=>{
                if(exist){

                }else{
                    res.statusCode=404;
                    res.setHeader('Content-type' , 'text/html');
                    res.end('<html><body><h1>Hello world!</h!></body></html>');
                    return;
                }
            })
        }
    }
});

const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.end('<html><body><h1>Hello world!</h!></body></html>')
});