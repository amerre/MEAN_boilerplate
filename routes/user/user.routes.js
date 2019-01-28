/*
Import & config
*/
const express = require("express");
const userRouter = express.Router();
//

/*
Definition
*/
class UserRouterClass {
  constructor() {}

  routes() {
    // Create
    userRouter.post("/", (req, res) => {
      res.json({ msg: "Create user", req: req.body });
    });

    // Read
    userRouter.get("/", (req, res) => {
      res.json({ msg: "Read user" });
    });

    // Update
    userRouter.put("/", (req, res) => {
      res.json({ msg: "Update user" });
    });

    // Delete
    userRouter.delete("/", (req, res) => {
      res.json({ msg: "Delete user" });
    });
  }

  init() {
    this.routes();
    return userRouter;
  }
}
//

/*
Export
*/
module.exports = UserRouterClass;
//
