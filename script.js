if (document.querySelector('.twitter-token-login-popup')) {
    document.querySelector('#submit').addEventListener('click', function () {
        var token = document.querySelector('#token').value;
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            var tabId = tabs[0].id;
            chrome.scripting.executeScript({
                target: { tabId: tabId },
                func: Login,
                args: [token]
            });
        });
    });
}

function modifyCookie(cookieName, cookieValue, domain, path) {
    document.cookie = `${cookieName}=${cookieValue};domain=${domain};path=${path};Secure`;
}

function Login(token) {
    modifyCookie('auth_token', `"${token.replace('"', '')}"`, 'twitter.com', '/');
    window.location.replace('https://twitter.com');
}


