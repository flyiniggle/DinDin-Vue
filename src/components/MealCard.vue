<template>
  <div class="mealCard card">
    <div class="row">
      <div class="col-xs-4 align-middle">
        <div class="mealStat card-block">
          <h3>{{ meal.name }}</h3>
        </div>
      </div>

      <div class="col-xs-4 align-middle">
        <div class="mealStat card-block">
          <span><strong>Prep Time:</strong> {{formattedPrepTime}} </span>
          <br/>
          <span><strong>Last Used:</strong> {{formattedLastUsed}}</span>
        </div>
      </div>

      <div class="col-xs-4 align-middle">
      <div class="mealStat card-block">
          <button type="button" class="btn btn-primary">Use it!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MealCard',
    props: ["meal"],
    computed: {
    	hours: function() {
    		let hours = Math.floor(this.meal.prepTime / 60);

    		if(hours === 0) {
    			return "";
        } else if(hours === 1) {
    			return `${hours} hour`;
        } else {
    			return `${hours} hours`;
        }
      },
      minutes: function() {
        let minutes = this.meal.prepTime % 60;

        if(minutes === 0) {
          return "";
        } else if(minutes === 1) {
          return `${minutes} minute`;
        } else {
          return `${minutes} minutes`;
        }
      },
    	formattedPrepTime: function() {
        return `${this.hours} ${this.minutes}`;
      },
      formattedLastUsed: function() {
        return new Date(this.meal.lastUsed).toDateString();
      }
    }
  }
</script>

<style scoped lang="less">
  @import '../../node_modules/bootstrap/less/bootstrap.less';
  @import '../less/variables.less';

  .mealCard {
    height: 80px;
    background-color: @brand-beige;
    border-bottom: 4px solid @brand-red;
  }

  .mealStat {
    display: inline-block;
  }
</style>
