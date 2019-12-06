<template>
  <v-app > 
    <Navbar/>
  
    <v-content class="mx-5">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
//import Home from "/views/Home.vue";
import Navbar from "./components/Navbar.vue"
export default {
  name: "App",
  data: () => ({
    //
  }),
  components:{
    Navbar
  }
};
</script>
