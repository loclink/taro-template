declare interface PluginConfigOptions {
  /** 首页面路径 */
  homePage: string;

  /** 定义项目中需要使用什么额外组件 */
  usingComponents?: "RichText"[];

  tabbarType: "Custom" | "SinglePage" | false;

  subPackageDir: string;

  tabbarDir: string;
}
