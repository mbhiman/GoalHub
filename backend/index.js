const express = require('express');
const { createGoal, updateGoal } = require('./types');
const app = express();

app.use(express.json());

app.post("/goal", (req, res) => {
    const createPlayload = req.body;
    const parsedplayload = createGoal.safeParse(createPlayload);
    if(!parsedplayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    

});

app.get("/goals", (req, res) => {

});

app.put("/completed", (req, res) => {
    const updatePayload = req.body;
    const parsedplayload = updateGoal.safeParse(updatePayload);
    if(!parsedplayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    
});


app.listen(3000, )