import { defineComponent, ref } from 'vue'
import styles from './index.module.css'
import ClickIcon from '~icons/bi/arrow-through-heart-fill'

const HelloJSX = defineComponent({
    name: 'HelloJSX',
    props: {
        msg: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const count = ref(0)
        return () => (
            <div class={styles.container}>
                <div class="h1">{props.msg}</div>
                <p class="mb-2">
                    <span>count: </span>
                    <span class="overline decoration-sky-500">{count.value}</span>
                </p>
                <button class="btn" onClick={() => count.value++}>
                    <span class="flex flex-row justify-center items-center space-x-2">
                        <ClickIcon />
                        Click Me
                    </span>
                </button>
            </div>
        )
    }
})

export default HelloJSX
