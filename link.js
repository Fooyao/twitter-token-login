document.getElementById("external-link").addEventListener("click", function () {
  chrome.tabs.create({ url: this.href });
});
