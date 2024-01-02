const express = require("express");
const promotionRouter = express.Router();

promotionRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.send("Get all promotions");
  })
  .post((req, res) => {
    res.send(
      `Create promotion with name: ${req.body.name} and description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.send("PUT operation not supported on /promotions");
  })
  .delete((req, res) => {
    res.send("Delete all promotions");
  });

promotionRouter
  .route("/:promotionId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.send(`Get promotion with ID: ${req.params.promotionId}`);
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.send(
      `POST operation not supported on /promotions/${req.params.promotionId}`
    );
  })
  .put((req, res) => {
    res.send(
      `Update promotion with ID: ${req.params.promotionId} - Set name: ${req.body.name} and description: ${req.body.description}`
    );
  })
  .delete((req, res) => {
    res.send(`Delete promotion with ID: ${req.params.promotionId}`);
  });

module.exports = promotionRouter;
