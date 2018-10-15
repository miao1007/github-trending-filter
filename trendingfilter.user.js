// ==UserScript==
// @name         Github Trending Filter
// @namespace    http://miao1007.github.io/
// @version      0.1
// @description  remove the project by word filtering in Github Trending
// @author       miao1007
// @include        https://github.com/trending*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // for https://github.com/vitalets/github-trending-repos/issues/120
    const REGEX_CHINESE = /[\u4e00-\u9fff]|[\u3400-\u4dbf]|[\u{20000}-\u{2a6df}]|[\u{2a700}-\u{2b73f}]|[\u{2b740}-\u{2b81f}]|[\u{2b820}-\u{2ceaf}]|[\uf900-\ufaff]|[\u3300-\u33ff]|[\ufe30-\ufe4f]|[\uf900-\ufaff]|[\u{2f800}-\u{2fa1f}]/u;

    const NON_TECH_WORDS = /interview|blog|awesome/

    /**
     * remove element by keywords.
     * @param {Array} keywords regexp list
     */
    function hideByFilter(keywords){
        var repoList = window.document.querySelector('.repo-list');
        var repos = repoList.querySelectorAll('li');
        var hiddenRepos = new Set();
        var show = function(e){
            repoList.style.display=""
            hiddenRepos.forEach(hiden=>{
                hiden.setAttribute("style", "background-color:#FFD2D2");
            })
            // hide self
            e.currentTarget.parentElement.setAttribute("style","display: none !important")
            hiddenRepos.clear();
        }
        repos.forEach(repo=>{
            var text = repo.textContent.replace(/[\s\n\r]+/gm,' ');
            var matched = keywords.find(regex=>regex.test(text))
            if(matched){
                hiddenRepos.add(repo);
                repo.setAttribute("style","display: none !important")
            }
        })
        if(hiddenRepos.size){
            var div = document.createElement("div");
            div.className += "col-12 d-block width-full py-4 border-bottom";
            repoList.insertBefore(div)
            div.appendChild(document.createTextNode("Some results were removed by the Github Trending Filter extension ("))
            var a = document.createElement("a");
            a.textContent = 'show';
            a.onclick=show;
            div.appendChild(a)
            div.appendChild(document.createTextNode(').'))
        }
    }

    hideByFilter([REGEX_CHINESE, NON_TECH_WORDS])
})();
