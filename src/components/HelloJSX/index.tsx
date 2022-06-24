import { defineComponent, ref } from 'vue'

const HelloJSX = defineComponent({
    name: 'HelloJSX',
    setup() {
        const count = ref(0)
        return () => (
            <div>
                <div>Hello JSX</div>
                <div>{count.value}</div>
                <button class="btn" onClick={() => count.value++}>
                    <span class="flex flex-row justify-center items-center space-x-2">
                        {' '}
                        <click-icon />
                        Click Me{' '}
                    </span>
                </button>
            </div>
        )
    }
})

export default HelloJSX
