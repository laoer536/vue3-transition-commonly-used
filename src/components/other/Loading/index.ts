import Loading from "./index.vue";
import { h, render } from "vue";
export const loading = (show: boolean) => {
  const loadingE = document.getElementsByClassName(
    "loading"
  )[0] as HTMLDivElement;
  if (show) {
    if (loadingE) {
      loadingE.style.visibility = "visible";
    } else {
      const loadingVNode = h(Loading, { show });
      const container = document.createElement("div");
      render(loadingVNode, container);
    }
  } else {
    if (loadingE) {
      loadingE.style.visibility = "hidden";
    }
  }
};
