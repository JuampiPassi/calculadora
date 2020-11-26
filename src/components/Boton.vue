<template>
    <div>
        <button @click="devolverValor" :style="{'width': +ancho+'px', 'height':+alto+'px'}">{{value}}</button>
     
    </div>
</template>

<script>
export default {
    name: 'Boton',
    props: {value: [Number,Symbol],spanX: {type: Number, default: 1}, spanY: {type: Number, default: 1}
    },
   
    mounted(){},
    data(){
        return{ 
        }
    },
    methods:{
        devolverValor(){
            return this.value;
            //console.log(this.value);
        }
    },
    computed:{
        ancho: function(){
            var ancho=this.spanX;
            if(this.spanX<1) ancho=1;
            if(this.spanY>1)ancho=1;
            return ((45 * Math.floor(ancho)) + (2*(Math.floor(ancho) -1)));
            
        },
        alto: function(){
            var alto=this.spanY;
            if(this.spanY<1) alto=1;
            if(this.spanX>1)alto=1;
            return ((45 * Math.floor(alto)) + (2*(Math.floor(alto) -1)));
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