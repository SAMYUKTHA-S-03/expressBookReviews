const express = require("express");
const bodyParser = require("body-parser");

const general_routes = require("./general.js").general;
const customer_routes = require("./auth_users.js").authenticated;

const app = express();

app.use(bodyParser.json());
app.use("/customer", customer_routes);
app.use("/", general_routes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
