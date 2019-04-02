const fs = require('fs')
const dataBuffer = fs.readFileSync('1-json.json')
const data = JSON.parse(dataBuffer)

data.name = "Roman"
data.age = 35

const newData = JSON.stringify(data)

fs.writeFileSync('1-json.json', newData)