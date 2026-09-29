const BASE_URL = "https://api.github.com";

const username = process.env.GITHUB_USERNAME || "yadev07";
const repository = process.env.GITHUB_REPOSITORY || "nodejs-lab";

const headers = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "github-project-showcase"
};

if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

module.exports = {
  BASE_URL,
  username,
  repository,
  headers
};