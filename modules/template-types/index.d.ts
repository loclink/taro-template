/// <reference types="./plugin" />

export = TemplateTypes;
export as namespace TemplateTypes;

declare namespace TemplateTypes {
  interface PluginOptions extends PluginConfigOptions {}
}

declare global {
  const definePluginConfig: (
    options: PluginConfigOptions
  ) => PluginConfigOptions;
}
