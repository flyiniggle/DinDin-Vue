<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-4">
        <div class="">
          <overview :meals="meals"></overview>
        </div>
      </div>
      <div class="col-xs-12 col-md-8">
          <meal-card v-for="(meal, i) in meals"
                     :key="i"
                     :id="meal.id"
                     :name="meal.name"
                     :prepTime="meal.prepTime"
                     :lastUsed="meal.lastUsed"
          ></meal-card>
      </div>
    </div>
  </div>
</template>

<script>
  import MealCard from "@/components/MealCard";
  import Overview from "@/components/Overview";
  export default {
    components: {
      Overview,
      MealCard
    },
    data: function() {
      return {
      }
    },
    name: 'Home',
    props: ["meals"]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../../node_modules/bootstrap/less/bootstrap.less';
  @import '../less/variables.less';
</style>
