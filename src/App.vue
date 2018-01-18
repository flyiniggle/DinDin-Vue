

<template>
  <div id="app">
    <toolbar></toolbar>
    <router-view/>
  </div>
</template>

<script>
  import MealService from "@/services/meals";

  import Toolbar from "@/components/Toolbar.vue"

export default {
  data: function() {
    return {
    	meals: []
    }
  },
  mounted: function() {
    MealService.get()
      .then((data) => console.log(data))
  },
  components: {
    toolbar: Toolbar
  },
  name: 'App'
}
</script>

<style lang="less">
  @import '../node_modules/bootstrap/less/bootstrap.less';
  @import './less/variables.less';
#app {
}
</style>
