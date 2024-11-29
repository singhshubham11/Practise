const express = require('express');
const auth = require('../middelware/authMiddelware');
const {createTodo, getTodo, updateTodo, deleteTodo} = require('../controllers/todoController');


const router = express.Router();

router.post('/', auth, createTodo);
router.get('/', auth, getTodo);
router.put('/:id', auth, updateTodo);
router.delete('/:id', auth, deleteTodo);

module.exports = router;