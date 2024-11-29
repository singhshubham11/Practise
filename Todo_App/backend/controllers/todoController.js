const Todo = require('../models/todoModel');

const createTodo = async (req, res) => {
    const {task, completed} = req.body;
    try {
        await Todo.create({
            userid: req.userid,
            task,
            completed
        });
        res.status(201).json({
            message: 'Todo is created'
        })
    } catch (error) {
        res.status(400).json({
            message: 'Error creating todo ', error
        })
    }
};

const getTodo = async (req, res) => {
    try {
        const todos = await Todo.find({userid: req.userid});
        res.status(200).json({todos});
    } catch (error) {
        res.status(400).json({
            message: 'Error fetching todos ', error
        })
    }
};

const updateTodo = async (req, res) => {
    const {id} = req.params
    const {task, completed} = req.body;
    try {
        const todo = await Todo.findOneAndUpdate(
            { _id: id, userid: req.userid }, // Matching the specific todo by its ID and the user's ID
            { task, completed },            // Fields to update
            { new: true }                   // Returns the updated document
        );        
        res.status(200).json({todo});
    } catch (error) {
        res.status(500).json({ message: "Error updating todo", error });
    }
};

const deleteTodo = async (req, res) => {
    const {id} = req.params;
    try {
        await Todo.findOneAndDelete({
            _id: id,
            userid: req.userid
        });
        res.json({ message: "Todo deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting todo", error });
    }
};

module.exports = {createTodo, getTodo, updateTodo, deleteTodo};