const fs = require("fs");
const path = require("path");
const pug = require("pug");
const siteData = require("./data/site");

const root = __dirname;
const source = path.join(root, "index.pug");
const target = path.join(root, "index.html");

function build() {
  const html = pug.renderFile(source, {
    pretty: true,
    basedir: root,
    ...siteData,
  });

  fs.writeFileSync(target, html, "utf8");
  console.log(`Compiled ${path.basename(source)} -> ${path.basename(target)}`);
}

build();

if (process.argv.includes("--watch")) {
  console.log("Watching index.pug for changes...");
  fs.watchFile(source, { interval: 300 }, build);
}
