chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    const dataToCopy = 'Hi Team, please review my PR: ' + url
    console.log(dataToCopy);
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
        if (result.state == "granted" || result.state == "prompt") {
          return navigator.clipboard.writeText(dataToCopy);
        }
      });
});