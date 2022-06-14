import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import HelloWorld from '../src/components/HelloWorld.vue'

// @vitest-environment jsdom
test('mount hello world component', async () => {
    expect(HelloWorld).toBeTruthy()

    const wrapper = mount(HelloWorld, {
        props: {
            msg: 'test-modern-vue-starter'
        }
    })

    expect(wrapper.text()).toContain('test-modern-vue-starter')
    // https://vitest.dev/guide/snapshot.html
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('1')

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('2')
})
