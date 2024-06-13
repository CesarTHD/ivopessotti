import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        {/* GTM Script - Head */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                    (function (w, d, s, l, i) {
                    w[l] = w[l] || []; w[l].push({
                        'gtm.start':
                        new Date().getTime(), event: 'gtm.js'
                    }); var f = d.getElementsByTagName(s)[0],
                        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                        'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
                    })(window, document, 'script', 'dataLayer', 'GTM-M4K88ZFM');
                `,
          }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <title>Dr. Ivo Pessotti</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous" referrerPolicy="no-referrer" />

        <meta name="facebook-domain-verification" content="5pr6dudw7macdjagxkbe2z22pa1a33" />
          
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16593362999"></script>
            <script
                dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag() { dataLayer.push(arguments); }
                    gtag('js', new Date());

                    gtag('config', 'AW-16593362999');
                `,
                }}
            />

            <script async src="https://www.googletagmanager.com/gtag/js?id=G-58C48ZGEYG"></script>
            <script
                dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-58C48ZGEYG');
                `,
                }}
            />


            <script
                dangerouslySetInnerHTML={{
                __html: `
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
                    fbq('init', '1429150547719472');
                    fbq('track', 'PageView');
                `,
                }}
            />
            <noscript><img height="1" width="1" style="display:none"
                src="https://www.facebook.com/tr?id=1429150547719472&ev=PageView&noscript=1"
                /></noscript>


      </head>
      <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M4K88ZFM" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        {children}
      </body>
    </html>
  );
}
