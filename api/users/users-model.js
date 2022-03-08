function getUserById(users_id) {
  return Promise.resolve(`awesome recipe with id ${users_id}`);
}

module.exports = { getUserById };
