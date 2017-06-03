"use strict";

import Main from "./components/Main.vue";
import Project from "./Project.vue";

export default [
    {
        path: "/",
        component: Main
    },
    {
        path: "/:project",
        component: Project
    }
];
