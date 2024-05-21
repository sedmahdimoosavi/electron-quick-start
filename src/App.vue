<template>
    <div id="app">
        <!-- <nav>
            <router-link to="/">صفحه خانه</router-link>
            <router-link to="/about">صفحه درباره</router-link>
        </nav> -->
        <the-header></the-header>
        <router-view></router-view>
    </div>
</template>

<script>
import TheHeader from "./components/UI/TheHeader.vue";
export default {
    name: 'App',
    components: {
        TheHeader
    }
};
</script>

<style>
nav a {
    margin: 0 1rem;
    text-decoration: none;
}
</style>