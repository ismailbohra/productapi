const express = require("express");
const router = express.Router();
const productRoute = require("./crud");

const defaultRoutes = [
  {
    path: "/product",
    route: productRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
