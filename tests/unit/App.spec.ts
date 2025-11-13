import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import HView from '@/views/HView.vue'
import CVView from '@/views/CVView.vue'

// Create a mock router with the expected routes
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HView },
    { path: '/cv', component: CVView }
  ]
})

describe('App', () => {
  it('renders header with navigation', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })
    await wrapper.vm.$nextTick();
    
    // Verify navigation links exist
    expect(wrapper.find('nav').exists()).toBe(true)
    expect(wrapper.findAll('nav a').length).toBe(3)
    
    // Verify home link
    const homeLink = wrapper.findAll('nav a')[0]!
    expect(homeLink.text()).toContain('Home')
    expect(homeLink.attributes('href')).toBe('/')


    // Verify CV link
    const cvLink = wrapper.findAll('nav a')[1]!
    expect(cvLink.text()).toContain('CV')
    expect(cvLink.attributes('href')).toBe('/cv')

    // Verify LinkedIn link
    const linkedInLink = wrapper.findAll('nav a')[2]!
    expect(linkedInLink.attributes('href')).toContain('linkedin.com/in/volodymyr-harmash')
  })

  it('renders the header with name and title', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })
    
    expect(wrapper.find('h1').text()).toBe('Volodymyr Harmash')
    expect(wrapper.find('h2').text()).toBe('Senior Engineer, Support')
  })

  it('renders the profile picture', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })
    
    expect(wrapper.find('picture').exists()).toBe(true)
    expect(wrapper.find('img').attributes('alt')).toBe('Profile Pic')
  })

  it('renders the footer with copyright information', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })
    
    const footer = wrapper.find('div.inset-x-0.bottom-4')
    expect(footer.exists()).toBe(true)
    expect(footer.text()).toContain('Harmash V © Kyiv, Ukraine')
    expect(footer.text()).toContain('2023')
  })
})