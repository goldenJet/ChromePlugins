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
    // 免登陆自动加载更多!
    $("div.article_content").removeAttr("style");
    $("#btn-readmore").parent().remove();
    // 去除顶部的广告（内容是“官方去广告”的那个）
    $('#csdn-toolbar .toolbar-advert').remove();
})();