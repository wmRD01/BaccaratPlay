System.register([], function (e) {
    'use strict';
    return {
        execute: function () {
            e({
                c: function (e, t) {
                    return e((t = { exports: {} }), t.exports), t.exports;
                },
                u: function (e) {
                    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
                },
            }),
                e(
                    'a',
                    'undefined' != typeof globalThis
                        ? globalThis
                        : 'undefined' != typeof window
                        ? window
                        : 'undefined' != typeof global
                        ? global
                        : 'undefined' != typeof self
                        ? self
                        : {}
                );
        },
    };
});
