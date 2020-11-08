var authToken = 111;

function setToken(x) {
    authToken = x;
}

function getToken(x) {
    return authToken;
}

export { setToken, getToken };