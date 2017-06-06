<template>
    <div class="main-page">
        <header class="fixed-top">
            <div class="container">
                <nav class="main-nav">
                    <ul>
                        <li><a @click.prevent="smoothScroll" class="active" href="#about">About Me</a></li>
                        <li><a @click.prevent="smoothScroll" href="#projects">Projects</a></li>
                        <li><a @click.prevent="smoothScroll" href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <main class="container">
            <section id="about" class="page-section">
                <h2 class="center-text">About Me</h2>
                <div class="col-wrap">
                    <div class="col col-m-1 col-t-1-3 col-d-1-4 portrait">
                        <img src="../assets/images/me.jpg" alt="A photo of me.">
                    </div>
                    <div class="col col-m-1 col-t-2-3 col-d-3-4">
                        <p>
                            Hi! My name is Amir. I'm a web developer from Israel, looking for a full time
                            developer position. I've always loved coding, so I enjoy building stuff and
                            learning new things all the time.
                        </p>
                    </div>
                </div>
            </section><!-- /#about -->
            <section id="projects" class="page-section">
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
            </section><!-- /#projects -->
            <section id="contact" class="page-section">
                <h2 class="center-text">Contact Me</h2>
                <form class="contact-form" action="https://formspree.io/amir.f.aldeen@gmail.com" method="post">
                    <label for="name">Name</label>
                    <input id="name" class="text-field" type="text" name="name">
                    <label for="email">Email</label>
                    <input id="email" class="text-field" type="email" name="email">
                    <label for="message">Message</label>
                    <textarea id="message" class="text-field" name="message" rows="8"></textarea>
                    <input class="btn btn--primary" type="submit" value="Send Message">
                </form>
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
            projects: projectInfo,
            pageSections: [],
            currentSection: "",
            $pageRoot: {}
        };
    },
    methods: {
        handleScroll() {
            for (let section of this.pageSections) {
                if (this.inView(section)) {
                    this.currentSection = section.id;
                    this.setActive(this.currentSection);
                }
            }
        },
        inView(section) {
            return (
                section.id != this.currentSection &&
                window.pageYOffset >= section.offsetTop - 200);
        },
        setActive(id) {
            document.querySelector(".active").classList.remove("active");
            document.querySelector(`a[href='#${id}']`).classList.add("active");
        },
        smoothScroll($event) {
            var target = this.findTarget(
                $event.target.getAttribute("href").replace("#", "")
            );

            this.$pageRoot.animate({
                scrollTop: target.offsetTop - 100
            }, 700);
        },
        findTarget(target) {
            for (let section of this.pageSections) {
                if (section.id == target) {
                    return section;
                }
            }
        }
    },
    created() {
        this.pageSections = document.getElementsByClassName("page-section");
        this.currentSection = this.pageSections[0];
        this.$pageRoot = $("html, body");

        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    }
};
</script>
