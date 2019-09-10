const Vue = require("vue").default;
const App = require("../../vue-ssr-pie-project/src/index.vue").default;

module.exports = mode => {
    console.log("===== ===== ===== in Provide ===== ===== =====", mode);

    console.log(process.cwd());
    return context => {
        return new Vue({
            // template: `<h1>Site Running</h1>`
            render: h => h(App)
        });
    };
};
