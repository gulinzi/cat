<template>
    <main class="app-container">
        <navbar></navbar>
        <div class="home-page">
            <section-home></section-home>
            <section-about></section-about>
            <!-- <section-characters-select></section-characters-select> -->
            <section-characters></section-characters>
            <section-feature></section-feature>
            <section-token></section-token>
            <section-friends></section-friends>
        </div>
        <foot></foot>
    </main>
</template>

<script setup>
import Navbar from './Navbar.vue'
import SectionHome from './SectionHome.vue'
import SectionAbout from './SectionAbout.vue'
import SectionFeature from './SectionFeature.vue'
import SectionToken from './SectionToken.vue'
import SectionFriends from './SectionFriends.vue'
import SectionCharactersSelect from './SectionCharactersSelect.vue'
import SectionCharacters from './SectionCharacters.vue'
import Foot from './Foot.vue'
</script>

<style lang="less" scoped>
</style>