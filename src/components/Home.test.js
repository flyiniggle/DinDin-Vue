import Vue from 'vue'
import {shallow} from '@vue/test-utils'
import Home from '@/components/Home'

describe('Home.vue', function() {
  it('should have an overview.', function() {
    let vm = shallow(Home);

    expect(vm.find("overview"))
      .toBeDefined()
  });

  it('should have filter controls.', function() {
    let vm = shallow(Home);

    expect(vm.find("filter-controls"))
      .toBeDefined()
  });
})
