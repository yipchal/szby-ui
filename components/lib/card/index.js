import MyCard from "./src/main.vue";

MyCard.install = function(Vue) {
    Vue.component(MyCard.name, MyCard);
}

export default MyCard;
