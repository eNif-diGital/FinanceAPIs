const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const router = require("./routes/routes");
const morgan = require("morgan");
app.use(express.json());
app.use("/api/account", router);
app.use(cors());
app.use(morgan("combined"));
app.use(helmet());

app.listen(8081, () => console.log("listening on http://localhost:8081"));
