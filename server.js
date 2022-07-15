const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const dbConnection = require('./database/connection')

dotenv.config()

const app = express()
dbConnection()

const PORT = process.env.PORT || 3000

const logger = function (req, res, next) {
  console.log('logging')
  next()
}
app.use(express.static('public'));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger)

app.get('/', (req, res, next) => {
  res.send('hallo from backend')
})
app.use('/api/v1/product', require('./routes/productRoutes'))
app.use('/api/v1/category', require('./routes/categoryRoutes'))

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`)
})

