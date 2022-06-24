import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import HelloSetup from '../src/components/HelloSetup/index.vue'

// @vitest-environment jsdom
test('mount hello jsx component', async () => {
    expect(HelloSetup).toBeTruthy()

    const wrapper = mount(HelloSetup, {
        props: {
            msg: 'Hello Setup'
        }
    })

    expect(wrapper.text()).toContain('Hello Setup')
    // https://vitest.dev/guide/snapshot.html
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('1')

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('2')
})
