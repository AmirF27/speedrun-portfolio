"use strict";

import QuoteMachine from "./components/QuoteMachine.vue";
import LocalWeather from "./components/LocalWeather.vue";
import WikipediaViewer from "./components/WikipediaViewer.vue";
import TwitchClient from "./components/TwitchClient.vue";
import Calculator from "./components/Calculator.vue";
import PomodoroClock from "./components/PomodoroClock.vue";
import TicTacToe from "./components/TicTacToe.vue";
import SimonGame from "./components/SimonGame.vue";

const projects = {
    "quote-machine": {
        title: "Random Quote Machine",
        cert: "frontend",
        name: "random-quote-machine",
        component: QuoteMachine
    },
    "local-weather": {
        title: "Local Weather",
        cert: "frontend",
        name: "local-weather",
        component: LocalWeather
    },
    "wikipedia-viewer": {
        title: "Wikipedia Viewer",
        cert: "frontend",
        name: "wikipedia-viewer",
        component: WikipediaViewer
    },
    "twitch-client": {
        title: "Twitch.tv Client",
        cert: "frontend",
        name: "twitch-client",
        component: TwitchClient
    },
    "calculator": {
        title: "JavaScript Calculator",
        cert: "frontend",
        name: "calculator",
        component: Calculator
    },
    "pomodoro-clock": {
        title: "Pomodoro Clock",
        cert: "frontend",
        name: "pomodoro-clock",
        component: PomodoroClock
    },
    "tictactoe": {
        title: "Tic Tac Toe",
        cert: "frontend",
        name: "tictactoe-game",
        component: TicTacToe
    },
    "simon-game": {
        title: "Simon Game",
        cert: "frontend",
        name: "simon-game",
        component: SimonGame
    }
};

const projectInfo = [
    {
        title: "Random Quote Machine",
        image: require("./assets/images/random-quote-machine.png"),
        skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
        desciption: "An app that fetches and displays a random quote from a " +
            "third party API. It also allows the user to tweet a quote they " +
            "like by clicking a button."
    },
    {
        title: "Local Weather",
        image: require("./assets/images/local-weather.png"),
        skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
        desciption: "This simple application figures out the user's current " +
            "location and displays the current weather in that location. " +
            "Users are also able to toggle the temperature scale between " +
            "Celcius and Fahrenheit."
    },
    {
        title: "Wikipedia Viewer",
        image: require("./assets/images/wikipedia-viewer.png"),
        skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
        desciption: "This app allows users to search Wikipedia for articles, " +
            "as well as view a random article."
    },
    {
        title: "Twitch.tv Client",
        image: require("./assets/images/twitch-client.png"),
        skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
        desciption: "An app that fetches and displays a random quote from a " +
            "third party API. It also allows the user to tweet a quote they " +
            "like by clicking a button."
    },
    {
        title: "Calculator",
        image: require("./assets/images/calculator.png"),
        skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
        desciption: "An app that fetches and displays a random quote from a " +
            "third party API. It also allows the user to tweet a quote they " +
            "like by clicking a button."
    },
    {
        title: "Pomodoro Clock",
        image: require("./assets/images/pomodoro-clock.png"),
        skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
        desciption: "An app that fetches and displays a random quote from a " +
            "third party API. It also allows the user to tweet a quote they " +
            "like by clicking a button."
    },
    {
        title: "Tic Tac Toe",
        image: require("./assets/images/tictactoe.png"),
        skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
        desciption: "An app that fetches and displays a random quote from a " +
            "third party API. It also allows the user to tweet a quote they " +
            "like by clicking a button."
    },
    {
        title: "Simon Game",
        image: require("./assets/images/simon-game.png"),
        skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
        desciption: "An app that fetches and displays a random quote from a " +
            "third party API. It also allows the user to tweet a quote they " +
            "like by clicking a button."
    }
];

export { projects, projectInfo };
