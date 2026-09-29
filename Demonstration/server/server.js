require("dotenv").config();

const express = require("express");
const cors = require("cors");

const githubRoutes =
  require("./routes/github.routes");

const projectRoutes =
  require("./routes/projects.routes");

const app = express();

const PORT =
  process.env.PORT || 5000;

app.use(
  cors({
    origin: "*"
  })
);

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

// Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message:
      "GitHub Project Showcase API is running.",
    repository:
      `${process.env.GITHUB_USERNAME}/${process.env.GITHUB_REPOSITORY}`
  });
});

// GitHub APIs
app.use(
  "/api/github",
  githubRoutes
);

// Project APIs
app.use(
  "/api/projects",
  projectRoutes
);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found."
  });
});

// Error handler
app.use(
  (error, req, res, next) => {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error."
    });
  }
);

app.listen(PORT, () => {
  console.log(
    `🚀 Server running at http://localhost:${PORT}`
  );

  console.log(
    `📦 Repository: ${process.env.GITHUB_USERNAME}/${process.env.GITHUB_REPOSITORY}`
  );
});