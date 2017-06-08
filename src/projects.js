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
        image: require("./assets/images/random-quote-machine.jpg"),
        link: "/quote-machine",
        desciption: "An app that fetches and displays a random quote from a " +
            "third party API. It also allows the user to tweet a quote they " +
            "like by clicking a button."
    },
    {
        title: "Local Weather",
        image: require("./assets/images/local-weather.jpg"),
        link: "/local-weather",
        desciption: "This application figures out the user's current " +
            "location and displays the current weather in that location. " +
            "Users are also able to toggle the temperature scale between " +
            "Celcius and Fahrenheit."
    },
    {
        title: "Wikipedia Viewer",
        image: require("./assets/images/wikipedia-viewer.jpg"),
        link: "/wikipedia-viewer",
        desciption: "This app allows users to search Wikipedia for articles, " +
            "as well as view a random article."
    },
    {
        title: "Twitch.tv Client",
        image: require("./assets/images/twitch-client.jpg"),
        link: "/twitch-client",
        desciption: "An app that checks whether a user is currently " +
            "streaming on Twitch.tv. Users can choose to display all Twitch.tv " +
            "users, the ones who are currently streaming, or the ones who are " +
            "not."
    },
    {
        title: "Calculator",
        image: require("./assets/images/calculator.jpg"),
        link: "/calculator",
        desciption: "A simple but accurate calculator written in " +
            "JavaScript."
    },
    {
        title: "Pomodoro Clock",
        image: require("./assets/images/pomodoro-clock.jpg"),
        link: "/pomodoro-clock",
        desciption: "The Pomodoro technique is a time management method where " +
            "one works for 25 minutes and takes a 5 minute break in repeated " +
            "cycles. This is a web implementation of the technique, with the " +
            "added ability of changing work session and break times."
    },
    {
        title: "Tic Tac Toe",
        image: require("./assets/images/tictactoe.jpg"),
        link: "/tictactoe",
        desciption: "Play a Tic Tac Toe game against the computer."
    },
    {
        title: "Simon Game",
        image: require("./assets/images/simon-game.jpg"),
        link: "/simon-game",
        desciption: "A web-based version of the classic 1980s memory game Simon. " +
            "Players are given a random pattern of colors that they have to " +
            "remember and repeat, and on each round a new color is added to the " +
            "pattern."
    }
];

export { projects, projectInfo };
