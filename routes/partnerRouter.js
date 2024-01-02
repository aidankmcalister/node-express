const express = require("express");
const partnerRouter = express.Router();

partnerRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.send("Get all partners");
  })
  .post((req, res) => {
    res.send(
      `Create partner with name: ${req.body.name} and description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.send("PUT operation not supported on /partners");
  })
  .delete((req, res) => {
    res.send("Delete all partners");
  });

partnerRouter
  .route("/:partnerId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.send(`Get partner with ID: ${req.params.partnerId}`);
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.send(
      `POST operation not supported on /partners/${req.params.partnerId}`
    );
  })
  .put((req, res) => {
    res.send(
      `Update partner with ID: ${req.params.partnerId} - Set name: ${req.body.name} and description: ${req.body.description}`
    );
  })
  .delete((req, res) => {
    res.send(`Delete partner with ID: ${req.params.partnerId}`);
  });

module.exports = partnerRouter;
