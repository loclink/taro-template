"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadAppConfig = exports.loadPluginConfig = exports.loadConfig = void 0;
const ts_morph_1 = require("ts-morph");
const fs = require("fs-extra");
const path = require("path");
const loadConfig = (path, fnName) => {
    const project = new ts_morph_1.Project({
        manipulationSettings: {
            indentationText: ts_morph_1.IndentationText.TwoSpaces,
        },
    });
    const sourceFile = project.addSourceFileAtPath(path);
    return new Promise((resolve) => {
        sourceFile.forEachDescendant((node) => {
            if (node.getKindName() === "CallExpression") {
                const callExpr = node;
                if (callExpr.getExpression().getText() === fnName) {
                    const configObjModel = callExpr.getArguments()[0];
                    const configModel = {
                        getConfigStr: () => configObjModel.getText(),
                        getConfig: () => eval(`(${configObjModel.getText()})`),
                        setConfig: async (key, value, autoSave = true) => {
                            const propertyKey = configObjModel.getProperty(key);
                            if (propertyKey) {
                                await propertyKey.setInitializer(value);
                            }
                            else {
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
                        remove: async (key, autoSave = true) => {
                            const propertyKey = configObjModel.getProperty(key);
                            await propertyKey.remove();
                            autoSave && (await sourceFile.saveSync());
                        },
                        saveConfig: async () => await sourceFile.saveSync(),
                    };
                    resolve(configModel);
                }
                else {
                    console.error(`没有找到用${fnName}的调用`);
                }
            }
        });
    });
};
exports.loadConfig = loadConfig;
/**
 * 读取插件配置
 * @param configPath
 * @returns
 */
const loadPluginConfig = async (sourcePath) => {
    const pluginConfigFileName = "plugin.config.ts";
    const configPath = path.resolve(sourcePath, pluginConfigFileName);
    if (!fs.existsSync(configPath)) {
        console.log(`项目中不存在: ${pluginConfigFileName}, 请检查!`);
        return;
    }
    return await (0, exports.loadConfig)(configPath, "definePluginConfig");
};
exports.loadPluginConfig = loadPluginConfig;
const loadAppConfig = async (sourcePath) => {
    const appCinfigFileName = "app.config.ts";
    const configPath = path.resolve(sourcePath, appCinfigFileName);
    if (!fs.existsSync(configPath)) {
        return;
    }
    return await (0, exports.loadConfig)(configPath, "defineAppConfig");
};
exports.loadAppConfig = loadAppConfig;
