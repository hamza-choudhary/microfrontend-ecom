import { createApp } from 'vue'
import Footer from './components/Footer.vue'
import './style.css'

export default function (element) {
	createApp(Footer).mount(element)
}
