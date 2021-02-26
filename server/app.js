const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000
const routers = require('./routes')

app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use(cors())

app.use('/',routers)

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`)
})