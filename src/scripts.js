<script type = "text/javascript">
    window.hd_util_params = {
        disable_legacy_search_timers: true,
        enable_linking_headings: true,
        enable_zoomable_images: true,
        enable_back_to_top_button: true,
        enable_popups: true,
        enable_pre_languages: 'pre',
        search_article_template: `
          <div class="srHit scaleSmall">
            <a class="srLink" data-article-id="\{\{article_id\}\}" href="\{\{relative_url\}\}">
              <h4 class="srHitTitle">\{\{title\}\}</h4>
              <p class="srHitDescription">\{\{description\}\}</p>
            </a>
          </div>
        `
    };

    function ready(fn) {
        if (document.readyState != 'loading') {
            fn();
        } else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            document.attachEvent('onreadystatechange', function () {
                if (document.readyState != 'loading') {
                    fn();
                }
            });
        }
    }

    function addClass(el, className) {
        if (!el || !className) return;
        if (el.classList) {
            el.classList.add(className);
        } else {
            el.className += ' ' + className;
        }
    }

    function removeClass(el, className) {
        if (el.classList) {
            el.classList.remove(className);
        } else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    // Toggles menu bar SVG from 3 bars to a cross
    (function () {
        ready(function () {
            var mobileNav = document.querySelector('.hnMobileNavButton');

            mobileNav.addEventListener('click', function () {
                if (mobileNav && mobileNav.classList.contains('active')) {
                    removeClass(mobileNav, 'active');
                } else {
                    addClass(mobileNav, 'active');
                }
            });
        });
    })();

    // ** Add class when < 3 categories to avoid stretched cards **
    (function () {
        ready(function () {
            var categories = document.getElementById('categories');
            if (!categories) return;
            var cards = categories.querySelectorAll('.card');
            if (cards && cards.length <= 3) addClass(categories, 'fewCategories');
        });
    })();

    /* google analytics */
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-31192074-1']);
    _gaq.push(['_trackPageview']);

    (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

    /* facebook */
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '420264691499160');
    fbq('track', 'PageView');

    /* drift */
    !function() {
        var t;
        if (t = window.driftt = window.drift = window.driftt || [], !t.init) return t.invoked ? void (window.console && console.error && console.error("Drift snippet included twice.")) : (t.invoked = !0,
            t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
            t.factory = function(e) {
                return function() {
                    var n;
                    return n = Array.prototype.slice.call(arguments), n.unshift(e), t.push(n), t;
                };
            }, t.methods.forEach(function(e) {
            t[e] = t.factory(e);
        }), t.load = function(t) {
            var e, n, o, i;
            e = 3e5, i = Math.ceil(new Date() / e) * e, o = document.createElement("script"),
                o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + i + "/" + t + ".js",
                n = document.getElementsByTagName("script")[0], n.parentNode.insertBefore(o, n);
        });
    }();
    drift.SNIPPET_VERSION = '0.3.1';
    drift.load('cztps98d2ayf');
</script>
