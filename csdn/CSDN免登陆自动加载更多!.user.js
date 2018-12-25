// ==UserScript==
// @name         CSDN免登陆自动加载更多!
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  CSDN免登陆自动加载更多!，gist地址：https://gist.github.com/goldenJet/5e45b1fe0fd09552000a77ae0bc438d2
// @author       Jet.Chen
// @match        *://blog.csdn.net/*
// @grant        none
// @require      https://cdn.staticfile.org/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    $("div.article_content").removeAttr("style");
    $("#btn-readmore").parent().remove();
})();