const express = require("express");

const {
  getProjects,
  getProject
} = require("../controllers/projects.controller");

const router = express.Router();

router.get(
  "/",
  getProjects
);

router.get(
  "/*path",
  getProject
);

module.exports = router;
