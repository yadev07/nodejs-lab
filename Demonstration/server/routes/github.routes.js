const express = require("express");

const {
  repositoryInfo,
  repositoryContents,
  languages
} = require("../controllers/github.controller");

const router = express.Router();

router.get(
  "/repository",
  repositoryInfo
);

router.get(
  "/contents",
  repositoryContents
);

router.get(
  "/languages",
  languages
);

module.exports = router;