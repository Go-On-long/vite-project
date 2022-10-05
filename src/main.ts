import { createApp } from "vue"
import "../src/styles/style.css"
import App from "./App.vue"
import router from "./routerr"

const app = createApp(App)

app.use(router).mount("#app")
