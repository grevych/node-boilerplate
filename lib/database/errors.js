class DatabaseError extends Error {}

class DatabaseConfigError extends DatabaseError {}

class UnsupportedDatabaseDriver extends DatabaseConfigError {
  constructor(driver) {
    super(`Adapter '${driver}' not found for database`);
  }
}

class ItemError extends DatabaseError {}

class ItemNotFound extends ItemError {
  constructor(item, itemId) {
    super(`${Item} with id ${itemId} not found`);
  }
}

class EntityNotFound extends ItemNotFound {
  constructor(itemId) {
    super('Property', itemId);
  }
}


module.exports = {
  UnsupportedDatabaseDriver,

  ItemNotFound,
  EntityNotFound,
};
