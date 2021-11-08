const { QuoteModelNotFound } = require('./database/errors');
const { QuoteNotFound } = require('./quote');

class BoilerplateService {
  constructor(db) {
    this.db = db;
  }

  getExistingQuotes() {
    return this.db.quotes.all();
  }

  getExistingQuote(quoteId) {
    try {
      return this.db.quotes.findById(quoteId);
    } catch(error) {
      if (error instanceof QuoteModelNotFound) {
        throw new QuoteNotFound();
      }
      throw error;
    }
  }

  createQuote(quote) {
    try {
      const quoteId = this.db.quotes.create(quote);
      return this.db.quotes.findById(quoteId);
    } catch(error) {
      if (error instanceof QuoteModelNotFound) {
        throw new QuoteNotFound();
      }
      throw error;
    }
  }

  updateExistingQuote(quote) {
    try {
      this.db.quotes.update(quote);
      return this.db.quotes.findById(quote.id);
    } catch(error) {
      if (error instanceof QuoteModelNotFound) {
        throw new QuoteNotFound();
      }
      throw error;
    }
  }

  deleteExistingQuote(quoteId) {
    try {
      const quote = this.db.quotes.findById(quoteId);
      this.db.quotes.deleteById(quoteId);
      return quote;
    } catch(error) {
      if (error instanceof QuoteModelNotFound) {
        throw new QuoteNotFound();
      }
      throw error;
    }
  }
}

module.exports = BoilerplateService;
