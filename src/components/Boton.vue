<template>
    <div>
        <button @click="devolverValor" :style="{width: {descriptionStyles}}">{{value}}</button>
     
    </div>
</template>

<script>
export default {
    name: 'Boton',
    props: {value: String,spanX: {type: Number, default: 1}, spanY: {type: Number, default: 1}
    },
   // ancho: (45 * this.spanX) + (2*(this.spanX -1)),
   // alto: (45 * this.spanY) + (2*(this.spanY -1)),
    mounted(){},
    data(){
        return{ ancho: (45 * this.spanX) + (2*(this.spanX -1)),
        }
    },
    methods:{
        devolverValor(){
           // return this.value;
            console.log(this.value);
        }
    },
    computed:{
        descriptionStyles: function(){
            const ancho= (45 * this.spanX) + (2*(this.spanX -1));
            //const alto =(45 * this.spanY) + (2*(this.spanY -1));
            return  ancho;
        }
    }
}
</script>
<style scoped>
    button{
        font-size: 18px;
        font-weight: bold;
        margin: 2px;
       /* width: 45px;
        height: 45px;*/
    }

</style>