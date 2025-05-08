import { createApp } from 'vue'
import App from '../App.vue'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Aura from '@primeuix/themes/aura'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'

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
app.mount('#app')
