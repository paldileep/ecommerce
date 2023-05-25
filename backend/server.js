const api = require('./api/index')
const port = 5000

api.listen(port, ()=> { 
    console.log(`server is running on ${port}`)
})