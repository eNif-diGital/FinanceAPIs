const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const router = require("./routes/routes");
const morgan = require("morgan");
app.use(express.json());
app.use("/customer", router);
app.use(cors());
app.use(morgan("combined"));
app.use(helmet());

app.listen(5532, () => console.log("listening on http://localhost:5532"));
