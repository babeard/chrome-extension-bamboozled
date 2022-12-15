function fixPDFViewCSS() {
  // Remove max height from element
  var contentEl = document.querySelector(".legacyModal__content");
  contentEl.style.maxHeight = "none";

  // Compact action bar
  var actionsEl = document.querySelector(".legacyModal__actions");
  actionsEl.style.padding = "0px";
}

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: fixPDFViewCSS,
    });
  }
});
