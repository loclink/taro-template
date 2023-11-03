import { Project, IndentationText } from "ts-morph";
import * as fs from "fs-extra";
import * as path from "path";
// import type { PluginOptions } from "template-types";
import { IConfigModel, LoadConfig } from "src/types";

export const loadConfig: LoadConfig = (
  path: string,
  fnName: string
): Promise<IConfigModel> => {
  const project = new Project({
    manipulationSettings: {
      indentationText: IndentationText.TwoSpaces,
    },
  });
  const sourceFile = project.addSourceFileAtPath(path);

  return new Promise((resolve) => {
    sourceFile.forEachDescendant((node) => {
      if (node.getKindName() === "CallExpression") {
        const callExpr: any = node;
        if (callExpr.getExpression().getText() === fnName) {
          const configObjModel = callExpr.getArguments()[0];
          const configModel = {
            getConfigStr: () => configObjModel.getText(),
            getConfig: () => eval(`(${configObjModel.getText()})`),
            setConfig: async (
              key: string,
              value: string,
              autoSave: boolean = true
            ) => {
              const propertyKey = configObjModel.getProperty(key);
              if (propertyKey) {
                await propertyKey.setInitializer(value);
              } else {
                await configObjModel.addPropertyAssignment({
                  name: key,
                  initializer: value,
                });
              }

              // 格式化文本以修复缩进
              await sourceFile.formatText();

              // 自动保存更改到文件
              autoSave && (await sourceFile.saveSync());
            },
            /**
             * 移除
             * @param key
             * @param autoSave
             */
            remove: async (key, autoSave: boolean = true) => {
              const propertyKey = configObjModel.getProperty(key);
              await propertyKey.remove();
              autoSave && (await sourceFile.saveSync());
            },
            saveConfig: async () => await sourceFile.saveSync(),
          };
          resolve(configModel);
        } else {
          console.error(`没有找到用${fnName}的调用`);
        }
      }
    });
  });
};

/**
 * 读取插件配置
 * @param configPath
 * @returns
 */
export const loadPluginConfig = async (sourcePath: string) => {
  const pluginConfigFileName = "plugin.config.ts";
  const configPath = path.resolve(sourcePath, pluginConfigFileName);
  if (!fs.existsSync(configPath)) {
    console.log(`项目中不存在: ${pluginConfigFileName}, 请检查!`);
    return;
  }
  return await loadConfig(configPath, "definePluginConfig");
};

export const loadAppConfig = async (sourcePath: string) => {
  const appCinfigFileName = "app.config.ts";
  const configPath = path.resolve(sourcePath, appCinfigFileName);
  if (!fs.existsSync(configPath)) {
    return;
  }

  return await loadConfig(configPath, "defineAppConfig");
};
