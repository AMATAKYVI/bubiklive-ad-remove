document.addEventListener('DOMContentLoaded', function () {
  var toggleButton = document.getElementById('toggleButton');

  // Check if the extension is enabled or disabled
  chrome.storage.sync.get('enabled', function (data) {
    if (data.enabled) {
      toggleButton.textContent = 'Disable';
    } else {
      toggleButton.textContent = 'Enable';
    }
  });

  // Toggle the extension when the button is clicked
  toggleButton.addEventListener('click', function () {
    chrome.storage.sync.get('enabled', function (data) {
      var enabled = !data.enabled; // toggle the value
      chrome.storage.sync.set({ enabled: enabled });
      if (enabled) {
        toggleButton.textContent = 'Disable';
      } else {
        toggleButton.textContent = 'Enable';
      }
    });
  });
});
