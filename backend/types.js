const zod = require('zod');

const createGoal = zod.object({
    title: zod.string().min(3, "Title must be at least 3 characters."),
    description: zod.string().min(5, "Description must be at least 5 characters."),
})

const updateGoal = zod.object({
    id: zod.string
})

module.exports = { createGoal, updateGoal };