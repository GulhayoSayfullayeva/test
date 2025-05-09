import { createApp } from 'vue'
import 'primeicons/primeicons.css'

import App from '../App.vue'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Aura from '@primeuix/themes/aura'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import Panel from 'primevue/panel'
import router from './router'

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
		preset: Aura,
		options: {
			darkModeSelector: ".p-dark",
		}
	},
})
app.component('Button', Button)
app.component('Card', Card)
app.component('InputText', InputText)
app.component('Message', Message)
app.component('Panel', Panel)
app.use(router)
app.mount('#app')
