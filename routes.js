const fs = require('fs');

const requestsHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>home</title></head>');
        res.write('<body><h1>wordle solver</h1><form action="/word" method="POST"><input type="text" name="word"><button type="submit">send</button></form></body>')

        res.write('</html>');

        return res.end();
    }

    if (url === '/word' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('word.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });


    }


    // res.setHeader('Content-Type', 'text/html');
    // res.write('wordle solver');
    // res.end();
};

module.exports = requestsHandler;

