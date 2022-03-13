const db = require("../../data/db-config");

function find() {
  return db("items");
}

function findById(items_id) {
  return db("items").where(items_id).first();
}

// function findPlantsByUser(user_id) {
//   return db("plants").where({ user_id });
// }

function add(item) {
  return db("items")
    .insert(item)
    .then((items_id) => {
      return findById(items_id[0]);
    });
}

function update(changes, items_id) {
  return db("items")
    .where({ id })
    .update(changes)
    .then((count) => {
      return findById(items_id);
    });
}

function remove(items_id) {
  return db("items").where(items_id).del();
}

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};
