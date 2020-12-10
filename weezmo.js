try {
    ga('set', 'userId', '5A89Vl3neQL6abPu6Jx93xkDSvat1U');
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

function setCookie(name, value, props) {

    props = props || {}

    var exp = props.expires

    if (typeof exp == "number" && exp) {

        var d = new Date()

        d.setTime(d.getTime() + exp*1000)

        exp = props.expires = d

    }

    if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }

    value = encodeURIComponent(value)

    var updatedCookie = name + "=" + value

    for(var propName in props){

        updatedCookie += "; " + propName

        var propValue = props[propName]

        if(propValue !== true){ updatedCookie += "=" + propValue }
    }

    document.cookie = updatedCookie
}

setCookie("_wid", '5A89Vl3neQL6abPu6Jx93xkDSvat1U', {})
