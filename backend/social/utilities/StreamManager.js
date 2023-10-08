const { createProfile } = require("../controller/tenantController");
const { createUser } = require("../controller/userController");

const processMessage = async (kafkaMessage) => {
  //Start working here
  //   console.log(kafkaMessage);
  switch (kafkaMessage.event_name) {
    case "tenant_created":
      createProfile(kafkaMessage.properties);
      break;
    case "user_created":
      createUser(kafkaMessage.properties);
      break;
    default:
      console.log("none of these");
      break;
  }
};

module.exports = { processMessage };
