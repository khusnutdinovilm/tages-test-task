import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import uiComponents from "@/components/ui";
import iconsComponents from "@/components/icons";
import sharedComponents from "@/components/shared";

const appComponents = [
  ...uiComponents,
  ...iconsComponents,
  ...sharedComponents,
];

const app = createApp(App);

appComponents.forEach((appComponent) =>
  app.component(appComponent.name, appComponent),
);

app.use(store).mount("#app");
