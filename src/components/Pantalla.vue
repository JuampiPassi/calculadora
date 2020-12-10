<template>
    <div class="pantalla" @click="agregarTexto('=255')">
        <p class="acumulado">{{acumulado}}</p>
        <p class="operando">{{operando}}</p>
    </div>
</template>
<script>
export default {
    name: 'Pantalla',

    data(){
        return{
            operando: '0',
            acumulado: ''
        }

    },
    methods:{
        agregarTexto(valor){
            if(Number.isInteger(valor)){
                if(valor>=0 && valor <=9){
                    if(this.operando=='0'){this.operando=''}
                    this.operando+=valor ;
                }
            }
            else if(valor=='+' || valor=='-' || valor=='*'|| valor=='/'){
                this.acumulado=this.operando+valor;
                this.operando='0';
            }
            else if(valor.charAt(0)=='='){
                this.acumulado+='=';
                this.operando=valor.substr(1);
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
    }
    .operando{
        font-size: 40px;
        line-height: 40px;
    }
</style>