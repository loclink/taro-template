import * as fs from "fs-extra";
import * as path from "path";
export const generateSubPages = (pagesSubPath) => {
  const pagesSubPathArr = fs
    .readdirSync(pagesSubPath)
    .map((subName) => {
      const root = `pages-sub/${subName}`;
      const pages = fs
        .readdirSync(path.join(pagesSubPath, subName))
        .map((item) => {
          const pageSubCpnPath = path.join(
            pagesSubPath,
            subName,
            item,
            "index.tsx"
          );
          if (fs.pathExistsSync(pageSubCpnPath)) {
            return `${item}/index`;
          }
        })
        .filter((item) => item);

      if (pages.length) {
        return {
          root,
          pages,
        };
      }
    })
    .filter((item) => item);

  return pagesSubPathArr;
};
