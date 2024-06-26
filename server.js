const fastify = require('fastify')({ logger: true });
const path = require('path');

fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'static'),
  prefix: '/static/',
});

fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0');
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
