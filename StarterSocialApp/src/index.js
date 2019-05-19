import 'dotenv/config';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const users = [
  {
    id: 1,
    firstName: 'Ivan',
    lastName: 'Aimufua',
    email: 'ivanaimufua41@gmail.com',
    age: 26,
    city: 'Edmonton',
    province: 'Alberta',
    country: 'Canada',
  },
  {
    id: 2,
    firstName: 'Alana',
    lastName: 'Vansevenandt',
    email: 'AlanaJMV@gmail.com',
    age: 25,
    city: 'Morinville',
    province: 'Alberta',
    country: 'Canada',
  },
];

app.get('/users', (req, res) => res.send(users));

app.get('/users/:userId', (req, res) => {
  const user = users.find(u => u.id === +req.params.userId);
  return res.send(user);
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

const applicationGreeting = () => {
  console.log(`Running on port ${process.env.PORT}`);
};

app.listen(process.env.PORT, applicationGreeting);

// console.log('Hello this is a node project');

// console.log(process.env.ApiURL); // call api url using proccess.env.apiURL
