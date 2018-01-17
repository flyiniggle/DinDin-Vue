<template>
  <div id="toolbar">
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
    width: 100%;
    height: 80px;
    background-color: @brand-brown;
  }

  #logo {
    display: inline-block;
    float: left;
  }
</style>
