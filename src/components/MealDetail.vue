<template>
  <div id="main" class="container">
    <div class="row">
      <div class="col-xs-12 col-md-4">
        <input type="text" class="form-control" v-model="name"/>
      </div>
      <div class="col-xs-12 col-md-8">
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 input-group">
        <p>
          <input id="prepHours" type="number" class="form-control smallInput" v-model="prepHours"/>
          <label for="prepHours">hours</label>
        </p>
        <p>
          <input id="minutes" type="number" class="form-control smallInput" v-model="prepMinutes"/>
          <label for="minutes">minutes</label>
        </p>
        <p>
          <input id="taste" type="number" class="form-control smallInput" v-model="taste"/>
          <label for="taste">taste</label>
        </p>
        <p>
          <input id="difficulty" type="number" class="form-control smallInput" v-model="difficulty"/>
          <label for="difficulty">difficulty</label>
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <button type="button" class="btn btn-default" @click="save">save</button>
        <router-link to="/"><button type="button" class="btn btn-default">cancel</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import mediator from "@/mediator"
  export default {
    components: {
    },
    data: function() {
      return {
      	name: "",
        prepHours: 0,
        prepMinutes: 0,
        taste: 5,
        difficulty: 1
      }
    },
    computed: {
    	prepTime: function() {
        return this.prepMinutes + (this.prepHours * 60);
      }
    },
    name: 'MealDetail',
    props: ["meal"],
    methods: {
    	save: function() {
    		const data = {
    			name: this.name || "no name",
          prepTime: parseInt(this.prepTime),
          taste: this.taste.toString(),
          difficulty: this.difficulty.toString()
        }
        mediator.$emit("saveMeal", data);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../../node_modules/bootstrap/less/bootstrap.less';
  @import '../less/variables.less';

  #main {
    background-color: @brand-beige;
  }

  .smallInput {
    width: 5em !important;
  }


</style>
