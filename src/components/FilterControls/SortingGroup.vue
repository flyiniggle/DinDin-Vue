<script>
  import { pipe, reverse } from "ramda";

  import mediator from "@/mediator";
  import SortOption from "@/components/FilterControls/SortOption";
  import { sortRecentlyPrepared, sortById } from "@/business/meals";

  export default {
    components: {SortOption},
    name: 'SortingGroup',
    props: {
      meals: {
        type: Array,
        default: () => []
      }
    },
    data: function() {
    	return {
    		selected: ""
      }
    },
    methods: {
    	sortRecentlyPrepared,
      sortLongestUnused: function(meals) {
    		return pipe(
    			sortRecentlyPrepared,
          reverse
        )(this.meals)
      },
      handleSorting: function(sortName, sorter) {
    		this.selected = sortName;
    		mediator.$emit("sorted", sorter(this.meals));
      },
      clearSorting: function() {
    		this.selected = "";
        mediator.$emit("sorted", sortById(this.meals));
      }
    },
    render: function(h) {
      return (
      	<div class="col-xs-12 col-md-9">
          <sort-option
            active={ this.selected === 'recentlyPrepared' }
            sortName="recentlyPrepared"
            sorter={ this.sortRecentlyPrepared }
            onSelected={ this.handleSorting }
            onUnselected={ this.clearSorting }>recently used</sort-option>
          <sort-option
            active={ this.selected === "longestUnused" }
            sortName="longestUnused"
            sorter={ this.sortLongestUnused }
            onSelected={ this.handleSorting }
            onUnselected={ this.clearSorting }>longest unused</sort-option>
        </div>
      )
    }
  }
</script>

<style scoped lang="less">
  @import '../../../node_modules/bootstrap/less/bootstrap.less';
  @import '../../less/variables.less';
</style>

