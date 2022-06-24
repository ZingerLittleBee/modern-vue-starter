import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import HelloJSX from '../src/components/HelloJSX'

// @vitest-environment jsdom
test('mount hello jsx component', async () => {
    expect(HelloJSX).toBeTruthy()

    const wrapper = mount(HelloJSX)

    expect(wrapper.text()).toContain('Hello JSX')
    // https://vitest.dev/guide/snapshot.html
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('1')

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('2')
})
