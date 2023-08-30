import { Request, Response, Router, NextFunction } from 'express';
import bodyParser from 'body-parser';

const router = Router();
router.use(bodyParser.json());

// Contrato de objeto
interface Todo {
  id: number; // "VC VAI TER QUE PASSAR UM NUMERO"
  task: string;
}

// Banco de dados na memoria
const todos: Todo[] = [];

// Auth 
function autheticateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization') ?? false;
  const token2 = req.header('Teste') ?? false;
  if (token === 'admin123' && token2 === 'admin654') {
    next();
  } else {
    let messageReturned = '';

    if (token === false)
      messageReturned = 'Nao encontrei o Authorization';

    if (token2 === false)
      messageReturned = 'Nao encontrei o Teste';

    res.status(401).json({ message: messageReturned });
  }
}

function autheticateToken2(req: Request, res: Response, next: NextFunction) {
  const token = req.header('MAISUM') ?? false;
  if (token === 'admin987') {
    next();
  } else {
    res.status(401).json({ message: 'DEU RUIM' });
  }
}

router.use(autheticateToken);
router.use(autheticateToken2);


router.get('/todos', (req: Request, res: Response) => {
  res.json(todos);
});

router.post('/todos', (req: Request, res: Response) => {
  const newTodo: Todo = req.body;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

router.put('/todos/:id', (req: Request, res: Response) => {
  const todoId = parseInt(req.params.id, 10);
  const updatedTodo: Todo = req.body;

  const index = todos.findIndex(todo => todo.id === todoId);
  if (index !== -1) {
    todos[index] = updatedTodo;
    res.json(updatedTodo);
  } else {
    res.status(404).json({ message: 'Nao encontrado' });
  }
});

router.delete('/todos/:id', (req: Request, res: Response) => {
  const todoId = parseInt(req.params.id, 10);
  const index = todos.findIndex(todo => todo.id === todoId);
  if (index !== -1) {
    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo[0]);
  } else {
    res.status(404).json({ message: 'Nao encontrado' });
  }
});

export default router;