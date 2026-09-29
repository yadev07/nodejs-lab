const {
    BASE_URL,
    username,
    repository,
    headers
  } = require("../config/github");
  
  async function githubRequest(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers
    });
  
    if (!response.ok) {
      const errorText = await response.text();
  
      throw new Error(
        `GitHub API Error ${response.status}: ${errorText}`
      );
    }
  
    return response.json();
  }
  
  async function getRepository() {
    return githubRequest(
      `/repos/${username}/${repository}`
    );
  }
  
  async function getContents(path = "") {
    const endpoint = path
      ? `/repos/${username}/${repository}/contents/${path}`
      : `/repos/${username}/${repository}/contents`;
  
    return githubRequest(endpoint);
  }
  
  async function getRepositoryRoot() {
    return getContents("");
  }
  
  async function getFolderContents(path) {
    return getContents(path);
  }
  
  async function getFile(path) {
    const data = await getContents(path);
  
    if (Array.isArray(data)) {
      throw new Error("Path points to a directory, not a file.");
    }
  
    return data;
  }
  
  async function getReadme(path) {
    try {
      const file = await getFile(path);
  
      if (!file.content) {
        return null;
      }
  
      const content = Buffer.from(
        file.content,
        "base64"
      ).toString("utf-8");
  
      return {
        path,
        content
      };
    } catch {
      return null;
    }
  }
  
  async function getLanguages() {
    return githubRequest(
      `/repos/${username}/${repository}/languages`
    );
  }
  
  module.exports = {
    getRepository,
    getContents,
    getRepositoryRoot,
    getFolderContents,
    getFile,
    getReadme,
    getLanguages
  };