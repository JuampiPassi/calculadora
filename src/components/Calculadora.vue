<template>
    <div>
      <h1>Calculadora</h1>
        <Pantalla ref="pantalla"></Pantalla>
        <Teclado @input="operando($event)"></Teclado>
    </div>
</template>

<script>
import Pantalla from './Pantalla.vue'

import Teclado from './Teclado.vue'
export default {
  components: { Teclado, Pantalla},
    name: 'Calculadora',
    data(){
        return{
           
        }
    },
    methods:{
      operando(num){
          //console.log(num);
         this.$refs.pantalla.agregarTexto(num);
      },

    },
    computed:{
      
    }
}
</script>

<style scoped>
  h1{
    font-size: 50px;
  }
</style>