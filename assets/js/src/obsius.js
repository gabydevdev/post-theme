!function(a) {
    "use strict";
    window.qodef = {},
    qodef.body = a("body"),
    qodef.html = a("html"),
    qodef.window = a(window),
    qodef.windowWidth = a(window).width(),
    qodef.windowHeight = a(window).height(),
    qodef.scroll = 0,
    a(document).ready(function() {
        qodef.scroll = a(window).scrollTop(),
        i.init(),
        b.init(),
        o.init(),
        s.init(),
        e.init()
    }),
    a(window).resize(function() {
        qodef.windowWidth = a(window).width(),
        qodef.windowHeight = a(window).height()
    }),
    a(window).scroll(function() {
        qodef.scroll = a(window).scrollTop()
    }),
    a(document).on("obsius_trigger_get_new_posts", function() {
        b.init(),
        o.init()
    });
    var i = {
        init: function() {
            i.addBodyClassName()
        },
        isBrowser: function(e) {
            var t = !1;
            switch (e) {
            case "chrome":
                t = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
                break;
            case "safari":
                t = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
                break;
            case "firefox":
                t = -1 < navigator.userAgent.toLowerCase().indexOf("firefox");
                break;
            case "ie":
                t = 0 < window.navigator.userAgent.indexOf("MSIE ") || !!navigator.userAgent.match(/Trident.*rv\:11\./);
                break;
            case "edge":
                t = /Edge\/\d./i.test(navigator.userAgent)
            }
            return t
        },
        addBodyClassName: function() {
            a.each(["chrome", "safari", "firefox", "ie", "edge"], function(e, t) {
                i.isBrowser(t) && void 0 !== qodef.body && ("ie" === t && (t = "ms-explorer"),
                qodef.body.addClass("qodef-browser--" + t))
            })
        }
    }
      , b = {
        init: function(e) {
            this.holder = a(".qodef-swiper-container"),
            a.extend(this.holder, e),
            this.holder.length && this.holder.each(function() {
                b.initSlider(a(this))
            })
        },
        initSlider: function(e) {
            var t = b.getOptions(e)
              , i = b.getEvents(e, t);
            new Swiper(e,Object.assign(t, i))
        },
        getOptions: function(e, t) {
            var i = void 0 !== e.data("options") ? e.data("options") : {}
              , o = void 0 !== i.direction && "" !== i.direction ? i.direction : "horizontal"
              , n = void 0 !== i.spaceBetween && "" !== i.spaceBetween ? i.spaceBetween : 0
              , a = void 0 !== i.slidesPerView && "" !== i.slidesPerView ? i.slidesPerView : 1
              , s = void 0 !== i.centeredSlides && "" !== i.centeredSlides && i.centeredSlides
              , d = void 0 !== i.sliderScroll && "" !== i.sliderScroll && i.sliderScroll
              , r = void 0 === i.loop || "" === i.loop || i.loop
              , l = void 0 === i.autoplay || "" === i.autoplay || i.autoplay
              , c = (void 0 !== i.speed && "" !== i.speed && parseInt(i.speed, 10),
            void 0 !== i.speedAnimation && "" !== i.speedAnimation ? parseInt(i.speedAnimation, 10) : 800)
              , f = void 0 !== i.slideAnimation && "" !== i.slideAnimation ? i.slideAnimation : ""
              , h = void 0 !== i.customStages && "" !== i.customStages && i.customStages
              , u = void 0 !== i.outsideNavigation && "yes" === i.outsideNavigation
              , p = u ? ".swiper-button-next-" + i.unique : e.find(".swiper-button-next")
              , u = u ? ".swiper-button-prev-" + i.unique : e.find(".swiper-button-prev")
              , g = e.find(".swiper-pagination")
              , m = (!1 !== l && (l = {
                disableOnInteraction: !1
            }),
            void 0 !== i.slidesPerView1440 && "" !== i.slidesPerView1440 ? parseInt(i.slidesPerView1440, 10) : 5)
              , w = void 0 !== i.slidesPerView1366 && "" !== i.slidesPerView1366 ? parseInt(i.slidesPerView1366, 10) : 4
              , v = void 0 !== i.slidesPerView1024 && "" !== i.slidesPerView1024 ? parseInt(i.slidesPerView1024, 10) : 3
              , q = void 0 !== i.slidesPerView768 && "" !== i.slidesPerView768 ? parseInt(i.slidesPerView768, 10) : 2
              , y = void 0 !== i.slidesPerView680 && "" !== i.slidesPerView680 ? parseInt(i.slidesPerView680, 10) : 1
              , _ = void 0 !== i.slidesPerView480 && "" !== i.slidesPerView480 ? parseInt(i.slidesPerView480, 10) : 1
              , h = (h || (a < 2 ? q = v = w = m = a : a < 3 ? v = w = m = a : a < 4 ? w = m = a : a < 5 && (m = a)),
            "vertical" === o && (a = 1),
            e.hasClass("qodef--pinterest-slider") && (m = void 0 !== i.slidesPerView1440 && "" !== i.slidesPerView1440 ? i.slidesPerView1440 : 5,
            w = void 0 !== i.slidesPerView1366 && "" !== i.slidesPerView1366 ? i.slidesPerView1366 : 4,
            v = void 0 !== i.slidesPerView1024 && "" !== i.slidesPerView1024 ? i.slidesPerView1024 : 3,
            q = void 0 !== i.slidesPerView768 && "" !== i.slidesPerView768 ? i.slidesPerView768 : 2,
            y = void 0 !== i.slidesPerView680 && "" !== i.slidesPerView680 ? i.slidesPerView680 : 1,
            _ = void 0 !== i.slidesPerView480 && "" !== i.slidesPerView480 ? i.slidesPerView480 : 1),
            {
                direction: o,
                slidesPerView: a,
                centeredSlides: s,
                sliderScroll: d,
                spaceBetween: n,
                autoplay: l,
                loop: r,
                speed: c,
                navigation: {
                    nextEl: p,
                    prevEl: u
                },
                pagination: {
                    el: g,
                    type: "bullets",
                    clickable: !0
                },
                breakpoints: {
                    0: {
                        slidesPerView: _
                    },
                    481: {
                        slidesPerView: y
                    },
                    681: {
                        slidesPerView: q
                    },
                    769: {
                        slidesPerView: v
                    },
                    1025: {
                        slidesPerView: w
                    },
                    1367: {
                        slidesPerView: m
                    },
                    1441: {
                        slidesPerView: a
                    }
                }
            });
            return f.length && "fade" === f && (h.effect = "fade",
            h.fadeEffect = {
                crossFade: !0
            }),
            Object.assign(h, b.getSliderDatas(e))
        },
        getSliderDatas: function(e) {
            var t, i = e.data(), o = {};
            for (t in i)
                i.hasOwnProperty(t) && "options" !== t && void 0 !== i[t] && "" !== i[t] && (o[t] = i[t]);
            return o
        },
        getEvents: function(o, n) {
            return {
                on: {
                    beforeInit: function() {
                        var e, t, i;
                        "vertical" === n.direction && (t = e = 0,
                        (i = o.find(".qodef-e")).length && i.each(function() {
                            t = a(this).outerHeight(),
                            e < t && (e = t)
                        }),
                        o.css("height", e),
                        i.css("height", e))
                    },
                    init: function() {
                        var t;
                        o.addClass("qodef-swiper--initialized"),
                        qodef.body.trigger("obsius_trigger_swiper_is_initialized", [o, n]),
                        n.sliderScroll && (t = !1,
                        o.on("mousewheel", function(e) {
                            e.preventDefault(),
                            t || (t = !0,
                            e.deltaY < 0 ? o[0].swiper.slideNext() : o[0].swiper.slidePrev(),
                            setTimeout(function() {
                                t = !1
                            }, 1e3))
                        }))
                    }
                }
            }
        }
    }
      , o = (qodef.qodefSwiper = b,
    {
        init: function(e) {
            this.holder = a(".qodef-magnific-popup"),
            a.extend(this.holder, e),
            this.holder.length && this.holder.each(function() {
                o.initPopup(a(this))
            })
        },
        initPopup: function(e) {
            e.hasClass("qodef-popup-item") ? o.initSingleImagePopup(e) : e.hasClass("qodef-popup-gallery") && o.initGalleryPopup(e)
        },
        initSingleImagePopup: function(e) {
            var t = e.data("type");
            e.magnificPopup({
                type: t,
                titleSrc: "title",
                removalDelay: 350,
                mainClass: "mfp-fade",
                image: {
                    cursor: null
                },
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">' + qodefGlobal.vars.iconClose + "</button>"
            })
        },
        initGalleryPopup: function(e) {
            var e = e.find(".qodef-popup-item")
              , t = o.generateGalleryItems(e);
            e.each(function(e) {
                a(this).magnificPopup({
                    items: t,
                    gallery: {
                        enabled: !0,
                        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%">' + qodefGlobal.vars.iconArrowLeft + "</button>"
                    },
                    index: e,
                    type: "image",
                    mainClass: "mfp-fade",
                    removalDelay: 350,
                    image: {
                        cursor: null
                    },
                    closeMarkup: '<button title="%title%" type="button" class="mfp-close">' + qodefGlobal.vars.iconClose + "</button>"
                })
            })
        },
        generateGalleryItems: function(e) {
            var t = [];
            return e.length && e.each(function() {
                var e = a(this)
                  , e = {
                    src: e.attr("href"),
                    title: e.attr("title"),
                    type: e.data("type")
                };
                t.push(e)
            }),
            t
        }
    })
      , s = (qodef.qodefMagnificPopup = o,
    {
        items: "",
        init: function(e) {
            this.holder = a(".qodef-anchor"),
            a.extend(this.holder, e),
            this.holder.length && (s.items = this.holder,
            s.clickTrigger(),
            a(window).on("load", function() {
                s.checkAnchorOnScroll(),
                s.checkAnchorOnLoad()
            }))
        },
        clickTrigger: function() {
            s.items.on("click", function(e) {
                var t = s.getAnchorItem(this)
                  , i = t.attr("href")
                  , o = t.prop("hash").split("#")[1]
                  , n = window.location.href
                  , a = -1 < n.indexOf("#") ? n.split("#")[1] : 0;
                (i.indexOf("http") < 0 || i === n || 0 !== a && i.substring(0, i.length - o.length - 1) === n.substring(0, n.length - a.length - 1) || 0 === a && i.substring(0, i.length - o.length - 1) === n) && e.preventDefault(),
                s.animateScroll(t, o)
            })
        },
        checkAnchorOnLoad: function() {
            var t = window.location.hash.split("#")[1];
            void 0 !== t && "" !== t && s.items.length && s.items.each(function() {
                var e = s.getAnchorItem(this);
                -1 < e.attr("href").indexOf(t) && s.animateScroll(e, t)
            })
        },
        checkAnchorOnScroll: function() {
            var e;
            1024 < qodef.windowWidth && ((e = a("#qodef-page-inner *[id]")).length && e.each(function() {
                var e = a(this)
                  , t = a('[href*="#' + e.attr("id") + '"]');
                t.length && (s.isTargetInView(e) && s.setActiveState(t),
                a(window).scroll(function() {
                    s.isTargetInView(e) ? s.setActiveState(t) : t.removeClass(s.getItemClasses(t))
                }))
            }))
        },
        isTargetInView: function(e) {
            var e = e[0].getBoundingClientRect()
              , t = window.innerHeight || document.documentElement.clientHeight;
            return !(Math.floor(100 - (0 <= e.top ? 0 : e.top) / -+e.height * 100) < 20 || Math.floor(100 - (e.bottom - t) / e.height * 100) < 20)
        },
        getAnchorItem: function(e) {
            return "A" === e.tagName ? a(e) : a(e).children("a")
        },
        animateScroll: function(e, t) {
            var i = "" !== t ? a('[id="' + t + '"]') : "";
            if (i.length)
                return i = i.offset().top - s.getHeaderHeight() - qodefGlobal.vars.adminBarHeight,
                s.setActiveState(e),
                qodef.html.stop().animate({
                    scrollTop: Math.round(i)
                }, 1e3, function() {
                    history.pushState && history.pushState(null, "", "#" + t)
                }),
                !1
        },
        getHeaderHeight: function() {
            var e = 0;
            return e = 1024 < qodef.windowWidth && null !== qodefGlobal.vars.headerHeight && "" !== qodefGlobal.vars.headerHeight ? parseInt(qodefGlobal.vars.headerHeight, 10) : e
        },
        setActiveState: function(e) {
            var t = !e.parent().hasClass("qodef-anchor")
              , i = s.getItemClasses(e);
            s.items.removeClass(i),
            (t ? e : e.parent()).addClass(i)
        },
        getItemClasses: function(e) {
            return "qodef-anchor--active" + (e.parents("#qodef-page-header") ? " current-menu-item current_page_item" : "")
        }
    })
      , e = (qodef.qodefAnchor = s,
    {
        init: function() {
            this.holder = a(".qodef--has-appear:not(.qodef--has-horizontal-appear), .qodef--has-custom-appear"),
            this.holder.length && this.holder.each(function() {
                var e, t, i = a(this), o = (e = 10,
                t = 400,
                Math.floor(Math.random() * (t - e) + e));
                i.hasClass("qodef--appear-delay-random") ? i.appear(function() {
                    setTimeout(function() {
                        i.addClass("qodef--appeared ")
                    }, o)
                }, {
                    accX: 0,
                    accY: qodefGlobal.vars.elementAppearAmount
                }) : i.hasClass("qodef--appear-delay") ? i.appear(function() {
                    setTimeout(function() {
                        i.addClass("qodef--appeared")
                    }, 50)
                }, {
                    accX: 0,
                    accY: -10
                }) : i.appear(function() {
                    i.addClass("qodef--appeared ")
                }, {
                    accX: 0,
                    accY: -50
                })
            })
        }
    })
      , t = (qodef.qodefAppear = e,
    {
        check: function(e, t) {
            if (e.length) {
                var i = e.find("img");
                if (i.length)
                    for (var o = 0, n = 0; n < i.length; n++) {
                        var a, s = i[n];
                        s.complete ? ++o === i.length && t.call(e) : ((a = new Image).addEventListener("load", function() {
                            if (++o === i.length)
                                return t.call(e),
                                !1
                        }, !1),
                        a.src = s.src)
                    }
                else
                    t.call(e)
            }
        }
    });
    qodef.qodefWaitForImages = t,
    "function" != typeof Object.assign && (Object.assign = function(e) {
        if (null == e)
            throw new TypeError("Cannot convert undefined or null to object");
        e = Object(e);
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            if (null !== i)
                for (var o in i)
                    Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o])
        }
        return e
    }
    )
}(jQuery),
function(o) {
    "use strict";
    o(document).ready(function() {
        n.init()
    }),
    o(window).resize(function() {
        n.init()
    }),
    o(document).on("obsius_trigger_get_new_posts", function(e, t) {
        t.hasClass("qodef-blog") && (i.resize(t),
        n.resize(t))
    });
    var i = {
        init: function() {
            var e = o(".qodef-blog");
            e.length && i.resize(e)
        },
        resize: function(e) {
            e = e.find(".wp-video-shortcode, .wp-audio-shortcode").not(".mejs-container");
            e.length && e.each(function() {
                var e = o(this);
                "function" == typeof e.mediaelementplayer && e.mediaelementplayer({
                    videoWidth: "100%",
                    videoHeight: "56.5%"
                })
            })
        }
    }
      , n = (qodef.qodefReInitMediaElementPostFormats = i,
    {
        init: function() {
            var e = o(".qodef-blog");
            e.length && n.resize(e)
        },
        resize: function(e) {
            e = e.find(".qodef-e-media iframe");
            e.length && e.each(function() {
                var e = o(this)
                  , t = e.attr("width")
                  , i = e.attr("height")
                  , t = e.width() / t * i;
                e.css("height", t)
            })
        }
    });
    qodef.qodefResizeIframes = n
}(jQuery),
function(n) {
    "use strict";
    n(document).ready(function() {
        a.init()
    }),
    n(document).on("obsius_trigger_get_new_posts", function(e, t) {
        t.hasClass("qodef-filter--on") && t.removeClass("qodef--filter-loading")
    });
    var a = {
        init: function(e) {
            this.holder = n(".qodef-filter--on"),
            n.extend(this.holder, e),
            this.holder.length && this.holder.each(function() {
                var e = n(this)
                  , t = e.find(".qodef-m-filter-item")
                  , i = a.checkCustomListQuery(e.data("options"));
                a.clickEvent(e, t, i)
            })
        },
        checkCustomListQuery: function(e) {
            if (void 0 !== e.additional_query_args && void 0 !== e.additional_query_args.tax_query)
                return e.additional_query_args.tax_query
        },
        clickEvent: function(t, i, o) {
            i.on("click", function(e) {
                e.preventDefault();
                e = n(this);
                e.hasClass("qodef--active") || (t.addClass("qodef--filter-loading"),
                i.removeClass("qodef--active"),
                e.addClass("qodef--active"),
                a.setVisibility(t, e, o))
            })
        },
        setVisibility: function(e, t, i) {
            var o = t.data("taxonomy")
              , t = t.data("filter")
              , n = {}
              , n = "*" === t ? i : {
                0: {
                    taxonomy: o,
                    field: "number" == typeof t ? "term_id" : "slug",
                    terms: t
                }
            };
            e.data("options").additional_query_args = {
                tax_query: n
            },
            qodef.body.trigger("obsius_trigger_load_more", [e, 1])
        },
        isMasonryLayout: function(e) {
            return e.hasClass("qodef-layout--masonry")
        },
        hasLoadMore: function(e) {
            return e.hasClass("qodef-pagination-type--load-more")
        }
    };
    qodef.qodefFilter = a
}(jQuery),
function(d) {
    "use strict";
    d(document).ready(function() {
        t.init()
    }),
    d(document).on("obsius_trigger_get_new_posts", function() {
        t.init()
    });
    var t = {
        init: function() {
            var e = d(".qodef-layout--justified-gallery");
            e.length && e.each(function() {
                t.setJustifyGallery(d(this))
            })
        },
        setJustifyGallery: function(e) {
            var t = e.data("options")
              , i = e.children(".qodef-grid-inner")
              , o = void 0 !== t.justified_gallery_row_height && "" !== t.justified_gallery_row_height ? t.justified_gallery_row_height : 150
              , n = void 0 !== t.justified_gallery_row_height_max && "" !== t.justified_gallery_row_height_max && t.justified_gallery_row_height_max
              , a = void 0 !== t.space_value ? 2 * t.space_value : 0
              , s = void 0 !== t.justified_gallery_treshold && "" !== t.justified_gallery_treshold ? t.justified_gallery_treshold : .75;
            qodef.qodefWaitForImages.check(i, function() {
                "function" == typeof i.justifiedGallery && i.justifiedGallery({
                    captions: !1,
                    rowHeight: o,
                    maxRowHeight: n,
                    margins: a,
                    border: 0,
                    lastRow: "nojustify",
                    justifyThreshold: s,
                    selector: ".qodef-grid-item"
                }).on("jg.complete jg.rowflush", function() {
                    var t = d(this)
                      , i = !1;
                    t.find(".qodef-grid-item").addClass("show").each(function() {
                        var e = d(this);
                        e.height(Math.round(e.height())),
                        i || 0 !== e.width() || (t.height(t.height() - e.height() - a),
                        i = !0)
                    })
                }),
                e.addClass("qodef--justified-gallery-init")
            })
        }
    };
    qodef.qodefJustifiedGallery = t
}(jQuery),
function(t) {
    "use strict";
    t(document).ready(function() {
        n.init()
    }),
    t(window).resize(function() {
        n.reInit()
    }),
    t(document).on("obsius_trigger_get_new_posts", function(e, t) {
        t.hasClass("qodef-layout--masonry") && n.init()
    });
    var n = {
        init: function(e) {
            this.holder = t(".qodef-layout--masonry"),
            t.extend(this.holder, e),
            this.holder.length && this.holder.each(function() {
                n.createMasonry(t(this))
            })
        },
        reInit: function(e) {
            this.holder = t(".qodef-layout--masonry"),
            t.extend(this.holder, e),
            this.holder.length && this.holder.each(function() {
                var e = t(this).find(".qodef-grid-inner");
                "function" == typeof e.isotope && e.isotope("layout")
            })
        },
        createMasonry: function(t) {
            var i = t.find(".qodef-grid-inner")
              , o = i.find(".qodef-grid-item");
            qodef.qodefWaitForImages.check(i, function() {
                var e;
                "function" == typeof i.isotope && (i.isotope({
                    layoutMode: "packery",
                    itemSelector: ".qodef-grid-item",
                    percentPosition: !0,
                    masonry: {
                        columnWidth: ".qodef-grid-masonry-sizer",
                        gutter: ".qodef-grid-masonry-gutter"
                    }
                }),
                t.hasClass("qodef-items--fixed") && (e = n.getFixedImageSize(i, o),
                n.setFixedImageProportionSize(i, o, e)),
                i.isotope("layout")),
                i.addClass("qodef--masonry-init")
            })
        },
        getFixedImageSize: function(e, t) {
            var i, o = e.find(".qodef-item--square");
            return o.length ? (i = (o = o.find("img")).width()) !== (o = o.height()) ? o : i : e.find(".qodef-grid-masonry-sizer").width() - 2 * parseInt(t.css("paddingLeft"), 10)
        },
        setFixedImageProportionSize: function(e, t, i) {
            var o = parseInt(t.css("paddingLeft"), 10)
              , n = (e.find(".qodef-item--square"),
            e.find(".qodef-item--landscape"))
              , a = e.find(".qodef-item--portrait")
              , e = e.find(".qodef-item--huge-square")
              , s = qodef.windowWidth <= 680;
            t.css("height", i),
            n.length && n.css("height", Math.round(i / 2)),
            a.length && a.css("height", Math.round(2 * (i + o))),
            s || (n.length && n.css("height", i),
            e.length && e.css("height", Math.round(2 * (i + o))))
        }
    };
    qodef.qodefMasonryLayout = n
}(jQuery),
function(t) {
    "use strict";
    t(document).ready(function() {
        i.init()
    });
    var i = {
        init: function() {
            var e = t("#qodef-page-mobile-header");
            e.length && (i.initMobileHeaderOpener(e),
            i.initDropDownMobileMenu())
        },
        initMobileHeaderOpener: function(e) {
            var t, i = e.find(".qodef-mobile-header-opener");
            i.length && (t = e.find(".qodef-mobile-header-navigation"),
            i.on("tap click", function(e) {
                e.preventDefault(),
                t.is(":visible") ? (t.slideUp(450),
                i.removeClass("qodef--opened")) : (t.slideDown(450),
                i.addClass("qodef--opened"))
            }))
        },
        initDropDownMobileMenu: function() {
            var e = t(".qodef-mobile-header-navigation .menu-item-has-children > .qodef-menu-item-arrow, .qodef-mobile-header-navigation .menu-item-has-children.qodef--hide-link > a");
            e.length && e.each(function() {
                var o = t(this);
                o.on("tap click", function(e) {
                    e.preventDefault();
                    var t, e = o.parent(), i = e.siblings(".menu-item-has-children");
                    e.hasClass("menu-item-has-children") && ((t = e.find("ul.sub-menu").first()).is(":visible") ? (t.slideUp(450),
                    e.removeClass("qodef--opened")) : (e.addClass("qodef--opened"),
                    (0 === i.length ? e : e.siblings().removeClass("qodef--opened")).find(".sub-menu").slideUp(400, function() {
                        t.slideDown(400)
                    })))
                })
            })
        }
    }
}(jQuery),
function(a) {
    a(document).ready(function() {
        e.init()
    });
    var e = {
        init: function() {
            var e = a(".qodef-header-navigation.qodef-header-navigation-initial > ul > li.qodef-menu-item--narrow.menu-item-has-children");
            e.length && e.each(function() {
                var e, t = a(this), i = t.offset().left, o = t.find(" > ul"), n = o.outerWidth(), i = a(window).width() - i;
                0 < t.find("li.menu-item-has-children").length && (e = i - n),
                o.removeClass("qodef-drop-down--right"),
                (i < n || e < n) && o.addClass("qodef-drop-down--right")
            })
        }
    }
}(jQuery),
function(a) {
    "use strict";
    a(document).ready(function() {
        s.init()
    }),
    a(window).scroll(function() {
        s.scroll()
    }),
    a(document).on("obsius_trigger_load_more", function(e, t, i) {
        s.triggerLoadMore(t, i)
    });
    var s = {
        init: function(e) {
            this.holder = a(".qodef-pagination--on"),
            a.extend(this.holder, e),
            this.holder.length && this.holder.each(function() {
                var e = a(this);
                s.initPaginationType(e)
            })
        },
        scroll: function(e) {
            this.holder = a(".qodef-pagination--on"),
            a.extend(this.holder, e),
            this.holder.length && this.holder.each(function() {
                var e = a(this);
                e.hasClass("qodef-pagination-type--infinite-scroll") && s.initInfiniteScroll(e)
            })
        },
        initPaginationType: function(e) {
            e.hasClass("qodef-pagination-type--standard") ? s.initStandard(e) : e.hasClass("qodef-pagination-type--load-more") ? s.initLoadMore(e) : e.hasClass("qodef-pagination-type--infinite-scroll") && s.initInfiniteScroll(e)
        },
        initStandard: function(i, e) {
            var t, o = i.find(".qodef-m-pagination-items");
            o.length && (t = i.data("options"),
            e = void 0 !== e && "" !== e ? parseInt(e, 10) : 1,
            s.changeStandardState(i, t.max_pages_num, e),
            o.children().each(function() {
                var t = a(this);
                t.on("click", function(e) {
                    e.preventDefault(),
                    t.hasClass("qodef--active") || s.getNewPosts(i, t.data("paged"))
                })
            }))
        },
        changeStandardState: function(e, t, i) {
            var o, n, a;
            e.hasClass("qodef-pagination-type--standard") && (o = (e = e.find(".qodef-m-pagination-items")).children(".qodef--number"),
            n = e.children(".qodef--prev"),
            a = e.children(".qodef--next"),
            s.standardPaginationVisibility(e, t),
            o.removeClass("qodef--active").eq(i - 1).addClass("qodef--active"),
            n.data("paged", i - 1),
            1 < i ? (n.show(),
            n.next().removeClass("qodef-prev--hidden")) : (n.hide(),
            n.next().addClass("qodef-prev--hidden")),
            a.data("paged", i + 1),
            i === t ? a.hide() : a.show())
        },
        standardPaginationVisibility: function(e, t) {
            1 === t ? e.hide() : 1 < t && !e.is(":visible") && e.show()
        },
        changeStandardHtml: function(e, t, i, o) {
            var n, a;
            e.hasClass("qodef-pagination-type--standard") && (n = e.find(".qodef-m-pagination"),
            a = e.find(".qodef-m-pagination-spinner"),
            s.standardPaginationVisibility(n, t),
            n.remove(),
            a.remove(),
            e.append(o),
            s.initStandard(e, i))
        },
        triggerStandardScrollAnimation: function(e) {
            e.hasClass("qodef-pagination-type--standard") && a("html, body").animate({
                scrollTop: e.offset().top - 100
            }, 500)
        },
        initLoadMore: function(t) {
            t.find(".qodef-load-more-button").on("click", function(e) {
                e.preventDefault(),
                s.getNewPosts(t)
            })
        },
        triggerLoadMore: function(e, t) {
            s.getNewPosts(e, t)
        },
        loadMoreButtonVisibility: function(e, t) {
            e.hasClass("qodef-pagination-type--load-more") && (t.next_page > t.max_pages_num || 1 === t.max_pages_num ? e.find(".qodef-load-more-button").hide() : 1 < t.max_pages_num && t.next_page <= t.max_pages_num && e.find(".qodef-load-more-button").show())
        },
        initInfiniteScroll: function(e) {
            var t = e.outerHeight() + e.offset().top
              , i = qodef.scroll + qodef.windowHeight
              , o = e.data("options");
            !e.hasClass("qodef--loading") && t < i && o.max_pages_num >= o.next_page && s.getNewPosts(e)
        },
        getNewPosts: function(t, i) {
            t.addClass("qodef--loading");
            var o = t.children(".qodef-grid-inner")
              , n = t.data("options");
            s.setNextPageValue(n, i, !1),
            a.ajax({
                type: "GET",
                url: qodefGlobal.vars.restUrl + qodefGlobal.vars.paginationRestRoute,
                data: {
                    options: n
                },
                beforeSend: function(e) {
                    e.setRequestHeader("X-WP-Nonce", qodefGlobal.vars.restNonce)
                },
                success: function(e) {
                    "success" === e.status ? (n.max_pages_num !== e.data.max_pages_num && (n.max_pages_num = e.data.max_pages_num),
                    s.setNextPageValue(n, i, !0),
                    s.changeStandardHtml(t, n.max_pages_num, i, e.data.pagination_html),
                    s.addPosts(o, e.data.html, i),
                    s.reInitMasonryPosts(t, o),
                    setTimeout(function() {
                        qodef.body.trigger("obsius_trigger_get_new_posts", [t, e.data, i])
                    }, 300),
                    s.triggerStandardScrollAnimation(t),
                    s.loadMoreButtonVisibility(t, n)) : console.log(e.message)
                },
                complete: function() {
                    t.removeClass("qodef--loading")
                }
            })
        },
        setNextPageValue: function(e, t, i) {
            void 0 === t || "" === t || i ? i && (e.next_page = parseInt(e.next_page, 10) + 1) : e.next_page = t
        },
        addPosts: function(e, t, i) {
            void 0 !== i && "" !== i ? e.html(t) : e.append(t)
        },
        reInitMasonryPosts: function(e, t) {
            e.hasClass("qodef-layout--masonry") && (t.isotope("reloadItems").isotope({
                sortBy: "original-order"
            }),
            setTimeout(function() {
                t.isotope("layout")
            }, 200))
        }
    };
    qodef.qodefPagination = s
}(jQuery),
function(r) {
    "use strict";
    r(document).ready(function() {
        e.init(),
        t.init(),
        o.init(),
        n.init(),
        a.init()
    }),
    r(window).on("load", function() {
        i.init()
    }),
    r(document).on("added_to_cart", function() {
        n.init()
    });
    var i = {
        init: function(e) {
            this.holder = [],
            this.holder.push({
                holder: r("#qodef-woo-page .woocommerce-ordering select"),
                options: {
                    minimumResultsForSearch: 1 / 0
                }
            }),
            this.holder.push({
                holder: r('.variations select:not(.yith_wccl_custom):not([data-type="colorpicker"]):not([data-type="image"]):not([data-type="label"])'),
                options: {
                    minimumResultsForSearch: 1 / 0
                }
            }),
            this.holder.push({
                holder: r("#qodef-woo-page #calc_shipping_country"),
                options: {}
            }),
            this.holder.push({
                holder: r("#qodef-woo-page .shipping select#calc_shipping_state"),
                options: {}
            }),
            this.holder.push({
                holder: r(".widget.widget_archive select"),
                options: {}
            }),
            this.holder.push({
                holder: r(".widget .wp-block-group .wp-block-archives-dropdown select")
            }),
            this.holder.push({
                holder: r(".widget.widget_categories select"),
                options: {}
            }),
            this.holder.push({
                holder: r(".widget .wp-block-group .wp-block-categories-dropdown select"),
                options: {}
            }),
            this.holder.push({
                holder: r(".widget.widget_text select"),
                options: {}
            }),
            r.extend(this.holder, e),
            "object" == typeof this.holder && r.each(this.holder, function(e, t) {
                i.createSelect2(t.holder, t.options)
            })
        },
        createSelect2: function(e, t) {
            "function" == typeof e.select2 && e.select2(t)
        }
    }
      , e = {
        init: function() {
            r(document).on("click", ".qodef-quantity-minus, .qodef-quantity-plus", function(e) {
                e.stopPropagation();
                var t, e = r(this), i = e.siblings(".qodef-quantity-input"), o = parseFloat(i.data("step")), n = parseFloat(i.data("max")), a = parseFloat(i.data("min")), s = !1, d = "function" == typeof Number.isNaN && Number.isNaN(parseFloat(i.val())) ? a : parseFloat(i.val());
                (s = e.hasClass("qodef-quantity-minus") ? !0 : s) ? a <= (t = d - o) ? i.val(t) : i.val(a) : (t = d + o,
                void 0 !== n && n <= t ? i.val(n) : i.val(t)),
                i.trigger("change")
            })
        }
    }
      , t = {
        init: function() {
            var e;
            "object" == typeof qodef.qodefMagnificPopup && (e = r(".qodef--single.qodef-magnific-popup.qodef-popup-gallery .woocommerce-product-gallery__image")).length && (e.each(function() {
                r(this).children("a").attr("data-type", "image").addClass("qodef-popup-item")
            }),
            qodef.qodefMagnificPopup.init())
        }
    }
      , o = (qodef.qodefWooMagnificPopup = t,
    {
        init: function() {
            var e = r(".widget .wc-block-product-search");
            e.length && e.each(function() {
                var e = r(this).find(".wc-block-product-search__label")
                  , t = r(this).find(".wc-block-product-search__fields")
                  , i = r(this).find(".wc-block-product-search__field")
                  , o = r(this).find(".wc-block-product-search__button");
                e.length && e.removeClass().addClass("qodef-search-form-label"),
                t.length && t.removeClass().addClass("qodef-search-form-inner"),
                i.length && i.removeClass().addClass("qodef-search-form-field"),
                o.length && (o.removeClass().addClass("qodef-search-form-button qodef--button-inside qodef--has-icon"),
                o.html('<svg class="qodef-svg--search" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20"><path d="M18.869 19.162l-5.943-6.484c1.339-1.401 2.075-3.233 2.075-5.178 0-2.003-0.78-3.887-2.197-5.303s-3.3-2.197-5.303-2.197-3.887 0.78-5.303 2.197-2.197 3.3-2.197 5.303 0.78 3.887 2.197 5.303 3.3 2.197 5.303 2.197c1.726 0 3.362-0.579 4.688-1.645l5.943 6.483c0.099 0.108 0.233 0.162 0.369 0.162 0.121 0 0.242-0.043 0.338-0.131 0.204-0.187 0.217-0.503 0.031-0.706zM1 7.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5-6.5-2.916-6.5-6.5z"></path></svg>'))
            })
        }
    })
      , n = {
        init: function() {
            var e = r(".single_add_to_cart_button, .button.add_to_cart_button,a.added_to_cart.wc-forward, .products a.button");
            n.addHtml(e, '<svg class="qodef-svg--button-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="9px" height="9px" viewBox="0 0 9 9" style="enable-background:new 0 0 9 9; fill:currentColor;" xml:space="preserve"><path d="M8,9V1.8L0.9,8.8L0.2,8.1L7.3,1H0V0h9v9H8z"></path><path d="M8,9V1.8L0.9,8.8L0.2,8.1L7.3,1H0V0h9v9H8z"></path></svg>')
        },
        addHtml: function(e, t) {
            e.length && e.each(function() {
                var e = r(this);
                e.find(".qodef-svg--button-arrow").length || (e.wrapInner('<div class="qodef-m-text"></div>'),
                e.append(t))
            })
        }
    }
      , a = (qodef.qodefWooModifiedButton = n,
    {
        init: function() {
            var e = r(".woocommerce.widget_price_filter .button");
            a.addHtml(e, '<svg class="qodef-svg--button-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="9px" height="9px" viewBox="0 0 9 9" style="enable-background:new 0 0 9 9; fill:currentColor;" xml:space="preserve"><path d="M8,9V1.8L0.9,8.8L0.2,8.1L7.3,1H0V0h9v9H8z"></path><path d="M8,9V1.8L0.9,8.8L0.2,8.1L7.3,1H0V0h9v9H8z"></path></svg>')
        },
        addHtml: function(e, t) {
            e.length && e.each(function() {
                var e = r(this);
                e.find(".qodef-svg--button-arrow").length || (e.wrapInner("<div class='qodef-m-text'></div>"),
                e.append(t))
            })
        }
    });
    qodef.qodefPriceFilterButton = a
}(jQuery);
