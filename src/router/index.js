import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MealDetail from '@/components/MealDetail'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/createMeal',
      name: 'MealDetail',
      component: MealDetail
    }
  ]
})
