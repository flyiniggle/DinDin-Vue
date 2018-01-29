<template>
  <div class="filterControlBox row">
    <div class="col-xs-12 col-md-9">
      <h3>Sort By:</h3>
      <sorting-group :meals="meals" @sort="sortMeals"></sorting-group>
    </div>
    <div class="col-xs-12 col-md-3">
      <h3>Filter</h3>
      <input :model="filterMeals"/>
    </div>
  </div>
</template>

<script>
  import mediator from "@/mediator";
  import SortingGroup from "@/components/FilterControls/SortingGroup"


  export default {
    components: {SortingGroup},
    name: 'FilterControls',
    data: function() {
      return {
      	filter: ""
      };
    },
    props: {
    	meals: {
    		type: Array,
        default: () => []
      }
    },
    methods: {
      sortMeals: function(sorter) {
        this.meals.sort(sorter);
      },
      filterMeals: function(val) {
        return true
      }
    }
  }
</script>

<style scoped lang="less">
  @import '../../../node_modules/bootstrap/less/bootstrap.less';
  @import '../../less/variables.less';

  .filterControlBox {
    background-color: @brand-beige;
    padding: @padding-large-vertical;
    margin: @padding-large-vertical;
  }
</style>
