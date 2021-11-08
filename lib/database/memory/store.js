const uuidV4 = require('uuid/v4');

const errors = require('../errors');


class MemoryStore {
  constructor() {
    this.items = {};
  }

  create(item) {
    item.id = uuidV4();
    this.items[item.id] = item;

    return item.id;
  }

  update(item) {
    this.findById(item.id);

    this.items[item.id] = item;

    return item;
  }

  all() {
    return Object.values(this.items);
  }

  findById(itemId) {
    if (!this.items[itemId]) {
      throw new errors.ItemNotFound('Item', itemId);
    }

    return this.items[itemId];
  }

  deleteById(itemId) {
    const wasItemDeleted = !!this.items[itemId];

    delete this.items[itemId];

    return wasItemDeleted;
  }
}

module.exports = MemoryStore;
