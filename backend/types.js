const zod = require('zod');

const createGoal = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateGoal = zod.object({
    id: zod.string
})

module.exports = { createGoal, updateGoal };