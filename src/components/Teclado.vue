<template>
<div class="flexbox-container">
    <div class="teclado">
       <!-- <div class="display" @click="clear">{{operando1 || '0'}}</div> -->
       <Boton value='1' spanX=1 spanY=1  @valorboton="agregar($event)" @click="devolverValor"></Boton>
       <Boton value='2' spanX=1 spanY=1  @valorboton="agregar($event)" @click="devolverValor"></Boton>
       <Boton value='3' spanX=1 spanY=1  @valorboton="agregar($event)" @click="devolverValor"></Boton>
       <Boton value='+' spanX=1 spanY=1  @click="suma" :habilitado="isDisabled" > </Boton>
       <Boton value='4' spanX=1 spanY=1  @valorboton="agregar($event)" @click="devolverValor"></Boton>
       <Boton value='5' spanX=1 spanY=1  @valorboton="agregar($event)" @click="devolverValor"></Boton>
       <Boton value='6' spanX=1 spanY=1  @valorboton="agregar($event)" @click="devolverValor"></Boton>
       <Boton value='-' spanX=1 spanY=1  @click="resta" :habilitado="isDisabled" ></Boton>
       <Boton value='7' spanX=1 spanY=1  @valorboton="agregar($event)" @click="devolverValor"></Boton>
       <Boton value='8' spanX=1 spanY=1  @valorboton="agregar($event)" @click="devolverValor"></Boton>
       <Boton value='9' spanX=1 spanY=1  @valorboton="agregar($event)" @click="devolverValor"></Boton>
       <Boton value='*' spanX=1 spanY=1  @click="multiplicacion" :habilitado="isDisabled" ></Boton>
       <Boton value='0' spanX=1 spanY=1  @valorboton="agregar($event)" @click="devolverValor"></Boton>
       <Boton value='=' spanX=2 spanY=1  @click="calcular" :habilitado="isDisabledIgual"></Boton>
       <Boton value='/' spanX=1 spanY=1  @click="division" :habilitado="isDisabled"></Boton>
       <Boton value='C' spanX=1 spanY=1  @click="clear"></Boton>
       
       
       
    </div>
</div>
</template>

<script>
import Boton from '@/components/Boton.vue'
export default {
  name: 'Teclado',
  props: {
      
      },
   components:{
    Boton
  },
  data(){
      return{
          operando2: '',
          operando1: '',
          operator: null,
          operatorClicked: false,
        
      }
  },
  methods: {
      clear(){
          this.operando1='';
          this.$emit('input', 'c');
      },
      agregar(num){
          if(this.operatorClicked){
              this.operando1='',
              this.operatorClicked=false
          }
          this.operando1+=num;
         
      },
      setPrevNum(){
          this.operando2=this.operando1;
          this.operatorClicked=true;
      },
      suma(){
          this.operator=(a, b) => a + b;
          this.setPrevNum();
          this.$emit('input', '+');
        
      },
      resta(){
          this.operator=(a, b) => a - b;
          this.setPrevNum();
           this.$emit('input', '-');
      },
      multiplicacion(){
          this.operator=(a, b) => a * b;
          this.setPrevNum();
           this.$emit('input', '*');
      },
      division(){
          this.operator=(a, b) => a / b;
          this.setPrevNum();
           this.$emit('input', '/');
      },
      calcular(){
         /* console.log(this.operando1, this.operando2);*/
          if(this.operando2!='' && this.operando1!=''){
            this.operando1=`${this.operator(
              parseFloat(this.operando2),
              parseFloat(this.operando1)
              )}`;
            this.operando2= '';
             this.$emit('input', '='+this.operando1);
          }
      },
      devolverValor(){
          var ultimo= this.operando1.charAt(this.operando1.length -1)
          this.$emit('input', ultimo);
      }
      
  },
  computed:{
     isDisabled: function(){
         return this.operando1 == '';
     },
     isDisabledIgual(){
         return this.operando2 == '' || this.operando1 == '';
     }
  }
};
</script>

<style scoped>
* { box-sizing: border-box; }
    .flexbox-container{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
    .teclado{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        width: 12%;
        /*flex-direction: column;*/
    }
    .display{
        width: 100%;
        height: 50px;
        background-color: #333;
        color:#fff;
        line-height: 50px;
        font-size: 30px;
    }
</style>
