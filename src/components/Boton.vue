<template>
    <div>
        <button @click="devolverValor" :style="{'width': +ancho+'px', 'height':+alto+'px'}">{{value}}</button>
     
    </div>
</template>

<script>
export default {
    name: 'Boton',
    props: {value: [String,Symbol],spanX: {type: Number, default: 1}, spanY: {type: Number, default: 1}
    },
   
    mounted(){},
    data(){
        return{ 
        }
    },
    methods:{
        devolverValor(){
           // return this.value;
            console.log(this.value);
        }
    },
    computed:{
        ancho: function(){
            return ((45 * this.spanX) + (2*(this.spanX -1)));
            
        },
        alto: function(){
            return ((45 * this.spanY) + (2*(this.spanY -1)));
        }
    }
}
</script>
<style scoped>
    button{
        font-size: 18px;
        font-weight: bold;
        margin: 2px;
    }

</style>