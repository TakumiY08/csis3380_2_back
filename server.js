const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const activityRouter = require('./routes/activities')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://ty_mongouser:csis3380g2@atlascluster.hp3vha1.mongodb.net/CSIS3380_CLASS?retryWrites=true&w=majority&appName=AtlasCluster";

mongoose.connect(uri,
{
    useNewUrlParser: true, useUnifiedTopology: true
})

const connection = mongoose.connection
connection.prependListener('open', () => {
    console.log('Mongo DB Connection')
})

app.use('/activity', activityRouter)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})