<template>
    <main class="container">
        <section v-for="project in projects" class="col-half">
            <router-link :to="project.link">
                <div class="panel">
                    <h2 class="panel-title">{{ project.title }}</h2>
                    <div class="panel-body">
                        <img :src="project.image" :alt="project.title" class="responsive-img">
                        <p class="panel-info">{{ project.desciption }}</p>
                    </div><!-- /.project-info -->
                </div><!-- /.project -->
            </router-link>
        </section><!-- /.col-half -->
    </main>
</template>

<script>
"use strict";

import { projectInfo } from "../projects";

export default {
    data() {
        return {
            projects: projectInfo
        };
    }
};
</script>
