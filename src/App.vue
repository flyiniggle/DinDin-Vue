

<template>
  <div id="app">
    <toolbar></toolbar>
    <router-view :meals="meals"/>
  </div>
</template>

<script>
  import { map } from "@/utils/fp";

  import MealService from "@/services/meals";

  import Toolbar from "@/components/Toolbar.vue"

  const identifyMeal = (meal, id) => Object.assign({id}, meal);

export default {
  data: function() {
    return {
    	meals: []
    }
  },
  mounted: function() {
    MealService.get()
      .then(map(identifyMeal))
      .then(data => this.meals = data)
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
