let contextMenuItem = {
  id: "Flash",
  title: "Flash",
  contexts: ["selection", "link"],
};

chrome.contextMenus.create(contextMenuItem);

function execute(info) {
  if (info.linkUrl) {
    chrome.tabs.create({ url: info.linkUrl });
  }
  if (info.selectionText) {
    let text = info.selectionText;
    chrome.tabs.create({ url: "https://www.bing.com/search?q=" + text });
    chrome.tabs.create({ url: "https://search.yahoo.com/search?p=" + text });
    chrome.tabs.create({ url: "https://www.google.com/search?q=" + text });
    chrome.tabs.create({ url: "https://duckduckgo.com/?q=" + text });
  }
  return;
}

chrome.contextMenus.onClicked.addListener(execute);
