const Entity = require('./lib/domain/entity');
const SQLStore = require('./lib/database/sql/store');


class EntityStore extends SQLStore {
  all() {
  }

  findById(entityId) {
  }

  _modelToObject(model) {
    let entity;

    try {
      entity = new Entity({
        id: model.id,
        name: model.name,
      });
    } catch (error) {
      console.log(error);

      throw error;
    }

    return entity;
  }

  _objectToModel(entity) {
    let model;

    try {
    } catch (error) {
      console.log(error);
      throw error;
    }

    return model;
  }
}

module.exports = EntityStore;
