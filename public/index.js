var button = document.getElementById('open-new-window-button'),
    worker = new SharedWorker('worker.js');

button.addEventListener('click', function () {
    window.open('test.html', 'test');
});

worker.port.onmessage = function(e) {
    console.log('From shared worker: ', e.data);
}
