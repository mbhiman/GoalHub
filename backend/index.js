const express = require('express');
const { createGoal, updateGoal } = require('./types');
const Goal = require('./db');
const app = express();

app.use(express.json());

app.post("/goal", async (req, res) => {
    const createPlayload = req.body;
    const parsedplayload = createGoal.safeParse(createPlayload);
    if (!parsedplayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    await Goal.create({
        title: createPlayload.title,
        description: createPlayload.description,
        completed: false,
    })

    res.json({
        msg: "Goal created"
    })

});

app.get("/goals", async (req, res) => {
    const goals = await Goal.find({});

    res.json(
        goals
    )
});

app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedplayload = updateGoal.safeParse(updatePayload);
    if (!parsedplayload.success) {
        res.status(411).json({ 
            msg: "You sent the wrong inputs",
        })
        return;
    }

    await Goal.update({
        _id: req.body.id,
    }, {
        completed: true
    })
    res.json({
        msg: "Goal marked as completed"
    })

});


app.listen(3000);