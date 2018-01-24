<script type="text/jsx">
  import mediator from "@/mediator";
  import SortingGroup from "@/components/FilterControls/SortingGroup"

  export default {
    name: 'SortOption',
    props: ["sortName", "active", "sorter"],
    methods: {
    	toggleSelected: function() {
    		console.log(this.active)
        if(!this.active) {
          this.$emit("selected", this.sortName, this.sorter);
        } else {
          this.$emit("unselected", this.sortName);
        }
      }
    },
    render: function(h) {
      return (
      	<h4 class={ this.active ? "selected" : "" } onClick={ this.toggleSelected }> { this.$slots.default } </h4>
      )
    }
  }
</script>

<style scoped lang="less">
  @import '../../../node_modules/bootstrap/less/bootstrap.less';
  @import '../../less/variables.less';

  h4 {
    color: @brand-orange;
    display:  inline;
    padding: @padding-small-vertical;
    border-radius: @border-radius-small;
    cursor: pointer;
  }

  .selected {
    background-color: @brand-red;
  }
</style>
