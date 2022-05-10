import express from 'express';

const port = process.env.PORT ?? 2000;
const server = express();

server.use(express.json());
server.use(express.static('dist'));

server.get('/api/hello', (req, resp) => {
  resp.send({ greet: 'hello' });
});

server.get('*', (req, resp) => {
  resp.sendFile('dist/index.html');
});

server.listen(port, () => {
  console.log(`listening at ${port}...`);
});