"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generator = void 0;
const path = require("path");
const ts_morph_1 = require("ts-morph");
class Generator {
    constructor(root) {
        this.root = root;
        this.targetModulePath = path.resolve(this.root.ctx.paths.nodeModulesPath, "wm-taro-router");
        const tsConfigFilePath = path.resolve(this.targetModulePath, "tsconfig.json");
        this.project = new ts_morph_1.Project({
            tsConfigFilePath,
        });
        this.routerSourceFile = this.project.addSourceFileAtPath(path.resolve(this.targetModulePath, "./src/router/index.ts"));
    }
    emit(force = false) {
        clearTimeout(this.emitTimer);
        const _emit = () => {
            this.routerSourceFile.refreshFromFileSystemSync();
            const tempSourceFile = this.project.createSourceFile("temp.ts", (writer) => {
                writer.writeLine("type RequiredKeys<T> = { [K in keyof T]-?: {} extends Pick<T, K> ? never : K }[keyof T]");
                writer.writeLine("type Data<Q> = RequiredKeys<Q> extends never ? { data?: Q } : { data: Q }");
                writer.writeLine("type Params<P> = RequiredKeys<P> extends never ? { params?: P } : { params: P }");
                writer.writeLine("class Router {");
                writer.write(this.generateMethods());
                writer.writeLine("}");
            });
            const routerClass = this.routerSourceFile.getClass("Router");
            const staticMembers = tempSourceFile
                .getClass("Router")
                .getStaticMembers();
            this.routerSourceFile.addTypeAliases(tempSourceFile.getTypeAliases().map((m) => m.getStructure()));
            routerClass.addMembers(staticMembers.map((m) => m.getStructure()));
            this.routerSourceFile.emitSync();
            tempSourceFile.delete();
            this.root.log("remind" /* processTypeEnum.REMIND */, "👋 已成功生成");
        };
        if (force) {
            _emit();
        }
        else {
            this.emitTimer = setTimeout(_emit, 300);
        }
    }
    generateMethods() {
        let methodText = "";
        let packages = this.root.pages.reduce((store, page) => {
            var _a, _b;
            let pages = store.get(page.packageName);
            if (!pages) {
                pages = [];
                store.set(page.packageName, pages);
            }
            if ((_a = page.method) === null || _a === void 0 ? void 0 : _a.type) {
                page.method.type = (_b = page.method) === null || _b === void 0 ? void 0 : _b.type.replace(/([A-Za-z]:\\(?:[^\\]*\\)*[^\/:*?"<>|\r\n]*)/g, (match) => {
                    return path.normalize(match).replace(/\\/g, "/");
                });
            }
            pages.push(page);
            return store;
        }, new Map());
        for (const packageName of packages.keys()) {
            const pages = packages.get(packageName);
            if (packageName === "main") {
                methodText += pages === null || pages === void 0 ? void 0 : pages.map((page) => {
                    var _a, _b, _c;
                    return `static ${(_a = page.method) === null || _a === void 0 ? void 0 : _a.name}: ${(_b = page.method) === null || _b === void 0 ? void 0 : _b.type} = ${(_c = page.method) === null || _c === void 0 ? void 0 : _c.value}`;
                }).join("\n\n");
            }
            else {
                methodText += `
        static ${packageName}: {
          ${pages === null || pages === void 0 ? void 0 : pages.map((page) => {
                    var _a, _b;
                    return `${(_a = page.method) === null || _a === void 0 ? void 0 : _a.name}: ${(_b = page.method) === null || _b === void 0 ? void 0 : _b.type}`;
                }).join(";\n")}
        } = {
          ${pages === null || pages === void 0 ? void 0 : pages.map((page) => {
                    var _a, _b;
                    return `${(_a = page.method) === null || _a === void 0 ? void 0 : _a.name}: ${(_b = page.method) === null || _b === void 0 ? void 0 : _b.value}`;
                }).join(",\n")}
        }
        `;
            }
        }
        return methodText;
    }
}
exports.Generator = Generator;
//# sourceMappingURL=generator.js.map