/*
Imports
*/
// Nodejs
const { Router } = require("express");

//Inner
const FrontRouterClass = require("./front/front.routes");
const PostRouterClass = require("./post/post.routes");
//

/*
Définition des routers
*/
// Parent
const mainRouter = Router();
const apiRouter = Router();

// Child
const FrontRouter = new FrontRouterClass();
const PostRouter = new PostRouterClass();
//

/*
Définition des routes
*/
mainRouter.use("/api", apiRouter);
apiRouter.use("/post", PostRouter.init());
mainRouter.use("/", FrontRouter.init());
//

/*
Export
*/
module.exports = mainRouter;
//
