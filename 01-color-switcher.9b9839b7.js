!function(){var t={bodyEl:document.querySelector("body"),buttonStart:document.querySelector("button[data-start]"),buttonStop:document.querySelector("button[data-stop]")};console.log(t.bodyEl);var o=null;t.buttonStop.setAttribute("disabled",!1),t.buttonStart.addEventListener("click",(function(){o=setInterval((function(){var o;o="#".concat(Math.floor(16777215*Math.random()).toString(16)),t.buttonStart.setAttribute("disabled",!1),t.buttonStop.removeAttribute("disabled",!0),t.bodyEl.style.backgroundColor=o,console.log(o)}),1e3)})),t.buttonStop.addEventListener("click",(function(){clearInterval(o),t.buttonStart.removeAttribute("disabled",!0),t.buttonStop.setAttribute("disabled",!1)}))}();
//# sourceMappingURL=01-color-switcher.9b9839b7.js.map