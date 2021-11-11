const PORT = 5000;

const express = require("express");
const app = express();
app.use("/api/v1/suites", require("./suites-router"));

app.listen(PORT, () =>
  console.log(`Green Testing server listening on port ${PORT}!`)
);
