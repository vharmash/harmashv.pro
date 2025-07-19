import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import HView from '@/views/HView.vue'
import CVView from '@/views/CVView.vue'

// Create a mock router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HView },
    { path: '/cv', component: CVView }
  ]
})

describe('HView', () => {
  it('renders the welcome heading correctly', () => {
    const wrapper = mount(HView, {
      global: {
        plugins: [router]
      }
    })
    
    const heading = wrapper.find('h3')
    expect(heading.exists()).toBe(true)
    expect(heading.text()).toContain('Hello and welcome!')
  })

  it('contains information about Volodymyr', () => {
    const wrapper = mount(HView, {
      global: {
        plugins: [router]
      }
    })
    
    const paragraphs = wrapper.findAll('p')
    expect(paragraphs.length).toBeGreaterThan(0)
    
    // Check for key information in the paragraphs
    const content = wrapper.text()
    expect(content).toContain('I\'m Volodymyr')
    expect(content).toContain('IT expert with over a decade of experience')
    expect(content).toContain('JavaScript')
    expect(content).toContain('Python')
    expect(content).toContain('Rust')
  })

  it('contains LinkedIn link', () => {
    const wrapper = mount(HView, {
      global: {
        plugins: [router]
      }
    })
    
    const linkedInLink = wrapper.find('a[href*="linkedin.com"]')
    expect(linkedInLink.exists()).toBe(true)
    expect(linkedInLink.attributes('href')).toContain('linkedin.com/in/volodymyr-harmash')
    expect(linkedInLink.attributes('target')).toBe('_blank')
  })

  it('contains a link to the CV page', () => {
    const wrapper = mount(HView, {
      global: {
        plugins: [router]
      }
    })
    
    const cvLink = wrapper.find('a[href="/cv"]')
    expect(cvLink.exists()).toBe(true)
    expect(cvLink.text()).toContain('CV')
  })
})