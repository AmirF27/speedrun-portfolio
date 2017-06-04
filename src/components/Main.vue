<template>
    <div class="main-page">
        <header>
            <div class="container"></div>
        </header>
        <main class="container">
            <section class="page-section">
                <h2 class="center-text">About Me</h2>
                <div class="col-wrap">
                    <div class="col col-d-1-3 col-t-1-2">
                        <img class="responsive-img" src="../assets/images/me.jpg" alt="A photo of me.">
                    </div>
                    <div class="col col-d-2-3 col-t-1-2">
                        <p>
                            Hi! My name is Amir. I'm a web developer from Israel, looking for a full time
                            developer position. I've always loved coding, so I enjoy building stuff and
                            learning new things all the time.
                        </p>
                    </div>
                </div>
            </section>
            <section class="page-section">
                <h2 class="center-text">Projects</h2>
                <div class="col-wrap">
                    <template v-for="project in projects">
                        <div class="col col-d-1-2">
                            <router-link :to="project.link">
                                <section class="panel">
                                    <h3 class="panel-title">{{ project.title }}</h3>
                                    <div class="panel-body">
                                        <img :src="project.image" :alt="project.title" class="responsive-img">
                                        <p class="panel-info">{{ project.desciption }}</p>
                                    </div><!-- /.panel-body -->
                                </section><!-- /.panel -->
                            </router-link>
                        </div>
                    </template>
                </div>
            </section>
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
