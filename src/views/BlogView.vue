<script setup>

import { useRoute } from 'vue-router'
import PocketBase from 'pocketbase';
const route = useRoute()
const id = route.params.id;
const pb = new PocketBase('https://thewhatdeep.pockethost.io/');
const blogPost = await pb.collection('blog_view').getOne(id);

function returnDate(date) {
    return new Date(date).toLocaleDateString();
}

</script>
<template>
    <div class="blog-post">
        <h1>{{ blogPost.title }}</h1>
        <span>{{ returnDate(blogPost.created) }}</span>
        <br />
        <div v-html="blogPost.text"></div>
    </div>
</template>
<style scoped>
h1 {
    font-weight: 600;
    font-size: 2em;
    margin: 50px 0 20px 0;
    letter-spacing: -1px
}
span {
    margin-bottom: 50px;
}
div {
    display: block;
}
</style>