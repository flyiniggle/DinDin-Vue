import sinon from 'sinon';
import { shallow } from '@vue/test-utils'

import MealService from '@/services/meals';
import App from './App';

var getMealStub, postMealStub, getMealSpy, postMealSpy

function getMealsStub() {
  return new Promise(function(resolve) {
    resolve([]);
  });
};

function postMealsStub() {
  return new Promise(function(resolve) {
    resolve([{id: 0}]);
  });
};

beforeAll(function() {
  getMealStub = sinon.stub(MealService, "get").callsFake(getMealsStub);
  postMealStub = sinon.stub(MealService, "post").callsFake(postMealsStub);
  getMealSpy = sinon.spy(getMealsStub);
  postMealSpy = sinon.spy(postMealsStub);
});

describe("#App", function () {
  it("should work", function() {
    const wrapper = shallow(App);
  })
});
