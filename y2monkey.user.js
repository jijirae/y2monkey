// ==UserScript==
// @name         y2monkey
// @namespace    https://github.com/jijirae/y2monkey
// @version      1.0
// @description  Pressing "SHIFT+D" opens the current YouTube video in y2mate, allowing you to download.
// @author       Raeji
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    document.addEventListener('keydown', function(event) {
        if (event.key === 'D') {
            event.preventDefault();
            let currentUrl = window.location.href;
            let modifiedUrl = currentUrl.replace('youtube', 'youtubepp');
            window.open(modifiedUrl, '_blank');
        }
    });
})();