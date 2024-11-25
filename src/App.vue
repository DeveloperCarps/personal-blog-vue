<script setup>

import { RouterView } from 'vue-router';
import NavBar from './components/Navbar.vue';

</script>

<template>
	<div class="container">
		<NavBar />
		<Suspense>
			<RouterView />
		</Suspense>
	</div>
</template>

<style scoped>
	.container {
		width: 100%;
		padding: 10px;
	}
	@Media screen and (min-width: 600px) {
		.container {
			width: 600px;
			padding: 10px;
		}
    }
</style>