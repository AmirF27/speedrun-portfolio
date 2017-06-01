import QuoteMachine from "./components/QuoteMachine.vue";
import LocalWeather from "./components/LocalWeather.vue";
import WikipediaViewer from "./components/WikipediaViewer.vue";
import TwitchClient from "./components/TwitchClient.vue";
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
    "simon-game": {
        title: "Simon Game",
        cert: "frontend",
        name: "simon-game",
        component: SimonGame
    }
};
