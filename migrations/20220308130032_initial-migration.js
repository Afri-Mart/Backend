// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
exports.up = async function (knex) {
  return knex.schema
    .createTable("roles", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
    })
    .createTable("users", (tbl) => {
      tbl.increments("users_id");
      tbl.string("username", 128).notNullable().unique();
      tbl.string("password", 256).notNullable();
      tbl.integer("role").unsigned().defaultTo(1);
      tbl.foreign("role").references("roles.id");
    });
};

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
exports.down = async function (knex) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("roles")
    .dropTableIfExists("class_clients")
    .dropTableIfExists("classes");
};
