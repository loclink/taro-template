/// <reference types="./plugin" />

export = TemplateTypes;
export as namespace TemplateTypes;

declare namespace TemplateTypes {
  interface PluginOptions extends PluginConfigOptions {}
  interface Config extends GlobalConfig {}
}

declare global {
  const definePluginConfig: (
    options: PluginConfigOptions
  ) => PluginConfigOptions;

  type GlobalConfig = {
    [key: string]: any;

    /**
     * @description 是否开启静默登录
     */
    silentAuthorization: boolean;

    /**
     * @description 静默登录请求地址
     */
    silentAuthorizationUrl: string;

    /**
     * @description 登录页，关闭静默登录时，未通过校验跳转至该路径
     */
    loginUrl: string;

    /**
     * @description 请求地址
     */
    apiUrl: {
      /**
       * @description 开发环境地址
       */
      dev: string;
      /**
       * @description 生产环境地址
       */
      pro: string;
    };
    /**
     * @description 注册高级路由器
     */
    router?: any;

    /**
     * @description 请求时是否打印日志
     */
    printLog?: boolean;
    tabbar: TabItem[];
  };
}

type TabItem = {
  /**
   * @description tab的文案
   */
  text?: string;

  /**
   * @description tab的路由地址
   */
  pagePath: string;

  /**
   * @description 非活跃状态的icon
   */
  iconPath?: string;

  /**
   * @description 活跃状态的icon
   */
  selectedIconPath?: string;
};
