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
    var _a, _b;
    const token = (_a = req.header('Authorization')) !== null && _a !== void 0 ? _a : false;
    const token2 = (_b = req.header('Teste')) !== null && _b !== void 0 ? _b : false;
    if (token === 'admin123' && token2 === 'admin654') {
        next();
    }
    else {
        let messageReturned = '';
        if (token === false)
            messageReturned = 'Nao encontrei o Authorization';
        if (token2 === false)
            messageReturned = 'Nao encontrei o Teste';
        res.status(401).json({ message: messageReturned });
    }
}
function autheticateToken2(req, res, next) {
    var _a;
    const token = (_a = req.header('MAISUM')) !== null && _a !== void 0 ? _a : false;
    if (token === 'admin987') {
        next();
    }
    else {
        res.status(401).json({ message: 'DEU RUIM DEPLOY PROD' });
    }
}
router.use(autheticateToken);
router.use(autheticateToken2);
router.get('/teste', (req, res) => {
    res.json({ teste: "dsadsadas" });
});
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
