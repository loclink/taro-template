"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentGenerator = void 0;
/**
 * 组件生成器
 */
const fs = require("fs");
const path = require("path");
const utils_1 = require("../utils");
const tsx = ({ name, cssExt, cssName, cssModule }) => `import React from 'react'
import { View } from '@tarojs/components'
import classnames from 'classnames'
import${cssModule ? ' styles from' : ''} './${cssName}${(0, utils_1.getCssModuleExt)(cssModule)}.${cssExt}'

export interface ${name}Props  {
  className?: string
  children?:React.ReactNode
  style?:string|React.CSSProperties|undefined
}

function ${name}(props:${name}Props){
  const {

  } = props
  return <View className=${(0, utils_1.getCssModuleClassName)(name, cssModule)}>
  ${name}-content
  </View>
}
export { ${name} }
`;
const style = name => `.${name}{
    
}
`;
function writeFileErrorHandler(err) {
    if (err)
        throw err;
}
//生产
/**
 *
 * @param component 组件名称 可能是  index/Banner  也可能是Banner
 * @param componentDir   组件文件夹
 */
function ComponentGenerator({ cssModule, pageComponentCssModule, component, appPath, chalk, cssExt }) {
    let pageName;
    let componentName;
    const componentInfos = component.split("/");
    if (componentInfos.length !== 1 && componentInfos.length !== 2) {
        throw "组件参数必须是 【组件名称】或者 【页面文件夹/组件名称】";
    }
    if (componentInfos.length === 1) {
        componentName = componentInfos[0];
    }
    if (componentInfos.length === 2) {
        pageName = componentInfos[0];
        componentName = componentInfos[1];
        //检测页面是否存在
        const pageDir = path.join(appPath, "src", "pages", pageName);
        if (!fs.existsSync(pageDir)) {
            return console.log(chalk.red(`页面目录【${pageDir}】不存在，无法创建页面组件！`));
        }
    }
    componentName = (0, utils_1.firstUpperCase)(componentName);
    //创建目录
    if (pageName) {
        const componentDir = path.join(appPath, "src", "pages", pageName, "components");
        fs.mkdirSync(componentDir, { recursive: true });
        fs.writeFile(path.join(componentDir, `${componentName}.tsx`), tsx({ name: componentName, cssName: componentName, cssExt, cssModule: pageComponentCssModule }), writeFileErrorHandler);
        console.log(chalk.green("创建成功=>" + path.join(componentDir, `${componentName}.tsx`)));
        // index.${cssExt}
        fs.writeFile(path.join(componentDir, `${componentName}${(0, utils_1.getCssModuleExt)(pageComponentCssModule)}.${cssExt}`), style(componentName), writeFileErrorHandler);
        console.log(chalk.green("创建成功=>" + path.join(componentDir, `${componentName}${(0, utils_1.getCssModuleExt)(pageComponentCssModule)}.${cssExt}`)));
        console.log(chalk.green(`页面组件【${pageName}/components/${componentName}】创建成功`));
    }
    else {
        //项目组件
        const componentDir = path.join(appPath, "src", "components", componentName);
        fs.mkdirSync(componentDir, { recursive: true });
        // index.tsx
        fs.writeFile(path.join(componentDir, `index.tsx`), tsx({ name: componentName, cssExt, cssModule, cssName: "index" }), writeFileErrorHandler);
        console.log(chalk.green("创建成功=>" + path.join(componentDir, `index.tsx`)));
        // index.${cssExt}
        fs.writeFile(path.join(componentDir, `index${(0, utils_1.getCssModuleExt)(cssModule)}.${cssExt}`), style(componentName), writeFileErrorHandler);
        console.log(chalk.green("创建成功=>" + path.join(componentDir, `index${(0, utils_1.getCssModuleExt)(cssModule)}.${cssExt}`)));
        console.log(chalk.green(`项目组件【${componentName}】创建成功`));
    }
}
exports.ComponentGenerator = ComponentGenerator;
//# sourceMappingURL=components.js.map