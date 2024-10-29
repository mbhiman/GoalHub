const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mbhiman70:hyvsITdwLwXjNFKf@bondhub-cluster0.u5lza.mongodb.net/GoalHub");

const goalSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const goal = mongoose.model('goals', goalSchema);

module.exports = { goal };