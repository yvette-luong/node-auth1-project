const db = require("../database/knexconfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db("users").select("id", "username");
}

function findBy(filter) {
  return db("users").where(filter);
}
function add(data) {
  return db("users").insert(data);
}

function findById(id) {
  return db("users").where({ id }).first();
}
