import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import DetailsView from '../../views/DetailsView.vue';

describe('DetailsView', () => {
  it('renders properly', () => {
    const wrapper = mount(DetailsView)
    expect(wrapper.text()).toContain('This page will eventually show all the inputs from a particular task or project.')
  })
})
