import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import uiComponents from "@/components/ui";
import iconsComponents from "@/components/icons";

const app = createApp(App);

uiComponents.forEach(uiComponent => app.component(uiComponent.name, uiComponent))
iconsComponents.forEach(iconIComponent => app.component(iconIComponent.name, iconIComponent))

app.use(store).mount("#app");
