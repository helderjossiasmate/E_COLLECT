import express, { response } from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);

// Métodos HTTP:
// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end   
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// Request Param: são parâmetros que vem na própria rota que identificam um recurso
// Query Param: são parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
// Request Body: são parâmetros para criação/atualização de informaçãos

/*const users = [
    'Diego', //0
    'Hélder', //1
    'Edilson', //2
    'Viano', //3
    'Aurio', //4
    'Lequechane' //5 
];*/

//Listagem de usuários


/*
//Busca de um único usuário
app.get('/users/:id', (request,response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

//Criar um novo usuário
app.post('/users', (request, response) => {
    const data = request.body;

    console.log(data);
    
    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
});
*/
