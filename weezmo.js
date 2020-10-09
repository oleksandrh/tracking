try {
    var weezmo_module_bis_id = '53892bb6-f8dd-4509-a8ad-fef13c9336bf';
    ga('create', 'UA-67065974-3', 'auto', 'wtracker', {
        userId: '5A89Vl3neQL6abPu6Jx93xkDSvat1U'
    });
    ga('wtracker.send', 'pageview');
}
catch (err) {
    console.log(err);
}

try {
    !function (f, b, e, v, n, t, s) {
        if (f.fbq) return; n = f.fbq = function () {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
        n.queue = []; t = b.createElement(e); t.async = !0;
        t.src = v; s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
        'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '325104831779517');
    fbq('trackSingle', '325104831779517', 'PageView');
    fbq('trackSingleCustom', '325104831779517', '53892bb6-f8dd-4509-a8ad-fef13c9336bf', {
        wid: '5A89Vl3neQL6abPu6Jx93xkDSvat1U'
    });
}
catch (err) {
    console.log(err);
}

try {
    ym(67833772, 'setUserID', '5A89Vl3neQL6abPu6Jx93xkDSvat1U');
    ym(67833772, 'userParams', {
        UserID: '5A89Vl3neQL6abPu6Jx93xkDSvat1U'
    });
}
catch (err) {
    console.log(err);
}