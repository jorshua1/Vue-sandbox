import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Ninjas from './Ninjas.vue'
// import Inicio from './Inicio.vue'
//Al importar un compone
// Vue.component('ninjas',  Ninjas);

//si queremos importar el componente globalmente lo hacemos desde este archivo, con esto damos la posibilidad de usar el componente en todo el proyecto

Vue.config.productionTip = false

// //Creacion de un bus de eventos, aka una nueva instacia
// export const bus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
