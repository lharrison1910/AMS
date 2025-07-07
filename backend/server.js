import express from "express";
import cors from "cors";
import { userRoutes } from "./routes/Users.js";
import { paperworkRoutes } from "./routes/Paperwork.js";

const app = express();
const PORT = 3000;
app.use(cors(), express.json());

app.get("/", (req, res) => {
  res.send("home");
});

//user endpoints
app.use("/users", userRoutes);

//paperwork endpoints
app.use("/paperwork", paperworkRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
