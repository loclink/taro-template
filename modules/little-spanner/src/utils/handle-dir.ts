import * as fs from "fs-extra";

export const copyDir = (originDir: string, target: string) => {
  fs.copySync(originDir, target);
};

export const removeDir = (dirPath: string) => {
  fs.removeSync(dirPath);
};
