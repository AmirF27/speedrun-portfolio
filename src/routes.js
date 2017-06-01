"use strict";

import First from "./components/First.vue";
import Project from "./Project.vue";

export default [
    {
        path: "/",
        component: First
    },
    {
        path: "/projects/:project",
        component: Project
    }
];
