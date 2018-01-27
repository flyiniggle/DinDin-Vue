import {mount} from '@vue/test-utils'
import * as sinon from 'sinon';
import MealCard from '@/components/MealCard'

describe('MealCard.vue', function() {
  describe("#computed hours", function() {
    it('should return formatted hour.', function() {
      let propsData = {
        prepTime: 100
      };
      let wrapper = mount(MealCard, { propsData });

      expect(wrapper.vm.$options.computed.hours.call(propsData)).toEqual("1 hour");
    });

    it('should return formatted hours.', function() {
      let propsData = {
        prepTime: 200
      };
      let wrapper = mount(MealCard, { propsData });

      expect(wrapper.vm.$options.computed.hours.call(propsData)).toEqual("3 hours");
    });

    it('should return empty string.', function() {
      let propsData = {
        prepTime: 10
      };
      let wrapper = mount(MealCard, { propsData });

      expect(wrapper.vm.$options.computed.hours.call(propsData)).toEqual("");
    });
  });

  describe("#computed minutes", function() {
    it('should return formatted minute.', function() {
      let propsData = {
        prepTime: 1
      };
      let wrapper = mount(MealCard, { propsData });

      expect(wrapper.vm.$options.computed.minutes.call(propsData)).toEqual("1 minute");
    });

    it('should return formatted minute.', function() {
      let propsData = {
        prepTime: 61
      };
      let wrapper = mount(MealCard, { propsData });

      expect(wrapper.vm.$options.computed.minutes.call(propsData)).toEqual("1 minute");
    });

    it('should return formatted hours.', function() {
      let propsData = {
        prepTime: 100
      };
      let wrapper = mount(MealCard, { propsData });

      expect(wrapper.vm.$options.computed.minutes.call(propsData)).toEqual("40 minutes");
    });

    it('should return empty string.', function() {
      let propsData = {
        prepTime: 0
      };
      let wrapper = mount(MealCard, { propsData });

      expect(wrapper.vm.$options.computed.minutes.call(propsData)).toEqual("");
    });
  });

  describe("#formattedLastUsed", function() {
    it("should return formatted date", function() {
      let propsData = {
        lastUsed: 1517067355567
      };
      let expected = "Jan 27th, 2018";

      expect(MealCard.computed.formattedLastUsed.call(propsData)).toEqual(expected);
    });
  });

  describe("#Use It button", function() {
    it("should call markUsed.", function() {
      const wrapper = mount(MealCard);

      let spy = sinon.spy(wrapper.vm, "markUsed");
      //TODO - figure out why this needs to be called twice
      wrapper.find("button").trigger("click");
      wrapper.find("button").trigger("click");

      expect(spy.called).toBeTruthy();
    });
  });
});
