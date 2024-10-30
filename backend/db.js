const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mbhiman70:hyvsITdwLwXjNFKf@bondhub-cluster0.u5lza.mongodb.net/GoalHub");

const goalSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;