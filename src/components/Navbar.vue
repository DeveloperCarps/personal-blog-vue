<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <nav>
        <RouterLink to="/blog">My blog</RouterLink>
        <RouterLink to="/me">Just Me</RouterLink>
        <img src="/logo.png" alt="logo">
    </nav>
</template>
<style scoped>
    nav {
        display: flex;
        justify-content: start;
        align-items: center;
        height: 60px;
    }
    a {
        text-decoration: none;
        color: #333;
        width: 80px;
        margin-left: 20px;
    }
    img {
        margin: 0 20px 0 auto;
        width: 70px;
        height: auto;
        aspect-ratio: 5/3;
    }
</style>