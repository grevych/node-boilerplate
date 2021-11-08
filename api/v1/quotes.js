const Service = require('../../lib/service');
const { QuoteNotFound } = require('../../lib/quote');
const serializeQuote = require('./serializers').quote;


module.exports = function (fastify, opts, done) {
  fastify.after(() => {
    // use preHandler to authenticate all the routes
    fastify.addHook('preHandler', fastify.auth([fastify.basicAuth]));

    fastify.addHook('onError', async (request, reply, error) => {
      switch(error.construct) {
        case QuoteNotFound:
          reply.status(404).send(error);
        default:
          reply.status(500).send(error);
      }
    });
  });

  const service = new Service(fastify.db);

  // Fetch all existing quotes
  fastify.get('/', (request, reply) => {
    reply.send(service.getExistingQuotes().map(serializeQuote));
  });

  // Create a new quote
  fastify.post('/', (request, reply) => {
    reply.status(201).send(serializeQuote(service.createQuote(request.body)));
  });

  // Fetch a specific existing quote
  fastify.get('/:quoteId', (request, reply) => {
    reply.send(serializeQuote(service.getExistingQuote(request.params.quoteId)));
  });

  // Update an existing quote
  fastify.put('/:quoteId', (request, reply) => {
    request.body.id = request.params.quoteId;
    reply.send(serializeQuote(service.updateExistingQuote(request.body)));
  });

  // Delete an existing quote
  fastify.delete('/:quoteId', (request, reply) => {
    reply.send(serializeQuote(service.deleteExistingQuote(request.params.quoteId)));
  });

  return fastify;
}
