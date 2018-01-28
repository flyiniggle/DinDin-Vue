<template>
  <div id="app">
    <toolbar></toolbar>
    <router-view :meals="meals" @mealUsed="markUsed"/>
  </div>
</template>

<script>
  import { map, pipe, curry, when } from "ramda";
  import MealService from "@/services/meals";
  import mediator from "@/mediator";
  import * as Editing from "@/business/editing";

  import Toolbar from "@/components/Toolbar.vue"

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
      .then(Editing.identifyMealsList)
      .then(data => this.meals = data)
  },
  methods: {
  	markUsed: function(mealIndex) {
      this.meals = Editing.findAndUseMeal(mealIndex, this.meals);

      pipe(
        Editing.unIdentifyMealsList,
        MealService.post
      )(this.meals);
    },
    saveMeal: function(data, idx) {
      if (idx) {
        const isMatchingMeal = Editing.mealMatchesId(idx);
        const saveChanges = Editing.updateMeal(data);

        this.meals = map(
          when(isMatchingMeal, saveChanges),
          this.meals
        );
      } else {
        this.meals.push(data)
      }

      pipe(
        Editing.unIdentifyMealsList,
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
