/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments("id");
    tbl.string("username", 20).notNull();
    tbl.string("first_name", 20).notNull();
    tbl.string("last_name", 20).notNull();
    tbl.string("state", 2).notNull();
    tbl.string("email").unique();
    tbl.string("password").notNull();
    tbl.string("user_type").notNull().defaultTo("user");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("users");
};
