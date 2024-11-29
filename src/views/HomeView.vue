<style scoped>
    .blogs {
        display: flex;
        flex-flow: column-reverse nowrap;
        justify-content: end;
        align-items: center;
    }
    .blog {
        display: flex;
        justify-content: start;
        align-items: center;
        height: 50px;
        width: 100%;
        margin: 10px 0;

        & .blog-date {
            margin-right: 20px;
            font-weight: 600;
        }

        & .blog-title-link {
            text-decoration: underline;
            color: #333;
            margin-right: 20px;
            font-weight: 300;
            width: auto;
        }
    }
    a {
        text-decoration: none;
        color: #333;
        width: 80px;
        margin-right: 20px;
    }
    h1 {
        font-weight: 400;
        font-size: 4em;
        margin: 10px 0 0 0;
    }
    p {
        font-weight: 300;
        margin: 5px 0 20px 0;
    }
</style>
<template>
    <section class="header">
        <h1>{{ setup.page_name }}</h1>
        <p>{{ setup.page_desc }}</p>
        <span>{{ setup.blogs }}</span>
    </section>
    <section class="blogs">
        <template v-for="record in records">
            <div class="blog">
                    <span class="blog-date">{{ returnDate(record.created) }}</span>
                    <RouterLink v-bind:to="returnLink(record.id)" class="blog-title-link">{{ record.title }}</RouterLink>
            </div>
        </template>
    </section>
</template>
<script setup>

import { RouterLink } from 'vue-router';
import setup from './setup.js';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://thewhatdeep.pockethost.io/');

const records = await pb.collection('blog_view').getFullList();

console.log(records[0]);

function returnDate(date) {
    return new Date(date).toLocaleDateString();
}

function returnLink(id) {
    return `/blog/${id}`;
}

</script>