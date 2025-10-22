var currentScript = document.currentScript || document.getElementsByTagName('script')[document.getElementsByTagName('script').length - 1];
var basePath;
try {
    basePath = new URL('../', currentScript.src).pathname;
} catch (e) {
    var src = currentScript.src;
    if (src.indexOf('?') > -1) src = src.split('?')[0];
    basePath = src.split('/').slice(0, -1).join('/') + '/';
}

function add(tag, attrs = {}) {
    var el = document.createElement(tag);
    for (var key in attrs) {
        if (key === 'text') el.textContent = attrs[key];
        else el.setAttribute(key, attrs[key]);
    }
    document.head.appendChild(el);
}

add('link', { id: 'theme-light', rel: 'stylesheet', href: basePath + 'css/smui.css', media: '(prefers-color-scheme: light)' });
add('link', { id: 'theme-dark', rel: 'stylesheet', href: basePath + 'css/smui-dark.css', media: 'screen and (prefers-color-scheme: dark)' });
add('link', { rel: 'stylesheet', href: basePath + 'css/roboto.css' });
add('link', { rel: 'stylesheet', href: basePath + 'css/bootstrap.min.css' });
add('link', { rel: 'stylesheet', href: basePath + 'css/material-icons.css' });
add('script', { src: basePath + 'js/polyfills.js' });
add('link', { rel: 'stylesheet', href: basePath + 'css/chunk-vendors.D62pGNex.css', crossorigin: '' });
add('link', { rel: 'stylesheet', href: basePath + 'css/app.iLkCVkUh.css', crossorigin: '' });
add('link', { rel: 'modulepreload', href: basePath + 'js/chunk-vendors.CBq834O2.js', crossorigin: '' });
add('script', { type: 'module', src: basePath + 'js/app.QHdgdV3E.js', crossorigin: '' });
add('script', { type: 'module', text: 'import.meta.url;import("_").catch(() => 1);(async function*(){})().next();window.__vite_is_modern_browser = true;' });
add('script', { type: 'module', text: '!function(){if(window.__vite_is_modern_browser) return;console.warn("vite: loading legacy chunks, syntax error above and the same error below should be ignored");var e = document.getElementById("vite-legacy-polyfill");var n = document.createElement("script");n.src = e.src;n.onload = function(){System.import(document.getElementById("vite-legacy-entry").getAttribute("data-src"));};document.body.appendChild(n);}();' });
addEventListener('DOMContentLoaded', () => {
    var safariFix = document.createElement('script');
    safariFix.setAttribute('nomodule', '');
    safariFix.textContent = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';
    document.body.appendChild(safariFix);

    var polyfillScript = document.createElement('script');
    polyfillScript.setAttribute('nomodule', '');
    polyfillScript.setAttribute('crossorigin', '');
    polyfillScript.id = 'vite-legacy-polyfill';
    polyfillScript.src = basePath + 'js/app-legacy.wnBmmXsE.js';
    polyfillScript.onload = function(){
        var entrySrc = basePath + 'js/app-legacy.DWIkETa9.js';
        function tryImport(retries) {
            if (window.System && typeof window.System.import === 'function') {
                window.System.import(entrySrc);
            } else if (retries > 0) {
                setTimeout(() => tryImport(retries - 1), 100);
            } else {
                console.error("SystemJS failed to load.");
            }
        }
        tryImport(100);
    }
    document.body.appendChild(polyfillScript);
});
