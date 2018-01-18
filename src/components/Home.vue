<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-4">
        <div class="">
          <overview></overview>
        </div>
      </div>
      <div class="col-xs-12 col-md-8">
        <div class="">
          <meal-card></meal-card>
        </div>
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
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../../node_modules/bootstrap/less/bootstrap.less';
  @import '../less/variables.less';
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
