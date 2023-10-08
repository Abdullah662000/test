const { Model } = require("objection");
const Tenant_Profile = require("./Tenant_Profile");

class User_Profile extends Model {
  static get tableName() {
    return "User_Profile";
  }

  static get relationMappings() {
    return {
      tenant_profile: {
        relation: Model.BelongsToOneRelation,
        modelClass: Tenant_Profile,
        join: {
          from: "User_Profile.tenant_id",
          to: "Tenant_Profile.tenant_id",
        },
      },
    };
  }
  static get idColumn() {
    return " user_id";
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["first_name", "last_name", "tenant_id"],
      properties: {
        user_id: { type: "integer" },
        first_name: { type: "string", minLength: 1, maxLength: 255 },
        last_name: { type: "string", minLength: 1, maxLength: 255 },
        department: { type: "string", maxLength: 255 },
        designation: { type: "string", maxLength: 255 },
        tenant_id: { type: "integer" },
        image_url: { type: "string", maxLength: 255 },
        city: { type: "string", maxLength: 255 },
        country: { type: "string", maxLength: 255 },
        bio: { type: "string", maxLength: 255 },
        social_links: { type: "string", maxLength: 255 },
        employee_id: { type: "string", maxLength: 255 },
      },
    };
  }
}

module.exports = User_Profile;
