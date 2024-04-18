const router = require('express').Router();
const Activity = require('../models/activity.model')

router.route('/').get((req, res) => {
    Activity
    .find()
    .then((activities) => res.json(activities))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/add').post(async(req, res) => {
    const activity = req.body.activity
    const editor = req.body.editor
    const newActivity = await new Activity({
        activity,
        editor
    })

    newActivity
    .save()
    .then(() => res.json('Activity added'))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
    Activity
    .findById(req.params.id)
    .then((activity) => res.json(activity))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/delete/:id').delete(async(req, res) => {
    await Activity
    .findByIdAndDelete(req.params.id)
    .then(() => res.json('activity deleted'))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post(async(req, res) => {
    await Activity
    .findById(req.params.id)
    .then((editActivity) => {
        editActivity.activity = req.body.activity
        editActivity.editor = req.body.editor
        editActivity
        .save()
        .then(() => res.json('activity updated'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router;