const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mbhiman70:hyvsITdwLwXjNFKf@bondhub-cluster0.u5lza.mongodb.net/GoalHub");

const goalSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    completed: { 
        type: Boolean, 
        default: false 
    },
})

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;