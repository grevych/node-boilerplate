const QuotesStore = require('./stores/quotes');


class MemoryDatabase {
  constructor() {
    this.quotes = new QuotesStore();
  }
}

module.exports = MemoryDatabase;
