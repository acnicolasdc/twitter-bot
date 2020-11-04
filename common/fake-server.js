const http = require('http');
const fs = require('fs');
const html = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
const notFound = fs.readFileSync('./404.html');

const renderView = (response, view, status = 200) => {
    response.writeHead(status, { "Content-Type": "text/html"})
    response.write(view);
    response.end();
}

http.createServer((request, response)=>{
    const { url } = request;
    if(url==="/") {
        renderView(response, html);
    } else if(url==="/about") {
        renderView(response, about);
    } else {
        renderView(response, notFound, 404);
    }

    response.end();
}).listen(8080)