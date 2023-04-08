import fastify from 'fastify';

const app = fastify({ logger: true });

app.get('/ping', (req, res) => {
    res.send({ pong: 'pong' });
});

export { app };
