self.onconnect = function (evt) {
    var port = evt.ports[0];

    port.addEventListener('message', function (e) {
        port.postMessage(e.data, port);
    });

    port.start();
};
