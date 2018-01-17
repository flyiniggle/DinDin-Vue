<template>
  <div class="mealCard card">
    <h3>{{ name }}</h3>
    <span><strong>Prep Time:</strong> {{prepTime}}</span>
    <span><strong>Last Used:</strong> {{lastUsed}}</span>
    <button type="button" class="btn btn-primary">Use it!</button>
  </div>
</template>

<script>
  export default {
    name: 'MealCard',
    data: function() {
      return {
        name: "Turkey Goop",
        prepTime: 30,
        lastUsed: "tk"
      }
    }
  }
</script>

<style lang="less">
  @import '../../node_modules/bootstrap/less/bootstrap.less';
  @import '../less/variables.less';

  .mealCard {
    height: 80px;
    background-color: @brand-beige;
  }

  #logo {
    display: inline-block;
    float: left;
  }
</style>
