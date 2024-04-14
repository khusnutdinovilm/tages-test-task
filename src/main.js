import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import uiComponents from "@/components/ui";
import iconsComponents from "@/components/icons";
import sharedComponents from "@/components/shared";

const app = createApp(App);

uiComponents.forEach((uiComponent) =>
  app.component(uiComponent.name, uiComponent)
);
iconsComponents.forEach((iconIComponent) =>
  app.component(iconIComponent.name, iconIComponent)
);
sharedComponents.forEach((sharedComponent) =>
  app.component(sharedComponent.name, sharedComponent)
);

app.use(store).mount("#app");
