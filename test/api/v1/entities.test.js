const { expect } = require('chai');
const request = require('supertest');

require('../test_helper');

const Entity = require('../../../lib/domain/entity');


describe('API V1', () => {
  describe('Entities', () =>{
    describe('GET /entities', () => {
      it('should return the list of entities', (done) => {
        const entity = new Entity({
          name: 'Entity Test',
        });
        db.entities.create(entity);

        request(app)
          .get('/v1/entities')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((error, response) => {
            if (error) return done(error);

            expect(response.body).to.deep.equal([entity]);
            done();
          });
      });
    });
  });
});
