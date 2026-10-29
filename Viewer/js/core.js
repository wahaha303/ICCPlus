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
    if (tag === 'script' && el.type === 'module') el.async = false;
    document.head.appendChild(el);
}

add('link', { id: 'theme-light', rel: 'stylesheet', href: basePath + 'css/smui.css', media: '(prefers-color-scheme: light)' });
add('link', { id: 'theme-dark', rel: 'stylesheet', href: basePath + 'css/smui-dark.css', media: 'screen and (prefers-color-scheme: dark)' });
add('link', { rel: 'stylesheet', href: basePath + 'css/roboto.css' });
add('link', { rel: 'stylesheet', href: basePath + 'css/bootstrap.min.css' });
add('link', { rel: 'stylesheet', href: basePath + 'css/material-icons.css' });
add('script', { src: basePath + 'js/polyfills.js' });
add('link', { rel: 'stylesheet', href: basePath + 'css/chunk-vendors.CVq6UsEI.css', crossorigin: '' });
add('link', { rel: 'stylesheet', href: basePath + 'css/app.B2lpN2Ax.css', crossorigin: '' });
add('link', { rel: 'modulepreload', href: basePath + 'js/rolldown-runtime.DcNxTHDL.js', crossorigin: '' });
add('link', { rel: 'modulepreload', href: basePath + 'js/chunk-vendors.CYG15cv0.js', crossorigin: '' });
add('script', { type: 'module', text: "import './js/legacy_resolve_check.js?detector';import.meta.url;import(\"_\").catch(() => 1);(async function*(){})().next();window.__vite_is_modern_browser = true;" });
add('script', { type: 'module', text: "!function(){if (window.__vite_is_modern_browser) return;console.warn('vite: loading legacy chunks, syntax error above and the same error below should be ignored');var n = document.createElement('script');n.src = basePath + \"js/app-legacy.DE6ph58Q.js\";n.onload = function() {var entrySrc = basePath + \"js/app-legacy.B7Z7tZwa.js\";function tryImport(retries) {if (window.System && typeof window.System.import === 'function') {window.System.import(entrySrc);} else if (retries > 0) {setTimeout(function() {tryImport(retries - 1);}, 100);} else {console.error('SystemJS failed to load.');}}tryImport(100);};document.body.appendChild(n);}();" });
add('script', { type: 'module', src: basePath + "js/app.9LjA4Kz3.js", crossorigin: '' });
addEventListener('DOMContentLoaded', () => {
    var safariFix = document.createElement('script');
    safariFix.setAttribute('nomodule', '');
    safariFix.textContent = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';
    document.body.appendChild(safariFix);

    var polyfillScript = document.createElement('script');
    polyfillScript.setAttribute('nomodule', '');
    polyfillScript.setAttribute('crossorigin', '');
    polyfillScript.id = 'vite-legacy-polyfill';
    polyfillScript.src = basePath + 'js/app-legacy.DE6ph58Q.js';
    polyfillScript.onload = function(){
        var entrySrc = basePath + 'js/app-legacy.B7Z7tZwa.js';
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
