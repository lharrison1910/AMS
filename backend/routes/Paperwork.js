import express from "express";

export const paperworkRoutes = express.Router();

paperworkRoutes.get("/", (req, res) => {
  res.send("all paperwork");
});
