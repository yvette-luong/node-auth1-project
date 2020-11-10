const server = require('./api/server.js')

const PORT = process.env.PORT || 5500; 
server.listen(PORT, () => console.log(`\n-- Running on port ${PORT} on ---> http://localhost:${PORT} --\n`))