// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('data/db.json')
const middlewares = jsonServer.defaults({ noCors: true })

server.use(middlewares)

server.use('/api/searchresults', router)
server.listen(8000, () => {
  console.log('Mock api server listening at localhost:8000')
})