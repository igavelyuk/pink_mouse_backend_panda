const http = require('http')
const { parse } = require('querystring');

const server = http.createServer(function(request, response) {
  console.dir(request.param)

  // if (request.method == 'POST') {
  //   console.log('POST')
  //   var body = ''
  //   request.on('data', function(data) {
  //     body += data
  //     console.log('Partial body: ' + body)
  //   })
  //   request.on('end', function() {
  //     console.log('Body: ' + body)
  //     response.writeHead(200, {'Content-Type': 'text/html'})
  //     response.end('post received')
  //   })
  // }

  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        console.log(
            parse(body)
        );
        res.end('ok');
    });
}
})

const port = 3000
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)
