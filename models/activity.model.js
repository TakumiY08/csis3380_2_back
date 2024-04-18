const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema(
    {
        activity: {type: String, required: true},
        editor: {type: String, required: true}
    },
    {
        collection: 'activities'
    }
)

const ActivityModel = mongoose.model('ActivityModel', activitySchema)
module.exports = ActivityModel