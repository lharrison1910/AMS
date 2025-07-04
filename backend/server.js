import express from "express";
import cors from "cors";
import { comparePW } from "./modules/user";

app = express();
app.use(cors(), express.json());

//user endpoints

//login
app.get("/login", (req, res) => {
  const userDetails = req.body;

  try {
    //chech if username in db
    const user = {
      username: "puid",
      password: "hashed pw",
      role: "I don't know yet",
    };
    if (comparePW(user.password, userDetails.password)) {
      res.send(user);
    }
    res.status(403);
  } catch (error) {
    res.send(error);
  }
});
