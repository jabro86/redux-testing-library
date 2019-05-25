const path = require("path");
const { fork } = require("child_process");
const colors = require("colors");

const { readFileSync: rfs, writeFileSync } = require("fs");
const packageJson = JSON.parse(rfs(path.resolve(__dirname, "..", "package.json")));

packageJson.scripts.prepush = "yarn test:prod && yarn build";
packageJson.scripts.commitmsg = "commitlint -E HUSKY_GIT_PARAMS";

writeFileSync(path.resolve(__dirname, "..", "package.json"), JSON.stringify(pkg, null, 2));

// Call husky to set up the hooks
fork(path.resolve(__dirname, "..", "node_modules", "husky", "lib", "installer", "bin"), [
  "install"
]);

console.log();
console.log(colors.green("Done!!"));
console.log();

if (packageJson.repository.url.trim()) {
  console.log(colors.cyan("Now run:"));
  console.log(colors.cyan("  npm install -g semantic-release-cli"));
  console.log(colors.cyan("  semantic-release-cli setup"));
  console.log();
  console.log(colors.cyan('Important! Answer NO to "Generate travis.yml" question'));
  console.log();
  console.log(
    colors.gray('Note: Make sure "repository.url" in your package.json is correct before')
  );
} else {
  console.log(colors.red('First you need to set the "repository.url" property in package.json'));
  console.log(colors.cyan("Then run:"));
  console.log(colors.cyan("  npm install -g semantic-release-cli"));
  console.log(colors.cyan("  semantic-release-cli setup"));
  console.log();
  console.log(colors.cyan('Important! Answer NO to "Generate travis.yml" question'));
}

console.log();
