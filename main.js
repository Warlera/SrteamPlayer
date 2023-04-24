document.querySelector('#play').onclick = playPlayer;
document.querySelector('#pause').onclick = pausePlayer;
document.querySelector('#muted').onclick = mutedPlayer;
document.querySelector('#unmute').onclick = unmutePlayer;
document.querySelector('#seek').onclick = seekPlayer;

let progress;

progress = document.querySelector('#progress')

function playPlayer() {
    window.frames[0].postMessage('{"frame":"fqx3xj","exec":"play"}', 'https://facecast.net');
}

function pausePlayer() {
    window.frames[0].postMessage('{"frame":"fqx3xj","exec":"pause"}', 'https://facecast.net');
}

function mutedPlayer() {
    window.frames[0].postMessage('{"frame":"fqx3xj","exec":"mute"}', 'https://facecast.net');
}

function unmutePlayer() {
    window.frames[0].postMessage('{"frame":"fqx3xj","exec":"unmute"}', 'https://facecast.net');
}

function seekPlayer() {
    let x = 50
    window.frames[0].postMessage('{"frame":"fqx3xj","exec":"seek","seektime": ' + x + ' }', 'https://facecast.net');
}