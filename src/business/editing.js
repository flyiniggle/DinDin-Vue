import {addIndex, curry, evolve, inc, map, omit, when} from "ramda";


const mapWithIndex = addIndex(map);

/*
Utilities for identifying meals and removing IDs before saving,
cause that's just how i'm doing it for now.
*/
const identifyMeal = (meal, id) => Object.assign({id}, meal);

const identifyMealsList = mapWithIndex(identifyMeal);

const unIdentifyMeal = omit(["id"]);

const unIdentifyMealsList = map(unIdentifyMeal);

const mealMatchesId = curry((id, meal) => meal.id === id);


const useMeal = evolve({
  lastUsed: () => Date.now(),
  usedCount: inc
});

const findAndUseMeal = function(id, meals) {
  let useMealWhenIdMatches = when(mealMatchesId(id), useMeal);

  return map(useMealWhenIdMatches, meals);
};

export {
  identifyMeal,
  identifyMealsList,
  unIdentifyMeal,
  unIdentifyMealsList,
  mealMatchesId,
  useMeal,
  findAndUseMeal
};
