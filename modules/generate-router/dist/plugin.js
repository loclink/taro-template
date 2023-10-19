"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plugin = void 0;
const path = require("path");
const generator_1 = require("./generator");
const loader_1 = require("./loader");
const fs = require("fs-extra");
class Plugin {
    constructor(ctx, config) {
        var _a, _b;
        this.ctx = ctx;
        this.config = config;
        this.pages = [];
        this.helper = this.ctx.helper;
        this.paths = this.ctx.paths;
        this.config.packages = (_a = this.config.packages) !== null && _a !== void 0 ? _a : [];
        this.getSubConfig();
        this.config.ignore = (_b = this.config.ignore) !== null && _b !== void 0 ? _b : [".DS_Store"];
        this.isWatch = !!(this.ctx.runOpts.options.isWatch || this.ctx.runOpts.options.watch);
        this.loader = new loader_1.Loader(this);
        this.generator = new generator_1.Generator(this);
    }
    generateSubPageConfig(pagesSubPath, isTabbar) {
        const handlePages = (subName) => {
            const pages = fs
                .readdirSync(path.join(pagesSubPath, subName))
                .map((item) => {
                const pageSubCpnPath = path.join(pagesSubPath, subName, item, "index.tsx");
                if (fs.pathExistsSync(pageSubCpnPath)) {
                    return `${item}/index`;
                }
            })
                .filter((item) => item);
            if (pages.length) {
                return {
                    name: subName,
                    pagePath: path.join(pagesSubPath, subName),
                };
            }
        };
        const pathArr = fs
            .readdirSync(pagesSubPath)
            .map((subName) => {
            if (isTabbar) {
                if (subName === "tabbar") {
                    return handlePages(subName);
                }
            }
            else {
                return handlePages(subName);
            }
        })
            .filter((item) => item);
        return pathArr;
    }
    getSubConfig() {
        this.config.ignore = ["tabbar"];
        this.config.packages = [];
        if (this.config.packages.findIndex((pkg) => pkg.name === "main") === -1) {
            this.config.packages.push({
                name: "main",
                pagePath: path.resolve(this.paths.sourcePath, "pages"),
            });
        }
        const pagesSubPath = path.join(this.ctx.paths.sourcePath, "./pages-sub");
        const mainPath = path.join(this.ctx.paths.sourcePath, "./pages");
        const pagesSubPathArr = this.generateSubPageConfig(pagesSubPath);
        const tabbarPathArr = this.generateSubPageConfig(mainPath, true);
        this.config.packages = [
            ...this.config.packages,
            ...tabbarPathArr,
            ...pagesSubPathArr,
        ];
    }
    onBuildStart() {
        this.ctx.onBuildStart(() => this.start());
        return this;
    }
    registerCommand() {
        const { ctx } = this;
        ctx.registerCommand({
            name: "router-gen",
            optionsMap: {
                "--watch": "监听页面信息变化自动生成 Router",
            },
            synopsisList: [
                "taro router-gen 生成 Router",
                "taro router-gen --watch 监听页面信息变化自动生成 Router",
            ],
            fn: () => {
                this.start();
                process.exit(0);
            },
        });
        return this;
    }
    watch() {
        const { ctx } = this;
        this.log("remind" /* processTypeEnum.REMIND */, "正在监听页面变化自动生成 Router.to...");
        const loadPge = (pageDirPath, pkg) => {
            if (this.loader.loadPage(pageDirPath, pkg))
                this.generator.emit();
        };
        for (const pkg of this.config.packages) {
            const onChange = (value) => {
                if (value.endsWith("route.config.ts")) {
                    value = value.replace("/route.config.ts", "");
                }
                loadPge(value, pkg);
            };
            this.watcher = ctx.helper.chokidar
                .watch(pkg.pagePath, { ignoreInitial: true, depth: 0 })
                .on("addDir", onChange)
                .on("unlinkDir", onChange);
            this.routerWatcher = ctx.helper.chokidar
                .watch(path.resolve(pkg.pagePath, "**/route.config.ts"), {
                ignoreInitial: true,
                depth: 1,
            })
                .on("add", onChange)
                .on("change", onChange)
                .on("unlink", onChange);
        }
    }
    // 监听到page-sub、tabbar发生变化时执行此函数
    async handleGenerator(val) {
        const name = val.split("/")[val.split("/").length - 3];
        const isPkg = this.config.packages.find((item) => item.name === name);
        if (!isPkg) {
            this.getSubConfig();
            if (val.endsWith("route.config.ts")) {
                val = val.replace("/route.config.ts", "");
            }
            else if (val.endsWith("index.tsx")) {
                val = val.replace("/index.tsx", "");
            }
            const pkg = this.config.packages.find((item) => item.name === name);
            pkg && this.loader.loadPage(val, pkg);
            this.generator.emit();
            await this.watcher.close();
            await this.routerWatcher.close();
            this.watch();
        }
    }
    start() {
        try {
            this.log("start" /* processTypeEnum.START */, "正在生成路由方法...");
            this.loader.loadPages();
            this.generator.emit(true);
            if (this.isWatch)
                this.watch();
            const pagesSubPath = path.join(this.ctx.paths.sourcePath, "./pages-sub", "**/index.tsx");
            const tabbarPath = path.join(this.ctx.paths.sourcePath, "./pages", "tabbar", "/*/index.tsx");
            this.ctx.helper.chokidar
                .watch([pagesSubPath, tabbarPath], { ignoreInitial: true, depth: 2 })
                .on("add", this.handleGenerator.bind(this));
            // this.ctx.helper.chokidar
            //   .watch(path.join(this.ctx.paths.sourcePath, "app.config.ts"), {
            //     ignoreInitial: true,
            //   })
            //   .on("addDir", this.handleGenerator.bind(this));
        }
        catch (err) {
            this.log("error" /* processTypeEnum.ERROR */, "路由方法生成失败，请将以下错误反馈给我：https://github.com/lblblong/tarojs-router-next/issues");
            console.log(err);
        }
    }
    log(type, text) {
        this.ctx.helper.printLog(type, text);
    }
}
exports.Plugin = Plugin;
//# sourceMappingURL=plugin.js.map