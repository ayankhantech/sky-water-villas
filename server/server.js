require("dotenv").config();
const main = require("./utils/db")
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,DELETE,PUT,HEAD,PATCH",
    credentials: true,
  }));

const authRouter = require("./router/auth-router");
const bookingRouter = require("./router/booking-router");
app.use("/api/booking", bookingRouter);




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());


app.use("/api/auth", authRouter);
app.use("/api", bookingRouter); 

app.get("/", (req, res) => {
  res.status(200).send("hellooooo");
});

main().then(() => {
  app.listen(8000, () => {
    console.log("Server is running on port 8000");
  });
});
