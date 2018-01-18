<template>
  <div id="overview">
    <div class="row">
      <div class="col-xs-4 col-md-12">
        <h3>Last Meal</h3>
        <span>{{lastMealName}}</span>
      </div>


      <div class="col-xs-4 col-md-12">
        <h3>Most Prepared</h3>
        <ul v-for="(i, meal) in mostPrepared" :key="i">
          <li>{{meal.name}}</li>
        </ul>
      </div>

      <div class="col-xs-4 col-md-12">
        <h3>Least Prepared</h3>
        <ul v-for="(i, meal) in leastPrepared" :key="i">
          <li>{{meal.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Overview',
    data: function() {
      return {
        lastMealName: "Turkey Goop",
        mostPrepared: [
          {name: "tukey Goop"},
          {name: "Refritos"},
          {name: "Gnocci"}
        ],
        leastPrepared: [
          {name: "Cabbage Rolls"},
          {name: "Braised Short Ribs"}
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  @import '../../node_modules/bootstrap/less/bootstrap.less';
  @import '../less/variables.less';

  #overview {
    background-color: @brand-beige;
  }
</style>
