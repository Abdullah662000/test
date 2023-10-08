exports.up = function (knex) {
  return knex.schema.createTable("User_Profile", (table) => {
    table.increments("user_id").primary();
    table.string("first_name");
    table.string("last_name");
    table.string("department");
    table.string("designation");
    table
      .integer("tenant_id")
      .unsigned()
      .references("Tenant_Profile.tenant_id");
    table.string("image_url");
    table.string("city");
    table.string("country");
    table.string("bio");
    table.string("social_links");
    table.string("employee_id");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("User_Profile");
};
