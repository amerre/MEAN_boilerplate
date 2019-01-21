/*
Import & config
*/
const express = require("express");
const frontRouter = express.Router();
//

/*
Définition
*/
class FrontRouterClass {
  constructor() {}

  routes() {
    // Homepage (à copier pour créer une nouvelle page)
    frontRouter.get("/", (req, res) => {
      res.render("index");
    });

    // Me
    frontRouter.get("/me", (req, res) => {
      res.render("me");
    });
  }

  init() {
    this.routes();
    return frontRouter;
  }
}
//

/*
Export
*/
module.exports = FrontRouterClass;
//
