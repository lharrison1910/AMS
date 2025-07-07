import express from "express";
import { comparePW, hashPW } from "../modules/user.js";
import { createUser, getUser, updateUser } from "../modules/db.js";

export const userRoutes = express.Router();

userRoutes.get("/login", (req, res) => {
  res.send("hello");
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

userRoutes.post("/newUser", (req, res) => {
  //   try {
  //     const user = req.body;
  //     const hashed = hashPW(user.password);
  //     user.password = hashed;
  //     if (createUser(user)) {
  //       res.status(200);
  //     }
  //     res.status(401);
  //   } catch (error) {
  //     res.send(error);
  //   }
  res.send("done");
});

userRoutes.post("/update", (req, res) => {
  res.send("heloo");
});
