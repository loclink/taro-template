import * as fs from 'fs-extra'
import * as path from 'path'

export const generateMainPages = (sourcePath, pagesPath, tabbarPaths) => {
  let pagesPathArr = fs
    .readdirSync(pagesPath)
    .map((item) => {
      const pageCpnPath = path.join(sourcePath, './pages', item, 'index.tsx')
      if (fs.pathExistsSync(pageCpnPath)) {
        return `pages/${item}/index`
      }
    })
    .filter((item) => item)

  const tabbarPathArr = tabbarPaths.list.map((item) => item.pagePath)

  pagesPathArr = [...pagesPathArr, ...tabbarPathArr]

  return pagesPathArr
}
