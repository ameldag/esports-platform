/*  Automatically instantiates modules based on data-attributes
  specifying module file-names.
*/
var ready;
ready = function(e) {
    const moduleElements = document.querySelectorAll("[data-module]");
    for (let i = 0; i < moduleElements.length; i++) {
        const el = moduleElements[i];
        const modules = el.getAttribute("data-module").split(" ");
        modules.forEach(e => {
            let m
            m = require(`./${e}`)
            const Module = m.default
                // new Module(el)
        });
    }
}
$(document).on('turbolinks:load', ready);