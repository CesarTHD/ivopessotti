const gtag_report_conversion = (url) => {
    var callback = function () {
        if (typeof (url) != 'undefined') {
            window.location = url;
        }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-16593362999/4cdkCMH1ubYZELfAqug9',
        'event_callback': callback
    });
    return false;
}

export default gtag_report_conversion;