const http = require('http')

const server = http.createServer((req , res)  => {
    console.log(' Request')

    res.writeHead(200, {
        'access-control-allow-origin': '*'
    })

    res.end('Hello from Back-end')
})

server.listen(3000)