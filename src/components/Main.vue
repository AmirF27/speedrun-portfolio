<template>
    <div class="main-page">
        <header>
            <div class="container"></div>
        </header>
        <main class="container">
            <section v-for="project in projects" class="col-half">
                <router-link :to="project.link">
                    <div class="panel">
                        <h3 class="panel-title">{{ project.title }}</h3>
                        <div class="panel-body">
                            <img :src="project.image" :alt="project.title" class="responsive-img">
                            <p class="panel-info">{{ project.desciption }}</p>
                        </div><!-- /.project-info -->
                    </div><!-- /.project -->
                </router-link>
            </section><!-- /.col-half -->
        </main>
        <footer>
            <div class="container">
                <ul>
                    <li>
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        amir.f.aldeen@gmail.com
                    </li>
                    <li>
                        <a href="https://github.com/AmirF27" target="_blank">
                            <i class="fa fa-github" aria-hidden="true"></i> AmirF27
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
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
