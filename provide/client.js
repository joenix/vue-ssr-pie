const Vue = require("vue");
const App = require("../../vue-ssr-pie-project/src/index.vue");

const app = new Vue({
    // 根实例简单的渲染应用程序组件。
    render: h => h(App)
});
app.$mount("#app");
