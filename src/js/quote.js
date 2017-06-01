"use strict";

import Ajax from "./ajax";

const MAX_KEY = 999999;

function generateRandom(max) {
    Math.floor(Math.random() * max);
}

export default class Quote {
    constructor(text, author) {
        this.text = text;
        this.author = author || "Unknown author";
    }

    static getQuote(context, cb) {
        let url = "http://api.forismatic.com/api/1.0/",
            params = {
                method: "getQuote",
                key: generateRandom(MAX_KEY),
                format: "jsonp",
                lang: "en",
                jsonp: "?"
            };

        $.getJSON(Ajax.resolveUrl(url, params), function(response) {
            cb.call(context, new Quote(response.quoteText, response.quoteAuthor));
        });
    }
};
