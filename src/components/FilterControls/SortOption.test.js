import Vue from 'vue'
import {mount} from '@vue/test-utils'
import SortOption from '@/components/FilterControls/SortOption'

describe('SortOption.vue', function() {
  let vm = mount;
  const sortFunction = () => undefined;
  const slots = {default: "test filter"};
  const propsData = {
    sortName: test,
    sortFunction
  };

  beforeEach(function() {
  });

  it('should show text content.', function() {
    vm = mount(SortOption, {
      propsData,
      slots
    });

    expect(vm.element.innerHTML)
      .toEqual(slots.default)
  });

  it("should be selected.", function() {
    propsData.active = true;
    vm = mount(SortOption, {
      propsData,
      slots
    });

    expect(vm.element.className).toEqual("selected");

  });
});
