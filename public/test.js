var a = [], rando, span,
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
