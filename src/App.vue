<template>
<div>
  <div id="app">
    <v-header></v-header>    
    <div class="wrapper">
          <router-view></router-view>
    </div>
     <v-footer></v-footer>
  </div>
</div>
</template>

<script>
import vheader from "@/components/layout/header.vue"
import vfooter from "@/components/layout/footer.vue"
  export default {
    name: 'App',
    components:{
      "v-header":vheader,
      "v-footer":vfooter
    }
  }
</script>

<style>
#app {
  margin:0;
  padding: 0;
}
</style>
