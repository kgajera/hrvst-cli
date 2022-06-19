const fs = require("fs");
const path = require("path");
const kebabCase = require("lodash/kebabCase");
const startCase = require("lodash/startCase");

// Path to docusaurus docs directory
const docsPath = path.resolve("docs", "cli");

// Paths to the CLI docs
const cliDocsPath = path.resolve("..", "docs");
const cliCommandDocsPath = path.resolve(cliDocsPath, "commands");
const cliGeneratedCommandDocsPath = path.resolve(
  cliDocsPath,
  "generated-commands"
);

fs.mkdirSync(docsPath);

fs.writeFileSync(
  path.resolve(docsPath, "_category_.yml"),
  `label: CLI Reference
position: 2
collapsed: false`
);

fs.readdirSync(cliCommandDocsPath).forEach((file) => {
  const srcPath = path.resolve(cliCommandDocsPath, file);
  const destPath = path.resolve(docsPath, formatFileName(file));

  fs.copyFileSync(srcPath, destPath);

  const data = fs.readFileSync(destPath);
  fs.writeFileSync(
    destPath,
    `---
id: ${file.replace(".md", "").toLowerCase()}
---
${data}`
  );
});

fs.readdirSync(cliGeneratedCommandDocsPath).forEach((file) => {
  const filePath = path.resolve(cliGeneratedCommandDocsPath, file);
  const isDirectory = fs.lstatSync(filePath).isDirectory();
  const filename = isDirectory ? file : file.replace(".md", "");
  const dirName = kebabCase(filename);
  const dirPath = path.resolve(docsPath, dirName);

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);

    if (isDirectory) {
      fs.writeFileSync(
        path.resolve(
          docsPath,
          `${dirName.charAt(0).toUpperCase() + dirName.slice(1)}`,
          "_category_.yml"
        ),
        `label: ${startCase(filename)}`
      );
    }
  }

  if (fs.lstatSync(filePath).isDirectory()) {
    fs.readdirSync(filePath).forEach((subFile) => {
      fs.copyFileSync(
        path.resolve(filePath, subFile),
        path.resolve(docsPath, file, formatFileName(subFile))
      );
    });
  } else {
    fs.copyFileSync(
      path.resolve(cliGeneratedCommandDocsPath, file),
      path.resolve(docsPath, dirName, "index.md")
    );
  }
});

function formatFileName(fileName) {
  return `${kebabCase(fileName.replace(".md", ""))}.md`;
}
