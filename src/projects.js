"use strict";

import QuoteMachine from "./components/QuoteMachine.vue";
import LocalWeather from "./components/LocalWeather.vue";
import WikipediaViewer from "./components/WikipediaViewer.vue";
import TwitchClient from "./components/TwitchClient.vue";
import Calculator from "./components/Calculator.vue";
import PomodoroClock from "./components/PomodoroClock.vue";
import TicTacToe from "./components/TicTacToe.vue";
import SimonGame from "./components/SimonGame.vue";

export default {
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
