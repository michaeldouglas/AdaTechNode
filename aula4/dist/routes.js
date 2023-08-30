"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const router = (0, express_1.Router)();
router.use(body_parser_1.default.json());
// Banco de dados na memoria
const todos = [];
// Auth 
function autheticateToken(req, res, next) {
    const token = req.header('Authorization');
    if (token === 'admin123') {
        next();
    }
    else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}
router.use(autheticateToken);
router.get('/todos', (req, res) => {
    res.json(todos);
});
router.post('/todos', (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.status(201).json(newTodo);
});
router.put('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id, 10);
    const updatedTodo = req.body;
    const index = todos.findIndex(todo => todo.id === todoId);
    if (index !== -1) {
        todos[index] = updatedTodo;
        res.json(updatedTodo);
    }
    else {
        res.status(404).json({ message: 'Nao encontrado' });
    }
});
router.delete('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id, 10);
    const index = todos.findIndex(todo => todo.id === todoId);
    if (index !== -1) {
        const deletedTodo = todos.splice(index, 1);
        res.json(deletedTodo[0]);
    }
    else {
        res.status(404).json({ message: 'Nao encontrado' });
    }
});
exports.default = router;
