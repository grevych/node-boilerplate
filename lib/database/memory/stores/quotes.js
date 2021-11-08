const { Quote } = require('../../../quote');
const MemoryStore = require('../store');
const errors = require('../../errors');


class QuoteStore extends MemoryStore {
  _objectToModel(quote) {
    return {
      id: quote.id || null,
      content: quote.content,
      author: quote.author,
    }
  }

  _modelToObject(model) {
    let quote;

    try {
      quote = new Quote(model);
    } catch (error) {
      throw new errors.QuoteModelCorrupted();
    }

    return quote;
  }

  findById(quoteId) {
    let model;

    try {
      model = super.findById(quoteId);
    } catch (error) {
      if (error instanceof ModelNotFound.ItemNotFound) {
        throw new errors.QuoteModelNotFound();
      }
    }

    return this._modelToObject(model);
  }

  create(quote) {
    let model = this._objectToModel(quote);
    return super.create(model);
  }

  update(quote) {
    let model = this._objectToModel(quote);
    return this._modelToObject(super.update(model));
  }
}

module.exports = QuoteStore;
