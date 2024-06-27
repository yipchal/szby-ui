import MyDemo from "./src/main.vue";

MyDemo.install = function(Vue) {
    Vue.component(MyDemo.name, MyDemo)
}

export default MyDemo