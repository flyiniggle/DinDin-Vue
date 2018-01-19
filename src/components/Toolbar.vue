<template>
  <div id="toolbar" class="container-fluid">
    <div class="row">
      <div class="col-xs-4 col-lg-1">
        <img id="logo" src="~@/assets/Din-Din Logo.png">
      </div>
      <div class="col-xs-4 col-lg-2">
        <router-link to="createMeal"><h3 class="nav">New Meal</h3></router-link>
      </div>
      <div class="col-xs-4 col-lg-2">
        <router-link to="createMeal"><h3 class="nav">Random Meal</h3></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Toolbar'
  }
</script>

<style scoped lang="less">
  @import '../../node_modules/bootstrap/less/bootstrap.less';
  @import '../less/variables.less';
  #toolbar {
    height: 80px;
    background-color: @brand-brown;
  }

  #logo {
    display: inline-block;
    float: left;
  }

  .nav, .nav:hover, .nav:visited {
    color: @brand-orange;
  }
</style>
