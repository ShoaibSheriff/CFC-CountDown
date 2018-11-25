chrome.runtime.onMessage.addListener(function (msg) {
    /* We received a message, let's do as instructed */
    if (msg.action === 'saySomething') {
        alert('something');
    }
});