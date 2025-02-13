const express = require('express')
const app = express()
const port = 4444
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())

let corsOptions = {
  origin: ['https://example.com']
}

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/submit', cors(corsOptions), (req, res) => {
    console.log(req.body)
    res.json({
      code: 'buang'
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
