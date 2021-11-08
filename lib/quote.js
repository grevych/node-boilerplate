class QuoteNotFound extends Error {
  constructor() {
    super('Quote does not exist');
  }
}

class Quote {
  constructor({ id, content, author, createdAt }) {
    this.id = id;
    this.content = content;
    this.author = author;
    this.createdAt = createdAt;
  }
}

module.exports = {
  Quote,
  QuoteNotFound,
};
