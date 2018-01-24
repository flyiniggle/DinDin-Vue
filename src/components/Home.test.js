import Vue from 'vue'
import {shallow} from '@vue/test-utils'
import Home from '@/components/Home'

describe('Home.vue', function() {
  it('should show text content.', function() {
    let vm = shallow(Home);

    expect(vm.find("overview"))
      .toBeDefined()
  });
})
