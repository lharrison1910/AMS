import express from "express";
import cors from "cors";
import { comparePW, hashPW } from "./modules/user";
import { createUser, getUser, updateUser } from "./modules/db";

app = express();
app.use(cors(), express.json());

//user endpoints

//login
app.get("/login", (req, res) => {
  try {
    const userDetails = req.body;
    const user = getUser(userDetails.username);

    if (comparePW(user.password, userDetails.password)) {
      res.send(user);
    }
    res.status(403);
  } catch (error) {
    res.send(error);
  }
});

app.post("/user/newUser", (req, res) => {
  try {
    const user = req.body;
    const hashed = hashPW(user.password);
    user.password = hashed;
    if (createUser(user)) {
      res.status(200);
    }
    res.status(401);
  } catch (error) {
    res.send(error);
  }
});

app.update("/user/update", (res, req) => {
  try {
    const details = req.body;
    if (updateUser(details)) {
      res.status(200);
    }
    res.status(401);
  } catch (error) {
    res.send(error);
  }
});
