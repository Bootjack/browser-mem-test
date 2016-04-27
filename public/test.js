var a = [], rando, span,
    trappedWindow = window,
    worker = new SharedWorker('worker.js');

while (a.length < 100000) {
    rando = Math.random() * Math.pow(10, 100);
    a.push(rando);
    span = document.createElement('span');
    span.innerText = ` ${rando} `;
    document.body.appendChild(span);
}

worker.port.onmessage = function (e) {
    console.log(e.data);
}

window.opener.addEventListener('unload', function () {
    trappedWindow.close();
});
