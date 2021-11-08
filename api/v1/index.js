const Fastify = require('fastify');
const FastifyAuth = require('fastify-auth');
const FastifyBasicAuth = require('fastify-basic-auth');
const helmet = require('fastify-helmet');
const cors = require('fastify-cors');

const middlewares = require('./middlewares');
const quotesAPI = require('./quotes');


module.exports = (config, db) => {
  const fastify = Fastify({
    logger: config.logger.enabled,
  });

  // application/json is included by default
  fastify.removeContentTypeParser(['text/plain'])

  fastify.register(cors, {});
  fastify.register(
    helmet,
    { contentSecurityPolicy: false }
  )
  fastify.register(FastifyAuth);
  fastify.register(
    FastifyBasicAuth,
    {
      validate: middlewares.validate,
      authenticate: middlewares.authenticate,
    }
  );

  fastify.decorate('db', db);
  fastify.register(quotesAPI, { prefix: '/api/v1/quotes' });

  fastify.listen(config.port, function onError(err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  })
};
