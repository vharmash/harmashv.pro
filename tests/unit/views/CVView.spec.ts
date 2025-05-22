import { describe, it, expect } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import CVView from '@/views/CVView.vue'
import TheCV from '@/components/TheCV.vue'

describe('CVView', () => {
  it('renders the main element', () => {
    const wrapper = mount(CVView, {
      global: {
        stubs: {
          TheCV: true
        }
      }
    })
    
    expect(wrapper.find('main').exists()).toBe(true)
  })

  it('includes TheCV component', () => {
    const wrapper = shallowMount(CVView)
    
    // Check if TheCV component is included
    const theCvComponent = wrapper.findComponent(TheCV)
    expect(theCvComponent.exists()).toBe(true)
  })
})