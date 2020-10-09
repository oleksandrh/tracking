try {
    ga('set', 'userId', '<dynamic user id here>');
}
catch (err) {
    console.log(err);
}

try {
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