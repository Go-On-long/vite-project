import { createApp } from "vue"
import "../src/styles/style.less"
import App from "./App.vue"
import router from "./router"

const app = createApp(App)

app.use(router).mount("#app")
