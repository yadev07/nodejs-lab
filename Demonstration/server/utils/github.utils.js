function cleanProjectName(name) {
    return name
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }
  
  function detectProjectType(name, files = []) {
    const lowerName = name.toLowerCase();
  
    if (lowerName.includes("advanced")) {
      return "Advanced";
    }
  
    if (lowerName.includes("self")) {
      return "Self Practice";
    }
  
    if (lowerName.includes("lab")) {
      return "Lab";
    }
  
    const hasHtml = files.some((file) =>
      file.name?.endsWith(".html")
    );
  
    const hasJs = files.some((file) =>
      file.name?.endsWith(".js")
    );
  
    if (hasHtml && hasJs) {
      return "Web Development";
    }
  
    return "Project";
  }
  
  function detectTechnologies(files = []) {
    const technologies = new Set();
  
    files.forEach((file) => {
      const name = file.name?.toLowerCase() || "";
  
      if (name.endsWith(".js")) {
        technologies.add("JavaScript");
      }
  
      if (name.endsWith(".ts")) {
        technologies.add("TypeScript");
      }
  
      if (name.endsWith(".json")) {
        technologies.add("JSON");
      }
  
      if (name.endsWith(".html")) {
        technologies.add("HTML");
      }
  
      if (name.endsWith(".css")) {
        technologies.add("CSS");
      }
  
      if (name.includes("package.json")) {
        technologies.add("Node.js");
      }
    });
  
    return [...technologies];
  }
  
  function createProjectObject({
    repository,
    item,
    files,
    readme
  }) {
    const technologies = detectTechnologies(files);
  
    return {
      id: item.path.replace(/\//g, "-"),
  
      name: cleanProjectName(item.name),
  
      originalName: item.name,
  
      type: detectProjectType(item.name, files),
  
      description:
        readme?.description ||
        `Node.js project from ${item.name}.`,
  
      path: item.path,
  
      githubUrl:
        `https://github.com/${repository.owner.login}/${repository.name}/tree/${repository.default_branch}/${item.path}`,
  
      files: files.map((file) => ({
        name: file.name,
        path: file.path,
        type: file.type,
        size: file.size,
        githubUrl:
          `https://github.com/${repository.owner.login}/${repository.name}/blob/${repository.default_branch}/${file.path}`
      })),
  
      technologies,
  
      readme: readme?.content || null,
  
      features: [],
  
      concepts: [],
  
      status: "Completed",
  
      repository: {
        name: repository.name,
        fullName: repository.full_name,
        description: repository.description,
        stars: repository.stargazers_count,
        forks: repository.forks_count,
        language: repository.language,
        visibility: repository.visibility,
        defaultBranch: repository.default_branch,
        createdAt: repository.created_at,
        updatedAt: repository.updated_at
      }
    };
  }
  
  module.exports = {
    cleanProjectName,
    detectProjectType,
    detectTechnologies,
    createProjectObject
  };