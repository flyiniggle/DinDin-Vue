

<template>
  <div id="app">
    <toolbar></toolbar>
    <router-view :meals="meals" @mealUsed="markUsed"/>
  </div>
</template>

<script>
  import { map, pipe, curry, trace } from "@/utils/fp";
  import MealService from "@/services/meals";
  import mediator from "@/mediator";

  import Toolbar from "@/components/Toolbar.vue"

  const identifyMeal = (meal, id) => Object.assign({id}, meal);

  const unIdentifyMeal = function(meal) {
  	let unidentifiedMeal = {};

    for(let prop in meal) {
    	if(meal.hasOwnProperty(prop) && prop !== "id") {
    		unidentifiedMeal[prop] = meal[prop];
      }
    }
    return unidentifiedMeal
  }

  const updateMeal = curry((changes, meal) => Object.assign(meal, changes));

  const changeAtIndex = curry(function(fx, targetIdx, target, currentIdx) {
  	if(target.id === targetIdx) {
  		return fx(target);
    } else {
  		return target
    }
  });

export default {
  data: function() {
    return {
    	meals: []
    }
  },
  created: function() {
    mediator.$on("mealUsed", this.markUsed);
    mediator.$on("saveMeal", this.saveMeal)
    mediator.$on("sorted", (meals) => this.meals = meals)
  },
  mounted: function() {
    MealService.get()
      .then(map(identifyMeal))
      .then(data => this.meals = data)
  },
  methods: {
  	markUsed: function(mealIndex, data) {
      const meal = this.meals[mealIndex];
      const usedCount = meal.usedCount || 0;
      const changeSet = {
      	lastUsed: data,
        usedCount: usedCount + 1
      }
      const updateMealAtIndex = pipe(updateMeal, changeAtIndex)(changeSet)(mealIndex);

      this.meals = pipe(
      	map(updateMealAtIndex),
      )(this.meals);

      pipe(
      	map(unIdentifyMeal),
        MealService.post
      )(this.meals);

    },
    saveMeal: function(data, idx) {
  		if (idx) {
        const updateMealAtIndex = pipe(updateMeal, changeAtIndex)(changeSet)(mealIndex);

        this.meals = pipe(
          map(updateMealAtIndex),
        )(this.meals);
      } else {
  			this.meals.push(data)
      }

      pipe(
        map(unIdentifyMeal),
        MealService.post
      )(this.meals);
    }
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
</style>
