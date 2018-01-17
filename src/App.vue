

<template>
  <div id="app">
    <toolbar></toolbar>
    <router-view/>
  </div>
</template>

<script>
  import Toolbar from "@/components/Toolbar.vue"

export default {
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
