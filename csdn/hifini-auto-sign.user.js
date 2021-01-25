// ==UserScript==
// @name         hifini.com 访问音乐磁场网站时自动签到!
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  hifini.com 访问音乐磁场网站时自动签到，gist地址：https://gist.github.com/goldenJet/e608be9fedbad4f0cec36f1a7bcecd48
// @author       Jet.Chen
// @match        *://*.hifini.com
// @grant        none
// @require      https://cdn.staticfile.org/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    if ("签到" == $('#sg_sign #sign').text()) {
	    $('#sg_sign').click()
	} else {
		console.log("今日已签到")
	}
})();