const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then((workouts) => {
            res.json(workouts);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
        { _id: req.params.id },
        { $push: { exercises: req.body } },
        { new: true }
    )
        .then((workouts) => {
            res.json(workouts);
        })
        .catch((err) => {
            res.json(err);
        });
});


router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
        .then((workouts) => {
            res.json(workouts);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7)
        .then((workouts) => {
            res.json(workouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;