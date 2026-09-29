const githubService = require("../services/github.service");

const {
  createProjectObject
} = require("../utils/github.utils");

async function getProjects(req, res) {
  try {
    const repository =
      await githubService.getRepository();

    const root =
      await githubService.getRepositoryRoot();

    const directories = root.filter(
      (item) => item.type === "dir"
    );

    const projects = [];

    for (const directory of directories) {
      try {
        const contents =
          await githubService.getFolderContents(
            directory.path
          );

        const files = contents.filter(
          (item) => item.type === "file"
        );

        const readmeFile = files.find(
          (file) =>
            file.name.toLowerCase() === "readme.md"
        );

        let readme = null;

        if (readmeFile) {
          readme = await githubService.getReadme(
            readmeFile.path
          );
        }

        const project =
          createProjectObject({
            repository,
            item: directory,
            files,
            readme
          });

        projects.push(project);
      } catch (error) {
        console.error(
          `Could not process ${directory.path}:`,
          error.message
        );
      }
    }

    res.json({
      success: true,

      repository: {
        name: repository.name,
        fullName: repository.full_name,
        description: repository.description,
        url: repository.html_url,
        stars: repository.stargazers_count,
        forks: repository.forks_count,
        language: repository.language,
        defaultBranch: repository.default_branch,
        createdAt: repository.created_at,
        updatedAt: repository.updated_at
      },

      totalProjects: projects.length,

      projects
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to build project list.",
      error: error.message
    });
  }
}

async function getProject(req, res) {
  try {
    const projectPath = req.params.path;

    const repository =
      await githubService.getRepository();

    const contents =
      await githubService.getFolderContents(
        projectPath
      );

    const files = contents.filter(
      (item) => item.type === "file"
    );

    const readmeFile = files.find(
      (file) =>
        file.name.toLowerCase() === "readme.md"
    );

    let readme = null;

    if (readmeFile) {
      readme = await githubService.getReadme(
        readmeFile.path
      );
    }

    const project =
      createProjectObject({
        repository,
        item: {
          name: projectPath.split("/").pop(),
          path: projectPath
        },
        files,
        readme
      });

    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error(error);

    res.status(404).json({
      success: false,
      message: "Project not found.",
      error: error.message
    });
  }
}

module.exports = {
  getProjects,
  getProject
};