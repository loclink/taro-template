import config from "@/config";
import { atom, useAtom } from "jotai";
export const tabbarIndex = atom(0);
export const tabbarData = atom(config.tabbar);
export const useTabbar = () => {
  const [data, setData] = useAtom(tabbarData);
  const [current, setCurrent] = useAtom(tabbarIndex);
  return {
    data,
    setData,
    current,
    setCurrent,
  };
};

export default useTabbar;
