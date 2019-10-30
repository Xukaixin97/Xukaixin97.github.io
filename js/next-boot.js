"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}NexT.boot={},NexT.boot.registerEvents=function(){NexT.utils.registerScrollPercent(),NexT.utils.registerCanIUseTag(),document.querySelector(".site-nav-toggle .toggle").addEventListener("click",function(){event.currentTarget.classList.toggle("toggle-close");var e=document.querySelector(".site-nav"),t=e.classList.contains("site-nav-on")?"slideUp":"slideDown";"function"==typeof Velocity?Velocity(e,t,{duration:200,complete:function(){e.classList.toggle("site-nav-on")}}):e.classList.toggle("site-nav-on")});document.querySelectorAll(".sidebar-nav li").forEach(function(e,s){e.addEventListener("click",function(e){var t=e.currentTarget,o="sidebar-nav-active",i="sidebar-panel-active";if(!t.classList.contains(o)){var n=document.querySelectorAll(".sidebar-panel"),r=n[s],a=n[1-s];window.anime({targets:a,duration:200,easing:"linear",opacity:0,complete:function(){a.classList.remove(i),r.style.opacity=0,r.classList.add(i),window.anime({targets:r,duration:200,easing:"linear",opacity:1})}}),[].concat(_toConsumableArray(t.parentNode.children)).forEach(function(e){e.classList.remove(o)}),t.classList.add(o)}})}),window.addEventListener("resize",NexT.utils.initSidebarDimension),window.addEventListener("hashchange",function(){var e=location.hash;if(""!==e&&!e.match(/%\S{2}/)){var t=document.querySelector('.tabs ul.nav-tabs li a[href="'+e+'"]');t&&t.click()}})},NexT.boot.refresh=function(){CONFIG.fancybox&&NexT.utils.wrapImageWithFancyBox(),CONFIG.mediumzoom&&window.mediumZoom(".post-body :not(a) > img, .post-body > img"),CONFIG.lazyload&&window.lozad(".post-body img").observe(),CONFIG.pangu&&window.pangu.spacingPage(),CONFIG.exturl&&NexT.utils.registerExtURL(),CONFIG.copycode.enable&&NexT.utils.registerCopyCode(),NexT.utils.registerTabsTag(),NexT.utils.registerActiveMenuItem(),NexT.utils.registerSidebarTOC(),NexT.utils.wrapTableWithBox(),NexT.utils.registerVideoIframe()},NexT.boot.motion=function(){CONFIG.motion.enable?NexT.motion.integrator.add(NexT.motion.middleWares.logo).add(NexT.motion.middleWares.menu).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar).bootstrap():NexT.utils.updateSidebarPosition()},window.addEventListener("DOMContentLoaded",function(){NexT.boot.registerEvents(),NexT.boot.refresh(),NexT.boot.motion()});