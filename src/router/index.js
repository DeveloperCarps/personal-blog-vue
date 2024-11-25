import { createRouter, createWebHistory } from 'vue-router'

import ContactView from '@/views/ContactView.vue'
import HomeView from '@/views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/blog/:id',
			component: BlogView
		},
		{
			path: '/',
			name: 'Home',
			component: HomeView
		},
		{
			path: '/me',
			name: 'About Me',
			component: ContactView
		}
	]
})

export default router