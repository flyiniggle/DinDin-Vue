<template>
  <div id="toolbar" class="container-fluid">
    <img id="logo" src="@/assets/Din-Din Logo.png">
  </div>
</template>

<script>
  export default {
    name: 'Toolbar'
  }
</script>

<style lang="less">
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
</style>
