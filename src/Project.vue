<template>
    <div id="app">
        <app-header :projectTitle="project.title"></app-header>
        <component :is="project.component"></component>
        <app-footer :cert="project.cert" :project="project.name"></app-footer>
    </div>
</template>

<script>
"use strict";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import projects from "./projects.js";

export default {
    components: {
        "app-header": Header,
        "app-footer": Footer
    },
    data() {
        return {
            project: projects[this.$route.params.project]
        };
    }
};
</script>
