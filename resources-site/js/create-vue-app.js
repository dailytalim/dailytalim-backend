import { createApp } from 'vue/dist/vue.esm-bundler.js'
//import commonComponent from './Components/common-component.vue'
import 'flowbite'

export const createVueApp = (additionalComponents = {}) => {
    const app = createApp({
        components: {
            //commonComponent,
            ...additionalComponents
        }
    })

    import.meta.glob(['../images/**'])

    return app
}
