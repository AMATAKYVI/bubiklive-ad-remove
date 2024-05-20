chrome.userScripts.register({
  matches: ['<all_urls>'],
  js: [{ file: 'content.js' }],
  run_at: 'document_idle',
});

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (details.url === 'https://bubik.live/pages/404.html') {
      return { cancel: true };
    }
  },
  { urls: ['<all_urls>'] },
  ['blocking']
);
