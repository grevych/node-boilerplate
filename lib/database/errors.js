class DatabaseError extends Error {}

class DatabaseConfigError extends DatabaseError {}

class UnsupportedDatabaseDriver extends DatabaseConfigError {
  constructor(driver) {
    super(`Adapter '${driver}' not found for database`);
  }
}

class ModelError extends DatabaseError {}

class ModelNotFound extends ModelError {
  constructor() {
    super(`Model not found`);
  }
}

class ModelNotRemoved extends ModelError {
  constructor() {
    super(`Model not removed`);
  }
}

class QuoteModelNotFound extends ModelNotFound {
  constructor() {
    super('Quote model not found');
  }
}

class QuoteModelCorrupted extends ModelError {
  constructor() {
    super('Quote model is corrupted');
  }
}

module.exports = {
  UnsupportedDatabaseDriver,
  ModelNotFound,
  QuoteModelNotFound,
  QuoteModelCorrupted,
};
