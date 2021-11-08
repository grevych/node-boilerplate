// Middlewares

const authenticate = {realm: 'Boilerplate'}

async function validate (username, password, req, reply) {
  if (username !== 'username' || password !== 'password') {
    return new Error('Unauthenticated');
  }
}

module.exports = {
  authenticate,
  validate,
};
