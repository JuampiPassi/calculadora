<template>
    <div class="pantalla">
        <p class="acumulado">{{acumulado}}</p>
        <p class="operando" v-if="operando!=''">{{operando}}</p>
        <p class="operando" v-else>0</p>
    </div>
</template>
<script>
export default {
    name: 'Pantalla',

    data(){
        return{
            operando: '',
            acumulado: ''
        }

    },
    methods:{
        agregarTexto(valor){
            console.log(valor);
           if(valor=='0'||valor=='1'||valor=='2'||valor=='3'||valor=='4'||valor=='5'||valor=='6'||valor=='7'||valor=='8'||valor=='9'){
                //if(this.operando=='0'){this.operando=''}
                this.operando+=valor ;
           }
            else if(valor=='+' || valor=='-' || valor=='*'|| valor=='/'){
                this.acumulado=this.operando+valor;
                this.operando='';
            }
            else if(valor.charAt(0)=='='){
                this.acumulado+=this.operando+'=';
                this.operando=valor.substr(1);
            }
            else if(valor=='c'){
                this.operando='';
                this.acumulado='';
            }
            else { throw new Error('Argumento no valido.'); }
        }
    }
}
</script>
<style scoped>
* { box-sizing: border-box;
        padding: 0;
        margin: 0;
     }
    .pantalla{
        margin: auto;
        text-align: right;
        background-color: #999999;
        color: #FFFFFF;
        font-family: "Consolas";
        width: 12%;
        height: 60px;
       
    }
    .acumulado{
       /* font-size: 10px;*/
        /*line-height: 30px;*/
        margin-right: 10px;
    }
    .operando{
        font-size: 40px;
        line-height: 40px;
        margin-right: 10px;
    }
</style>