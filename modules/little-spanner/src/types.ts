
export interface IConfigModel {
  getConfigStr: () => string;
  getConfig: <T = { [key: string]: any }>() => T;
  setConfig: (key: string, value: string, autoSave?: boolean) => Promise<void>;
  saveConfig: () => Promise<void>;
  remove: (key: string, autoSave?: boolean) => Promise<void>;
}

export type LoadConfig = (
  path: string,
  fnName: string
) => Promise<IConfigModel>;
