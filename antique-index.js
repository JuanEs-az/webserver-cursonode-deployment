const http = require("http")
const port = 8081
const server  = http.createServer( (req, res) => {
    res.writeHead( 200, { "Content-Type": 'application/json' } )
    res.write({message: 'Hola Mundo'})
    console.log("Joined-")
    res.end()
})

server.listen(port)
console.log("Listening in port: ", port)