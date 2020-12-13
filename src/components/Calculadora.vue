<template>
    <div>
      <div class="calculadora">
        <h1>Calculadora</h1>
        <Pantalla ref="pantalla"></Pantalla>
        <Teclado @input="operando($event)"></Teclado>
      </div>
      <div class="lista">
        <h2>Cálculos: </h2>
        <template v-if="this.calculos.length!=0">
          <ul >
             <li v-for="calculo in calculos" :key="calculo" >{{calculo}}</li>
          </ul>
        </template>
        <template v-else>
          <p style="color: red">No se han realizado cálculos</p>
        </template>
      </div>
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
          calculo: '',
           calculos:[],
        }
    },
    methods:{
      operando(num){
          //console.log(num);
          
          if(num!='c') this.calculo+=num;
         this.$refs.pantalla.agregarTexto(num);
         if(num.charAt(0)=='='){
           var calc=this.calculo;
           this.calculos.push(calc);
           this.calculo='';
         }
      },
    }
}
</script>

<style scoped>
  h1{
    font-size: 50px;
  }
  .lista{
    display: inline-block;
    font-family: 'consolas';
    margin-top: 20px;
  }
  
</style>