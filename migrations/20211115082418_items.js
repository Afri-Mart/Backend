exports.up = function (knex) {
  return knex.schema.createTable("items", (items) => {
    items.increments();
    items.increments("items_id", { primaryKey: false });
    items.string("Title", 255).unique().notNullable();
    items.string("Price", 10).notNullable();
    items.integer("Qty", 10).notNullable();
    items.string("image", 256);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("items");
};
