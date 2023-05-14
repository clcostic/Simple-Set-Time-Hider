function removeElementsByClass(className) {
  var elements = document.querySelectorAll("." + className);
  elements.forEach(function (element) {
    element.parentNode.removeChild(element);
  });
}

function observeDOMChanges() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        removeElementsByClass("jss31");
      }
    });
  });

  const config = { childList: true, subtree: true };
  observer.observe(document.body, config);
}

window.addEventListener("load", function () {
  observeDOMChanges();
});