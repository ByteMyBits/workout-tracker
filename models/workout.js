const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {
            type: {
                type: String,
                enum: ["cardio", "resistance"],
                required: true
            },
            name: {
                type: String,
                trim: true,
                required: true
            },
            distance: {
                type: Number
            },
            duration: {
                type: Number,
                required: true
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }
        }
    ],
});

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;