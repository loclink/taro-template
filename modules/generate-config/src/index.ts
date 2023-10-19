import type { IPluginContext } from '@tarojs/service'
import * as fs from 'fs-extra'
import * as path from 'path'
import * as chokidar from 'chokidar'

import { Project } from 'ts-morph'
import { stringify } from './utils'
import { generateMainPages } from './generate-main'
import { generateSubPages } from './generate-sub'
import { generateTabbar } from './generate-tabbar'

function getConfigValue(config: string, key: string) {
  let regex = new RegExp(key + ": '([^']*)'")
  let match = config.match(regex)
  return match ? match[1] : null
}

function handleGen(ctx: IPluginContext): Promise<void> {
  return new Promise((resolve) => {
    const { sourcePath } = ctx.paths
    const appConfigPath = path.join(ctx.paths.sourcePath, 'app.config.ts')
    const pagesPath = path.join(sourcePath, './pages')
    const pagesSubPath = path.join(sourcePath, './pages-sub')
    const tabbarPath = path.join(sourcePath, './pages/tabbar')
    const configPath = path.join(sourcePath, 'config.ts')

    let appConfigObj: any = {}
    let configObj: any = {}

    const project = new Project()

    project.addSourceFileAtPath(configPath)

    const sourceFile = project.addSourceFileAtPath(appConfigPath)

    // 读取app.config.ts
    sourceFile.forEachDescendant((node) => {
      if (node.getKindName() === 'CallExpression') {
        const callExpr: any = node
        if (callExpr.getExpression().getText() === 'defineAppConfig') {
          const configStr = callExpr.getArguments()[0].getText()
          appConfigObj = eval(`(${configStr})`)
        }
      }
    })

    // 拿到homePage
    const configCodeStr = fs.readFileSync(configPath).toString()
    configObj = { homePage: getConfigValue(configCodeStr, 'homePage') }

    // 生成tabbar
    const tabbarPaths = generateTabbar(tabbarPath)

    // 生成主包页面
    const pagesPathArr = generateMainPages(sourcePath, pagesPath, tabbarPaths)

    // 生成分包页面
    const pagesSubPathArr = generateSubPages(pagesSubPath)

    // set最终结果
    appConfigObj.pages = pagesPathArr
    appConfigObj.subPackages = pagesSubPathArr
    appConfigObj.tabBar = tabbarPaths

    // 处理首页路径，将首页路径置顶
    if (configObj?.homePage) {
      const page = appConfigObj.pages.find((item) =>
        configObj.homePage?.includes(item || '')
      )
      if (page) {
        appConfigObj.pages = appConfigObj.pages.filter(
          (item) => !configObj.homePage?.includes(item || '')
        )
        appConfigObj.pages.unshift(page)
      }
    }

    // 写入结果
    const finalText = `export default defineAppConfig(${stringify(
      appConfigObj
    )});\n`
    fs.writeFileSync(appConfigPath, finalText)
    resolve()
    console.log(ctx.helper.chalk.green('✨ 已自动注册路径至app.config.ts'))
  })
}

/**
 * 命令行扩展
 */
export default (ctx: IPluginContext) => {
  if (process.env.NODE_ENV === 'production') return
  chokidar
    .watch(
      [
        path.join(ctx.paths.sourcePath, 'pages/**/index.tsx'),
        path.join(ctx.paths.sourcePath, 'pages-sub/*/*/index.tsx'),
      ],
      { ignoreInitial: true }
    )
    .on('add', () => handleGen(ctx))
    .on('ready', () => handleGen(ctx))
    .on('unlinkDir', () => handleGen(ctx))

  ctx.onBuildFinish(() => {
    // handleGen(paths);
  })
}
