<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
  </div>
  <Boton value='=' spanX=3 spanY=2 ></Boton>
  <Boton value='8' spanX=2 spanY=1 ></Boton>
  <Boton value='9' spanX=1 spanY=1 ></Boton>
  <router-view/>
</template>

<script>
import Boton from '@/components/Boton.vue'
export default {
  name: 'app',
  components:{
    Boton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
