const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const router = require("./routes/routes");
const morgan = require("morgan");
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));
app.use(helmet());
app.use("/api/user", router);

app.listen(4000, () => console.log("listening in http://localhost:4000"));
