const express = require("express");
// const { initConsumer } = require('./utilities/consumer');
const { initProducer } = require("./utilities/producer");
// const { connectConsumer } = require('./utilities/consumer');
// const { connectProducer, connectAdmin } = require('./utilities/producer');
// const KeyMaster = require('./utilities/KeyMaster');
// const databaseConfig = require('./database/DatabaseConfig');
const Knex = require("knex");
const { Model } = require("objection");
const knexConfig = require("./knexfile");
const userRoute = require("./routes/user.routes");
const tenantRoute = require("./routes/tenant.routes");
const knex = Knex(knexConfig.development);
Model.knex(knex);
knex
  .raw("SELECT 1+1 as result")
  .then(() => {
    console.log("Database connection successful!");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(databaseConfig.initializeDB());

app.use("/user", userRoute);
app.use("/tenant", tenantRoute);
// app.use("/", async (req, res) => {
//   res
//     .status(200)
//     .json({ message: `App is running on port. ${process.env.PORT || 4000}` });
// });
app.listen(process.env.PORT || 4000, async () => {
  console.log("App started at port", process.env.PORT || 4000);
  await initProducer();
});
