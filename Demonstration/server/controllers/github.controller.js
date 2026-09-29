const githubService = require("../services/github.service");

async function repositoryInfo(req, res) {
  try {
    const repository =
      await githubService.getRepository();

    res.json({
      success: true,
      data: repository
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch repository information.",
      error: error.message
    });
  }
}

async function repositoryContents(req, res) {
  try {
    const path = req.query.path || "";

    const contents =
      await githubService.getContents(path);

    res.json({
      success: true,
      data: contents
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch repository contents.",
      error: error.message
    });
  }
}

async function languages(req, res) {
  try {
    const data =
      await githubService.getLanguages();

    res.json({
      success: true,
      data
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch languages.",
      error: error.message
    });
  }
}

module.exports = {
  repositoryInfo,
  repositoryContents,
  languages
};