// ==UserScript==
// @name         Github Trending Filter
// @namespace    http://miao1007.github.io/
// @version      0.1
// @description  remove the project by word filtering in Github Trending
// @author       miao1007
// @match        https://github.com/trending
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // for https://github.com/vitalets/github-trending-repos/issues/120
    const REGEX_CHINESE = /[\u4e00-\u9fff]|[\u3400-\u4dbf]|[\u{20000}-\u{2a6df}]|[\u{2a700}-\u{2b73f}]|[\u{2b740}-\u{2b81f}]|[\u{2b820}-\u{2ceaf}]|[\uf900-\ufaff]|[\u3300-\u33ff]|[\ufe30-\ufe4f]|[\uf900-\ufaff]|[\u{2f800}-\u{2fa1f}]/u;
    
    /**
     * remove element by keywords.
     * @param {Array} keywords regexp list
     */
    function hideByFilter(keywords){
        var repos = window.document.querySelector('.repo-list').querySelectorAll('li');
        repos.forEach(repo=>{
            var text = repo.textContent.replace(/[\s\n\r]+/gm,' ');
            keywords.forEach(regex => {
                if(regex.test(text)){
                    repo.remove();
                    debugger;
                    console.log(repo.querySelector('a').textContent + " was filtered")
                }
            })
        })
    }

    hideByFilter([REGEX_CHINESE])
})();
