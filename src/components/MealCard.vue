<template>
  <div class="mealCard card">
    <div class="row infoRow">
      <div class="col-xs-4 text-center">
        <div class="mealStat card-block">
          <h3 class="name">{{ meal.name }}</h3>
        </div>
      </div>

      <div class="col-xs-4 center-block">
        <div class="mealStat card-block">
          <span><strong>Prep Time:</strong> {{formattedPrepTime}} </span>
          <br/>
          <span><strong>Last Used:</strong> {{formattedLastUsed}}</span>
        </div>
      </div>

      <div class="col-xs-4 text-center">
      <div class="mealStat card-block">
          <button type="button" class="btn btn-primary" @click="markUsed">Use it!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mediator from "@/mediator";

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
    },
    methods: {
    	markUsed: function() {
        mediator.$emit("mealUsed", this.meal.id, Date.now())
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
    margin-bottom: @padding-large-vertical;
  }

  .infoRow {
    padding-top: @padding-large-vertical;
  }

  .name {
    margin-top: 0;
  }

  .mealStat {
    display: inline-block;
  }

  .vertical-center {
    vertical-align: middle;
    height:100%;
  }
</style>
