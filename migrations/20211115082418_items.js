exports.up = function (knex) {
  return knex.schema.createTable("items", (items) => {
    items.increments();
    items.string("Title", 255).unique().notNullable();
    items.string("Price", 10).notNullable();
    items.integer("Qty", 10).notNullable();
    items.string("image", 256);
    items
      .integer("items_id")
      .unsigned()
      .notNullable()
      .references("items_id")
      .inTable("items")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("items");
};
