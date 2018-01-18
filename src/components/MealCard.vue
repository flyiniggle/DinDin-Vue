<template>
  <div class="mealCard card">
    <div class="row">
      <div class="col-xs-4 align-middle">
        <div class="mealStat card-block">
          <h3>{{ name }}</h3>
        </div>
      </div>

      <div class="col-xs-4 align-middle">
        <div class="mealStat card-block">
          <span><strong>Prep Time:</strong> {{prepTime}}</span>
          <br/>
          <span><strong>Last Used:</strong> {{lastUsed}}</span>
        </div>
      </div>

      <div class="col-xs-4 align-middle">
      <div class="mealStat card-block">
          <button type="button" class="btn btn-primary">Use it!</button>
        </div>
      </div>
    </div>
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

<style scoped lang="less">
  @import '../../node_modules/bootstrap/less/bootstrap.less';
  @import '../less/variables.less';

  .mealCard {
    height: 80px;
    background-color: @brand-beige;
    border-bottom: 4px solid @brand-red;
  }

  .mealStat {
    display: inline-block;
  }
</style>
