#!/usr/bin/env node

import chalk from "chalk";
import fs from "fs";
import path from "path";

const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
  if (err) {
    console.log(err);
  }

  const statPromises = filenames.map((filename) =>
    lstat(path.join(targetDir, filename))
  );
  const allStats = await Promise.all(statPromises);
  for (let stats of allStats) {
    const index = allStats.indexOf(stats);
    if (stats.isFile()) {
      console.log(chalk.blue(filenames[index]));
    } else if (filenames[index].startsWith(".")) {
      console.log(chalk.bold(chalk.green(filenames[index])));
    } else {
      console.log(chalk.green(filenames[index]));
    }
  }
});
