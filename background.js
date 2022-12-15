function fixPDFViewCSS() {
  var el = document.querySelector(".legacyModal__content");
  // Add class to element
  el.classList.add("legacyModal__content--noMaxHeight");

  var el2 = document.querySelector(".legacyModal__actions");
  // Add style to element
  el2.style.padding = "0px";
}

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: fixPDFViewCSS,
    });
  }
});
