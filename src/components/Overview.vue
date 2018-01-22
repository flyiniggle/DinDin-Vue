<template>
  <div id="overview">
    <div class="row">
      <div class="col-xs-4 col-md-12">
        <h3>Last Meal</h3>
        <span>{{lastMealName}}</span>
      </div>


      <div class="col-xs-4 col-md-12">
        <h3>Most Prepared</h3>
        <ul class="list-unstyled" v-for="(meal, i) in mostPrepared" :key="i">
          <li>{{meal.name}}</li>
        </ul>
      </div>

      <div class="col-xs-4 col-md-12">
        <h3>Least Prepared</h3>
        <ul class="list-unstyled" v-for="(meal, i) in leastPrepared" :key="i">
          <li>{{meal.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {sortMostUsed, sortRecentlyPrepared} from"@/business/meals"
  export default {
    name: 'Overview',
    props: ["meals"],
    computed: {
    	mostPrepared: function() {
        return sortMostUsed(this.meals).slice(0, 3);
      },
      leastPrepared: function() {
        return sortMostUsed(this.meals).reverse().slice(0, 3)
      },
      lastMealName: function() {
    		const lastMeal = sortRecentlyPrepared(this.meals)[0];

    		if(lastMeal && lastMeal.hasOwnProperty("name")) {
    			return lastMeal.name;
        } else {
    			return "";
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @import '../../node_modules/bootstrap/less/bootstrap.less';
  @import '../less/variables.less';

  #overview {
    background-color: @brand-beige;
    padding: @padding-large-vertical;
  }

  h3 {
    color: @brand-brown;
  }

  span, li {
    color: @brand-red;
  }
</style>
