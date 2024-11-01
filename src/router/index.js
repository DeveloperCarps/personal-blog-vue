import { createRouter, createWebHistory } from 'vue-router'

import BlogView from '@/views/BlogView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/blog',
			name: 'Blog',
			component: BlogView
		},
		{
			path: '/me',
			name: 'About Me',
			component: ContactView
		}
	]
})

export default router