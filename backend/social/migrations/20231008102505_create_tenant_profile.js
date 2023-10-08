exports.up = function (knex) {
  return knex.schema.createTable("Tenant_Profile", (table) => {
    table.increments("tenant_id").primary();
    table.string("tenant_name");
    table.json("address");
    table.string("city");
    table.string("state");
    table.string("country");
    table.string("zip_code");
    table.string("phone");
    table.string("web_url");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("Tenant_Profile");
};
