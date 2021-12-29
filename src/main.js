import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
// import Ninjas from './Ninjas.vue'
// import Inicio from './Inicio.vue'
//Al importar un compone
// Vue.component('ninjas',  Ninjas);

//si queremos importar el componente globalmente lo hacemos desde este archivo, con esto damos la posibilidad de usar el componente en todo el proyecto

Vue.config.productionTip = false
Vue.use(VueResource);
// //Creacion de un bus de eventos, aka una nueva instacia
// export const bus = new Vue();

//Creacion de directivas de Vue personalizadas
Vue.directive('rainbow', {
  //bind(datos que recibe la directiva), el-> elemento implementado, binding -> datos recibidos, vnode ->
  bind(el, binding, vnode){
    //le digo al elemento que se aplique asi mismo un color aleatorio usando la funcion math
      el.style.color = "#"+ Math.random().toString().slice(2,8);
  }
});
// lo mismo de arriba pero expandiendo mas el uso de las directivas personalizadas
Vue.directive('theme', {
  bind(el, binding, vnode){
    if(binding.value == 'bgCol'){
      el.style.backgroundColor="#ffffff"
    }
    //se pueden agregar condicionales dependiendo de lo que se necesite para dicha directiva
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
