var button = document.getElementById('open-new-window-button'),
    evilWindow,
    worker = new SharedWorker('worker.js');

button.addEventListener('click', function () {
    evilWindow = window.open('test.html', 'test');
});

worker.port.onmessage = function(e) {
    evilWindow.setTimeout(function () {
        evilWindow.console.log('Mwuhahahaha!');
    }, 500);
    console.log('From shared worker: ', e.data);
}
