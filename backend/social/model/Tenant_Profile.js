const { Model } = require("objection");
const User_Profile = require("./User_Profile");
class Tenant_Profile extends Model {
  static get tableName() {
    return "Tenant_Profile";
  }

  static get relationMappings() {
    return {
      User_Profiles: {
        relation: Model.HasManyRelation,
        modelClass: User_Profile,
        join: {
          from: "Tenant_Profile.tenant_id",
          to: "User_Profile.tenant_id",
        },
      },
    };
  }
  static get idColumn() {
    return "tenant_id";
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: [
        "tenant_name",
        "address",
        "city",
        "state",
        "country",
        "zip_code",
        "phone",
        "web_url",
      ],
      properties: {
        tenant_id: { type: "integer" },
        tenant_name: { type: "string", minLength: 1, maxLength: 255 },
        address: { type: "object" },
        city: { type: "string", maxLength: 255 },
        state: { type: "string", maxLength: 255 },
        country: { type: "string", maxLength: 255 },
        zip_code: { type: "string", maxLength: 255 },
        phone: { type: "string", maxLength: 255 },
        web_url: { type: "string", maxLength: 255 },
      },
    };
  }
}

module.exports = Tenant_Profile;
