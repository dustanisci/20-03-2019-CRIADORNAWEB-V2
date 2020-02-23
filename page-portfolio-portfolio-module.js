(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-portfolio-portfolio-module"],{

/***/ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/layout.js":
/*!****************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/layout.js ***!
  \****************************************************************/
/*! exports provided: BreakpointObserver, Breakpoints, LayoutModule, MediaMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakpointObserver", function() { return BreakpointObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakpoints", function() { return Breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaMatcher", function() { return MediaMatcher; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/platform.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm5/coercion.js");






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
    }], function () { return []; }, null); })();
    return LayoutModule;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Global registry for all dynamically-created, injected media queries. */
var mediaQueriesForWebkitCompatibility = new Set();
/** Style tag that holds all of the dynamically-created media queries. */
var mediaQueryStyleNode;
/** A utility for calling matchMedia queries. */
var MediaMatcher = /** @class */ (function () {
    function MediaMatcher(_platform) {
        this._platform = _platform;
        this._matchMedia = this._platform.isBrowser && window.matchMedia ?
            // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
            // call it from a different scope.
            window.matchMedia.bind(window) :
            noopMatchMedia;
    }
    /**
     * Evaluates the given media query and returns the native MediaQueryList from which results
     * can be retrieved.
     * Confirms the layout engine will trigger for the selector query provided and returns the
     * MediaQueryList for the query provided.
     */
    MediaMatcher.prototype.matchMedia = function (query) {
        if (this._platform.WEBKIT) {
            createEmptyStyleRule(query);
        }
        return this._matchMedia(query);
    };
    /** @nocollapse */
    MediaMatcher.ctorParameters = function () { return [
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] }
    ]; };
    MediaMatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function MediaMatcher_Factory() { return new MediaMatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"])); }, token: MediaMatcher, providedIn: "root" });
MediaMatcher.ɵfac = function MediaMatcher_Factory(t) { return new (t || MediaMatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"])); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaMatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] }]; }, null); })();
    return MediaMatcher;
}());
/**
 * For Webkit engines that only trigger the MediaQueryListListener when
 * there is at least one CSS selector for the respective media query.
 */
function createEmptyStyleRule(query) {
    if (mediaQueriesForWebkitCompatibility.has(query)) {
        return;
    }
    try {
        if (!mediaQueryStyleNode) {
            mediaQueryStyleNode = document.createElement('style');
            mediaQueryStyleNode.setAttribute('type', 'text/css');
            document.head.appendChild(mediaQueryStyleNode);
        }
        if (mediaQueryStyleNode.sheet) {
            mediaQueryStyleNode.sheet
                .insertRule("@media " + query + " {.fx-query-test{ }}", 0);
            mediaQueriesForWebkitCompatibility.add(query);
        }
    }
    catch (e) {
        console.error(e);
    }
}
/** No-op matchMedia replacement for non-browser platforms. */
function noopMatchMedia(query) {
    // Use `as any` here to avoid adding additional necessary properties for
    // the noop matcher.
    return {
        matches: query === 'all' || query === '',
        media: query,
        addListener: function () { },
        removeListener: function () { }
    };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Utility for checking the matching state of @media queries. */
var BreakpointObserver = /** @class */ (function () {
    function BreakpointObserver(_mediaMatcher, _zone) {
        this._mediaMatcher = _mediaMatcher;
        this._zone = _zone;
        /**  A map of all media queries currently being listened for. */
        this._queries = new Map();
        /** A subject for all other observables to takeUntil based on. */
        this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /** Completes the active subject, signalling to all other observables to complete. */
    BreakpointObserver.prototype.ngOnDestroy = function () {
        this._destroySubject.next();
        this._destroySubject.complete();
    };
    /**
     * Whether one or more media queries match the current viewport size.
     * @param value One or more media queries to check.
     * @returns Whether any of the media queries match.
     */
    BreakpointObserver.prototype.isMatched = function (value) {
        var _this = this;
        var queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(value));
        return queries.some(function (mediaQuery) { return _this._registerQuery(mediaQuery).mql.matches; });
    };
    /**
     * Gets an observable of results for the given queries that will emit new results for any changes
     * in matching of the given queries.
     * @param value One or more media queries to check.
     * @returns A stream of matches for the given queries.
     */
    BreakpointObserver.prototype.observe = function (value) {
        var _this = this;
        var queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(value));
        var observables = queries.map(function (query) { return _this._registerQuery(query).observable; });
        var stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(observables);
        // Emit the first state immediately, and then debounce the subsequent emissions.
        stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)), stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0)));
        return stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (breakpointStates) {
            var response = {
                matches: false,
                breakpoints: {},
            };
            breakpointStates.forEach(function (state) {
                response.matches = response.matches || state.matches;
                response.breakpoints[state.query] = state.matches;
            });
            return response;
        }));
    };
    /** Registers a specific query to be listened for. */
    BreakpointObserver.prototype._registerQuery = function (query) {
        var _this = this;
        // Only set up a new MediaQueryList if it is not already being listened for.
        if (this._queries.has(query)) {
            return this._queries.get(query);
        }
        var mql = this._mediaMatcher.matchMedia(query);
        // Create callback for match changes and add it is as a listener.
        var queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
            // back into the zone because matchMedia is only included in Zone.js by loading the
            // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
            // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
            // patches it.
            var handler = function (e) { return _this._zone.run(function () { return observer.next(e); }); };
            mql.addListener(handler);
            return function () {
                mql.removeListener(handler);
            };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(mql), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (nextMql) { return ({ query: query, matches: nextMql.matches }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroySubject));
        // Add the MediaQueryList to the set of queries.
        var output = { observable: queryObservable, mql: mql };
        this._queries.set(query, output);
        return output;
    };
    /** @nocollapse */
    BreakpointObserver.ctorParameters = function () { return [
        { type: MediaMatcher },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    BreakpointObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function BreakpointObserver_Factory() { return new BreakpointObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MediaMatcher), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); }, token: BreakpointObserver, providedIn: "root" });
BreakpointObserver.ɵfac = function BreakpointObserver_Factory(t) { return new (t || BreakpointObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreakpointObserver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: MediaMatcher }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();
    return BreakpointObserver;
}());
/**
 * Split each query string into separate query strings if two queries are provided as comma
 * separated.
 */
function splitQueries(queries) {
    return queries.map(function (query) { return query.split(','); })
        .reduce(function (a1, a2) { return a1.concat(a2); })
        .map(function (query) { return query.trim(); });
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// PascalCase is being used as Breakpoints is used like an enum.
// tslint:disable-next-line:variable-name
var Breakpoints = {
    XSmall: '(max-width: 599.99px)',
    Small: '(min-width: 600px) and (max-width: 959.99px)',
    Medium: '(min-width: 960px) and (max-width: 1279.99px)',
    Large: '(min-width: 1280px) and (max-width: 1919.99px)',
    XLarge: '(min-width: 1920px)',
    Handset: '(max-width: 599.99px) and (orientation: portrait), ' +
        '(max-width: 959.99px) and (orientation: landscape)',
    Tablet: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), ' +
        '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
    Web: '(min-width: 840px) and (orientation: portrait), ' +
        '(min-width: 1280px) and (orientation: landscape)',
    HandsetPortrait: '(max-width: 599.99px) and (orientation: portrait)',
    TabletPortrait: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)',
    WebPortrait: '(min-width: 840px) and (orientation: portrait)',
    HandsetLandscape: '(max-width: 959.99px) and (orientation: landscape)',
    TabletLandscape: '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
    WebLandscape: '(min-width: 1280px) and (orientation: landscape)',
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/platform.js":
/*!******************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/platform.js ***!
  \******************************************************************/
/*! exports provided: Platform, PlatformModule, RtlScrollAxisType, _supportsShadowDom, getRtlScrollAxisType, getSupportedInputTypes, normalizePassiveListenerOptions, supportsPassiveEventListeners, supportsScrollBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformModule", function() { return PlatformModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtlScrollAxisType", function() { return RtlScrollAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_supportsShadowDom", function() { return _supportsShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function() { return getRtlScrollAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function() { return getSupportedInputTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function() { return normalizePassiveListenerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function() { return supportsPassiveEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function() { return supportsScrollBehavior; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");



/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.

var hasV8BreakIterator;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
    hasV8BreakIterator = (typeof Intl !== 'undefined' && Intl.v8BreakIterator);
}
catch (_a) {
    hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
var Platform = /** @class */ (function () {
    /**
     * @breaking-change 8.0.0 remove optional decorator
     */
    function Platform(_platformId) {
        this._platformId = _platformId;
        // We want to use the Angular platform check because if the Document is shimmed
        // without the navigator, the following checks will fail. This is preferred because
        // sometimes the Document may be shimmed without the user's knowledge or intention
        /** Whether the Angular application is being rendered in the browser. */
        this.isBrowser = this._platformId ?
            Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
        /** Whether the current browser is Microsoft Edge. */
        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /** Whether the current rendering engine is Microsoft Trident. */
        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
        /** Whether the current rendering engine is Blink. */
        this.BLINK = this.isBrowser && (!!(window.chrome || hasV8BreakIterator) &&
            typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT);
        // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.
        /** Whether the current rendering engine is WebKit. */
        this.WEBKIT = this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /** Whether the current platform is Apple iOS. */
        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !('MSStream' in window);
        // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.
        /** Whether the current browser is Firefox. */
        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /** Whether the current platform is Android. */
        // Trident on mobile adds the android platform to the userAgent to trick detections.
        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.
        /** Whether the current browser is Safari. */
        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
    /** @nocollapse */
    Platform.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
    ]; };
    Platform.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function Platform_Factory() { return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8)); }, token: Platform, providedIn: "root" });
Platform.ɵfac = function Platform_Factory(t) { return new (t || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8)); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Platform, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, null); })();
    return Platform;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var PlatformModule = /** @class */ (function () {
    function PlatformModule() {
    }
PlatformModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PlatformModule });
PlatformModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PlatformModule_Factory(t) { return new (t || PlatformModule)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
    }], function () { return []; }, null); })();
    return PlatformModule;
}());

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Cached result Set of input types support by the current browser. */
var supportedInputTypes;
/** Types of `<input>` that *might* be supported. */
var candidateInputTypes = [
    // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
/** @returns The input types supported by this browser. */
function getSupportedInputTypes() {
    // Result is cached.
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    // We can't check if an input type is not supported until we're on the browser, so say that
    // everything is supported when not on the browser. We don't use `Platform` here since it's
    // just a helper function and can't inject it.
    if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    var featureTestInput = document.createElement('input');
    supportedInputTypes = new Set(candidateInputTypes.filter(function (value) {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
    }));
    return supportedInputTypes;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Cached result of whether the user's browser supports passive event listeners. */
var supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 */
function supportsPassiveEventListeners() {
    if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
            window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
                get: function () { return supportsPassiveEvents = true; }
            }));
        }
        finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
        }
    }
    return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param options Object to be normalized.
 */
function normalizePassiveListenerOptions(options) {
    return supportsPassiveEventListeners() ? options : !!options.capture;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** The possible ways the browser may handle the horizontal scroll axis in RTL languages. */
var RtlScrollAxisType;
(function (RtlScrollAxisType) {
    /**
     * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
     * all the way right.
     */
    RtlScrollAxisType[RtlScrollAxisType["NORMAL"] = 0] = "NORMAL";
    /**
     * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    RtlScrollAxisType[RtlScrollAxisType["NEGATED"] = 1] = "NEGATED";
    /**
     * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    RtlScrollAxisType[RtlScrollAxisType["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));
/** Cached result of the way the browser handles the horizontal scroll axis in RTL mode. */
var rtlScrollAxisType;
/** Check whether the browser supports scroll behaviors. */
function supportsScrollBehavior() {
    return !!(typeof document == 'object' && 'scrollBehavior' in document.documentElement.style);
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 */
function getRtlScrollAxisType() {
    // We can't check unless we're on the browser. Just assume 'normal' if we're not.
    if (typeof document !== 'object' || !document) {
        return RtlScrollAxisType.NORMAL;
    }
    if (!rtlScrollAxisType) {
        // Create a 1px wide scrolling container and a 2px wide content element.
        var scrollContainer = document.createElement('div');
        var containerStyle = scrollContainer.style;
        scrollContainer.dir = 'rtl';
        containerStyle.height = '1px';
        containerStyle.width = '1px';
        containerStyle.overflow = 'auto';
        containerStyle.visibility = 'hidden';
        containerStyle.pointerEvents = 'none';
        containerStyle.position = 'absolute';
        var content = document.createElement('div');
        var contentStyle = content.style;
        contentStyle.width = '2px';
        contentStyle.height = '1px';
        scrollContainer.appendChild(content);
        document.body.appendChild(scrollContainer);
        rtlScrollAxisType = RtlScrollAxisType.NORMAL;
        // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
        // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
        // dealing with one of the other two types of browsers.
        if (scrollContainer.scrollLeft === 0) {
            // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
            // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
            // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
            // return 0 when we read it again.
            scrollContainer.scrollLeft = 1;
            rtlScrollAxisType =
                scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
        }
        scrollContainer.parentNode.removeChild(scrollContainer);
    }
    return rtlScrollAxisType;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var shadowDomIsSupported;
/** Checks whether the user's browser support Shadow DOM. */
function _supportsShadowDom() {
    if (shadowDomIsSupported == null) {
        var head = typeof document !== 'undefined' ? document.head : null;
        shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
    }
    return shadowDomIsSupported;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=platform.js.map

/***/ }),

/***/ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js ***!
  \*****************************************************************/
/*! exports provided: HTTP_INTERCEPTORS, HttpBackend, HttpClient, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, HttpErrorResponse, HttpEventType, HttpHandler, HttpHeaderResponse, HttpHeaders, HttpParams, HttpRequest, HttpResponse, HttpResponseBase, HttpUrlEncodingCodec, HttpXhrBackend, HttpXsrfTokenExtractor, JsonpClientBackend, JsonpInterceptor, XhrFactory, ɵHttpInterceptingHandler, ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function() { return HTTP_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpBackend", function() { return HttpBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return HttpClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function() { return HttpClientJsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientModule", function() { return HttpClientModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function() { return HttpClientXsrfModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function() { return HttpErrorResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpEventType", function() { return HttpEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHandler", function() { return HttpHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function() { return HttpHeaderResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaders", function() { return HttpHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpParams", function() { return HttpParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequest", function() { return HttpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return HttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function() { return HttpResponseBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function() { return HttpUrlEncodingCodec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function() { return HttpXhrBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function() { return HttpXsrfTokenExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function() { return JsonpClientBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function() { return JsonpInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrFactory", function() { return XhrFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler", function() { return HttpInterceptingHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_a", function() { return NoopInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_b", function() { return JsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_c", function() { return jsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e", function() { return XSRF_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f", function() { return XSRF_HEADER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g", function() { return HttpXsrfCookieExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h", function() { return HttpXsrfInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/**
 * @license Angular v9.0.1
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */







/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * @publicApi
 */

var HttpHandler = /** @class */ (function () {
    function HttpHandler() {
    }
    return HttpHandler;
}());
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * @publicApi
 */
var HttpBackend = /** @class */ (function () {
    function HttpBackend() {
    }
    return HttpBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Represents the header configuration options for an HTTP request.
 * Instances are immutable. Modifying methods return a cloned
 * instance with the change. The original object is never changed.
 *
 * @publicApi
 */
var HttpHeaders = /** @class */ (function () {
    /**  Constructs a new HTTP header object with the given values.*/
    function HttpHeaders(headers) {
        var _this = this;
        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */
        this.lazyUpdate = null;
        if (!headers) {
            this.headers = new Map();
        }
        else if (typeof headers === 'string') {
            this.lazyInit = function () {
                _this.headers = new Map();
                headers.split('\n').forEach(function (line) {
                    var index = line.indexOf(':');
                    if (index > 0) {
                        var name_1 = line.slice(0, index);
                        var key = name_1.toLowerCase();
                        var value = line.slice(index + 1).trim();
                        _this.maybeSetNormalizedName(name_1, key);
                        if (_this.headers.has(key)) {
                            _this.headers.get(key).push(value);
                        }
                        else {
                            _this.headers.set(key, [value]);
                        }
                    }
                });
            };
        }
        else {
            this.lazyInit = function () {
                _this.headers = new Map();
                Object.keys(headers).forEach(function (name) {
                    var values = headers[name];
                    var key = name.toLowerCase();
                    if (typeof values === 'string') {
                        values = [values];
                    }
                    if (values.length > 0) {
                        _this.headers.set(key, values);
                        _this.maybeSetNormalizedName(name, key);
                    }
                });
            };
        }
    }
    /**
     * Checks for existence of a given header.
     *
     * @param name The header name to check for existence.
     *
     * @returns True if the header exists, false otherwise.
     */
    HttpHeaders.prototype.has = function (name) {
        this.init();
        return this.headers.has(name.toLowerCase());
    };
    /**
     * Retrieves the first value of a given header.
     *
     * @param name The header name.
     *
     * @returns The value string if the header exists, null otherwise
     */
    HttpHeaders.prototype.get = function (name) {
        this.init();
        var values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
    };
    /**
     * Retrieves the names of the headers.
     *
     * @returns A list of header names.
     */
    HttpHeaders.prototype.keys = function () {
        this.init();
        return Array.from(this.normalizedNames.values());
    };
    /**
     * Retrieves a list of values for a given header.
     *
     * @param name The header name from which to retrieve values.
     *
     * @returns A string of values if the header exists, null otherwise.
     */
    HttpHeaders.prototype.getAll = function (name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
    };
    /**
     * Appends a new value to the existing set of values for a header
     * and returns them in a clone of the original instance.
     *
     * @param name The header name for which to append the values.
     * @param value The value to append.
     *
     * @returns A clone of the HTTP headers object with the value appended to the given header.
     */
    HttpHeaders.prototype.append = function (name, value) {
        return this.clone({ name: name, value: value, op: 'a' });
    };
    /**
     * Sets or modifies a value for a given header in a clone of the original instance.
     * If the header already exists, its value is replaced with the given value
     * in the returned object.
     *
     * @param name The header name.
     * @param value The value or values to set or overide for the given header.
     *
     * @returns A clone of the HTTP headers object with the newly set header value.
     */
    HttpHeaders.prototype.set = function (name, value) {
        return this.clone({ name: name, value: value, op: 's' });
    };
    /**
     * Deletes values for a given header in a clone of the original instance.
     *
     * @param name The header name.
     * @param value The value or values to delete for the given header.
     *
     * @returns A clone of the HTTP headers object with the given value deleted.
     */
    HttpHeaders.prototype.delete = function (name, value) {
        return this.clone({ name: name, value: value, op: 'd' });
    };
    HttpHeaders.prototype.maybeSetNormalizedName = function (name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
        }
    };
    HttpHeaders.prototype.init = function () {
        var _this = this;
        if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
                this.copyFrom(this.lazyInit);
            }
            else {
                this.lazyInit();
            }
            this.lazyInit = null;
            if (!!this.lazyUpdate) {
                this.lazyUpdate.forEach(function (update) { return _this.applyUpdate(update); });
                this.lazyUpdate = null;
            }
        }
    };
    HttpHeaders.prototype.copyFrom = function (other) {
        var _this = this;
        other.init();
        Array.from(other.headers.keys()).forEach(function (key) {
            _this.headers.set(key, other.headers.get(key));
            _this.normalizedNames.set(key, other.normalizedNames.get(key));
        });
    };
    HttpHeaders.prototype.clone = function (update) {
        var clone = new HttpHeaders();
        clone.lazyInit =
            (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
    };
    HttpHeaders.prototype.applyUpdate = function (update) {
        var key = update.name.toLowerCase();
        switch (update.op) {
            case 'a':
            case 's':
                var value = update.value;
                if (typeof value === 'string') {
                    value = [value];
                }
                if (value.length === 0) {
                    return;
                }
                this.maybeSetNormalizedName(update.name, key);
                var base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                base.push.apply(base, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(value));
                this.headers.set(key, base);
                break;
            case 'd':
                var toDelete_1 = update.value;
                if (!toDelete_1) {
                    this.headers.delete(key);
                    this.normalizedNames.delete(key);
                }
                else {
                    var existing = this.headers.get(key);
                    if (!existing) {
                        return;
                    }
                    existing = existing.filter(function (value) { return toDelete_1.indexOf(value) === -1; });
                    if (existing.length === 0) {
                        this.headers.delete(key);
                        this.normalizedNames.delete(key);
                    }
                    else {
                        this.headers.set(key, existing);
                    }
                }
                break;
        }
    };
    /**
     * @internal
     */
    HttpHeaders.prototype.forEach = function (fn) {
        var _this = this;
        this.init();
        Array.from(this.normalizedNames.keys())
            .forEach(function (key) { return fn(_this.normalizedNames.get(key), _this.headers.get(key)); });
    };
    return HttpHeaders;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Provides encoding and decoding of URL parameter and query-string values.
 *
 * Serializes and parses URL parameter keys and values to encode and decode them.
 * If you pass URL query parameters without encoding,
 * the query parameters can be misinterpreted at the receiving end.
 *
 *
 * @publicApi
 */
var HttpUrlEncodingCodec = /** @class */ (function () {
    function HttpUrlEncodingCodec() {
    }
    /**
     * Encodes a key name for a URL parameter or query-string.
     * @param key The key name.
     * @returns The encoded key name.
     */
    HttpUrlEncodingCodec.prototype.encodeKey = function (key) { return standardEncoding(key); };
    /**
     * Encodes the value of a URL parameter or query-string.
     * @param value The value.
     * @returns The encoded value.
     */
    HttpUrlEncodingCodec.prototype.encodeValue = function (value) { return standardEncoding(value); };
    /**
     * Decodes an encoded URL parameter or query-string key.
     * @param key The encoded key name.
     * @returns The decoded key name.
     */
    HttpUrlEncodingCodec.prototype.decodeKey = function (key) { return decodeURIComponent(key); };
    /**
     * Decodes an encoded URL parameter or query-string value.
     * @param value The encoded value.
     * @returns The decoded value.
     */
    HttpUrlEncodingCodec.prototype.decodeValue = function (value) { return decodeURIComponent(value); };
    return HttpUrlEncodingCodec;
}());
function paramParser(rawParams, codec) {
    var map = new Map();
    if (rawParams.length > 0) {
        var params = rawParams.split('&');
        params.forEach(function (param) {
            var eqIdx = param.indexOf('=');
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(eqIdx == -1 ?
                [codec.decodeKey(param), ''] :
                [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))], 2), key = _a[0], val = _a[1];
            var list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable; all mutation operations return a new instance.
 *
 * @publicApi
 */
var HttpParams = /** @class */ (function () {
    function HttpParams(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        if (!!options.fromString) {
            if (!!options.fromObject) {
                throw new Error("Cannot specify both fromString and fromObject.");
            }
            this.map = paramParser(options.fromString, this.encoder);
        }
        else if (!!options.fromObject) {
            this.map = new Map();
            Object.keys(options.fromObject).forEach(function (key) {
                var value = options.fromObject[key];
                _this.map.set(key, Array.isArray(value) ? value : [value]);
            });
        }
        else {
            this.map = null;
        }
    }
    /**
     * Reports whether the body includes one or more values for a given parameter.
     * @param param The parameter name.
     * @returns True if the parameter has one or more values,
     * false if it has no value or is not present.
     */
    HttpParams.prototype.has = function (param) {
        this.init();
        return this.map.has(param);
    };
    /**
     * Retrieves the first value for a parameter.
     * @param param The parameter name.
     * @returns The first value of the given parameter,
     * or `null` if the parameter is not present.
     */
    HttpParams.prototype.get = function (param) {
        this.init();
        var res = this.map.get(param);
        return !!res ? res[0] : null;
    };
    /**
     * Retrieves all values for a  parameter.
     * @param param The parameter name.
     * @returns All values in a string array,
     * or `null` if the parameter not present.
     */
    HttpParams.prototype.getAll = function (param) {
        this.init();
        return this.map.get(param) || null;
    };
    /**
     * Retrieves all the parameters for this body.
     * @returns The parameter names in a string array.
     */
    HttpParams.prototype.keys = function () {
        this.init();
        return Array.from(this.map.keys());
    };
    /**
     * Appends a new value to existing values for a parameter.
     * @param param The parameter name.
     * @param value The new value to add.
     * @return A new body with the appended value.
     */
    HttpParams.prototype.append = function (param, value) { return this.clone({ param: param, value: value, op: 'a' }); };
    /**
     * Replaces the value for a parameter.
     * @param param The parameter name.
     * @param value The new value.
     * @return A new body with the new value.
     */
    HttpParams.prototype.set = function (param, value) { return this.clone({ param: param, value: value, op: 's' }); };
    /**
     * Removes a given value or all values from a parameter.
     * @param param The parameter name.
     * @param value The value to remove, if provided.
     * @return A new body with the given value removed, or with all values
     * removed if no value is specified.
     */
    HttpParams.prototype.delete = function (param, value) { return this.clone({ param: param, value: value, op: 'd' }); };
    /**
     * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     */
    HttpParams.prototype.toString = function () {
        var _this = this;
        this.init();
        return this.keys()
            .map(function (key) {
            var eKey = _this.encoder.encodeKey(key);
            // `a: ['1']` produces `'a=1'`
            // `b: []` produces `''`
            // `c: ['1', '2']` produces `'c=1&c=2'`
            return _this.map.get(key).map(function (value) { return eKey + '=' + _this.encoder.encodeValue(value); })
                .join('&');
        })
            // filter out empty values because `b: []` produces `''`
            // which results in `a=1&&c=1&c=2` instead of `a=1&c=1&c=2` if we don't
            .filter(function (param) { return param !== ''; })
            .join('&');
    };
    HttpParams.prototype.clone = function (update) {
        var clone = new HttpParams({ encoder: this.encoder });
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat([update]);
        return clone;
    };
    HttpParams.prototype.init = function () {
        var _this = this;
        if (this.map === null) {
            this.map = new Map();
        }
        if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(function (key) { return _this.map.set(key, _this.cloneFrom.map.get(key)); });
            this.updates.forEach(function (update) {
                switch (update.op) {
                    case 'a':
                    case 's':
                        var base = (update.op === 'a' ? _this.map.get(update.param) : undefined) || [];
                        base.push(update.value);
                        _this.map.set(update.param, base);
                        break;
                    case 'd':
                        if (update.value !== undefined) {
                            var base_1 = _this.map.get(update.param) || [];
                            var idx = base_1.indexOf(update.value);
                            if (idx !== -1) {
                                base_1.splice(idx, 1);
                            }
                            if (base_1.length > 0) {
                                _this.map.set(update.param, base_1);
                            }
                            else {
                                _this.map.delete(update.param);
                            }
                        }
                        else {
                            _this.map.delete(update.param);
                            break;
                        }
                }
            });
            this.cloneFrom = this.updates = null;
        }
    };
    return HttpParams;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Determine whether the given HTTP method may include a body.
 */
function mightHaveBody(method) {
    switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
            return false;
        default:
            return true;
    }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 */
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 */
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 */
function isFormData(value) {
    return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * @publicApi
 */
var HttpRequest = /** @class */ (function () {
    function HttpRequest(method, url, third, fourth) {
        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */
        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */
        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */
        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */
        this.responseType = 'json';
        this.method = method.toUpperCase();
        // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.
        var options;
        // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.
        if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = (third !== undefined) ? third : null;
            options = fourth;
        }
        else {
            // No body required, options are the third argument. The body stays null.
            options = third;
        }
        // If options have been passed, interpret them.
        if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials;
            // Override default response type of 'json' if one is provided.
            if (!!options.responseType) {
                this.responseType = options.responseType;
            }
            // Override headers if they're provided.
            if (!!options.headers) {
                this.headers = options.headers;
            }
            if (!!options.params) {
                this.params = options.params;
            }
        }
        // If no headers have been passed in, construct a new HttpHeaders instance.
        if (!this.headers) {
            this.headers = new HttpHeaders();
        }
        // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
        if (!this.params) {
            this.params = new HttpParams();
            this.urlWithParams = url;
        }
        else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            var params = this.params.toString();
            if (params.length === 0) {
                // No parameters, the visible URL is just the URL given at creation time.
                this.urlWithParams = url;
            }
            else {
                // Does the URL already have query parameters? Look for '?'.
                var qIdx = url.indexOf('?');
                // There are 3 cases to handle:
                // 1) No existing parameters -> append '?' followed by params.
                // 2) '?' exists and is followed by existing query string ->
                //    append '&' followed by params.
                // 3) '?' exists at the end of the url -> append params directly.
                // This basically amounts to determining the character, if any, with
                // which to join the URL and parameters.
                var sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                this.urlWithParams = url + sep + params;
            }
        }
    }
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     */
    HttpRequest.prototype.serializeBody = function () {
        // If no body is present, no need to serialize it.
        if (this.body === null) {
            return null;
        }
        // Check whether the body is already in a serialized form. If so,
        // it can just be returned directly.
        if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
            typeof this.body === 'string') {
            return this.body;
        }
        // Check whether the body is an instance of HttpUrlEncodedParams.
        if (this.body instanceof HttpParams) {
            return this.body.toString();
        }
        // Check whether the body is an object or array, and serialize with JSON if so.
        if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
            Array.isArray(this.body)) {
            return JSON.stringify(this.body);
        }
        // Fall back on toString() for everything else.
        return this.body.toString();
    };
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     */
    HttpRequest.prototype.detectContentTypeHeader = function () {
        // An empty body has no content type.
        if (this.body === null) {
            return null;
        }
        // FormData bodies rely on the browser's content type assignment.
        if (isFormData(this.body)) {
            return null;
        }
        // Blobs usually have their own content type. If it doesn't, then
        // no type can be inferred.
        if (isBlob(this.body)) {
            return this.body.type || null;
        }
        // Array buffers have unknown contents and thus no type can be inferred.
        if (isArrayBuffer(this.body)) {
            return null;
        }
        // Technically, strings could be a form of JSON data, but it's safe enough
        // to assume they're plain strings.
        if (typeof this.body === 'string') {
            return 'text/plain';
        }
        // `HttpUrlEncodedParams` has its own content-type.
        if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        // Arrays, objects, and numbers will be encoded as JSON.
        if (typeof this.body === 'object' || typeof this.body === 'number' ||
            Array.isArray(this.body)) {
            return 'application/json';
        }
        // No type could be inferred.
        return null;
    };
    HttpRequest.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.
        var method = update.method || this.method;
        var url = update.url || this.url;
        var responseType = update.responseType || this.responseType;
        // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.
        var body = (update.body !== undefined) ? update.body : this.body;
        // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.
        var withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        var reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.
        var headers = update.headers || this.headers;
        var params = update.params || this.params;
        // Check whether the caller has asked to add headers.
        if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers =
                Object.keys(update.setHeaders)
                    .reduce(function (headers, name) { return headers.set(name, update.setHeaders[name]); }, headers);
        }
        // Check whether the caller has asked to set params.
        if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams)
                .reduce(function (params, param) { return params.set(param, update.setParams[param]); }, params);
        }
        // Finally, construct the new HttpRequest using the pieces from above.
        return new HttpRequest(method, url, body, {
            params: params, headers: headers, reportProgress: reportProgress, responseType: responseType, withCredentials: withCredentials,
        });
    };
    return HttpRequest;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Type enumeration for the different kinds of `HttpEvent`.
 *
 * @publicApi
 */
var HttpEventType;
(function (HttpEventType) {
    /**
     * The request was sent out over the wire.
     */
    HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
    /**
     * An upload progress event was received.
     */
    HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
    /**
     * The response status code and headers were received.
     */
    HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
    /**
     * A download progress event was received.
     */
    HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
    /**
     * The full response including the body was received.
     */
    HttpEventType[HttpEventType["Response"] = 4] = "Response";
    /**
     * A custom event from an interceptor or a backend.
     */
    HttpEventType[HttpEventType["User"] = 5] = "User";
})(HttpEventType || (HttpEventType = {}));
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * @publicApi
 */
var HttpResponseBase = /** @class */ (function () {
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     */
    function HttpResponseBase(init, defaultStatus, defaultStatusText) {
        if (defaultStatus === void 0) { defaultStatus = 200; }
        if (defaultStatusText === void 0) { defaultStatusText = 'OK'; }
        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        // Cache the ok value to avoid defining a getter.
        this.ok = this.status >= 200 && this.status < 300;
    }
    return HttpResponseBase;
}());
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * @publicApi
 */
var HttpHeaderResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpHeaderResponse, _super);
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     */
    function HttpHeaderResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.ResponseHeader;
        return _this;
    }
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     */
    HttpHeaderResponse.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpHeaderResponse;
}(HttpResponseBase));
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * @publicApi
 */
var HttpResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpResponse, _super);
    /**
     * Construct a new `HttpResponse`.
     */
    function HttpResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.Response;
        _this.body = init.body !== undefined ? init.body : null;
        return _this;
    }
    HttpResponse.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        return new HttpResponse({
            body: (update.body !== undefined) ? update.body : this.body,
            headers: update.headers || this.headers,
            status: (update.status !== undefined) ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpResponse;
}(HttpResponseBase));
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * @publicApi
 */
var HttpErrorResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpErrorResponse, _super);
    function HttpErrorResponse(init) {
        var _this = 
        // Initialize with a default status of 0 / Unknown Error.
        _super.call(this, init, 0, 'Unknown Error') || this;
        _this.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */
        _this.ok = false;
        // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.
        if (_this.status >= 200 && _this.status < 300) {
            _this.message = "Http failure during parsing for " + (init.url || '(unknown url)');
        }
        else {
            _this.message =
                "Http failure response for " + (init.url || '(unknown url)') + ": " + init.status + " " + init.statusText;
        }
        _this.error = init.error || null;
        return _this;
    }
    return HttpErrorResponse;
}(HttpResponseBase));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. This function clones the object and adds the body.
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.
 *
 */
function addBody(options, body) {
    return {
        body: body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials,
    };
}
/**
 * Performs HTTP requests.
 * This service is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.

 *
 * @usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
 * ```
 *
 * @see [HTTP Guide](guide/http)
 *
 * @publicApi
 */
var HttpClient = /** @class */ (function () {
    function HttpClient(handler) {
        this.handler = handler;
    }
    /**
     * Constructs an observable for a generic HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * You can pass an `HttpRequest` directly as the only parameter. In this case,
     * the call returns an observable of the raw `HttpEvent` stream.
     *
     * Alternatively you can pass an HTTP method as the first parameter,
     * a URL string as the second, and an options hash containing the request body as the third.
     * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
     * type of returned observable.
     *   * The `responseType` value determines how a successful response body is parsed.
     *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
     * object as a type parameter to the call.
     *
     * The `observe` value determines the return type, according to what you are interested in
     * observing.
     *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
     * progress events by default.
     *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
     * where the `T` parameter depends on the `responseType` and any optionally provided type
     * parameter.
     *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
     *
     */
    HttpClient.prototype.request = function (first, url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var req;
        // First, check whether the primary argument is an instance of `HttpRequest`.
        if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req = first;
        }
        else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming `GET` unless a method is
            // provided.
            // Figure out the headers.
            var headers = undefined;
            if (options.headers instanceof HttpHeaders) {
                headers = options.headers;
            }
            else {
                headers = new HttpHeaders(options.headers);
            }
            // Sort out parameters.
            var params = undefined;
            if (!!options.params) {
                if (options.params instanceof HttpParams) {
                    params = options.params;
                }
                else {
                    params = new HttpParams({ fromObject: options.params });
                }
            }
            // Construct the request.
            req = new HttpRequest(first, url, (options.body !== undefined ? options.body : null), {
                headers: headers,
                params: params,
                reportProgress: options.reportProgress,
                // By default, JSON is assumed to be returned for all calls.
                responseType: options.responseType || 'json',
                withCredentials: options.withCredentials,
            });
        }
        // Start with an Observable.of() the initial request, and run the handler (which
        // includes all interceptors) inside a concatMap(). This way, the handler runs
        // inside an Observable chain, which causes interceptors to be re-run on every
        // subscription (this also makes retries re-run the handler, including interceptors).
        var events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (req) { return _this.handler.handle(req); }));
        // If coming via the API signature which accepts a previously constructed HttpRequest,
        // the only option is to get the event stream. Otherwise, return the event stream if
        // that is what was requested.
        if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
        }
        // The requested stream contains either the full response or the body. In either
        // case, the first step is to filter the event stream to extract a stream of
        // responses(s).
        var res$ = events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof HttpResponse; }));
        // Decide which stream to return.
        switch (options.observe || 'body') {
            case 'body':
                // The requested stream is the body. Map the response stream to the response
                // body. This could be done more simply, but a misbehaving interceptor might
                // transform the response body into a different format and ignore the requested
                // responseType. Guard against this by validating that the response is of the
                // requested type.
                switch (req.responseType) {
                    case 'arraybuffer':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                            // Validate that the body is an ArrayBuffer.
                            if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                throw new Error('Response is not an ArrayBuffer.');
                            }
                            return res.body;
                        }));
                    case 'blob':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                            // Validate that the body is a Blob.
                            if (res.body !== null && !(res.body instanceof Blob)) {
                                throw new Error('Response is not a Blob.');
                            }
                            return res.body;
                        }));
                    case 'text':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                            // Validate that the body is a string.
                            if (res.body !== null && typeof res.body !== 'string') {
                                throw new Error('Response is not a string.');
                            }
                            return res.body;
                        }));
                    case 'json':
                    default:
                        // No validation needed for JSON responses, as they can be of any type.
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.body; }));
                }
            case 'response':
                // The response stream was requested directly, so return it.
                return res$;
            default:
                // Guard against new future observe types being added.
                throw new Error("Unreachable: unhandled observe type " + options.observe + "}");
        }
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `DELETE` request to execute on the server. See the individual overloads for
     * details on the return type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     */
    HttpClient.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('DELETE', url, options);
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `GET` request to execute on the server. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('GET', url, options);
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `HEAD` request to execute on the server. The `HEAD` method returns
     * meta information about the resource without transferring the
     * resource itself. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.head = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('HEAD', url, options);
    };
    /**
     * Constructs an `Observable` that, when subscribed, causes a request with the special method
     * `JSONP` to be dispatched via the interceptor pipeline.
     * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
     * API endpoints that don't support newer,
     * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
     * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
     * requests even if the API endpoint is not located on the same domain (origin) as the client-side
     * application making the request.
     * The endpoint API must support JSONP callback for JSONP requests to work.
     * The resource API returns the JSON response wrapped in a callback function.
     * You can pass the callback function name as one of the query parameters.
     * Note that JSONP requests can only be used with `GET` requests.
     *
     * @param url The resource URL.
     * @param callbackParam The callback function name.
     *
     */
    HttpClient.prototype.jsonp = function (url, callbackParam) {
        return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
        });
    };
    /**
     * Constructs an `Observable` that, when subscribed, causes the configured
     * `OPTIONS` request to execute on the server. This method allows the client
     * to determine the supported HTTP methods and other capabilites of an endpoint,
     * without implying a resource action. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.options = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('OPTIONS', url, options);
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PATCH` request to execute on the server. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.patch = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PATCH', url, addBody(options, body));
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `POST` request to execute on the server. The server responds with the location of
     * the replaced resource. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.post = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('POST', url, addBody(options, body));
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
     * with a new set of values.
     * See the individual overloads for details on the return type.
     */
    HttpClient.prototype.put = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PUT', url, addBody(options, body));
    };
    HttpClient = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [HttpHandler])
    ], HttpClient);
HttpClient.ɵfac = function HttpClient_Factory(t) { return new (t || HttpClient)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HttpHandler)); };
HttpClient.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpClient, factory: function (t) { return HttpClient.ɵfac(t); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpClient, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: HttpHandler }]; }, null); })();
    return HttpClient;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */
var HttpInterceptorHandler = /** @class */ (function () {
    function HttpInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    HttpInterceptorHandler.prototype.handle = function (req) {
        return this.interceptor.intercept(req, this.next);
    };
    return HttpInterceptorHandler;
}());
/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * @publicApi
 */
var HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('HTTP_INTERCEPTORS');
var NoopInterceptor = /** @class */ (function () {
    function NoopInterceptor() {
    }
    NoopInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req);
    };
NoopInterceptor.ɵfac = function NoopInterceptor_Factory(t) { return new (t || NoopInterceptor)(); };
NoopInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NoopInterceptor, factory: function (t) { return NoopInterceptor.ɵfac(t); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NoopInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return []; }, null); })();
    return NoopInterceptor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
var nextRequestId = 0;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
var JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 */
var JsonpCallbackContext = /** @class */ (function () {
    function JsonpCallbackContext() {
    }
    return JsonpCallbackContext;
}());
/**
 * Processes an `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 * @see `HttpHandler`
 * @see `HttpXhrBackend`
 *
 * @publicApi
 */
var JsonpClientBackend = /** @class */ (function () {
    function JsonpClientBackend(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     */
    JsonpClientBackend.prototype.nextCallback = function () { return "ng_jsonp_callback_" + nextRequestId++; };
    /**
     * Processes a JSONP request and returns an event stream of the results.
     * @param req The request object.
     * @returns An observable of the response events.
     *
     */
    JsonpClientBackend.prototype.handle = function (req) {
        var _this = this;
        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
        }
        else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        // Everything else happens inside the Observable boundary.
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.
            var callback = _this.nextCallback();
            var url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=" + callback + "$1");
            // Construct the <script> tag and point it at the URL.
            var node = _this.document.createElement('script');
            node.src = url;
            // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.
            var body = null;
            // Whether the response callback has been called.
            var finished = false;
            // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.
            var cancelled = false;
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            _this.callbackMap[callback] = function (data) {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete _this.callbackMap[callback];
                // Next, make sure the request wasn't cancelled in the meantime.
                if (cancelled) {
                    return;
                }
                // Set state to indicate data was received.
                body = data;
                finished = true;
            };
            // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.
            var cleanup = function () {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                // Remove the response callback from the callbackMap (window object in the
                // browser).
                delete _this.callbackMap[callback];
            };
            // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.
            var onLoad = function (event) {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                    return;
                }
                // Cleanup the page.
                cleanup();
                // Check whether the response callback has run.
                if (!finished) {
                    // It hasn't, something went wrong with the request. Return an error via
                    // the Observable error path. All JSONP errors have status 0.
                    observer.error(new HttpErrorResponse({
                        url: url,
                        status: 0,
                        statusText: 'JSONP Error',
                        error: new Error(JSONP_ERR_NO_CALLBACK),
                    }));
                    return;
                }
                // Success. body either contains the response body or null if none was
                // returned.
                observer.next(new HttpResponse({
                    body: body,
                    status: 200,
                    statusText: 'OK', url: url,
                }));
                // Complete the stream, the response is over.
                observer.complete();
            };
            // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.
            var onError = function (error) {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                    return;
                }
                cleanup();
                // Wrap the error in a HttpErrorResponse.
                observer.error(new HttpErrorResponse({
                    error: error,
                    status: 0,
                    statusText: 'JSONP Error', url: url,
                }));
            };
            // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.
            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);
            _this.document.body.appendChild(node);
            // The request has now been successfully sent.
            observer.next({ type: HttpEventType.Sent });
            // Cancellation handler.
            return function () {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true;
                // Remove the event listeners so they won't run if the events later fire.
                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError);
                // And finally, clean up the page.
                cleanup();
            };
        });
    };
    JsonpClientBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [JsonpCallbackContext, Object])
    ], JsonpClientBackend);
JsonpClientBackend.ɵfac = function JsonpClientBackend_Factory(t) { return new (t || JsonpClientBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](JsonpCallbackContext), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])); };
JsonpClientBackend.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: JsonpClientBackend, factory: function (t) { return JsonpClientBackend.ɵfac(t); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JsonpClientBackend, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: JsonpCallbackContext }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }] }]; }, null); })();
    return JsonpClientBackend;
}());
/**
 * Identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @see `HttpInterceptor`
 *
 * @publicApi
 */
var JsonpInterceptor = /** @class */ (function () {
    function JsonpInterceptor(jsonp) {
        this.jsonp = jsonp;
    }
    /**
     * Identifies and handles a given JSONP request.
     * @param req The outgoing request object to handle.
     * @param next The next interceptor in the chain, or the backend
     * if no interceptors remain in the chain.
     * @returns An observable of the event stream.
     */
    JsonpInterceptor.prototype.intercept = function (req, next) {
        if (req.method === 'JSONP') {
            return this.jsonp.handle(req);
        }
        // Fall through for normal HTTP requests.
        return next.handle(req);
    };
    JsonpInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [JsonpClientBackend])
    ], JsonpInterceptor);
JsonpInterceptor.ɵfac = function JsonpInterceptor_Factory(t) { return new (t || JsonpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](JsonpClientBackend)); };
JsonpInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: JsonpInterceptor, factory: function (t) { return JsonpInterceptor.ɵfac(t); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JsonpInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: JsonpClientBackend }]; }, null); })();
    return JsonpInterceptor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 */
function getResponseUrl(xhr) {
    if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * @publicApi
 */
var XhrFactory = /** @class */ (function () {
    function XhrFactory() {
    }
    return XhrFactory;
}());
/**
 * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
 *
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
    BrowserXhr = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BrowserXhr);
BrowserXhr.ɵfac = function BrowserXhr_Factory(t) { return new (t || BrowserXhr)(); };
BrowserXhr.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BrowserXhr, factory: function (t) { return BrowserXhr.ɵfac(t); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrowserXhr, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return []; }, null); })();
    return BrowserXhr;
}());
/**
 * Uses `XMLHttpRequest` to send requests to a backend server.
 * @see `HttpHandler`
 * @see `JsonpClientBackend`
 *
 * @publicApi
 */
var HttpXhrBackend = /** @class */ (function () {
    function HttpXhrBackend(xhrFactory) {
        this.xhrFactory = xhrFactory;
    }
    /**
     * Processes a request and returns a stream of response events.
     * @param req The request object.
     * @returns An observable of the response events.
     */
    HttpXhrBackend.prototype.handle = function (req) {
        var _this = this;
        // Quick check to give a better error message when a user attempts to use
        // HttpClient.jsonp() without installing the JsonpClientModule
        if (req.method === 'JSONP') {
            throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
        }
        // Everything happens on Observable subscription.
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.
            var xhr = _this.xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (!!req.withCredentials) {
                xhr.withCredentials = true;
            }
            // Add all the requested headers.
            req.headers.forEach(function (name, values) { return xhr.setRequestHeader(name, values.join(',')); });
            // Add an Accept header if one isn't present already.
            if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            // Auto-detect the Content-Type header if one isn't present already.
            if (!req.headers.has('Content-Type')) {
                var detectedType = req.detectContentTypeHeader();
                // Sometimes Content-Type detection fails.
                if (detectedType !== null) {
                    xhr.setRequestHeader('Content-Type', detectedType);
                }
            }
            // Set the responseType if one was requested.
            if (req.responseType) {
                var responseType = req.responseType.toLowerCase();
                // JSON responses need to be processed as text. This is because if the server
                // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                // xhr.response will be null, and xhr.responseText cannot be accessed to
                // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                // is parsed by first requesting text and then applying JSON.parse.
                xhr.responseType = ((responseType !== 'json') ? responseType : 'text');
            }
            // Serialize the request body if one is present. If not, this will be set to null.
            var reqBody = req.serializeBody();
            // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.
            var headerResponse = null;
            // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.
            var partialFromXhr = function () {
                if (headerResponse !== null) {
                    return headerResponse;
                }
                // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).
                var status = xhr.status === 1223 ? 204 : xhr.status;
                var statusText = xhr.statusText || 'OK';
                // Parse headers from XMLHttpRequest - this step is lazy.
                var headers = new HttpHeaders(xhr.getAllResponseHeaders());
                // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.
                var url = getResponseUrl(xhr) || req.url;
                // Construct the HttpHeaderResponse and memoize it.
                headerResponse = new HttpHeaderResponse({ headers: headers, status: status, statusText: statusText, url: url });
                return headerResponse;
            };
            // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.
            var onLoad = function () {
                // Read response state from the memoized partial data.
                var _a = partialFromXhr(), headers = _a.headers, status = _a.status, statusText = _a.statusText, url = _a.url;
                // The body will be read out if present.
                var body = null;
                if (status !== 204) {
                    // Use XMLHttpRequest.response if set, responseText otherwise.
                    body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                }
                // Normalize another potential bug (this one comes from CORS).
                if (status === 0) {
                    status = !!body ? 200 : 0;
                }
                // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.
                var ok = status >= 200 && status < 300;
                // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).
                if (req.responseType === 'json' && typeof body === 'string') {
                    // Save the original body, before attempting XSSI prefix stripping.
                    var originalBody = body;
                    body = body.replace(XSSI_PREFIX, '');
                    try {
                        // Attempt the parse. If it fails, a parse error should be delivered to the user.
                        body = body !== '' ? JSON.parse(body) : null;
                    }
                    catch (error) {
                        // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                        // JSON response. Restore the original body (including any XSSI prefix) to deliver
                        // a better error response.
                        body = originalBody;
                        // If this was an error request to begin with, leave it as a string, it probably
                        // just isn't JSON. Otherwise, deliver the parsing error to the user.
                        if (ok) {
                            // Even though the response status was 2xx, this is still an error.
                            ok = false;
                            // The parse error contains the text of the body that failed to parse.
                            body = { error: error, text: body };
                        }
                    }
                }
                if (ok) {
                    // A successful response is delivered on the event stream.
                    observer.next(new HttpResponse({
                        body: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    observer.complete();
                }
                else {
                    // An unsuccessful request is delivered on the error channel.
                    observer.error(new HttpErrorResponse({
                        // The error in this case is the response body (error from the server).
                        error: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                }
            };
            // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.
            var onError = function (error) {
                var url = partialFromXhr().url;
                var res = new HttpErrorResponse({
                    error: error,
                    status: xhr.status || 0,
                    statusText: xhr.statusText || 'Unknown Error',
                    url: url || undefined,
                });
                observer.error(res);
            };
            // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.
            var sentHeaders = false;
            // The download progress event handler, which is only registered if
            // progress events are enabled.
            var onDownProgress = function (event) {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                    observer.next(partialFromXhr());
                    sentHeaders = true;
                }
                // Start building the download progress event to deliver on the response
                // event stream.
                var progressEvent = {
                    type: HttpEventType.DownloadProgress,
                    loaded: event.loaded,
                };
                // Set the total number of bytes in the event if it's available.
                if (event.lengthComputable) {
                    progressEvent.total = event.total;
                }
                // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.
                if (req.responseType === 'text' && !!xhr.responseText) {
                    progressEvent.partialText = xhr.responseText;
                }
                // Finally, fire the event.
                observer.next(progressEvent);
            };
            // The upload progress event handler, which is only registered if
            // progress events are enabled.
            var onUpProgress = function (event) {
                // Upload progress events are simpler. Begin building the progress
                // event.
                var progress = {
                    type: HttpEventType.UploadProgress,
                    loaded: event.loaded,
                };
                // If the total number of bytes being uploaded is available, include
                // it.
                if (event.lengthComputable) {
                    progress.total = event.total;
                }
                // Send the event.
                observer.next(progress);
            };
            // By default, register for load and error events.
            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError);
            // Progress events are only enabled if requested.
            if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress);
                // Upload progress depends on whether there is a body to upload.
                if (reqBody !== null && xhr.upload) {
                    xhr.upload.addEventListener('progress', onUpProgress);
                }
            }
            // Fire the request, and notify the event stream that it was fired.
            xhr.send(reqBody);
            observer.next({ type: HttpEventType.Sent });
            // This is the return from the Observable function, which is the
            // request cancellation handler.
            return function () {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('load', onLoad);
                if (req.reportProgress) {
                    xhr.removeEventListener('progress', onDownProgress);
                    if (reqBody !== null && xhr.upload) {
                        xhr.upload.removeEventListener('progress', onUpProgress);
                    }
                }
                // Finally, abort the in-flight request.
                xhr.abort();
            };
        });
    };
    HttpXhrBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [XhrFactory])
    ], HttpXhrBackend);
HttpXhrBackend.ɵfac = function HttpXhrBackend_Factory(t) { return new (t || HttpXhrBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](XhrFactory)); };
HttpXhrBackend.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpXhrBackend, factory: function (t) { return HttpXhrBackend.ɵfac(t); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpXhrBackend, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: XhrFactory }]; }, null); })();
    return HttpXhrBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('XSRF_COOKIE_NAME');
var XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * @publicApi
 */
var HttpXsrfTokenExtractor = /** @class */ (function () {
    function HttpXsrfTokenExtractor() {
    }
    return HttpXsrfTokenExtractor;
}());
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
var HttpXsrfCookieExtractor = /** @class */ (function () {
    function HttpXsrfCookieExtractor(doc, platform, cookieName) {
        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * @internal for testing
         */
        this.parseCount = 0;
    }
    HttpXsrfCookieExtractor.prototype.getToken = function () {
        if (this.platform === 'server') {
            return null;
        }
        var cookieString = this.doc.cookie || '';
        if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵparseCookieValue"])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
        }
        return this.lastToken;
    };
    HttpXsrfCookieExtractor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(XSRF_COOKIE_NAME)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, String, String])
    ], HttpXsrfCookieExtractor);
HttpXsrfCookieExtractor.ɵfac = function HttpXsrfCookieExtractor_Factory(t) { return new (t || HttpXsrfCookieExtractor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](XSRF_COOKIE_NAME)); };
HttpXsrfCookieExtractor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpXsrfCookieExtractor, factory: function (t) { return HttpXsrfCookieExtractor.ɵfac(t); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpXsrfCookieExtractor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [XSRF_COOKIE_NAME]
            }] }]; }, null); })();
    return HttpXsrfCookieExtractor;
}());
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
var HttpXsrfInterceptor = /** @class */ (function () {
    function HttpXsrfInterceptor(tokenService, headerName) {
        this.tokenService = tokenService;
        this.headerName = headerName;
    }
    HttpXsrfInterceptor.prototype.intercept = function (req, next) {
        var lcUrl = req.url.toLowerCase();
        // Skip both non-mutating requests and absolute URLs.
        // Non-mutating requests don't require a token, and absolute URLs require special handling
        // anyway as the cookie set
        // on our origin is not the same as the token expected by another origin.
        if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
            lcUrl.startsWith('https://')) {
            return next.handle(req);
        }
        var token = this.tokenService.getToken();
        // Be careful not to overwrite an existing header of the same name.
        if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({ headers: req.headers.set(this.headerName, token) });
        }
        return next.handle(req);
    };
    HttpXsrfInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(XSRF_HEADER_NAME)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [HttpXsrfTokenExtractor, String])
    ], HttpXsrfInterceptor);
HttpXsrfInterceptor.ɵfac = function HttpXsrfInterceptor_Factory(t) { return new (t || HttpXsrfInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HttpXsrfTokenExtractor), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](XSRF_HEADER_NAME)); };
HttpXsrfInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpXsrfInterceptor, factory: function (t) { return HttpXsrfInterceptor.ɵfac(t); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpXsrfInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: HttpXsrfTokenExtractor }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [XSRF_HEADER_NAME]
            }] }]; }, null); })();
    return HttpXsrfInterceptor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An injectable `HttpHandler` that applies multiple interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 * @see `HttpInterceptor`
 */
var HttpInterceptingHandler = /** @class */ (function () {
    function HttpInterceptingHandler(backend, injector) {
        this.backend = backend;
        this.injector = injector;
        this.chain = null;
    }
    HttpInterceptingHandler.prototype.handle = function (req) {
        if (this.chain === null) {
            var interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            this.chain = interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }, this.backend);
        }
        return this.chain.handle(req);
    };
    HttpInterceptingHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [HttpBackend, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], HttpInterceptingHandler);
HttpInterceptingHandler.ɵfac = function HttpInterceptingHandler_Factory(t) { return new (t || HttpInterceptingHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
HttpInterceptingHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpInterceptingHandler, factory: function (t) { return HttpInterceptingHandler.ɵfac(t); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpInterceptingHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: HttpBackend }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }]; }, null); })();
    return HttpInterceptingHandler;
}());
/**
 * Constructs an `HttpHandler` that applies interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * Use as a factory function within `HttpClientModule`.
 *
 *
 */
function interceptingHandler(backend, interceptors) {
    if (interceptors === void 0) { interceptors = []; }
    if (!interceptors) {
        return backend;
    }
    return interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }, backend);
}
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 */
function jsonpCallbackContext() {
    if (typeof window === 'object') {
        return window;
    }
    return {};
}
/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * @publicApi
 */
var HttpClientXsrfModule = /** @class */ (function () {
    function HttpClientXsrfModule() {
    }
    HttpClientXsrfModule_1 = HttpClientXsrfModule;
    /**
     * Disable the default XSRF protection.
     */
    HttpClientXsrfModule.disable = function () {
        return {
            ngModule: HttpClientXsrfModule_1,
            providers: [
                { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
            ],
        };
    };
    /**
     * Configure XSRF protection.
     * @param options An object that can specify either or both
     * cookie name or header name.
     * - Cookie name default is `XSRF-TOKEN`.
     * - Header name default is `X-XSRF-TOKEN`.
     *
     */
    HttpClientXsrfModule.withOptions = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: HttpClientXsrfModule_1,
            providers: [
                options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
            ],
        };
    };
    var HttpClientXsrfModule_1;
HttpClientXsrfModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HttpClientXsrfModule });
HttpClientXsrfModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HttpClientXsrfModule_Factory(t) { return new (t || HttpClientXsrfModule)(); }, providers: [
        HttpXsrfInterceptor,
        { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
        { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
        { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
        { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
    ] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpClientXsrfModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                providers: [
                    HttpXsrfInterceptor,
                    { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                    { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                    { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                    { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
                ]
            }]
    }], function () { return []; }, null); })();
    return HttpClientXsrfModule;
}());
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
var HttpClientModule = /** @class */ (function () {
    function HttpClientModule() {
    }
HttpClientModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HttpClientModule });
HttpClientModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HttpClientModule_Factory(t) { return new (t || HttpClientModule)(); }, providers: [
        HttpClient,
        { provide: HttpHandler, useClass: HttpInterceptingHandler },
        HttpXhrBackend,
        { provide: HttpBackend, useExisting: HttpXhrBackend },
        BrowserXhr,
        { provide: XhrFactory, useExisting: BrowserXhr },
    ], imports: [[
            HttpClientXsrfModule.withOptions({
                cookieName: 'XSRF-TOKEN',
                headerName: 'X-XSRF-TOKEN'
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HttpClientModule, { imports: [HttpClientXsrfModule] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpClientModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                /**
                 * Optional configuration for XSRF protection.
                 */
                imports: [
                    HttpClientXsrfModule.withOptions({
                        cookieName: 'XSRF-TOKEN',
                        headerName: 'X-XSRF-TOKEN'
                    }),
                ],
                /**
                 * Configures the [dependency injector](guide/glossary#injector) where it is imported
                 * with supporting services for HTTP communications.
                 */
                providers: [
                    HttpClient,
                    { provide: HttpHandler, useClass: HttpInterceptingHandler },
                    HttpXhrBackend,
                    { provide: HttpBackend, useExisting: HttpXhrBackend },
                    BrowserXhr,
                    { provide: XhrFactory, useExisting: BrowserXhr },
                ]
            }]
    }], function () { return []; }, null); })();
    return HttpClientModule;
}());
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
var HttpClientJsonpModule = /** @class */ (function () {
    function HttpClientJsonpModule() {
    }
HttpClientJsonpModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HttpClientJsonpModule });
HttpClientJsonpModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HttpClientJsonpModule_Factory(t) { return new (t || HttpClientJsonpModule)(); }, providers: [
        JsonpClientBackend,
        { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
        { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
    ] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpClientJsonpModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                providers: [
                    JsonpClientBackend,
                    { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                    { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
                ]
            }]
    }], function () { return []; }, null); })();
    return HttpClientJsonpModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=http.js.map

/***/ }),

/***/ "./node_modules/@ks89/angular-modal-gallery/__ivy_ngcc__/fesm5/ks89-angular-modal-gallery.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ks89/angular-modal-gallery/__ivy_ngcc__/fesm5/ks89-angular-modal-gallery.js ***!
  \***************************************************************************************************/
/*! exports provided: GalleryModule, Action, Image, ImageEvent, ImageModalEvent, DescriptionStrategy, ButtonsStrategy, ButtonType, GalleryService, LoadingType, KS_DEFAULT_ACCESSIBILITY_CONFIG, KS_DEFAULT_BTN_FULL_SCREEN, KS_DEFAULT_BTN_CLOSE, KS_DEFAULT_BTN_DELETE, KS_DEFAULT_BTN_DOWNLOAD, KS_DEFAULT_BTN_EXTURL, KS_DEFAULT_SIZE, LineLayout, GridLayout, AdvancedLayout, PlainGalleryStrategy, ɵi, ɵf, ɵn, ɵe, ɵc, ɵh, ɵr, ɵp, ɵd, ɵg, ɵq, ɵo, ɵy, ɵt, ɵz, ɵx, ɵs, ɵv, ɵba, ɵbb, ɵu, ɵw, ɵa, ɵb, ɵm, ɵj, ɵk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryModule", function() { return GalleryModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageEvent", function() { return ImageEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModalEvent", function() { return ImageModalEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionStrategy", function() { return DescriptionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsStrategy", function() { return ButtonsStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonType", function() { return ButtonType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryService", function() { return GalleryService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingType", function() { return LoadingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KS_DEFAULT_ACCESSIBILITY_CONFIG", function() { return KS_DEFAULT_ACCESSIBILITY_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KS_DEFAULT_BTN_FULL_SCREEN", function() { return KS_DEFAULT_BTN_FULL_SCREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KS_DEFAULT_BTN_CLOSE", function() { return KS_DEFAULT_BTN_CLOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KS_DEFAULT_BTN_DELETE", function() { return KS_DEFAULT_BTN_DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KS_DEFAULT_BTN_DOWNLOAD", function() { return KS_DEFAULT_BTN_DOWNLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KS_DEFAULT_BTN_EXTURL", function() { return KS_DEFAULT_BTN_EXTURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KS_DEFAULT_SIZE", function() { return KS_DEFAULT_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineLayout", function() { return LineLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridLayout", function() { return GridLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedLayout", function() { return AdvancedLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlainGalleryStrategy", function() { return PlainGalleryStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return AccessibleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return BackgroundComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return CarouselPreviewsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return CarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return CurrentImageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return LoadingSpinnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return DotsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ModalGalleryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return PlainGalleryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return PreviewsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return UpperButtonsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return ATagBgImageDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return ClickOutsideDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return DescriptionDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return DirectionDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return KeyboardNavigationDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return MarginDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return MaxSizeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return SizeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return WrapDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return KsHammerGestureConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return setupKeyboardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return IdValidatorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return KEYBOARD_CONFIGURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return KeyboardService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/layout.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to close the modal gallery clicking on the semi-transparent background.
 * In fact, it listens for a click on all elements that aren't 'inside' and it emits
 * an event using `\@Output clickOutside`.
 */





function BackgroundComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 1);
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.backgroundTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx_r0.accessibilityConfig == null ? null : ctx_r0.accessibilityConfig.backgroundAriaLabel);
} }
var _c0 = function (a0, a1) { return { width: a0, height: a1 }; };
function CurrentImageComponent_ng_container_4_ng_container_1_img_1_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CurrentImageComponent_ng_container_4_ng_container_1_img_1_Template_img_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r10.onNavigationEvent("left", $event, ctx_r10.clickAction); })("keyup", function CurrentImageComponent_ng_container_4_ng_container_1_img_1_Template_img_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r12.onNavigationEvent("left", $event, ctx_r12.keyboardAction); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var leftPreview_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("alt", leftPreview_r6.modal.alt ? leftPreview_r6.modal.alt : ctx_r7.getAltDescriptionByImage(leftPreview_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", (leftPreview_r6.plain == null ? null : leftPreview_r6.plain.img) ? leftPreview_r6.plain.img : leftPreview_r6.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("hidden", ctx_r7.loading)("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c0, ctx_r7.configSlide.sidePreviews == null ? null : ctx_r7.configSlide.sidePreviews.size.width, ctx_r7.configSlide.sidePreviews == null ? null : ctx_r7.configSlide.sidePreviews.size.height))("title", leftPreview_r6.modal.title ? leftPreview_r6.modal.title : ctx_r7.getDescriptionToDisplay(leftPreview_r6))("tabindex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", leftPreview_r6.modal.ariaLabel);
} }
function CurrentImageComponent_ng_container_4_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 12);
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](1, _c0, ctx_r9.configSlide.sidePreviews == null ? null : ctx_r9.configSlide.sidePreviews.size.width, ctx_r9.configSlide.sidePreviews == null ? null : ctx_r9.configSlide.sidePreviews.size.height));
} }
function CurrentImageComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CurrentImageComponent_ng_container_4_ng_container_1_img_1_Template, 1, 10, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CurrentImageComponent_ng_container_4_ng_container_1_ng_template_2_Template, 1, 4, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r5.isFirstImage)("ngIfElse", _r8);
} }
function CurrentImageComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CurrentImageComponent_ng_container_4_ng_container_1_Template, 4, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.getLeftPreviewImage());
} }
function CurrentImageComponent_figcaption_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "figcaption", 13);
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("description", ctx_r2.configCurrentImage == null ? null : ctx_r2.configCurrentImage.description)("innerHTML", ctx_r2.getDescriptionToDisplay(), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function CurrentImageComponent_ng_container_9_ng_container_1_img_1_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CurrentImageComponent_ng_container_9_ng_container_1_img_1_Template_img_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r19.onNavigationEvent("right", $event, ctx_r19.clickAction); })("keyup", function CurrentImageComponent_ng_container_9_ng_container_1_img_1_Template_img_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r21.onNavigationEvent("right", $event, ctx_r21.keyboardAction); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var rightPreview_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf;
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("alt", rightPreview_r15.modal.alt ? rightPreview_r15.modal.alt : ctx_r16.getAltDescriptionByImage(rightPreview_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", (rightPreview_r15.plain == null ? null : rightPreview_r15.plain.img) ? rightPreview_r15.plain.img : rightPreview_r15.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("hidden", ctx_r16.loading)("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c0, ctx_r16.slideConfig.sidePreviews == null ? null : ctx_r16.slideConfig.sidePreviews.size.width, ctx_r16.slideConfig.sidePreviews == null ? null : ctx_r16.slideConfig.sidePreviews.size.height))("title", rightPreview_r15.modal.title ? rightPreview_r15.modal.title : ctx_r16.getDescriptionToDisplay(rightPreview_r15))("tabindex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", rightPreview_r15.modal.ariaLabel);
} }
function CurrentImageComponent_ng_container_9_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 17);
} if (rf & 2) {
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](1, _c0, ctx_r18.slideConfig.sidePreviews == null ? null : ctx_r18.slideConfig.sidePreviews.size.width, ctx_r18.slideConfig.sidePreviews == null ? null : ctx_r18.slideConfig.sidePreviews.size.height));
} }
function CurrentImageComponent_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CurrentImageComponent_ng_container_9_ng_container_1_img_1_Template, 1, 10, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CurrentImageComponent_ng_container_9_ng_container_1_ng_template_2_Template, 1, 4, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r14.isLastImage)("ngIfElse", _r17);
} }
function CurrentImageComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CurrentImageComponent_ng_container_9_ng_container_1_Template, 4, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.getRightPreviewImage());
} }
function CurrentImageComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ks-loading-spinner", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("loadingConfig", ctx_r4.configCurrentImage == null ? null : ctx_r4.configCurrentImage.loadingConfig)("accessibilityConfig", ctx_r4.accessibilityConfig);
} }
function ModalGalleryComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("clickOutside", function ModalGalleryComponent_div_2_Template_div_clickOutside_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r24.onClickOutside($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ks-upper-buttons", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("delete", function ModalGalleryComponent_div_2_Template_ks_upper_buttons_delete_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r26.onDelete($event); })("navigate", function ModalGalleryComponent_div_2_Template_ks_upper_buttons_navigate_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r27.onNavigate($event); })("download", function ModalGalleryComponent_div_2_Template_ks_upper_buttons_download_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r28.onDownload($event); })("close", function ModalGalleryComponent_div_2_Template_ks_upper_buttons_close_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r29.onCloseGallery($event); })("fullscreen", function ModalGalleryComponent_div_2_Template_ks_upper_buttons_fullscreen_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r30.onFullScreen($event); })("customEmit", function ModalGalleryComponent_div_2_Template_ks_upper_buttons_customEmit_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r31.onCustomEmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ks-current-image", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("loadImage", function ModalGalleryComponent_div_2_Template_ks_current_image_loadImage_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r32.onImageLoad($event); })("changeImage", function ModalGalleryComponent_div_2_Template_ks_current_image_changeImage_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r33.onChangeCurrentImage($event); })("close", function ModalGalleryComponent_div_2_Template_ks_current_image_close_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r34.onCloseGallery($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ks-dots", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("clickDot", function ModalGalleryComponent_div_2_Template_ks_dots_clickDot_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r35.onClickDot($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ks-previews", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("clickPreview", function ModalGalleryComponent_div_2_Template_ks_previews_clickPreview_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r36.onClickPreview($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx_r23.accessibilityConfig.modalGalleryContentTitle)("clickOutsideEnable", ctx_r23.enableCloseOutside);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx_r23.accessibilityConfig.modalGalleryContentAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("currentImage", ctx_r23.currentImage)("buttonsConfig", ctx_r23.buttonsConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", ctx_r23.id)("images", ctx_r23.images)("currentImage", ctx_r23.currentImage)("isOpen", ctx_r23.opened)("slideConfig", ctx_r23.configSlide)("keyboardConfig", ctx_r23.keyboardConfig)("accessibilityConfig", ctx_r23.accessibilityConfig)("currentImageConfig", ctx_r23.currentImageConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("images", ctx_r23.images)("currentImage", ctx_r23.currentImage)("dotsConfig", ctx_r23.dotsConfig)("accessibilityConfig", ctx_r23.accessibilityConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("images", ctx_r23.images)("currentImage", ctx_r23.currentImage)("previewConfig", ctx_r23.previewConfig)("accessibilityConfig", ctx_r23.accessibilityConfig);
} }
function CarouselComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](0);
} }
function CarouselComponent_figure_3_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CarouselComponent_figure_3_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r47); var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r46.onNavigationEvent("left", $event, ctx_r46.clickAction); })("keyup", function CarouselComponent_figure_3_a_1_Template_a_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r47); var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r48.onNavigationEvent("left", $event, ctx_r48.keyboardAction); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tabindex", ctx_r42.isLastImage && !ctx_r42.infinite ? 0 - 1 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx_r42.accessibilityConfig.carouselPrevImageAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("inside ", ctx_r42.isFirstImage && !ctx_r42.infinite || !ctx_r42.configCarousel.showArrows ? "empty-arrow-image" : "left-arrow-image", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx_r42.accessibilityConfig.carouselPrevImageTitle);
} }
function CarouselComponent_figure_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
function CarouselComponent_figure_3_figcaption_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "figcaption", 16);
} if (rf & 2) {
    var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("description", ctx_r44.configCurrentImageCarousel == null ? null : ctx_r44.configCurrentImageCarousel.description)("innerHTML", ctx_r44.getDescriptionToDisplay(), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function CarouselComponent_figure_3_a_5_Template(rf, ctx) { if (rf & 1) {
    var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CarouselComponent_figure_3_a_5_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r50); var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r49.onNavigationEvent("right", $event, ctx_r49.clickAction); })("keyup", function CarouselComponent_figure_3_a_5_Template_a_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r50); var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r51.onNavigationEvent("right", $event, ctx_r51.keyboardAction); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tabindex", ctx_r45.isLastImage && !ctx_r45.infinite ? 0 - 1 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx_r45.accessibilityConfig.carouselNextImageAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("inside ", ctx_r45.isLastImage && !ctx_r45.infinite || !ctx_r45.configCarousel.showArrows ? "empty-arrow-image" : "right-arrow-image", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx_r45.accessibilityConfig.carouselNextImageTitle);
} }
var _c1 = function (a0) { return { width: a0, height: "" }; };
var _c2 = function (a0, a1) { return { maxWidth: a0, maxHeight: a1 }; };
function CarouselComponent_figure_3_Template(rf, ctx) { if (rf & 1) {
    var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "figure", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CarouselComponent_figure_3_a_1_Template, 2, 6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CarouselComponent_figure_3_ng_container_2_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CarouselComponent_figure_3_Template_img_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53); var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r52.onClickCurrentImage(); })("swipeleft", function CarouselComponent_figure_3_Template_img_swipeleft_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53); var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r54.swipe($event.type); })("swiperight", function CarouselComponent_figure_3_Template_img_swiperight_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53); var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r55.swipe($event.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CarouselComponent_figure_3_figcaption_4_Template, 1, 2, "figcaption", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, CarouselComponent_figure_3_a_5_Template, 2, 6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ks-dots", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("clickDot", function CarouselComponent_figure_3_Template_ks_dots_clickDot_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r53); var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r56.onClickDot($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](17, _c1, ctx_r39.configCarousel == null ? null : ctx_r39.configCarousel.maxWidth));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r39.configCarousel == null ? null : ctx_r39.configCarousel.showArrows);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("object-fit", ctx_r39.configCarousel == null ? null : ctx_r39.configCarousel.objectFit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("alt", ctx_r39.currentImage.modal.alt ? ctx_r39.currentImage.modal.alt : ctx_r39.getAltDescriptionByImage());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](19, _c2, ctx_r39.configCarousel == null ? null : ctx_r39.configCarousel.maxWidth, ctx_r39.configCarousel == null ? null : ctx_r39.configCarousel.maxHeight))("src", ctx_r39.currentImage.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("title", ctx_r39.currentImage.modal.title ? ctx_r39.currentImage.modal.title : ctx_r39.getTitleToDisplay())("tabindex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx_r39.currentImage.modal.ariaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r39.getDescriptionToDisplay() !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r39.configCarousel == null ? null : ctx_r39.configCarousel.showArrows);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("currentImage", ctx_r39.currentImage)("dotsConfig", ctx_r39.configDots)("accessibilityConfig", ctx_r39.accessibilityConfig)("images", ctx_r39.images);
} }
function CarouselComponent_ng_template_4_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CarouselComponent_ng_template_4_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r62); var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r61.onNavigationEvent("left", $event, ctx_r61.clickAction); })("keyup", function CarouselComponent_ng_template_4_a_1_Template_a_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r62); var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r63.onNavigationEvent("left", $event, ctx_r63.keyboardAction); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tabindex", ctx_r57.isLastImage && !ctx_r57.infinite ? 0 - 1 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx_r57.accessibilityConfig.carouselNextImageAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("inside ", ctx_r57.isFirstImage && !ctx_r57.infinite || !ctx_r57.configCarousel.showArrows ? "empty-arrow-image" : "left-arrow-image", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx_r57.accessibilityConfig.carouselNextImageTitle);
} }
function CarouselComponent_ng_template_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
function CarouselComponent_ng_template_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 21);
} if (rf & 2) {
    var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("description", ctx_r59.configCurrentImageCarousel == null ? null : ctx_r59.configCurrentImageCarousel.description)("innerHTML", ctx_r59.getDescriptionToDisplay(), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function CarouselComponent_ng_template_4_a_5_Template(rf, ctx) { if (rf & 1) {
    var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CarouselComponent_ng_template_4_a_5_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r65); var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r64.onNavigationEvent("right", $event, ctx_r64.clickAction); })("keyup", function CarouselComponent_ng_template_4_a_5_Template_a_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r65); var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r66.onNavigationEvent("right", $event, ctx_r66.keyboardAction); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tabindex", ctx_r60.isLastImage && !ctx_r60.infinite ? 0 - 1 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx_r60.accessibilityConfig.carouselNextImageAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("inside ", ctx_r60.isLastImage && !ctx_r60.infinite || !ctx_r60.configCarousel.showArrows ? "empty-arrow-image" : "right-arrow-image", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx_r60.accessibilityConfig.carouselNextImageTitle);
} }
var _c3 = function (a1) { return { width: "100%", height: a1 }; };
var _c4 = function (a0) { return { maxWidth: a0 }; };
function CarouselComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CarouselComponent_ng_template_4_a_1_Template, 2, 6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CarouselComponent_ng_template_4_ng_container_2_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CarouselComponent_ng_template_4_Template_div_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r68); var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r67.onClickCurrentImage(); })("swipeleft", function CarouselComponent_ng_template_4_Template_div_swipeleft_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r68); var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r69.swipe($event.type); })("swiperight", function CarouselComponent_ng_template_4_Template_div_swiperight_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r68); var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r70.swipe($event.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CarouselComponent_ng_template_4_div_4_Template, 1, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, CarouselComponent_ng_template_4_a_5_Template, 2, 6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ks-dots", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("clickDot", function CarouselComponent_ng_template_4_Template_ks_dots_clickDot_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r68); var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r71.onClickDot($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](26, _c1, ctx_r41.configCarousel == null ? null : ctx_r41.configCarousel.maxWidth));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r41.configCarousel == null ? null : ctx_r41.configCarousel.showArrows);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", "transparent")("background-image", ctx_r41.sanitizeUrlBgStyle(ctx_r41.currentImage.modal.img + ""), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefaultStyleSanitizer"])("background-position", "center center")("background-size", "cover")("background-repeat", "no-repeat")("background-attachment", "scroll");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](28, _c3, ctx_r41.configCarousel == null ? null : ctx_r41.configCarousel.maxHeight))("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](30, _c4, ctx_r41.configCarousel == null ? null : ctx_r41.configCarousel.maxWidth))("title", ctx_r41.currentImage.modal.title ? ctx_r41.currentImage.modal.title : ctx_r41.getTitleToDisplay())("tabindex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx_r41.currentImage.modal.ariaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r41.getDescriptionToDisplay() !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r41.configCarousel == null ? null : ctx_r41.configCarousel.showArrows);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("currentImage", ctx_r41.currentImage)("dotsConfig", ctx_r41.configDots)("accessibilityConfig", ctx_r41.accessibilityConfig)("images", ctx_r41.images);
} }
var _c5 = function (a0) { return { maxWidth: a0, maxHeight: "" }; };
var _c6 = ["*"];
function CarouselPreviewsComponent_nav_0_ng_container_4_ng_container_1_img_1_Template(rf, ctx) { if (rf & 1) {
    var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CarouselPreviewsComponent_nav_0_ng_container_4_ng_container_1_img_1_Template_img_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r82); var preview_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit; var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r80.onImageEvent(preview_r74, $event, ctx_r80.clickAction); })("keyup", function CarouselPreviewsComponent_nav_0_ng_container_4_ng_container_1_img_1_Template_img_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r82); var preview_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit; var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r83.onImageEvent(preview_r74, $event, ctx_r83.keyboardAction); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var preview_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate2"]("inside preview-image", ctx_r79.isActive(preview_r74) ? " active" : "", "", !ctx_r79.configPreview.clickable ? " unclickable" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("alt", ctx_r79.getAlt(preview_r74));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", (preview_r74.plain == null ? null : preview_r74.plain.img) ? preview_r74.plain.img : preview_r74.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](10, _c0, ctx_r79.configPreview == null ? null : ctx_r79.configPreview.width, ctx_r79.configPreview == null ? null : ctx_r79.configPreview.maxHeight))("title", ctx_r79.getTitle(preview_r74))("tabindex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx_r79.getAriaLabel(preview_r74));
} }
function CarouselPreviewsComponent_nav_0_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CarouselPreviewsComponent_nav_0_ng_container_4_ng_container_1_img_1_Template, 1, 13, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var preview_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", preview_r74 == null ? null : preview_r74.modal == null ? null : preview_r74.modal.img);
} }
function CarouselPreviewsComponent_nav_0_ng_container_4_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CarouselPreviewsComponent_nav_0_ng_container_4_ng_template_2_div_0_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r90); var preview_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit; var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r88.onImageEvent(preview_r74, $event, ctx_r88.clickAction); })("keyup", function CarouselPreviewsComponent_nav_0_ng_container_4_ng_template_2_div_0_Template_div_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r90); var preview_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit; var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r91.onImageEvent(preview_r74, $event, ctx_r91.keyboardAction); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var preview_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate2"]("inside preview-ie11-image", ctx_r87.isActive(preview_r74) ? " active" : "", "", !ctx_r87.configPreview.clickable ? " unclickable" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", "transparent")("background-image", ctx_r87.sanitizeUrlBgStyle((preview_r74.plain == null ? null : preview_r74.plain.img) ? preview_r74.plain.img : preview_r74.modal.img), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefaultStyleSanitizer"])("background-position", "center center")("background-size", ctx_r87.getIE11LegacyBgSize())("background-repeat", "no-repeat")("background-attachment", "scroll");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](20, _c0, ctx_r87.configPreview == null ? null : ctx_r87.configPreview.width, ctx_r87.configPreview == null ? null : ctx_r87.configPreview.maxHeight))("title", ctx_r87.getTitle(preview_r74))("tabindex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx_r87.getAriaLabel(preview_r74));
} }
function CarouselPreviewsComponent_nav_0_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CarouselPreviewsComponent_nav_0_ng_container_4_ng_template_2_div_0_Template, 1, 23, "div", 11);
} if (rf & 2) {
    var preview_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", preview_r74 == null ? null : preview_r74.modal == null ? null : preview_r74.modal.img);
} }
function CarouselPreviewsComponent_nav_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CarouselPreviewsComponent_nav_0_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CarouselPreviewsComponent_nav_0_ng_container_4_ng_template_2_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx_r73.carouselConfig == null ? null : ctx_r73.carouselConfig.legacyIE11Mode))("ngIfElse", _r77);
} }
function CarouselPreviewsComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CarouselPreviewsComponent_nav_0_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r96); var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r95.onNavigationEvent("left", $event); })("keyup", function CarouselPreviewsComponent_nav_0_Template_a_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r96); var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r97.onNavigationEvent("left", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CarouselPreviewsComponent_nav_0_ng_container_4_Template, 4, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CarouselPreviewsComponent_nav_0_Template_a_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r96); var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r98.onNavigationEvent("right", $event); })("keyup", function CarouselPreviewsComponent_nav_0_Template_a_keyup_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r96); var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r99.onNavigationEvent("right", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx_r72.accessibilityConfig == null ? null : ctx_r72.accessibilityConfig.carouselPreviewsContainerTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx_r72.accessibilityConfig == null ? null : ctx_r72.accessibilityConfig.carouselPreviewsContainerAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tabindex", ctx_r72.configPreview.arrows && ctx_r72.start > 0 ? 0 : 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx_r72.accessibilityConfig == null ? null : ctx_r72.accessibilityConfig.carouselPreviewScrollPrevAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("inside ", ctx_r72.configPreview.arrows && ctx_r72.start > 0 ? "left-arrow-preview-image" : "empty-arrow-preview-image", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx_r72.accessibilityConfig == null ? null : ctx_r72.accessibilityConfig.carouselPreviewScrollPrevTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r72.previews)("ngForTrackBy", ctx_r72.trackById);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tabindex", ctx_r72.configPreview.arrows && ctx_r72.end < ctx_r72.images.length ? 0 : 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx_r72.accessibilityConfig == null ? null : ctx_r72.accessibilityConfig.carouselPreviewScrollNextAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("inside ", ctx_r72.configPreview.arrows && ctx_r72.end < ctx_r72.images.length ? "right-arrow-preview-image" : "empty-arrow-preview-image", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx_r72.accessibilityConfig == null ? null : ctx_r72.accessibilityConfig.carouselPreviewScrollNextTitle);
} }
var _c7 = function (a0) { return { "font-size": a0 }; };
function UpperButtonsComponent_ng_container_1_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UpperButtonsComponent_ng_container_1_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r105); var btn_r102 = ctx.$implicit; var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r104.onEvent(btn_r102, $event); })("keyup", function UpperButtonsComponent_ng_container_1_a_1_Template_a_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r105); var btn_r102 = ctx.$implicit; var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r106.onEvent(btn_r102, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var btn_r102 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](8, _c0, btn_r102.size == null ? null : btn_r102.size.width, btn_r102.size == null ? null : btn_r102.size.height))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](11, _c7, btn_r102.fontSize))("tabindex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", btn_r102.ariaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("inside ", btn_r102.className, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", btn_r102.title);
} }
function UpperButtonsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UpperButtonsComponent_ng_container_1_a_1_Template, 2, 13, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r100.buttons)("ngForTrackBy", ctx_r100.trackById);
} }
var _c8 = function (a0) { return { "active": a0 }; };
function DotsComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DotsComponent_ng_container_1_div_1_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r112); var index_r110 = ctx.index; var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r111.onDotEvent(index_r110, $event); })("keyup", function DotsComponent_ng_container_1_div_1_Template_div_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r112); var index_r110 = ctx.index; var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r113.onDotEvent(index_r110, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var index_r110 = ctx.index;
    var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c8, ctx_r108.isActive(index_r110)))("tabindex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", (ctx_r108.accessibilityConfig == null ? null : ctx_r108.accessibilityConfig.dotAriaLabel) + " " + (index_r110 + 1));
} }
function DotsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DotsComponent_ng_container_1_div_1_Template, 1, 5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r107.images)("ngForTrackBy", ctx_r107.trackById);
} }
function PreviewsComponent_ng_container_1_ng_container_3_img_1_Template(rf, ctx) { if (rf & 1) {
    var _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PreviewsComponent_ng_container_1_ng_container_3_img_1_Template_img_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r121); var preview_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r119.onImageEvent(preview_r116, $event, ctx_r119.clickAction); })("keyup", function PreviewsComponent_ng_container_1_ng_container_3_img_1_Template_img_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r121); var preview_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r122.onImageEvent(preview_r116, $event, ctx_r122.keyboardAction); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var preview_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate2"]("inside preview-image ", ctx_r118.isActive(preview_r116) ? "active" : "", "", !ctx_r118.configPreview.clickable ? " unclickable" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("alt", preview_r116.modal.alt ? preview_r116.modal.alt : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", (preview_r116.plain == null ? null : preview_r116.plain.img) ? preview_r116.plain.img : preview_r116.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](10, _c0, ctx_r118.configPreview.size ? ctx_r118.configPreview.size.width : ctx_r118.defaultPreviewSize.width, ctx_r118.configPreview.size ? ctx_r118.configPreview.size.height : ctx_r118.defaultPreviewSize.height))("title", preview_r116.modal.title ? preview_r116.modal.title : "")("tabindex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", preview_r116.modal.ariaLabel ? preview_r116.modal.ariaLabel : "");
} }
function PreviewsComponent_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PreviewsComponent_ng_container_1_ng_container_3_img_1_Template, 1, 13, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var preview_r116 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", preview_r116 == null ? null : preview_r116.modal == null ? null : preview_r116.modal.img);
} }
function PreviewsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    var _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PreviewsComponent_ng_container_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r126); var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r125.onNavigationEvent("left", $event); })("keyup", function PreviewsComponent_ng_container_1_Template_a_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r126); var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r127.onNavigationEvent("left", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PreviewsComponent_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PreviewsComponent_ng_container_1_Template_a_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r126); var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r128.onNavigationEvent("right", $event); })("keyup", function PreviewsComponent_ng_container_1_Template_a_keyup_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r126); var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r129.onNavigationEvent("right", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tabindex", ctx_r114.configPreview.arrows && ctx_r114.start > 0 ? 0 : 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx_r114.accessibilityConfig == null ? null : ctx_r114.accessibilityConfig.previewScrollPrevAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("inside ", ctx_r114.configPreview.arrows && ctx_r114.start > 0 ? "left-arrow-preview-image" : "empty-arrow-preview-image", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx_r114.accessibilityConfig == null ? null : ctx_r114.accessibilityConfig.previewScrollPrevTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r114.previews)("ngForTrackBy", ctx_r114.trackById);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tabindex", ctx_r114.configPreview.arrows && ctx_r114.end < ctx_r114.images.length ? 0 : 0 - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx_r114.accessibilityConfig == null ? null : ctx_r114.accessibilityConfig.previewScrollNextAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("inside ", ctx_r114.configPreview.arrows && ctx_r114.end < ctx_r114.images.length ? "right-arrow-preview-image" : "empty-arrow-preview-image", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx_r114.accessibilityConfig == null ? null : ctx_r114.accessibilityConfig.previewScrollNextTitle);
} }
function LoadingSpinnerComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function LoadingSpinnerComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function LoadingSpinnerComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function LoadingSpinnerComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function LoadingSpinnerComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function LoadingSpinnerComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function LoadingSpinnerComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function PlainGalleryComponent_div_0_ng_container_1_ng_container_1_ng_container_1_img_1_Template(rf, ctx) { if (rf & 1) {
    var _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PlainGalleryComponent_div_0_ng_container_1_ng_container_1_ng_container_1_img_1_Template_img_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r150); var imgCol_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit; var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r148.showModalGalleryByImage(imgCol_r142); })("keyup", function PlainGalleryComponent_div_0_ng_container_1_ng_container_1_ng_container_1_img_1_Template_img_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r150); var imgCol_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit; var ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r151.showModalGalleryByImage(imgCol_r142); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var imgCol_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("alt", (imgCol_r142.plain == null ? null : imgCol_r142.plain.alt) ? imgCol_r142.plain.alt : ctx_r147.getAltPlainDescriptionByImage(imgCol_r142));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", (imgCol_r142.plain == null ? null : imgCol_r142.plain.img) ? imgCol_r142.plain.img : imgCol_r142.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](6, _c0, ctx_r147.size == null ? null : ctx_r147.size.width, ctx_r147.size == null ? null : ctx_r147.size.height))("title", (imgCol_r142.plain == null ? null : imgCol_r142.plain.title) ? imgCol_r142.plain.title : ctx_r147.getTitleDisplay(imgCol_r142))("tabindex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", imgCol_r142.plain == null ? null : imgCol_r142.plain.ariaLabel);
} }
function PlainGalleryComponent_div_0_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PlainGalleryComponent_div_0_ng_container_1_ng_container_1_ng_container_1_img_1_Template, 1, 9, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var imgCol_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", imgCol_r142 == null ? null : imgCol_r142.modal == null ? null : imgCol_r142.modal.img);
} }
function PlainGalleryComponent_div_0_ng_container_1_ng_container_1_ng_template_2_a_0_Template(rf, ctx) { if (rf & 1) {
    var _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PlainGalleryComponent_div_0_ng_container_1_ng_container_1_ng_template_2_a_0_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r158); var j_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).index; var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r156.showModalGallery(j_r143); })("keyup", function PlainGalleryComponent_div_0_ng_container_1_ng_container_1_ng_template_2_a_0_Template_a_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r158); var j_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).index; var ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r159.showModalGallery(j_r143); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var imgCol_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    var ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](ctx_r155.configPlainGallery.advanced == null ? null : ctx_r155.configPlainGallery.advanced.additionalBackground, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("image", imgCol_r142)("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c0, ctx_r155.size == null ? null : ctx_r155.size.width, ctx_r155.size == null ? null : ctx_r155.size.height))("title", (imgCol_r142.plain == null ? null : imgCol_r142.plain.title) ? imgCol_r142.plain.title : ctx_r155.getTitleDisplay(imgCol_r142))("tabindex", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", imgCol_r142.plain == null ? null : imgCol_r142.plain.ariaLabel);
} }
function PlainGalleryComponent_div_0_ng_container_1_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, PlainGalleryComponent_div_0_ng_container_1_ng_container_1_ng_template_2_a_0_Template, 1, 10, "a", 7);
} if (rf & 2) {
    var imgCol_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", imgCol_r142 == null ? null : imgCol_r142.modal == null ? null : imgCol_r142.modal.img);
} }
function PlainGalleryComponent_div_0_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PlainGalleryComponent_div_0_ng_container_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PlainGalleryComponent_div_0_ng_container_1_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx_r141.configPlainGallery.advanced == null ? null : ctx_r141.configPlainGallery.advanced.aTags))("ngIfElse", _r145);
} }
function PlainGalleryComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PlainGalleryComponent_div_0_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var imgRow_r139 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", imgRow_r139);
} }
function PlainGalleryComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PlainGalleryComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("wrap", ctx_r137.wrapStyle)("width", ctx_r137.widthStyle)("direction", ctx_r137.directionStyle)("justify", ctx_r137.justifyStyle)("title", ctx_r137.accessibilityConfig == null ? null : ctx_r137.accessibilityConfig.plainGalleryContentTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx_r137.accessibilityConfig == null ? null : ctx_r137.accessibilityConfig.plainGalleryContentAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r137.imageGrid);
} }
var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective() {
        /**
         * Output to emit an event if the clicked element class doesn't contain 'inside' or it is 'hidden'. The payload is a boolean.
         */
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
    }
    /**
     * Method called by Angular itself every click thanks to `@HostListener`.
     * @param MouseEvent event payload received evey click
     */
    /**
     * Method called by Angular itself every click thanks to `\@HostListener`.
     * @param {?} event
     * @return {?}
     */
    ClickOutsideDirective.prototype.onClick = /**
     * Method called by Angular itself every click thanks to `\@HostListener`.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        /** @type {?} */
        var targetElement = event.target;
        if (!this.clickOutsideEnable || !targetElement) {
            return;
        }
        /** @type {?} */
        var isInside = false;
        /** @type {?} */
        var isHidden = false;
        if (typeof targetElement.className !== 'string') {
            // it happens with @fortawesome/fontawesome 5
            // for some reasons className is an object with 2 empty properties inside
            isInside = true;
        }
        else {
            // in normal scenarios, use classname, because it's a simple string
            isInside = targetElement.className && targetElement.className.startsWith('inside');
            isHidden = targetElement.className.includes('hidden');
        }
        // if inside => don't close modal gallery
        // if hidden => close modal gallery
        /*
            i i' h | close
            0 1  0 |   1 => close modal gallery
            0 1  1 |   1 => close modal gallery
            1 0  0 |   0
            1 0  1 |   1 => close modal gallery
         */
        if (!isInside || isHidden) {
            // close modal gallery
            this.clickOutside.emit(true);
        }
    };
    ClickOutsideDirective.propDecorators = {
        clickOutsideEnable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        clickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"], args: ['click', ['$event'],] }]
    };
ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) { return new (t || ClickOutsideDirective)(); };
ClickOutsideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: ClickOutsideDirective, selectors: [["", "ksClickOutside", ""]], hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { clickOutsideEnable: "clickOutsideEnable" }, outputs: { clickOutside: "clickOutside" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](ClickOutsideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
                selector: '[ksClickOutside]'
            }]
    }], function () { return []; }, { clickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
            args: ['click', ['$event']]
        }], clickOutsideEnable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }] }); })();
    return ClickOutsideDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to change the size of an element.
 */
var SizeDirective = /** @class */ (function () {
    function SizeDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     */
    /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    SizeDirective.prototype.ngOnInit = /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    function () {
        this.applyStyle();
    };
    /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     */
    /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @return {?}
     */
    SizeDirective.prototype.ngOnChanges = /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @return {?}
     */
    function () {
        this.applyStyle();
    };
    /**
     * Private method to change both width and height of an element.
     */
    /**
     * Private method to change both width and height of an element.
     * @private
     * @return {?}
     */
    SizeDirective.prototype.applyStyle = /**
     * Private method to change both width and height of an element.
     * @private
     * @return {?}
     */
    function () {
        if (!this.sizeConfig) {
            return;
        }
        // apply [style.width]
        this.renderer.setStyle(this.el.nativeElement, 'width', this.sizeConfig.width);
        this.renderer.setStyle(this.el.nativeElement, 'height', this.sizeConfig.height);
    };
    /** @nocollapse */
    SizeDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }
    ]; };
    SizeDirective.propDecorators = {
        sizeConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }]
    };
SizeDirective.ɵfac = function SizeDirective_Factory(t) { return new (t || SizeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])); };
SizeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: SizeDirective, selectors: [["", "ksSize", ""]], inputs: { sizeConfig: "sizeConfig" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]()] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](SizeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
                selector: '[ksSize]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }]; }, { sizeConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }] }); })();
    return SizeDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KeyboardNavigationDirective = /** @class */ (function () {
    function KeyboardNavigationDirective() {
        this.keyPress = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
    }
    /**
     * Listener to catch keyboard's events and call the right method based on the key.
     * For instance, pressing esc, this will call `closeGallery(Action.KEYBOARD)` and so on.
     * If you passed a valid `keyboardConfig` esc, right and left buttons will be customized based on your data.
     * @param e KeyboardEvent caught by the listener.
     */
    /**
     * Listener to catch keyboard's events and call the right method based on the key.
     * For instance, pressing esc, this will call `closeGallery(Action.KEYBOARD)` and so on.
     * If you passed a valid `keyboardConfig` esc, right and left buttons will be customized based on your data.
     * @param {?} e KeyboardEvent caught by the listener.
     * @return {?}
     */
    KeyboardNavigationDirective.prototype.onKeyDown = /**
     * Listener to catch keyboard's events and call the right method based on the key.
     * For instance, pressing esc, this will call `closeGallery(Action.KEYBOARD)` and so on.
     * If you passed a valid `keyboardConfig` esc, right and left buttons will be customized based on your data.
     * @param {?} e KeyboardEvent caught by the listener.
     * @return {?}
     */
    function (e) {
        if (!this.isOpen) {
            return;
        }
        this.keyPress.emit(e.keyCode);
    };
    KeyboardNavigationDirective.propDecorators = {
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        keyPress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"], args: ['window:keydown', ['$event'],] }]
    };
KeyboardNavigationDirective.ɵfac = function KeyboardNavigationDirective_Factory(t) { return new (t || KeyboardNavigationDirective)(); };
KeyboardNavigationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: KeyboardNavigationDirective, selectors: [["", "ksKeyboardNavigation", ""]], hostBindings: function KeyboardNavigationDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown", function KeyboardNavigationDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
    } }, inputs: { isOpen: "isOpen" }, outputs: { keyPress: "keyPress" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](KeyboardNavigationDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
                selector: '[ksKeyboardNavigation]'
            }]
    }], function () { return []; }, { keyPress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
            args: ['window:keydown', ['$event']]
        }], isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }] }); })();
    return KeyboardNavigationDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to change the flex-wrap css property of an element.
 */
var WrapDirective = /** @class */ (function () {
    function WrapDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     */
    /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    WrapDirective.prototype.ngOnInit = /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    function () {
        this.applyStyle();
    };
    /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     */
    /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @return {?}
     */
    WrapDirective.prototype.ngOnChanges = /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @return {?}
     */
    function () {
        this.applyStyle();
    };
    /**
     * Private method to change both widht and flex-wrap css properties.
     */
    /**
     * Private method to change both widht and flex-wrap css properties.
     * @private
     * @return {?}
     */
    WrapDirective.prototype.applyStyle = /**
     * Private method to change both widht and flex-wrap css properties.
     * @private
     * @return {?}
     */
    function () {
        // TODO is this right???? If wrap os false I cannot apply width and flex-wrap
        if (!this.wrap) {
            return;
        }
        this.renderer.setStyle(this.el.nativeElement, 'width', this.width);
        this.renderer.setStyle(this.el.nativeElement, 'flex-wrap', this.wrap ? 'wrap' : 'nowrap');
    };
    /** @nocollapse */
    WrapDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }
    ]; };
    WrapDirective.propDecorators = {
        wrap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }]
    };
WrapDirective.ɵfac = function WrapDirective_Factory(t) { return new (t || WrapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])); };
WrapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: WrapDirective, selectors: [["", "ksWrap", ""]], inputs: { wrap: "wrap", width: "width" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]()] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](WrapDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
                selector: '[ksWrap]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }]; }, { wrap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }] }); })();
    return WrapDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to change the flex-direction of an element, based on two inputs (`direction` and `justify`).
 */
var DirectionDirective = /** @class */ (function () {
    function DirectionDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     */
    /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    DirectionDirective.prototype.ngOnInit = /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    function () {
        this.applyStyle();
    };
    /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     */
    /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @return {?}
     */
    DirectionDirective.prototype.ngOnChanges = /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @return {?}
     */
    function () {
        this.applyStyle();
    };
    /**
     * Private method to change both direction and justify of an element.
     */
    /**
     * Private method to change both direction and justify of an element.
     * @private
     * @return {?}
     */
    DirectionDirective.prototype.applyStyle = /**
     * Private method to change both direction and justify of an element.
     * @private
     * @return {?}
     */
    function () {
        if (!this.direction || !this.justify) {
            return;
        }
        this.renderer.setStyle(this.el.nativeElement, 'flex-direction', this.direction);
        this.renderer.setStyle(this.el.nativeElement, 'justify-content', this.justify);
    };
    /** @nocollapse */
    DirectionDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }
    ]; };
    DirectionDirective.propDecorators = {
        direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        justify: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }]
    };
DirectionDirective.ɵfac = function DirectionDirective_Factory(t) { return new (t || DirectionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])); };
DirectionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: DirectionDirective, selectors: [["", "ksDirection", ""]], inputs: { direction: "direction", justify: "justify" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]()] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](DirectionDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
                selector: '[ksDirection]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }]; }, { direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], justify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }] }); })();
    return DirectionDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 The MIT License (MIT)

 Copyright (c) 2017-2018 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Class `Image` that represents an image with both `modal` and `plain` configurations.
 * Both image `id` and `modal` are mandatory, instead `plain` is optional.
 */
var  /**
 * Class `Image` that represents an image with both `modal` and `plain` configurations.
 * Both image `id` and `modal` are mandatory, instead `plain` is optional.
 */
Image = /** @class */ (function () {
    function Image(id, modal, plain) {
        this.id = id;
        this.modal = modal;
        this.plain = plain;
    }
    return Image;
}());
/**
 * Class `ImageEvent` that represents the event payload with the result and the triggered action.
 */
var  /**
 * Class `ImageEvent` that represents the event payload with the result and the triggered action.
 */
ImageEvent = /** @class */ (function () {
    function ImageEvent(action, result) {
        this.action = action;
        this.result = result;
    }
    return ImageEvent;
}());
/**
 * Class `ImageModalEvent` that represents the event payload with the result and the triggered action.
 */
var  /**
 * Class `ImageModalEvent` that represents the event payload with the result and the triggered action.
 */
ImageModalEvent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(ImageModalEvent, _super);
    function ImageModalEvent(action, result) {
        return _super.call(this, action, result) || this;
    }
    return ImageModalEvent;
}(ImageEvent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to add an image to an `<a>` tag with some additional custom properties.
 */
var ATagBgImageDirective = /** @class */ (function () {
    function ATagBgImageDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     */
    /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    ATagBgImageDirective.prototype.ngOnInit = /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    function () {
        this.applyStyle();
    };
    /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     */
    /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @return {?}
     */
    ATagBgImageDirective.prototype.ngOnChanges = /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @return {?}
     */
    function () {
        this.applyStyle();
    };
    /**
     * Private method to add an image as background of an `<a>` tag.
     */
    /**
     * Private method to add an image as background of an `<a>` tag.
     * @private
     * @return {?}
     */
    ATagBgImageDirective.prototype.applyStyle = /**
     * Private method to add an image as background of an `<a>` tag.
     * @private
     * @return {?}
     */
    function () {
        if (!this.image || (!this.image.plain && !this.image.modal)) {
            return;
        }
        /** @type {?} */
        var imgPath = this.image.plain && this.image.plain.img ? this.image.plain.img : this.image.modal.img;
        this.renderer.setStyle(this.el.nativeElement, 'background', "url(\"" + imgPath + "\") " + this.style);
    };
    /** @nocollapse */
    ATagBgImageDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }
    ]; };
    ATagBgImageDirective.propDecorators = {
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }]
    };
ATagBgImageDirective.ɵfac = function ATagBgImageDirective_Factory(t) { return new (t || ATagBgImageDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])); };
ATagBgImageDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: ATagBgImageDirective, selectors: [["", "ksATagBgImage", ""]], inputs: { image: "image", style: "style" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]()] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](ATagBgImageDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
                selector: '[ksATagBgImage]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }]; }, { image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }] }); })();
    return ATagBgImageDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to customize the description.
 */
var DescriptionDirective = /** @class */ (function () {
    function DescriptionDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     */
    /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    DescriptionDirective.prototype.ngOnInit = /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    function () {
        this.applyStyle();
    };
    /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     */
    /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @return {?}
     */
    DescriptionDirective.prototype.ngOnChanges = /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @return {?}
     */
    function () {
        this.applyStyle();
    };
    /**
     * Private method to change description's style.
     */
    /**
     * Private method to change description's style.
     * @private
     * @return {?}
     */
    DescriptionDirective.prototype.applyStyle = /**
     * Private method to change description's style.
     * @private
     * @return {?}
     */
    function () {
        if (!this.description) {
            return;
        }
        if (this.description.style) {
            this.renderer.setStyle(this.el.nativeElement, 'background', this.description.style.bgColor);
            this.renderer.setStyle(this.el.nativeElement, 'color', this.description.style.textColor);
            if (this.description.style.width) {
                this.renderer.setStyle(this.el.nativeElement, 'width', this.description.style.width);
            }
            if (this.description.style.height) {
                this.renderer.setStyle(this.el.nativeElement, 'height', this.description.style.height);
            }
            if (this.description.style.position) {
                this.renderer.setStyle(this.el.nativeElement, 'position', this.description.style.position);
            }
            if (this.description.style.top) {
                this.renderer.setStyle(this.el.nativeElement, 'top', this.description.style.top);
            }
            if (this.description.style.bottom) {
                this.renderer.setStyle(this.el.nativeElement, 'bottom', this.description.style.bottom);
            }
            if (this.description.style.left) {
                this.renderer.setStyle(this.el.nativeElement, 'left', this.description.style.left);
            }
            if (this.description.style.right) {
                this.renderer.setStyle(this.el.nativeElement, 'right', this.description.style.right);
            }
            this.renderer.setStyle(this.el.nativeElement, 'margin-top', this.description.style.marginTop ? this.description.style.marginTop : '0px');
            this.renderer.setStyle(this.el.nativeElement, 'margin-bottom', this.description.style.marginBottom ? this.description.style.marginBottom : '0px');
            this.renderer.setStyle(this.el.nativeElement, 'margin-left', this.description.style.marginLeft ? this.description.style.marginLeft : '0px');
            this.renderer.setStyle(this.el.nativeElement, 'margin-right', this.description.style.marginRight ? this.description.style.marginRight : '0px');
        }
    };
    /** @nocollapse */
    DescriptionDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }
    ]; };
    DescriptionDirective.propDecorators = {
        description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }]
    };
DescriptionDirective.ɵfac = function DescriptionDirective_Factory(t) { return new (t || DescriptionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])); };
DescriptionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: DescriptionDirective, selectors: [["", "ksDescription", ""]], inputs: { description: "description" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]()] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](DescriptionDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
                selector: '[ksDescription]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }]; }, { description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }] }); })();
    return DescriptionDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to change margins of an element.
 */
var MarginDirective = /** @class */ (function () {
    function MarginDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     */
    /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    MarginDirective.prototype.ngOnInit = /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    function () {
        this.applyStyle();
    };
    /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     */
    /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @return {?}
     */
    MarginDirective.prototype.ngOnChanges = /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @return {?}
     */
    function () {
        this.applyStyle();
    };
    /**
     * Private method to change both width and height of an element.
     */
    /**
     * Private method to change both width and height of an element.
     * @private
     * @return {?}
     */
    MarginDirective.prototype.applyStyle = /**
     * Private method to change both width and height of an element.
     * @private
     * @return {?}
     */
    function () {
        if (this.marginLeft) {
            this.renderer.setStyle(this.el.nativeElement, 'margin-left', this.marginLeft);
        }
        if (this.marginRight) {
            this.renderer.setStyle(this.el.nativeElement, 'margin-right', this.marginRight);
        }
        if (this.marginTop) {
            this.renderer.setStyle(this.el.nativeElement, 'margin-top', this.marginTop);
        }
        if (this.marginBottom) {
            this.renderer.setStyle(this.el.nativeElement, 'margin-bottom', this.marginBottom);
        }
    };
    /** @nocollapse */
    MarginDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }
    ]; };
    MarginDirective.propDecorators = {
        marginLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        marginRight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        marginTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        marginBottom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }]
    };
MarginDirective.ɵfac = function MarginDirective_Factory(t) { return new (t || MarginDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])); };
MarginDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: MarginDirective, selectors: [["", "ksMargin", ""]], inputs: { marginLeft: "marginLeft", marginRight: "marginRight", marginTop: "marginTop", marginBottom: "marginBottom" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]()] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](MarginDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
                selector: '[ksMargin]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }]; }, { marginLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], marginRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], marginTop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], marginBottom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }] }); })();
    return MarginDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to change the max size of an element.
 */
var MaxSizeDirective = /** @class */ (function () {
    function MaxSizeDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     */
    /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    MaxSizeDirective.prototype.ngOnInit = /**
     * Method ´ngOnInit´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    function () {
        this.applyStyle();
    };
    /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     */
    /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @return {?}
     */
    MaxSizeDirective.prototype.ngOnChanges = /**
     * Method ´ngOnChanges´ to apply the style of this directive.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @return {?}
     */
    function () {
        this.applyStyle();
    };
    /**
     * Private method to change both max-width and max-height of an element.
     */
    /**
     * Private method to change both max-width and max-height of an element.
     * @private
     * @return {?}
     */
    MaxSizeDirective.prototype.applyStyle = /**
     * Private method to change both max-width and max-height of an element.
     * @private
     * @return {?}
     */
    function () {
        if (!this.sizeConfig) {
            return;
        }
        if (this.sizeConfig.maxWidth) {
            this.renderer.setStyle(this.el.nativeElement, 'max-width', this.sizeConfig.maxWidth);
        }
        if (this.sizeConfig.maxHeight) {
            this.renderer.setStyle(this.el.nativeElement, 'max-height', this.sizeConfig.maxHeight);
        }
    };
    /** @nocollapse */
    MaxSizeDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }
    ]; };
    MaxSizeDirective.propDecorators = {
        sizeConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }]
    };
MaxSizeDirective.ɵfac = function MaxSizeDirective_Factory(t) { return new (t || MaxSizeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])); };
MaxSizeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({ type: MaxSizeDirective, selectors: [["", "ksMaxSize", ""]], inputs: { sizeConfig: "sizeConfig" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]()] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](MaxSizeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
        args: [{
                selector: '[ksMaxSize]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }]; }, { sizeConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }] }); })();
    return MaxSizeDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Array of all directives.
 * @type {?}
 */
var DIRECTIVES = [
    ClickOutsideDirective,
    SizeDirective,
    KeyboardNavigationDirective,
    WrapDirective,
    DirectionDirective,
    ATagBgImageDirective,
    DescriptionDirective,
    MarginDirective,
    MaxSizeDirective
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with the semi-transparent background.
 */
var BackgroundComponent = /** @class */ (function () {
    function BackgroundComponent() {
    }
    BackgroundComponent.propDecorators = {
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        accessibilityConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }]
    };
BackgroundComponent.ɵfac = function BackgroundComponent_Factory(t) { return new (t || BackgroundComponent)(); };
BackgroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: BackgroundComponent, selectors: [["ks-background"]], inputs: { isOpen: "isOpen", accessibilityConfig: "accessibilityConfig" }, decls: 1, vars: 1, consts: [["class", "ng-overlay", 3, "title", 4, "ngIf"], [1, "ng-overlay", 3, "title"]], template: function BackgroundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, BackgroundComponent_div_0_Template, 1, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"]], styles: [".ng-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:#000;opacity:.8;z-index:9999}"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](BackgroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'ks-background',
                template: "<div class=\"ng-overlay\" *ngIf=\"isOpen\"\n     [attr.aria-label]=\"accessibilityConfig?.backgroundAriaLabel\"\n     [title]=\"accessibilityConfig?.backgroundTitle\"></div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
                styles: [".ng-overlay{position:fixed;top:0;left:0;width:100vw;height:100vh;background:#000;opacity:.8;z-index:9999}"]
            }]
    }], function () { return []; }, { isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], accessibilityConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }] }); })();
    return BackgroundComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 The MIT License (MIT)

 Copyright (c) 2017-2018 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/** @enum {number} */
var Action = {
    NORMAL: 0,
    CLICK: 1,
    KEYBOARD: 2,
    SWIPE: 3,
    LOAD: 4,
    AUTOPLAY: 5,
};
Action[Action.NORMAL] = 'NORMAL';
Action[Action.CLICK] = 'CLICK';
Action[Action.KEYBOARD] = 'KEYBOARD';
Action[Action.SWIPE] = 'SWIPE';
Action[Action.LOAD] = 'LOAD';
Action[Action.AUTOPLAY] = 'AUTOPLAY';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var KEYBOARD_CONFIGURATION = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["InjectionToken"]('KEYBOARD_CONFIGURATION');
/**
 * Service to intercept ctrl+s (or cmd+s on macOS) using a third-party library, called Mousetrap.
 */
var KeyboardService = /** @class */ (function () {
    /**
     * Constructor of `KeyboardService` to init `mousetrap` and `shortcuts` private variables.
     * @param KeyboardServiceConfig config object received by the `forRoot()` function to init custom shortcuts
     */
    function KeyboardService(config) {
        // this.config is always defined, because forced by forRoot inside the module
        // when empty, it's simply an empty object: {}
        this.config = config;
        this.shortcuts = this.config && this.config.shortcuts ? this.config.shortcuts : ['ctrl+s', 'meta+s'];
        // temporary workaround to fix this issue: https://github.com/Ks89/angular-modal-gallery/issues/142
        if (this.config && !this.config.disableSsrWorkaround) {
            // To prevent issues with angular-universal on server-side
            if (typeof window !== 'undefined') {
                __webpack_require__(/*! mousetrap */ "./node_modules/mousetrap/mousetrap.js");
                this.mousetrap = new ((/** @type {?} */ (Mousetrap)))();
            }
        }
    }
    /**
     * Method to add a lister for ctrl+s/cmd+s keyboard events.
     * @param (e: ExtendedKeyboardEvent, combo: string) => any onBind callback function to add shortcuts
     */
    /**
     * Method to add a lister for ctrl+s/cmd+s keyboard events.
     * @param {?} onBind
     * @return {?}
     */
    KeyboardService.prototype.add = /**
     * Method to add a lister for ctrl+s/cmd+s keyboard events.
     * @param {?} onBind
     * @return {?}
     */
    function (onBind) {
        // temporary workaround to fix this issue: https://github.com/Ks89/angular-modal-gallery/issues/142
        if (this.config && !this.config.disableSsrWorkaround) {
            // To prevent issues with angular-universal on server-side
            if (typeof window !== 'undefined') {
                this.mousetrap.bind(this.shortcuts, (/**
                 * @param {?} event
                 * @param {?} combo
                 * @return {?}
                 */
                function (event, combo) {
                    if (event.preventDefault) {
                        event.preventDefault();
                    }
                    else {
                        // internet explorer
                        event.returnValue = false;
                    }
                    onBind(event, combo);
                }));
            }
        }
    };
    /**
     * Method to reset all listeners. Please, call this function when needed
     * to free resources ad prevent leaks.
     */
    /**
     * Method to reset all listeners. Please, call this function when needed
     * to free resources ad prevent leaks.
     * @return {?}
     */
    KeyboardService.prototype.reset = /**
     * Method to reset all listeners. Please, call this function when needed
     * to free resources ad prevent leaks.
     * @return {?}
     */
    function () {
        // temporary workaround to fix this issue: https://github.com/Ks89/angular-modal-gallery/issues/142
        if (this.config && !this.config.disableSsrWorkaround) {
            // To prevent issues with angular-universal on server-side
            if (typeof window !== 'undefined') {
                this.mousetrap.reset();
            }
        }
    };
    /** @nocollapse */
    KeyboardService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [KEYBOARD_CONFIGURATION,] }] }
    ]; };
KeyboardService.ɵfac = function KeyboardService_Factory(t) { return new (t || KeyboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](KEYBOARD_CONFIGURATION)); };
KeyboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: KeyboardService, factory: function (t) { return KeyboardService.ɵfac(t); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](KeyboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
                args: [KEYBOARD_CONFIGURATION]
            }] }]; }, null); })();
    return KeyboardService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Service to call methods on a gallery by its galleryId.
 */
var GalleryService = /** @class */ (function () {
    function GalleryService() {
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.autoPlay = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
    }
    /**
     * Method to open the modal gallery with the galleryId passed as parameter.
     * It will automatically shows the image at position index.
     * @param galleryId number or undefined that represents the unique id of the gallery.
     * @param index number of the image that you want to open.
     * @throws a error with a message if galleryId is either undefined, < 0 or index is < 0
     */
    /**
     * Method to open the modal gallery with the galleryId passed as parameter.
     * It will automatically shows the image at position index.
     * @throws a error with a message if galleryId is either undefined, < 0 or index is < 0
     * @param {?} galleryId number or undefined that represents the unique id of the gallery.
     * @param {?} index number of the image that you want to open.
     * @return {?}
     */
    GalleryService.prototype.openGallery = /**
     * Method to open the modal gallery with the galleryId passed as parameter.
     * It will automatically shows the image at position index.
     * @throws a error with a message if galleryId is either undefined, < 0 or index is < 0
     * @param {?} galleryId number or undefined that represents the unique id of the gallery.
     * @param {?} index number of the image that you want to open.
     * @return {?}
     */
    function (galleryId, index) {
        if (galleryId === undefined || galleryId < 0 || index < 0) {
            throw new Error('Cannot open gallery via GalleryService with either index<0 or galleryId<0 or galleryId===undefined');
        }
        this.navigate.emit({
            galleryId: galleryId,
            index: index
        });
    };
    /**
     * Method to navigate to a specific index of the modal gallery with the galleryId passed as parameter.
     * At the moment, it's like openGallery, but in upcoming releases it will change the behaviour.
     * @param galleryId number or undefined that represents the unique id of the gallery.
     * @param index number of the image that you want to open.
     * @throws a error with a message if galleryId is either undefined, < 0 or index is < 0
     */
    /**
     * Method to navigate to a specific index of the modal gallery with the galleryId passed as parameter.
     * At the moment, it's like openGallery, but in upcoming releases it will change the behaviour.
     * @throws a error with a message if galleryId is either undefined, < 0 or index is < 0
     * @param {?} galleryId number or undefined that represents the unique id of the gallery.
     * @param {?} index number of the image that you want to open.
     * @return {?}
     */
    GalleryService.prototype.navigateGallery = /**
     * Method to navigate to a specific index of the modal gallery with the galleryId passed as parameter.
     * At the moment, it's like openGallery, but in upcoming releases it will change the behaviour.
     * @throws a error with a message if galleryId is either undefined, < 0 or index is < 0
     * @param {?} galleryId number or undefined that represents the unique id of the gallery.
     * @param {?} index number of the image that you want to open.
     * @return {?}
     */
    function (galleryId, index) {
        if (galleryId === undefined || galleryId < 0 || index < 0) {
            throw new Error('Cannot navigate via GalleryService with either index<0 or galleryId<0 or galleryId===undefined');
        }
        this.navigate.emit({
            galleryId: galleryId,
            index: index
        });
    };
    /**
     * Method to close the modal gallery with the galleryId passed as parameter.
     * @param galleryId number or undefined that represents the unique id of the gallery.
     * @throws a error with a message if galleryId is either undefined or < 0
     */
    /**
     * Method to close the modal gallery with the galleryId passed as parameter.
     * @throws a error with a message if galleryId is either undefined or < 0
     * @param {?} galleryId number or undefined that represents the unique id of the gallery.
     * @return {?}
     */
    GalleryService.prototype.closeGallery = /**
     * Method to close the modal gallery with the galleryId passed as parameter.
     * @throws a error with a message if galleryId is either undefined or < 0
     * @param {?} galleryId number or undefined that represents the unique id of the gallery.
     * @return {?}
     */
    function (galleryId) {
        if (galleryId === undefined || galleryId < 0) {
            throw new Error('Cannot close gallery via GalleryService with galleryId<0 or galleryId===undefined');
        }
        this.close.emit(galleryId);
    };
    /**
     * Service to update an image with a new object
     * @param galleryId number or undefined that represents the unique id of the gallery.
     * @param index number of the image that you want to update.
     * @throws a error with a message if galleryId is either undefined, < 0 or index is < 0
     *
     * @since 6.3.0
     */
    /**
     * Service to update an image with a new object
     * @throws a error with a message if galleryId is either undefined, < 0 or index is < 0
     *
     * \@since 6.3.0
     * @param {?} galleryId number or undefined that represents the unique id of the gallery.
     * @param {?} index number of the image that you want to update.
     * @param {?} image
     * @return {?}
     */
    GalleryService.prototype.updateGallery = /**
     * Service to update an image with a new object
     * @throws a error with a message if galleryId is either undefined, < 0 or index is < 0
     *
     * \@since 6.3.0
     * @param {?} galleryId number or undefined that represents the unique id of the gallery.
     * @param {?} index number of the image that you want to update.
     * @param {?} image
     * @return {?}
     */
    function (galleryId, index, image) {
        if (galleryId === undefined || galleryId < 0 || index < 0) {
            throw new Error('Cannot update gallery via GalleryService with either index<0 or galleryId<0 or galleryId===undefined');
        }
        if (!image) {
            throw new Error('Cannot update gallery via GalleryService, because image is not valid');
        }
        this.update.emit({
            galleryId: galleryId,
            index: index,
            image: image
        });
    };
    /**
     * Service to play modal-gallery
     * @param galleryId number or undefined that represents the unique id of the gallery.
     * @throws a error with a message if galleryId is either undefined or < 0
     *
     * @since 7.2.0
     */
    /**
     * Service to play modal-gallery
     * @throws a error with a message if galleryId is either undefined or < 0
     *
     * \@since 7.2.0
     * @param {?} galleryId number or undefined that represents the unique id of the gallery.
     * @return {?}
     */
    GalleryService.prototype.play = /**
     * Service to play modal-gallery
     * @throws a error with a message if galleryId is either undefined or < 0
     *
     * \@since 7.2.0
     * @param {?} galleryId number or undefined that represents the unique id of the gallery.
     * @return {?}
     */
    function (galleryId) {
        if (galleryId === undefined || galleryId < 0) {
            throw new Error('Cannot play gallery via GalleryService with galleryId<0 or galleryId===undefined');
        }
        this.autoPlay.emit({
            galleryId: galleryId,
            result: true
        });
    };
    /**
     * Service to stop modal-gallery
     * @param galleryId number or undefined that represents the unique id of the gallery.
     * @throws a error with a message if galleryId is either undefined or < 0
     *
     * @since 7.2.0
     */
    /**
     * Service to stop modal-gallery
     * @throws a error with a message if galleryId is either undefined or < 0
     *
     * \@since 7.2.0
     * @param {?} galleryId number or undefined that represents the unique id of the gallery.
     * @return {?}
     */
    GalleryService.prototype.stop = /**
     * Service to stop modal-gallery
     * @throws a error with a message if galleryId is either undefined or < 0
     *
     * \@since 7.2.0
     * @param {?} galleryId number or undefined that represents the unique id of the gallery.
     * @return {?}
     */
    function (galleryId) {
        if (galleryId === undefined || galleryId < 0) {
            throw new Error('Cannot stop gallery via GalleryService with galleryId<0 or galleryId===undefined');
        }
        this.autoPlay.emit({
            galleryId: galleryId,
            result: false
        });
    };
    /** @nocollapse */ GalleryService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["defineInjectable"])({ factory: function GalleryService_Factory() { return new GalleryService(); }, token: GalleryService, providedIn: "root" });
GalleryService.ɵfac = function GalleryService_Factory(t) { return new (t || GalleryService)(); };
GalleryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: GalleryService, factory: function (t) { return GalleryService.ɵfac(t); }, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](GalleryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
    return GalleryService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Code of the keyboard's key `enter`
 * @type {?}
 */
var ENTER_CODE = 'Enter';
/**
 * Code of the keyboard's key `space`
 * @type {?}
 */
var SPACE_CODE = 'Space';
/**
 * KeyCode of the main mouse button
 * @type {?}
 */
var MOUSE_MAIN_BUTTON_CLICK = 0;
/**
 * Const NEXT
 * @type {?}
 */
var NEXT = 1;
/**
 * Const PREV
 * @type {?}
 */
var PREV = -1;
/**
 * Const NOTHING to represents a situation when it isn't both NEXT and PREV
 * @type {?}
 */
var NOTHING = 0;
/**
 * Const to represent the right direction
 * @type {?}
 */
var DIRECTION_RIGHT = 'right';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Provides some useful methods to add accessibility features to subclasses.
 * In particular, it exposes a method to handle navigation event with both Keyboard and Mouse
 * and another with also the direction (right or left).
 */
var AccessibleComponent = /** @class */ (function () {
    function AccessibleComponent() {
    }
    /**
     * Method to handle navigation events with both Keyboard and Mouse.
     * @param string direction of the navigation that can be either 'next' or 'prev'
     * @param KeyboardEvent | MouseEvent event payload
     * @returns number -1 for PREV, 1 for NEXT and 0 for NOTHING
     */
    /**
     * Method to handle navigation events with both Keyboard and Mouse.
     * @param {?} direction
     * @param {?} event
     * @return {?} number -1 for PREV, 1 for NEXT and 0 for NOTHING
     */
    AccessibleComponent.prototype.handleNavigationEvent = /**
     * Method to handle navigation events with both Keyboard and Mouse.
     * @param {?} direction
     * @param {?} event
     * @return {?} number -1 for PREV, 1 for NEXT and 0 for NOTHING
     */
    function (direction, event) {
        if (!event) {
            return NOTHING;
        }
        if (event instanceof KeyboardEvent) {
            return this.handleKeyboardNavigationEvent(direction, event);
        }
        else if (event instanceof MouseEvent) {
            return this.handleMouseNavigationEvent(direction, event);
        }
        return NOTHING;
    };
    /**
     * Method to handle events over an image, for instance a keypress with the Keyboard or a Mouse click.
     * @param KeyboardEvent | MouseEvent event payload
     * @returns number 1 for NEXT and 0 for NOTHING
     */
    /**
     * Method to handle events over an image, for instance a keypress with the Keyboard or a Mouse click.
     * @param {?} event
     * @return {?} number 1 for NEXT and 0 for NOTHING
     */
    AccessibleComponent.prototype.handleImageEvent = /**
     * Method to handle events over an image, for instance a keypress with the Keyboard or a Mouse click.
     * @param {?} event
     * @return {?} number 1 for NEXT and 0 for NOTHING
     */
    function (event) {
        if (!event) {
            return NOTHING;
        }
        if (event instanceof KeyboardEvent) {
            return this.handleImageKeyboardEvent(event);
        }
        else if (event instanceof MouseEvent) {
            return this.handleImageMouseEvent(event);
        }
        return NOTHING;
    };
    /**
     * Private method to handle keyboard events over an image.
     * @param KeyboardEvent event payload
     * @returns number 1 for NEXT and 0 for NOTHING
     */
    /**
     * Private method to handle keyboard events over an image.
     * @private
     * @param {?} event
     * @return {?} number 1 for NEXT and 0 for NOTHING
     */
    AccessibleComponent.prototype.handleImageKeyboardEvent = /**
     * Private method to handle keyboard events over an image.
     * @private
     * @param {?} event
     * @return {?} number 1 for NEXT and 0 for NOTHING
     */
    function (event) {
        /** @type {?} */
        var key = event.code;
        if (key === SPACE_CODE || key === ENTER_CODE) {
            return NEXT;
        }
        return NOTHING;
    };
    /**
     * Private method to handle mouse events over an image.
     * @param MouseEvent event payload
     * @returns number 1 for NEXT and 0 for NOTHING
     */
    /**
     * Private method to handle mouse events over an image.
     * @private
     * @param {?} event
     * @return {?} number 1 for NEXT and 0 for NOTHING
     */
    AccessibleComponent.prototype.handleImageMouseEvent = /**
     * Private method to handle mouse events over an image.
     * @private
     * @param {?} event
     * @return {?} number 1 for NEXT and 0 for NOTHING
     */
    function (event) {
        /** @type {?} */
        var mouseBtn = event.button;
        if (mouseBtn === MOUSE_MAIN_BUTTON_CLICK) {
            return NEXT;
        }
        return NOTHING;
    };
    /**
     * Method to handle events over an image, for instance a keypress with the Keyboard or a Mouse click.
     * @param string direction of the navigation that can be either 'next' or 'prev'
     * @param KeyboardEvent event payload
     * @returns number -1 for PREV, 1 for NEXT and 0 for NOTHING
     */
    /**
     * Method to handle events over an image, for instance a keypress with the Keyboard or a Mouse click.
     * @private
     * @param {?} direction
     * @param {?} event
     * @return {?} number -1 for PREV, 1 for NEXT and 0 for NOTHING
     */
    AccessibleComponent.prototype.handleKeyboardNavigationEvent = /**
     * Method to handle events over an image, for instance a keypress with the Keyboard or a Mouse click.
     * @private
     * @param {?} direction
     * @param {?} event
     * @return {?} number -1 for PREV, 1 for NEXT and 0 for NOTHING
     */
    function (direction, event) {
        /** @type {?} */
        var key = event.code;
        if (key === SPACE_CODE || key === ENTER_CODE) {
            return direction === DIRECTION_RIGHT ? NEXT : PREV;
        }
        return NOTHING;
    };
    /**
     * Method to handle events over an image, for instance a keypress with the Keyboard or a Mouse click.
     * @param string direction of the navigation that can be either 'next' or 'prev'
     * @param MouseEvent event payload
     * @returns number -1 for PREV, 1 for NEXT and 0 for NOTHING
     */
    /**
     * Method to handle events over an image, for instance a keypress with the Keyboard or a Mouse click.
     * @private
     * @param {?} direction
     * @param {?} event
     * @return {?} number -1 for PREV, 1 for NEXT and 0 for NOTHING
     */
    AccessibleComponent.prototype.handleMouseNavigationEvent = /**
     * Method to handle events over an image, for instance a keypress with the Keyboard or a Mouse click.
     * @private
     * @param {?} direction
     * @param {?} event
     * @return {?} number -1 for PREV, 1 for NEXT and 0 for NOTHING
     */
    function (direction, event) {
        /** @type {?} */
        var mouseBtn = event.button;
        if (mouseBtn === MOUSE_MAIN_BUTTON_CLICK) {
            return direction === DIRECTION_RIGHT ? NEXT : PREV;
        }
        return NOTHING;
    };
    /** @nocollapse */
    AccessibleComponent.ctorParameters = function () { return []; };
AccessibleComponent.ɵfac = function AccessibleComponent_Factory(t) { return new (t || AccessibleComponent)(); };
AccessibleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AccessibleComponent, selectors: [["ks-accessible"]], decls: 0, vars: 0, template: function AccessibleComponent_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AccessibleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'ks-accessible',
                template: "",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();
    return AccessibleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var DescriptionStrategy = {
    ALWAYS_HIDDEN: 1,
    ALWAYS_VISIBLE: 2,
    HIDE_IF_EMPTY: 3,
};
DescriptionStrategy[DescriptionStrategy.ALWAYS_HIDDEN] = 'ALWAYS_HIDDEN';
DescriptionStrategy[DescriptionStrategy.ALWAYS_VISIBLE] = 'ALWAYS_VISIBLE';
DescriptionStrategy[DescriptionStrategy.HIDE_IF_EMPTY] = 'HIDE_IF_EMPTY';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Internal representation of an image adding other fields
 * to the public `Image` class.
 */
var /**
 * Internal representation of an image adding other fields
 * to the public `Image` class.
 */
InternalLibImage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(InternalLibImage, _super);
    function InternalLibImage(id, modal, plain, previouslyLoaded) {
        if (previouslyLoaded === void 0) { previouslyLoaded = false; }
        var _this = _super.call(this, id, modal, plain) || this;
        _this.previouslyLoaded = previouslyLoaded;
        return _this;
    }
    return InternalLibImage;
}(Image));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 The MIT License (MIT)

 Copyright (c) 2017-2018 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/** @enum {number} */
var Keyboard = {
    ESC: 27,
    LEFT_ARROW: 37,
    RIGHT_ARROW: 39,
    UP_ARROW: 38,
    DOWN_ARROW: 40,
};
Keyboard[Keyboard.ESC] = 'ESC';
Keyboard[Keyboard.LEFT_ARROW] = 'LEFT_ARROW';
Keyboard[Keyboard.RIGHT_ARROW] = 'RIGHT_ARROW';
Keyboard[Keyboard.UP_ARROW] = 'UP_ARROW';
Keyboard[Keyboard.DOWN_ARROW] = 'DOWN_ARROW';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var LoadingType = {
    STANDARD: 1,
    CIRCULAR: 2,
    BARS: 3,
    DOTS: 4,
    CUBE_FLIPPING: 5,
    CIRCLES: 6,
    EXPLOSING_SQUARES: 7,
};
LoadingType[LoadingType.STANDARD] = 'STANDARD';
LoadingType[LoadingType.CIRCULAR] = 'CIRCULAR';
LoadingType[LoadingType.BARS] = 'BARS';
LoadingType[LoadingType.DOTS] = 'DOTS';
LoadingType[LoadingType.CUBE_FLIPPING] = 'CUBE_FLIPPING';
LoadingType[LoadingType.CIRCLES] = 'CIRCLES';
LoadingType[LoadingType.EXPLOSING_SQUARES] = 'EXPLOSING_SQUARES';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 The MIT License (MIT)

 Copyright (c) 2017-2018 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
/**
 * Utility function to get the index of the input `image` from `arrayOfImages`
 * @throws an Error if either image or arrayOfImages are not valid,
 *  or if the input image doesn't contain an 'id', or the 'id' is < 0
 * @param {?} image
 * @param {?} arrayOfImages
 * @return {?} number the index of the image. -1 if not found.
 */
function getIndex(image, arrayOfImages) {
    if (!image) {
        throw new Error('image must be a valid Image object');
    }
    if (!arrayOfImages) {
        throw new Error('arrayOfImages must be a valid Image[]');
    }
    if (!image.id && image.id !== 0) {
        // id = 0 is admitted
        throw new Error("A numeric Image 'id' is mandatory");
    }
    if (image.id < 0) {
        throw new Error("Image 'id' must be >= 0");
    }
    return arrayOfImages.findIndex((/**
     * @param {?} val
     * @return {?}
     */
    function (val) { return val.id === image.id; }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with the current image with some additional elements like arrows and side previews.
 */
var CurrentImageComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(CurrentImageComponent, _super);
    function CurrentImageComponent(_platformId, _ngZone, ref) {
        var _this = _super.call(this) || this;
        _this._platformId = _platformId;
        _this._ngZone = _ngZone;
        _this.ref = ref;
        /**
         * Output to emit an event when images are loaded. The payload contains an `ImageLoadEvent`.
         */
        _this.loadImage = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Output to emit any changes of the current image. The payload contains an `ImageModalEvent`.
         */
        _this.changeImage = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Output to emit an event when the modal gallery is closed. The payload contains an `ImageModalEvent`.
         */
        _this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Subject to play modal-gallery.
         */
        _this.start$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Subject to stop modal-gallery.
         */
        _this.stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Enum of type `Action` that represents a normal action.
         * Declared here to be used inside the template.
         */
        _this.normalAction = Action.NORMAL;
        /**
         * Enum of type `Action` that represents a mouse click on a button.
         * Declared here to be used inside the template.
         */
        _this.clickAction = Action.CLICK;
        /**
         * Enum of type `Action` that represents a keyboard action.
         * Declared here to be used inside the template.
         */
        _this.keyboardAction = Action.KEYBOARD;
        /**
         * Boolean that it's true when you are watching the first image (currently visible).
         * False by default
         */
        _this.isFirstImage = false;
        /**
         * Boolean that it's true when you are watching the last image (currently visible).
         * False by default
         */
        _this.isLastImage = false;
        /**
         * Boolean that it's true if an image of the modal gallery is still loading.
         * True by default
         */
        _this.loading = true;
        /**
         * Private object without type to define all swipe actions used by hammerjs.
         */
        _this.SWIPE_ACTION = {
            LEFT: 'swipeleft',
            RIGHT: 'swiperight',
            UP: 'swipeup',
            DOWN: 'swipedown'
        };
        return _this;
    }
    /**
     * Listener to stop the gallery when the mouse pointer is over the current image.
     */
    /**
     * Listener to stop the gallery when the mouse pointer is over the current image.
     * @return {?}
     */
    CurrentImageComponent.prototype.onMouseEnter = /**
     * Listener to stop the gallery when the mouse pointer is over the current image.
     * @return {?}
     */
    function () {
        // if carousel feature is disable, don't do anything in any case
        if (!this.configSlide || !this.configSlide.playConfig) {
            return;
        }
        if (!this.configSlide.playConfig.pauseOnHover) {
            return;
        }
        this.stopCarousel();
    };
    /**
     * Listener to play the gallery when the mouse pointer leave the current image.
     */
    /**
     * Listener to play the gallery when the mouse pointer leave the current image.
     * @return {?}
     */
    CurrentImageComponent.prototype.onMouseLeave = /**
     * Listener to play the gallery when the mouse pointer leave the current image.
     * @return {?}
     */
    function () {
        // if carousel feature is disable, don't do anything in any case
        if (!this.configSlide || !this.configSlide.playConfig) {
            return;
        }
        if (!this.configSlide.playConfig.pauseOnHover || !this.configSlide.playConfig.autoPlay) {
            return;
        }
        this.playCarousel();
    };
    /**
     * Method ´ngOnInit´ to build `configCurrentImage` applying default values.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     */
    /**
     * Method ´ngOnInit´ to build `configCurrentImage` applying default values.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    CurrentImageComponent.prototype.ngOnInit = /**
     * Method ´ngOnInit´ to build `configCurrentImage` applying default values.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    function () {
        /** @type {?} */
        var defaultLoading = { enable: true, type: LoadingType.STANDARD };
        /** @type {?} */
        var defaultDescriptionStyle = {
            bgColor: 'rgba(0, 0, 0, .5)',
            textColor: 'white',
            marginTop: '0px',
            marginBottom: '0px',
            marginLeft: '0px',
            marginRight: '0px'
        };
        /** @type {?} */
        var defaultDescription = {
            strategy: DescriptionStrategy.ALWAYS_VISIBLE,
            imageText: 'Image ',
            numberSeparator: '/',
            beforeTextDescription: ' - ',
            style: defaultDescriptionStyle
        };
        /** @type {?} */
        var defaultCurrentImageConfig = {
            navigateOnClick: true,
            loadingConfig: defaultLoading,
            description: defaultDescription,
            downloadable: false,
            invertSwipe: false
        };
        this.configCurrentImage = Object.assign({}, defaultCurrentImageConfig, this.currentImageConfig);
        this.configCurrentImage.description = Object.assign({}, defaultDescription, this.configCurrentImage.description);
        this.configSlide = Object.assign({}, this.slideConfig);
    };
    /**
     * Method ´ngOnChanges´ to update `loading` status and emit events.
     * If the gallery is open, then it will also manage boundary arrows and sliding.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     */
    /**
     * Method ´ngOnChanges´ to update `loading` status and emit events.
     * If the gallery is open, then it will also manage boundary arrows and sliding.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @param {?} changes
     * @return {?}
     */
    CurrentImageComponent.prototype.ngOnChanges = /**
     * Method ´ngOnChanges´ to update `loading` status and emit events.
     * If the gallery is open, then it will also manage boundary arrows and sliding.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var images = changes.images;
        /** @type {?} */
        var currentImage = changes.currentImage;
        if (currentImage && currentImage.previousValue !== currentImage.currentValue) {
            this.updateIndexes();
        }
        else if (images && images.previousValue !== images.currentValue) {
            this.updateIndexes();
        }
        /** @type {?} */
        var slideConfig = changes.slideConfig;
        if (slideConfig && slideConfig.previousValue !== slideConfig.currentValue) {
            this.configSlide = Object.assign({}, this.slideConfig);
        }
    };
    /**
     * @return {?}
     */
    CurrentImageComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // interval doesn't play well with SSR and protractor,
        // so we should run it in the browser and outside Angular
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this._platformId)) {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.start$
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
                 * @return {?}
                 */
                function () { return _this.configSlide && _this.configSlide.playConfig && _this.configSlide.playConfig.autoPlay && _this.configSlide.playConfig.interval; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
                 * @param {?} interval
                 * @return {?}
                 */
                function (interval) { return interval > 0; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((/**
                 * @param {?} interval
                 * @return {?}
                 */
                function (interval) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(interval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this.stop$)); })))
                    .subscribe((/**
                 * @return {?}
                 */
                function () {
                    return _this._ngZone.run((/**
                     * @return {?}
                     */
                    function () {
                        if (!_this.isLastImage) {
                            _this.nextImage(Action.AUTOPLAY);
                        }
                        _this.ref.markForCheck();
                    }));
                }));
                _this.start$.next();
            }));
        }
    };
    /**
     * Method to handle keypress based on the `keyboardConfig` input. It gets the keyCode of
     * the key that triggered the keypress event to navigate between images or to close the modal gallery.
     * @param number keyCode of the key that triggered the keypress event
     */
    /**
     * Method to handle keypress based on the `keyboardConfig` input. It gets the keyCode of
     * the key that triggered the keypress event to navigate between images or to close the modal gallery.
     * @param {?} keyCode
     * @return {?}
     */
    CurrentImageComponent.prototype.onKeyPress = /**
     * Method to handle keypress based on the `keyboardConfig` input. It gets the keyCode of
     * the key that triggered the keypress event to navigate between images or to close the modal gallery.
     * @param {?} keyCode
     * @return {?}
     */
    function (keyCode) {
        /** @type {?} */
        var esc = this.keyboardConfig && this.keyboardConfig.esc ? this.keyboardConfig.esc : Keyboard.ESC;
        /** @type {?} */
        var right = this.keyboardConfig && this.keyboardConfig.right ? this.keyboardConfig.right : Keyboard.RIGHT_ARROW;
        /** @type {?} */
        var left = this.keyboardConfig && this.keyboardConfig.left ? this.keyboardConfig.left : Keyboard.LEFT_ARROW;
        switch (keyCode) {
            case esc:
                this.close.emit(new ImageModalEvent(Action.KEYBOARD, true));
                break;
            case right:
                this.nextImage(Action.KEYBOARD);
                break;
            case left:
                this.prevImage(Action.KEYBOARD);
                break;
        }
    };
    /**
     * Method to get the image description based on input params.
     * If you provide a full description this will be the visible description, otherwise,
     * it will be built using the `Description` object, concatenating its fields.
     * @param Image image to get its description. If not provided it will be the current image
     * @returns String description of the image (or the current image if not provided)
     * @throws an Error if description isn't available
     */
    /**
     * Method to get the image description based on input params.
     * If you provide a full description this will be the visible description, otherwise,
     * it will be built using the `Description` object, concatenating its fields.
     * @throws an Error if description isn't available
     * @param {?=} image
     * @return {?} String description of the image (or the current image if not provided)
     */
    CurrentImageComponent.prototype.getDescriptionToDisplay = /**
     * Method to get the image description based on input params.
     * If you provide a full description this will be the visible description, otherwise,
     * it will be built using the `Description` object, concatenating its fields.
     * @throws an Error if description isn't available
     * @param {?=} image
     * @return {?} String description of the image (or the current image if not provided)
     */
    function (image) {
        if (image === void 0) { image = this.currentImage; }
        if (!this.configCurrentImage || !this.configCurrentImage.description) {
            throw new Error('Description input must be a valid object implementing the Description interface');
        }
        /** @type {?} */
        var imageWithoutDescription = !image.modal || !image.modal.description || image.modal.description === '';
        switch (this.configCurrentImage.description.strategy) {
            case DescriptionStrategy.HIDE_IF_EMPTY:
                return imageWithoutDescription ? '' : image.modal.description + '';
            case DescriptionStrategy.ALWAYS_HIDDEN:
                return '';
            default:
                // ----------- DescriptionStrategy.ALWAYS_VISIBLE -----------------
                return this.buildTextDescription(image, imageWithoutDescription);
        }
    };
    /**
     * Method to get `alt attribute`.
     * `alt` specifies an alternate text for an image, if the image cannot be displayed.
     * @param Image image to get its alt description. If not provided it will be the current image
     * @returns String alt description of the image (or the current image if not provided)
     */
    /**
     * Method to get `alt attribute`.
     * `alt` specifies an alternate text for an image, if the image cannot be displayed.
     * @param {?=} image
     * @return {?} String alt description of the image (or the current image if not provided)
     */
    CurrentImageComponent.prototype.getAltDescriptionByImage = /**
     * Method to get `alt attribute`.
     * `alt` specifies an alternate text for an image, if the image cannot be displayed.
     * @param {?=} image
     * @return {?} String alt description of the image (or the current image if not provided)
     */
    function (image) {
        if (image === void 0) { image = this.currentImage; }
        if (!image) {
            return '';
        }
        return image.modal && image.modal.description ? image.modal.description : "Image " + (getIndex(image, this.images) + 1);
    };
    /**
     * Method to get the title attributes based on descriptions.
     * This is useful to prevent accessibility issues, because if DescriptionStrategy is ALWAYS_HIDDEN,
     * it prevents an empty string as title.
     * @param Image image to get its description. If not provided it will be the current image
     * @returns String title of the image based on descriptions
     * @throws an Error if description isn't available
     */
    /**
     * Method to get the title attributes based on descriptions.
     * This is useful to prevent accessibility issues, because if DescriptionStrategy is ALWAYS_HIDDEN,
     * it prevents an empty string as title.
     * @throws an Error if description isn't available
     * @param {?=} image
     * @return {?} String title of the image based on descriptions
     */
    CurrentImageComponent.prototype.getTitleToDisplay = /**
     * Method to get the title attributes based on descriptions.
     * This is useful to prevent accessibility issues, because if DescriptionStrategy is ALWAYS_HIDDEN,
     * it prevents an empty string as title.
     * @throws an Error if description isn't available
     * @param {?=} image
     * @return {?} String title of the image based on descriptions
     */
    function (image) {
        if (image === void 0) { image = this.currentImage; }
        if (!this.configCurrentImage || !this.configCurrentImage.description) {
            throw new Error('Description input must be a valid object implementing the Description interface');
        }
        /** @type {?} */
        var imageWithoutDescription = !image.modal || !image.modal.description || image.modal.description === '';
        /** @type {?} */
        var description = this.buildTextDescription(image, imageWithoutDescription);
        return description;
    };
    /**
     * Method to get the left side preview image.
     * @returns Image the image to show as size preview on the left
     */
    /**
     * Method to get the left side preview image.
     * @return {?} Image the image to show as size preview on the left
     */
    CurrentImageComponent.prototype.getLeftPreviewImage = /**
     * Method to get the left side preview image.
     * @return {?} Image the image to show as size preview on the left
     */
    function () {
        /** @type {?} */
        var currentIndex = getIndex(this.currentImage, this.images);
        if (currentIndex === 0 && this.configSlide.infinite) {
            // the current image is the first one,
            // so the previous one is the last image
            // because infinite is true
            return this.images[this.images.length - 1];
        }
        this.handleBoundaries(currentIndex);
        return this.images[Math.max(currentIndex - 1, 0)];
    };
    /**
     * Method to get the right side preview image.
     * @returns Image the image to show as size preview on the right
     */
    /**
     * Method to get the right side preview image.
     * @return {?} Image the image to show as size preview on the right
     */
    CurrentImageComponent.prototype.getRightPreviewImage = /**
     * Method to get the right side preview image.
     * @return {?} Image the image to show as size preview on the right
     */
    function () {
        /** @type {?} */
        var currentIndex = getIndex(this.currentImage, this.images);
        if (currentIndex === this.images.length - 1 && this.configSlide.infinite) {
            // the current image is the last one,
            // so the next one is the first image
            // because infinite is true
            return this.images[0];
        }
        this.handleBoundaries(currentIndex);
        return this.images[Math.min(currentIndex + 1, this.images.length - 1)];
    };
    /**
     * Method called by events from both keyboard and mouse on an image.
     * This will invoke the nextImage method.
     * @param KeyboardEvent | MouseEvent event payload
     * @param Action action that triggered the event or `Action.NORMAL` if not provided
     */
    /**
     * Method called by events from both keyboard and mouse on an image.
     * This will invoke the nextImage method.
     * @param {?} event
     * @param {?=} action
     * @return {?}
     */
    CurrentImageComponent.prototype.onImageEvent = /**
     * Method called by events from both keyboard and mouse on an image.
     * This will invoke the nextImage method.
     * @param {?} event
     * @param {?=} action
     * @return {?}
     */
    function (event, action) {
        if (action === void 0) { action = Action.NORMAL; }
        // check if triggered by a mouse click
        // If yes, It should block navigation when navigateOnClick is false
        if (action === Action.CLICK && !this.configCurrentImage.navigateOnClick) {
            // a user has requested to block navigation via configCurrentImage.navigateOnClick property
            return;
        }
        /** @type {?} */
        var result = _super.prototype.handleImageEvent.call(this, event);
        if (result === NEXT) {
            this.nextImage(action);
        }
    };
    /**
     * Method called by events from both keyboard and mouse on a navigation arrow.
     * @param string direction of the navigation that can be either 'next' or 'prev'
     * @param KeyboardEvent | MouseEvent event payload
     * @param Action action that triggered the event or `Action.NORMAL` if not provided
     * @param boolean disable to disable navigation
     */
    /**
     * Method called by events from both keyboard and mouse on a navigation arrow.
     * @param {?} direction
     * @param {?} event
     * @param {?=} action
     * @param {?=} disable
     * @return {?}
     */
    CurrentImageComponent.prototype.onNavigationEvent = /**
     * Method called by events from both keyboard and mouse on a navigation arrow.
     * @param {?} direction
     * @param {?} event
     * @param {?=} action
     * @param {?=} disable
     * @return {?}
     */
    function (direction, event, action, disable) {
        if (action === void 0) { action = Action.NORMAL; }
        if (disable === void 0) { disable = false; }
        if (disable) {
            return;
        }
        /** @type {?} */
        var result = _super.prototype.handleNavigationEvent.call(this, direction, event);
        if (result === NEXT) {
            this.nextImage(action);
        }
        else if (result === PREV) {
            this.prevImage(action);
        }
    };
    /**
     * Method to go back to the previous image.
     * @param action Enum of type `Action` that represents the source
     *  action that moved back to the previous image. `Action.NORMAL` by default.
     */
    /**
     * Method to go back to the previous image.
     * @param {?=} action Enum of type `Action` that represents the source
     *  action that moved back to the previous image. `Action.NORMAL` by default.
     * @return {?}
     */
    CurrentImageComponent.prototype.prevImage = /**
     * Method to go back to the previous image.
     * @param {?=} action Enum of type `Action` that represents the source
     *  action that moved back to the previous image. `Action.NORMAL` by default.
     * @return {?}
     */
    function (action) {
        if (action === void 0) { action = Action.NORMAL; }
        // check if prevImage should be blocked
        if (this.isPreventSliding(0)) {
            return;
        }
        /** @type {?} */
        var prevImage = this.getPrevImage();
        this.loading = !prevImage.previouslyLoaded;
        this.changeImage.emit(new ImageModalEvent(action, getIndex(prevImage, this.images)));
        this.start$.next();
    };
    /**
     * Method to go back to the previous image.
     * @param action Enum of type `Action` that represents the source
     *  action that moved to the next image. `Action.NORMAL` by default.
     */
    /**
     * Method to go back to the previous image.
     * @param {?=} action Enum of type `Action` that represents the source
     *  action that moved to the next image. `Action.NORMAL` by default.
     * @return {?}
     */
    CurrentImageComponent.prototype.nextImage = /**
     * Method to go back to the previous image.
     * @param {?=} action Enum of type `Action` that represents the source
     *  action that moved to the next image. `Action.NORMAL` by default.
     * @return {?}
     */
    function (action) {
        if (action === void 0) { action = Action.NORMAL; }
        // check if nextImage should be blocked
        if (this.isPreventSliding(this.images.length - 1)) {
            return;
        }
        /** @type {?} */
        var nextImage = this.getNextImage();
        this.loading = !nextImage.previouslyLoaded;
        this.changeImage.emit(new ImageModalEvent(action, getIndex(nextImage, this.images)));
        this.start$.next();
    };
    /**
     * Method to emit an event as loadImage output to say that the requested image if loaded.
     * This method is invoked by the javascript's 'load' event on an img tag.
     * @param Event event that triggered the load
     */
    /**
     * Method to emit an event as loadImage output to say that the requested image if loaded.
     * This method is invoked by the javascript's 'load' event on an img tag.
     * @param {?} event
     * @return {?}
     */
    CurrentImageComponent.prototype.onImageLoad = /**
     * Method to emit an event as loadImage output to say that the requested image if loaded.
     * This method is invoked by the javascript's 'load' event on an img tag.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var loadImageData = {
            status: true,
            index: getIndex(this.currentImage, this.images),
            id: this.currentImage.id
        };
        this.loadImage.emit(loadImageData);
        this.loading = false;
    };
    /**
     * Method used by Hammerjs to support touch gestures (you can also invert the swipe direction with configCurrentImage.invertSwipe).
     * @param action String that represent the direction of the swipe action. 'swiperight' by default.
     */
    /**
     * Method used by Hammerjs to support touch gestures (you can also invert the swipe direction with configCurrentImage.invertSwipe).
     * @param {?=} action String that represent the direction of the swipe action. 'swiperight' by default.
     * @return {?}
     */
    CurrentImageComponent.prototype.swipe = /**
     * Method used by Hammerjs to support touch gestures (you can also invert the swipe direction with configCurrentImage.invertSwipe).
     * @param {?=} action String that represent the direction of the swipe action. 'swiperight' by default.
     * @return {?}
     */
    function (action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        switch (action) {
            case this.SWIPE_ACTION.RIGHT:
                if (this.configCurrentImage.invertSwipe) {
                    this.prevImage(Action.SWIPE);
                }
                else {
                    this.nextImage(Action.SWIPE);
                }
                break;
            case this.SWIPE_ACTION.LEFT:
                if (this.configCurrentImage.invertSwipe) {
                    this.nextImage(Action.SWIPE);
                }
                else {
                    this.prevImage(Action.SWIPE);
                }
                break;
            // case this.SWIPE_ACTION.UP:
            //   break;
            // case this.SWIPE_ACTION.DOWN:
            //   break;
        }
    };
    /**
     * Method used in `modal-gallery.component` to get the index of an image to delete.
     * @param Image image to get the index, or the visible image, if not passed
     * @returns number the index of the image
     */
    /**
     * Method used in `modal-gallery.component` to get the index of an image to delete.
     * @param {?=} image
     * @return {?} number the index of the image
     */
    CurrentImageComponent.prototype.getIndexToDelete = /**
     * Method used in `modal-gallery.component` to get the index of an image to delete.
     * @param {?=} image
     * @return {?} number the index of the image
     */
    function (image) {
        if (image === void 0) { image = this.currentImage; }
        return getIndex(image, this.images);
    };
    /**
     * Method to play modal gallery.
     */
    /**
     * Method to play modal gallery.
     * @return {?}
     */
    CurrentImageComponent.prototype.playCarousel = /**
     * Method to play modal gallery.
     * @return {?}
     */
    function () {
        this.start$.next();
    };
    /**
     * Stops modal gallery from cycling through items.
     */
    /**
     * Stops modal gallery from cycling through items.
     * @return {?}
     */
    CurrentImageComponent.prototype.stopCarousel = /**
     * Stops modal gallery from cycling through items.
     * @return {?}
     */
    function () {
        this.stop$.next();
    };
    /**
     * Method to cleanup resources. In fact, this will stop the modal gallery.
     * This is an Angular's lifecycle hook that is called when this component is destroyed.
     */
    /**
     * Method to cleanup resources. In fact, this will stop the modal gallery.
     * This is an Angular's lifecycle hook that is called when this component is destroyed.
     * @return {?}
     */
    CurrentImageComponent.prototype.ngOnDestroy = /**
     * Method to cleanup resources. In fact, this will stop the modal gallery.
     * This is an Angular's lifecycle hook that is called when this component is destroyed.
     * @return {?}
     */
    function () {
        this.stopCarousel();
    };
    /**
     * Private method to update both `isFirstImage` and `isLastImage` based on
     * the index of the current image.
     * @param number currentIndex is the index of the current image
     */
    /**
     * Private method to update both `isFirstImage` and `isLastImage` based on
     * the index of the current image.
     * @private
     * @param {?} currentIndex
     * @return {?}
     */
    CurrentImageComponent.prototype.handleBoundaries = /**
     * Private method to update both `isFirstImage` and `isLastImage` based on
     * the index of the current image.
     * @private
     * @param {?} currentIndex
     * @return {?}
     */
    function (currentIndex) {
        if (this.images.length === 1) {
            this.isFirstImage = true;
            this.isLastImage = true;
            return;
        }
        if (!this.configSlide || this.configSlide.infinite === true) {
            // infinite sliding enabled
            this.isFirstImage = false;
            this.isLastImage = false;
        }
        else {
            switch (currentIndex) {
                case 0:
                    // execute this only if infinite sliding is disabled
                    this.isFirstImage = true;
                    this.isLastImage = false;
                    break;
                case this.images.length - 1:
                    // execute this only if infinite sliding is disabled
                    this.isFirstImage = false;
                    this.isLastImage = true;
                    break;
                default:
                    this.isFirstImage = false;
                    this.isLastImage = false;
                    break;
            }
        }
    };
    /**
     * Private method to check if next/prev actions should be blocked.
     * It checks if configSlide.infinite === false and if the image index is equals to the input parameter.
     * If yes, it returns true to say that sliding should be blocked, otherwise not.
     * @param number boundaryIndex that could be either the beginning index (0) or the last index
     *  of images (this.images.length - 1).
     * @returns boolean true if configSlide.infinite === false and the current index is
     *  either the first or the last one.
     */
    /**
     * Private method to check if next/prev actions should be blocked.
     * It checks if configSlide.infinite === false and if the image index is equals to the input parameter.
     * If yes, it returns true to say that sliding should be blocked, otherwise not.
     * @private
     * @param {?} boundaryIndex
     * @return {?} boolean true if configSlide.infinite === false and the current index is
     *  either the first or the last one.
     */
    CurrentImageComponent.prototype.isPreventSliding = /**
     * Private method to check if next/prev actions should be blocked.
     * It checks if configSlide.infinite === false and if the image index is equals to the input parameter.
     * If yes, it returns true to say that sliding should be blocked, otherwise not.
     * @private
     * @param {?} boundaryIndex
     * @return {?} boolean true if configSlide.infinite === false and the current index is
     *  either the first or the last one.
     */
    function (boundaryIndex) {
        return !!this.configSlide && this.configSlide.infinite === false && getIndex(this.currentImage, this.images) === boundaryIndex;
    };
    /**
     * Private method to get the next index.
     * This is necessary because at the end, when you call next again, you'll go to the first image.
     * That happens because all modal images are shown like in a circle.
     */
    /**
     * Private method to get the next index.
     * This is necessary because at the end, when you call next again, you'll go to the first image.
     * That happens because all modal images are shown like in a circle.
     * @private
     * @return {?}
     */
    CurrentImageComponent.prototype.getNextImage = /**
     * Private method to get the next index.
     * This is necessary because at the end, when you call next again, you'll go to the first image.
     * That happens because all modal images are shown like in a circle.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentIndex = getIndex(this.currentImage, this.images);
        /** @type {?} */
        var newIndex = 0;
        if (currentIndex >= 0 && currentIndex < this.images.length - 1) {
            newIndex = currentIndex + 1;
        }
        else {
            newIndex = 0; // start from the first index
        }
        return this.images[newIndex];
    };
    /**
     * Private method to get the previous index.
     * This is necessary because at index 0, when you call prev again, you'll go to the last image.
     * That happens because all modal images are shown like in a circle.
     */
    /**
     * Private method to get the previous index.
     * This is necessary because at index 0, when you call prev again, you'll go to the last image.
     * That happens because all modal images are shown like in a circle.
     * @private
     * @return {?}
     */
    CurrentImageComponent.prototype.getPrevImage = /**
     * Private method to get the previous index.
     * This is necessary because at index 0, when you call prev again, you'll go to the last image.
     * That happens because all modal images are shown like in a circle.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentIndex = getIndex(this.currentImage, this.images);
        /** @type {?} */
        var newIndex = 0;
        if (currentIndex > 0 && currentIndex <= this.images.length - 1) {
            newIndex = currentIndex - 1;
        }
        else {
            newIndex = this.images.length - 1; // start from the last index
        }
        return this.images[newIndex];
    };
    /**
     * Private method to build a text description.
     * This is used also to create titles.
     * @param Image image to get its description. If not provided it will be the current image.
     * @param boolean imageWithoutDescription is a boolean that it's true if the image hasn't a 'modal' description.
     * @returns String description built concatenating image fields with a specific logic.
     */
    /**
     * Private method to build a text description.
     * This is used also to create titles.
     * @private
     * @param {?} image
     * @param {?} imageWithoutDescription
     * @return {?} String description built concatenating image fields with a specific logic.
     */
    CurrentImageComponent.prototype.buildTextDescription = /**
     * Private method to build a text description.
     * This is used also to create titles.
     * @private
     * @param {?} image
     * @param {?} imageWithoutDescription
     * @return {?} String description built concatenating image fields with a specific logic.
     */
    function (image, imageWithoutDescription) {
        if (!this.configCurrentImage || !this.configCurrentImage.description) {
            throw new Error('Description input must be a valid object implementing the Description interface');
        }
        // If customFullDescription use it, otherwise proceed to build a description
        if (this.configCurrentImage.description.customFullDescription && this.configCurrentImage.description.customFullDescription !== '') {
            return this.configCurrentImage.description.customFullDescription;
        }
        /** @type {?} */
        var currentIndex = getIndex(image, this.images);
        // If the current image hasn't a description,
        // prevent to write the ' - ' (or this.description.beforeTextDescription)
        /** @type {?} */
        var prevDescription = this.configCurrentImage.description.imageText ? this.configCurrentImage.description.imageText : '';
        /** @type {?} */
        var midSeparator = this.configCurrentImage.description.numberSeparator ? this.configCurrentImage.description.numberSeparator : '';
        /** @type {?} */
        var middleDescription = currentIndex + 1 + midSeparator + this.images.length;
        if (imageWithoutDescription) {
            return prevDescription + middleDescription;
        }
        /** @type {?} */
        var currImgDescription = image.modal && image.modal.description ? image.modal.description : '';
        /** @type {?} */
        var endDescription = this.configCurrentImage.description.beforeTextDescription + currImgDescription;
        return prevDescription + middleDescription + endDescription;
    };
    /**
     * Private method to call handleBoundaries when ngOnChanges is called.
     */
    /**
     * Private method to call handleBoundaries when ngOnChanges is called.
     * @private
     * @return {?}
     */
    CurrentImageComponent.prototype.updateIndexes = /**
     * Private method to call handleBoundaries when ngOnChanges is called.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index;
        try {
            index = getIndex(this.currentImage, this.images);
        }
        catch (err) {
            console.error('Cannot get the current image index in current-image');
            throw err;
        }
        if (this.isOpen) {
            this.handleBoundaries(index);
        }
    };
    /** @nocollapse */
    CurrentImageComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["PLATFORM_ID"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] }
    ]; };
    CurrentImageComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        currentImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        currentImageConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        slideConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        accessibilityConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        keyboardConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        loadImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        changeImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        onMouseEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"], args: ['mouseenter',] }],
        onMouseLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"], args: ['mouseleave',] }]
    };
CurrentImageComponent.ɵfac = function CurrentImageComponent_Factory(t) { return new (t || CurrentImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"])); };
CurrentImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CurrentImageComponent, selectors: [["ks-current-image"]], hostBindings: function CurrentImageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseenter", function CurrentImageComponent_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter(); })("mouseleave", function CurrentImageComponent_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave(); });
    } }, inputs: { id: "id", currentImage: "currentImage", images: "images", isOpen: "isOpen", currentImageConfig: "currentImageConfig", slideConfig: "slideConfig", accessibilityConfig: "accessibilityConfig", keyboardConfig: "keyboardConfig" }, outputs: { loadImage: "loadImage", changeImage: "changeImage", close: "close" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]()], decls: 13, vars: 33, consts: [["ksKeyboardNavigation", "", 1, "main-image-container", 3, "isOpen", "title", "keyPress"], [1, "left-sub-container"], ["role", "button", 3, "tabindex", "click", "keyup"], ["aria-hidden", "true", 3, "title"], [4, "ngIf"], ["id", "current-figure"], ["id", "current-image", "role", "img", 1, "inside", 3, "ngClass", "src", "title", "alt", "tabindex", "load", "click", "keyup", "swipeleft", "swiperight"], ["class", "inside description", "ksDescription", "", 3, "description", "innerHTML", 4, "ngIf"], [1, "right-sub-container"], ["class", "inside current-image-previous", "ksSize", "", "role", "img", 3, "src", "hidden", "sizeConfig", "title", "alt", "tabindex", "click", "keyup", 4, "ngIf", "ngIfElse"], ["firstImage", ""], ["ksSize", "", "role", "img", 1, "inside", "current-image-previous", 3, "src", "hidden", "sizeConfig", "title", "alt", "tabindex", "click", "keyup"], ["ksSize", "", 1, "current-image-previous", "hidden", 3, "sizeConfig"], ["ksDescription", "", 1, "inside", "description", 3, "description", "innerHTML"], ["class", "inside current-image-next", "ksSize", "", "role", "img", 3, "src", "hidden", "sizeConfig", "title", "alt", "tabindex", "click", "keyup", 4, "ngIf", "ngIfElse"], ["lastImage", ""], ["ksSize", "", "role", "img", 1, "inside", "current-image-next", 3, "src", "hidden", "sizeConfig", "title", "alt", "tabindex", "click", "keyup"], ["ksSize", "", 1, "current-image-next", "hidden", 3, "sizeConfig"], [3, "loadingConfig", "accessibilityConfig"]], template: function CurrentImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyPress", function CurrentImageComponent_Template_main_keyPress_0_listener($event) { return ctx.onKeyPress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CurrentImageComponent_Template_a_click_2_listener($event) { return ctx.onNavigationEvent("left", $event, ctx.normalAction, ctx.isFirstImage); })("keyup", function CurrentImageComponent_Template_a_keyup_2_listener($event) { return ctx.onNavigationEvent("left", $event, ctx.normalAction, ctx.isFirstImage); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CurrentImageComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "figure", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("load", function CurrentImageComponent_Template_img_load_6_listener($event) { return ctx.onImageLoad($event); })("click", function CurrentImageComponent_Template_img_click_6_listener($event) { return ctx.onImageEvent($event, ctx.clickAction); })("keyup", function CurrentImageComponent_Template_img_keyup_6_listener($event) { return ctx.onImageEvent($event, ctx.keyboardAction); })("swipeleft", function CurrentImageComponent_Template_img_swipeleft_6_listener($event) { return ctx.swipe($event.type); })("swiperight", function CurrentImageComponent_Template_img_swiperight_6_listener($event) { return ctx.swipe($event.type); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, CurrentImageComponent_figcaption_7_Template, 1, 2, "figcaption", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, CurrentImageComponent_ng_container_9_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, CurrentImageComponent_ng_container_10_Template, 2, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CurrentImageComponent_Template_a_click_11_listener($event) { return ctx.onNavigationEvent("right", $event, ctx.normalAction, ctx.isLastImage); })("keyup", function CurrentImageComponent_Template_a_keyup_11_listener($event) { return ctx.onNavigationEvent("right", $event, ctx.normalAction, ctx.isLastImage); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isOpen", ctx.isOpen)("title", ctx.accessibilityConfig.mainContainerTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx.accessibilityConfig.mainContainerAriaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("nav-left ", ctx.isFirstImage ? "no-pointer" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tabindex", ctx.isFirstImage ? 0 - 1 : 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx.accessibilityConfig.mainPrevImageAriaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("inside ", ctx.isFirstImage ? "empty-arrow-image" : "left-arrow-image", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx.isFirstImage ? "" : ctx.accessibilityConfig.mainPrevImageTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.configSlide == null ? null : ctx.configSlide.sidePreviews == null ? null : ctx.configSlide.sidePreviews.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("display", ctx.loading ? "none" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("alt", ctx.currentImage.modal.alt ? ctx.currentImage.modal.alt : ctx.getAltDescriptionByImage());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", "rotate" + (ctx.currentImage.modal && ctx.currentImage.modal.angle ? ctx.currentImage.modal.angle : "0"))("src", ctx.currentImage.modal.img, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("title", ctx.currentImage.modal.title ? ctx.currentImage.modal.title : ctx.getTitleToDisplay())("tabindex", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx.currentImage.modal.ariaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.getDescriptionToDisplay() !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.slideConfig == null ? null : ctx.slideConfig.sidePreviews == null ? null : ctx.slideConfig.sidePreviews.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading && (ctx.configCurrentImage == null ? null : ctx.configCurrentImage.loadingConfig == null ? null : ctx.configCurrentImage.loadingConfig.enable));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("nav-right ", ctx.isFirstImage ? "no-pointer" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tabindex", ctx.isLastImage ? 0 - 1 : 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx.accessibilityConfig.mainNextImageAriaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("inside ", ctx.isLastImage ? "empty-arrow-image" : "right-arrow-image", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx.isLastImage ? "" : ctx.accessibilityConfig.mainNextImageTitle);
    } }, directives: function () { return [KeyboardNavigationDirective, _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], SizeDirective,
        DescriptionDirective,
        LoadingSpinnerComponent]; }, styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center}.main-image-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.main-image-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%], .main-image-container[_ngcontent-%COMP%] > .left-sub-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%], .main-image-container[_ngcontent-%COMP%] > .right-sub-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{-webkit-animation:1s animatezoom;animation:1s animatezoom;cursor:pointer;transition:.5s}.main-image-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]:hover, .main-image-container[_ngcontent-%COMP%] > .left-sub-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]:hover, .main-image-container[_ngcontent-%COMP%] > .right-sub-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.main-image-container[_ngcontent-%COMP%] > .left-sub-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.main-image-container[_ngcontent-%COMP%] > .left-sub-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{margin-right:5px;margin-left:15px}.main-image-container[_ngcontent-%COMP%] > .left-sub-container[_ngcontent-%COMP%] > .nav-left.no-pointer[_ngcontent-%COMP%]{cursor:default!important}.main-image-container[_ngcontent-%COMP%] > .right-sub-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.main-image-container[_ngcontent-%COMP%] > .right-sub-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{margin-right:15px;margin-left:5px}.main-image-container[_ngcontent-%COMP%] > .right-sub-container[_ngcontent-%COMP%] > .nav-right.no-pointer[_ngcontent-%COMP%]{cursor:default!important}.main-image-container[_ngcontent-%COMP%]   #current-figure[_ngcontent-%COMP%]{-webkit-animation:.8s fadein-visible;animation:.8s fadein-visible;text-align:center;margin:0;position:relative}.main-image-container[_ngcontent-%COMP%]   #current-figure[_ngcontent-%COMP%] > #current-image[_ngcontent-%COMP%]{max-width:100%;height:auto;display:block}.main-image-container[_ngcontent-%COMP%]   #current-figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{padding:10px;position:absolute;bottom:0;left:0;right:0}.main-image-container[_ngcontent-%COMP%]   #current-figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-weight:700;text-align:center}#current-image[_ngcontent-%COMP%]{height:auto;max-width:80vw;max-height:60vh;cursor:pointer}@media screen and (min-width:70vw){#current-image[_ngcontent-%COMP%]{max-width:70vw}}@-webkit-keyframes fadein-visible{from{opacity:0}to{opacity:1}}@keyframes fadein-visible{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@-webkit-keyframes fadein-semi-visible08{from{opacity:0}to{opacity:.8}}@keyframes fadein-semi-visible08{from{opacity:0}to{opacity:.8}}@-webkit-keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}@keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}", ".arrow-image[_ngcontent-%COMP%], .empty-arrow-image[_ngcontent-%COMP%], .left-arrow-image[_ngcontent-%COMP%], .right-arrow-image[_ngcontent-%COMP%]{width:30px;height:30px;background-size:30px}.empty-arrow-image[_ngcontent-%COMP%]{background:#000;opacity:0}.left-arrow-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:.5s}.left-arrow-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.right-arrow-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:.5s}.right-arrow-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}", "@media only screen and (max-width:1024px),only screen and (max-device-width:1024px){.current-image-next[_ngcontent-%COMP%], .current-image-previous[_ngcontent-%COMP%]{display:none}}@media only screen and (min-device-width:1025px){.current-image-next[_ngcontent-%COMP%], .current-image-preview[_ngcontent-%COMP%], .current-image-previous[_ngcontent-%COMP%]{height:auto;cursor:pointer;opacity:.5;-webkit-animation:.8s fadein-semi-visible05;animation:.8s fadein-semi-visible05}.current-image-next[_ngcontent-%COMP%]:hover, .current-image-preview[_ngcontent-%COMP%]:hover, .current-image-previous[_ngcontent-%COMP%]:hover{opacity:1;transition:.5s}.current-image-previous[_ngcontent-%COMP%]{margin-left:10px;margin-right:5px}.current-image-next[_ngcontent-%COMP%]{margin-right:10px;margin-left:5px}}@-webkit-keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CurrentImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'ks-current-image',
                template: "<main class=\"main-image-container\"\n      ksKeyboardNavigation [isOpen]=\"isOpen\" (keyPress)=\"onKeyPress($event)\"\n      [attr.aria-label]=\"accessibilityConfig.mainContainerAriaLabel\"\n      [title]=\"accessibilityConfig.mainContainerTitle\">\n\n  <div class=\"left-sub-container\">\n    <a class=\"nav-left {{isFirstImage ? 'no-pointer' : ''}}\"\n       [attr.aria-label]=\"accessibilityConfig.mainPrevImageAriaLabel\"\n       [tabindex]=\"isFirstImage ? -1 : 0\" role=\"button\"\n       (click)=\"onNavigationEvent('left', $event, normalAction, isFirstImage)\" (keyup)=\"onNavigationEvent('left', $event, normalAction, isFirstImage)\">\n      <div class=\"inside {{isFirstImage ? 'empty-arrow-image' : 'left-arrow-image'}}\"\n           aria-hidden=\"true\"\n           [title]=\"isFirstImage ? '' : accessibilityConfig.mainPrevImageTitle\"></div>\n    </a>\n\n    <ng-container *ngIf=\"configSlide?.sidePreviews?.show\">\n      <ng-container *ngIf=\"getLeftPreviewImage() as leftPreview\">\n        <img *ngIf=\"!isFirstImage; else firstImage\"\n             class=\"inside current-image-previous\"\n             [src]=\"leftPreview.plain?.img ? leftPreview.plain.img : leftPreview.modal.img\"\n             [hidden]=\"loading\"\n             ksSize [sizeConfig]=\"{width: configSlide.sidePreviews?.size.width, height: configSlide.sidePreviews?.size.height}\"\n             [attr.aria-label]=\"leftPreview.modal.ariaLabel\"\n             [title]=\"leftPreview.modal.title ? leftPreview.modal.title : getDescriptionToDisplay(leftPreview)\"\n             alt=\"{{leftPreview.modal.alt ? leftPreview.modal.alt : getAltDescriptionByImage(leftPreview)}}\"\n             [tabindex]=\"0\" role=\"img\"\n             (click)=\"onNavigationEvent('left', $event, clickAction)\" (keyup)=\"onNavigationEvent('left', $event, keyboardAction)\"/>\n        <ng-template #firstImage>\n          <div class=\"current-image-previous hidden\"\n               ksSize [sizeConfig]=\"{width: configSlide.sidePreviews?.size.width, height: configSlide.sidePreviews?.size.height}\"></div>\n        </ng-template>\n      </ng-container>\n    </ng-container>\n  </div>\n\n\n  <figure id=\"current-figure\" [style.display]=\"loading ? 'none' : ''\">\n    <img id=\"current-image\"\n         class=\"inside\"\n         [ngClass]=\"'rotate' + (currentImage.modal && currentImage.modal.angle ? currentImage.modal.angle : '0')\"\n         [src]=\"currentImage.modal.img\"\n         [attr.aria-label]=\"currentImage.modal.ariaLabel\"\n         [title]=\"currentImage.modal.title ? currentImage.modal.title : getTitleToDisplay()\"\n         alt=\"{{currentImage.modal.alt ? currentImage.modal.alt : getAltDescriptionByImage()}}\"\n         [tabindex]=\"0\" role=\"img\"\n         (load)=\"onImageLoad($event)\"\n         (click)=\"onImageEvent($event, clickAction)\" (keyup)=\"onImageEvent($event, keyboardAction)\"\n         (swipeleft)=\"swipe($event.type)\"\n         (swiperight)=\"swipe($event.type)\"/>\n    <figcaption *ngIf=\"getDescriptionToDisplay() !== ''\"\n                class=\"inside description\"\n                ksDescription [description]=\"configCurrentImage?.description\"\n                [innerHTML]=\"getDescriptionToDisplay()\">\n    </figcaption>\n  </figure>\n\n  <div class=\"right-sub-container\">\n    <ng-container *ngIf=\"slideConfig?.sidePreviews?.show\">\n      <ng-container *ngIf=\"getRightPreviewImage() as rightPreview\">\n        <img *ngIf=\"!isLastImage; else lastImage\"\n             class=\"inside current-image-next\"\n             [src]=\"rightPreview.plain?.img ? rightPreview.plain.img : rightPreview.modal.img\"\n             [hidden]=\"loading\"\n             ksSize [sizeConfig]=\"{width: slideConfig.sidePreviews?.size.width, height: slideConfig.sidePreviews?.size.height}\"\n             [attr.aria-label]=\"rightPreview.modal.ariaLabel\"\n             [title]=\"rightPreview.modal.title ? rightPreview.modal.title : getDescriptionToDisplay(rightPreview)\"\n             alt=\"{{rightPreview.modal.alt ? rightPreview.modal.alt : getAltDescriptionByImage(rightPreview)}}\"\n             [tabindex]=\"0\" role=\"img\"\n             (click)=\"onNavigationEvent('right', $event, clickAction)\" (keyup)=\"onNavigationEvent('right', $event, keyboardAction)\"/>\n        <ng-template #lastImage>\n          <div class=\"current-image-next hidden\"\n               ksSize [sizeConfig]=\"{width: slideConfig.sidePreviews?.size.width, height: slideConfig.sidePreviews?.size.height}\">\n          </div>\n        </ng-template>\n      </ng-container>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && configCurrentImage?.loadingConfig?.enable\">\n      <ks-loading-spinner [loadingConfig]=\"configCurrentImage?.loadingConfig\"\n                          [accessibilityConfig]=\"accessibilityConfig\"></ks-loading-spinner>\n    </ng-container>\n\n    <a class=\"nav-right {{isFirstImage ? 'no-pointer' : ''}}\"\n       [attr.aria-label]=\"accessibilityConfig.mainNextImageAriaLabel\"\n       [tabindex]=\"isLastImage ? -1 : 0\" role=\"button\"\n       (click)=\"onNavigationEvent('right', $event, normalAction, isLastImage)\" (keyup)=\"onNavigationEvent('right', $event, normalAction, isLastImage)\">\n      <div class=\"inside {{isLastImage ? 'empty-arrow-image' : 'right-arrow-image'}}\"\n           aria-hidden=\"true\"\n           [title]=\"isLastImage ? '' : accessibilityConfig.mainNextImageTitle\"></div>\n    </a>\n  </div>\n</main>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
                styles: [":host{display:flex;flex-direction:column;justify-content:center}.main-image-container{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.main-image-container .nav,.main-image-container>.left-sub-container>.nav-left,.main-image-container>.right-sub-container>.nav-right{-webkit-animation:1s animatezoom;animation:1s animatezoom;cursor:pointer;transition:.5s}.main-image-container .nav:hover,.main-image-container>.left-sub-container>.nav-left:hover,.main-image-container>.right-sub-container>.nav-right:hover{transform:scale(1.1)}.main-image-container>.left-sub-container{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.main-image-container>.left-sub-container>.nav-left{margin-right:5px;margin-left:15px}.main-image-container>.left-sub-container>.nav-left.no-pointer{cursor:default!important}.main-image-container>.right-sub-container{display:flex;flex-direction:row;justify-content:space-around;align-items:center}.main-image-container>.right-sub-container>.nav-right{margin-right:15px;margin-left:5px}.main-image-container>.right-sub-container>.nav-right.no-pointer{cursor:default!important}.main-image-container #current-figure{-webkit-animation:.8s fadein-visible;animation:.8s fadein-visible;text-align:center;margin:0;position:relative}.main-image-container #current-figure>#current-image{max-width:100%;height:auto;display:block}.main-image-container #current-figure figcaption{padding:10px;position:absolute;bottom:0;left:0;right:0}.main-image-container #current-figure figcaption .description{font-weight:700;text-align:center}#current-image{height:auto;max-width:80vw;max-height:60vh;cursor:pointer}@media screen and (min-width:70vw){#current-image{max-width:70vw}}@-webkit-keyframes fadein-visible{from{opacity:0}to{opacity:1}}@keyframes fadein-visible{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@-webkit-keyframes fadein-semi-visible08{from{opacity:0}to{opacity:.8}}@keyframes fadein-semi-visible08{from{opacity:0}to{opacity:.8}}@-webkit-keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}@keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}", ".arrow-image,.empty-arrow-image,.left-arrow-image,.right-arrow-image{width:30px;height:30px;background-size:30px}.empty-arrow-image{background:#000;opacity:0}.left-arrow-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:.5s}.left-arrow-image:hover{transform:scale(1.2)}.right-arrow-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:.5s}.right-arrow-image:hover{transform:scale(1.2)}", "@media only screen and (max-width:1024px),only screen and (max-device-width:1024px){.current-image-next,.current-image-previous{display:none}}@media only screen and (min-device-width:1025px){.current-image-next,.current-image-preview,.current-image-previous{height:auto;cursor:pointer;opacity:.5;-webkit-animation:.8s fadein-semi-visible05;animation:.8s fadein-semi-visible05}.current-image-next:hover,.current-image-preview:hover,.current-image-previous:hover{opacity:1;transition:.5s}.current-image-previous{margin-left:10px;margin-right:5px}.current-image-next{margin-right:10px;margin-left:5px}}@-webkit-keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["PLATFORM_ID"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] }]; }, { onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
            args: ['mouseleave']
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], currentImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], currentImageConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], slideConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], accessibilityConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], keyboardConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], loadImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], changeImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }] }); })();
    return CurrentImageComponent;
}(AccessibleComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class `LineLayout` to configure a linear plain gallery.
 */
var  /**
 * Class `LineLayout` to configure a linear plain gallery.
 */
LineLayout = /** @class */ (function () {
    function LineLayout(size, breakConfig, justify) {
        this.size = size;
        this.breakConfig = breakConfig;
        this.justify = justify;
    }
    return LineLayout;
}());
/**
 * Class `GridLayout` to configure a grid plain gallery.
 */
var  /**
 * Class `GridLayout` to configure a grid plain gallery.
 */
GridLayout = /** @class */ (function () {
    function GridLayout(size, breakConfig) {
        this.size = size;
        this.breakConfig = breakConfig;
    }
    return GridLayout;
}());
/**
 * Class `AdvancedLayout` to configure a fully custom plain gallery.
 */
var  /**
 * Class `AdvancedLayout` to configure a fully custom plain gallery.
 */
AdvancedLayout = /** @class */ (function () {
    function AdvancedLayout(modalOpenerByIndex, hideDefaultPlainGallery) {
        this.modalOpenerByIndex = modalOpenerByIndex;
        this.hideDefaultPlainGallery = hideDefaultPlainGallery;
    }
    return AdvancedLayout;
}());
/** @enum {number} */
var PlainGalleryStrategy = {
    // don't use 0 here
    // the first index is 1 and all of the following members are auto-incremented from that point on
    ROW: 1,
    COLUMN: 2,
    GRID: 3,
    CUSTOM: 4 // full custom strategy
    ,
};
PlainGalleryStrategy[PlainGalleryStrategy.ROW] = 'ROW';
PlainGalleryStrategy[PlainGalleryStrategy.COLUMN] = 'COLUMN';
PlainGalleryStrategy[PlainGalleryStrategy.GRID] = 'GRID';
PlainGalleryStrategy[PlainGalleryStrategy.CUSTOM] = 'CUSTOM';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default accessibility configuration.
 * @type {?}
 */
var KS_DEFAULT_ACCESSIBILITY_CONFIG = {
    backgroundAriaLabel: 'Modal gallery full screen background',
    backgroundTitle: '',
    plainGalleryContentAriaLabel: 'Plain gallery content',
    plainGalleryContentTitle: '',
    modalGalleryContentAriaLabel: 'Modal gallery content',
    modalGalleryContentTitle: '',
    loadingSpinnerAriaLabel: 'The current image is loading. Please be patient.',
    loadingSpinnerTitle: 'The current image is loading. Please be patient.',
    mainContainerAriaLabel: 'Current image and navigation',
    mainContainerTitle: '',
    mainPrevImageAriaLabel: 'Previous image',
    mainPrevImageTitle: 'Previous image',
    mainNextImageAriaLabel: 'Next image',
    mainNextImageTitle: 'Next image',
    dotsContainerAriaLabel: 'Image navigation dots',
    dotsContainerTitle: '',
    dotAriaLabel: 'Navigate to image number',
    previewsContainerAriaLabel: 'Image previews',
    previewsContainerTitle: '',
    previewScrollPrevAriaLabel: 'Scroll previous previews',
    previewScrollPrevTitle: 'Scroll previous previews',
    previewScrollNextAriaLabel: 'Scroll next previews',
    previewScrollNextTitle: 'Scroll next previews',
    carouselContainerAriaLabel: 'Current image and navigation',
    carouselContainerTitle: '',
    carouselPrevImageAriaLabel: 'Previous image',
    carouselPrevImageTitle: 'Previous image',
    carouselNextImageAriaLabel: 'Next image',
    carouselNextImageTitle: 'Next image',
    carouselPreviewsContainerAriaLabel: 'Image previews',
    carouselPreviewsContainerTitle: '',
    carouselPreviewScrollPrevAriaLabel: 'Scroll previous previews',
    carouselPreviewScrollPrevTitle: 'Scroll previous previews',
    carouselPreviewScrollNextAriaLabel: 'Scroll next previews',
    carouselPreviewScrollNextTitle: 'Scroll next previews'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Service to check if the provided id is unique
 */
var IdValidatorService = /** @class */ (function () {
    function IdValidatorService() {
        this.ids = new Map();
    }
    /**
     * Method to check and reserve an id for the current instance of the library.
     * In this way, no other instances can use the same id.
     * @param galleryId number or undefined that represents the unique id of the gallery.
     * @return boolean true if success. false is never returned, instead an exception is thrown
     * @throws a error with a message if galleryId is neither unique, < 0 or an integer
     */
    /**
     * Method to check and reserve an id for the current instance of the library.
     * In this way, no other instances can use the same id.
     * @throws a error with a message if galleryId is neither unique, < 0 or an integer
     * @param {?} galleryId number or undefined that represents the unique id of the gallery.
     * @return {?} boolean true if success. false is never returned, instead an exception is thrown
     */
    IdValidatorService.prototype.checkAndAdd = /**
     * Method to check and reserve an id for the current instance of the library.
     * In this way, no other instances can use the same id.
     * @throws a error with a message if galleryId is neither unique, < 0 or an integer
     * @param {?} galleryId number or undefined that represents the unique id of the gallery.
     * @return {?} boolean true if success. false is never returned, instead an exception is thrown
     */
    function (galleryId) {
        if (!Number.isInteger(galleryId) || galleryId < 0) {
            throw new Error('You must provide a valid [id]="unique integer > 0 here" to the gallery/carousel in your template');
        }
        if (this.ids.get(galleryId)) {
            throw new Error("Cannot create gallery with id=" + galleryId + " because already used in your application. This must be a unique integer >= 0");
        }
        this.ids.set(galleryId, galleryId);
        return true;
    };
    /**
     * Method to remove a reserved id. In this way you are able to use the id again for another instance of the library.
     * @param galleryId number or undefined that represents the unique id of the gallery.
     * @return boolean true if success. false is never returned, instead an exception is thrown
     * @throws a error with a message if galleryId is neither integer or < 0
     */
    /**
     * Method to remove a reserved id. In this way you are able to use the id again for another instance of the library.
     * @throws a error with a message if galleryId is neither integer or < 0
     * @param {?} galleryId number or undefined that represents the unique id of the gallery.
     * @return {?} boolean true if success. false is never returned, instead an exception is thrown
     */
    IdValidatorService.prototype.remove = /**
     * Method to remove a reserved id. In this way you are able to use the id again for another instance of the library.
     * @throws a error with a message if galleryId is neither integer or < 0
     * @param {?} galleryId number or undefined that represents the unique id of the gallery.
     * @return {?} boolean true if success. false is never returned, instead an exception is thrown
     */
    function (galleryId) {
        if (!Number.isInteger(galleryId) || galleryId < 0) {
            throw new Error('You must provide a valid [id]="unique integer > 0 here" to the gallery/carousel in your template');
        }
        // if (this.ids.find(id => id === galleryId)) {
        //   throw new Error(`Cannot create gallery with id=${galleryId} because already used in your application. This must be a unique number >= 0.`);
        // }
        this.ids.delete(galleryId);
        return true;
    };
    /** @nocollapse */ IdValidatorService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["defineInjectable"])({ factory: function IdValidatorService_Factory() { return new IdValidatorService(); }, token: IdValidatorService, providedIn: "root" });
IdValidatorService.ɵfac = function IdValidatorService_Factory(t) { return new (t || IdValidatorService)(); };
IdValidatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: IdValidatorService, factory: function (t) { return IdValidatorService.ɵfac(t); }, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](IdValidatorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
    return IdValidatorService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Main Component of this library with both the plain and modal galleries.
 */
var ModalGalleryComponent = /** @class */ (function () {
    /**
     * Constructor with the injection of ´KeyboardService´, an object to support Server-Side Rendering and other useful services.
     */
    function ModalGalleryComponent(keyboardService, galleryService, platformId, changeDetectorRef, idValidatorService) {
        this.keyboardService = keyboardService;
        this.galleryService = galleryService;
        this.platformId = platformId;
        this.changeDetectorRef = changeDetectorRef;
        this.idValidatorService = idValidatorService;
        /**
         * Boolean to enable modal-gallery close behaviour when clicking
         * on the semi-transparent background. Enabled by default.
         */
        this.enableCloseOutside = true;
        /**
         * Object of type `AccessibilityConfig` to init custom accessibility features.
         * For instance, it contains titles, alt texts, aria-labels and so on.
         */
        this.accessibilityConfig = KS_DEFAULT_ACCESSIBILITY_CONFIG;
        /**
         * Output to emit an event when the modal gallery is closed.
         */
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Output to emit an event when an image is changed.
         */
        this.show = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Output to emit an event when the current image is the first one.
         */
        this.firstImage = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Output to emit an event when the current image is the last one.
         */
        this.lastImage = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Output to emit an event when the modal gallery is closed.
         */
        this.hasData = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Output to emit an event when a button is clicked, but before that the action is triggered.
         */
        this.buttonBeforeHook = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Output to emit an event when a button is clicked, but after that the action is triggered.
         */
        this.buttonAfterHook = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Output to emit an event when someone clicks either an arrow of modal gallery or also in previews.
         */
        this.arrow = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Boolean that it is true if the modal gallery is visible. False by default.
         */
        this.opened = false;
        /**
         * Boolean to open the modal gallery. False by default.
         */
        this.showGallery = false;
    }
    /**
     * HostListener to catch browser's back button and destroy the gallery.
     * This prevents weired behaviour about scrolling.
     * Added to fix this issue: https://github.com/Ks89/angular-modal-gallery/issues/159
     */
    /**
     * HostListener to catch browser's back button and destroy the gallery.
     * This prevents weired behaviour about scrolling.
     * Added to fix this issue: https://github.com/Ks89/angular-modal-gallery/issues/159
     * @param {?} e
     * @return {?}
     */
    ModalGalleryComponent.prototype.onPopState = /**
     * HostListener to catch browser's back button and destroy the gallery.
     * This prevents weired behaviour about scrolling.
     * Added to fix this issue: https://github.com/Ks89/angular-modal-gallery/issues/159
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.closeGallery();
    };
    /**
     * Method ´ngOnChanges´ to re-init images if input is changed.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called before `ngOnInit()` and whenever one or more data-bound input properties change.
     * @param changes `SimpleChanges` object of current and previous property values provided by Angular.
     */
    /**
     * Method ´ngOnChanges´ to re-init images if input is changed.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called before `ngOnInit()` and whenever one or more data-bound input properties change.
     * @param {?} changes `SimpleChanges` object of current and previous property values provided by Angular.
     * @return {?}
     */
    ModalGalleryComponent.prototype.ngOnChanges = /**
     * Method ´ngOnChanges´ to re-init images if input is changed.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called before `ngOnInit()` and whenever one or more data-bound input properties change.
     * @param {?} changes `SimpleChanges` object of current and previous property values provided by Angular.
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var imagesChange = changes.modalImages;
        /** @type {?} */
        var plainGalleryConfigChange = changes.plainGalleryConfig;
        if (imagesChange && !imagesChange.firstChange && imagesChange.previousValue !== imagesChange.currentValue) {
            this.initImages();
        }
        if (plainGalleryConfigChange) {
            // const prevPlainGalleryConfigChange: any = plainGalleryConfigChange.previousValue;
            /** @type {?} */
            var currPlainGalleryConfigChange = plainGalleryConfigChange.currentValue;
            if (currPlainGalleryConfigChange.layout &&
                currPlainGalleryConfigChange.layout instanceof AdvancedLayout &&
                currPlainGalleryConfigChange.layout.modalOpenerByIndex !== -1) {
                // console.log('opening modal gallery from custom plain gallery, index: ', currPlainGalleryConfigChange);
                this.showModalGallery(currPlainGalleryConfigChange.layout.modalOpenerByIndex);
            }
        }
    };
    /**
     * Method ´ngOnInit´ to init images calling `initImages()`.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     */
    /**
     * Method ´ngOnInit´ to init images calling `initImages()`.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    ModalGalleryComponent.prototype.ngOnInit = /**
     * Method ´ngOnInit´ to init images calling `initImages()`.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    function () {
        var _this = this;
        this.idValidatorService.checkAndAdd(this.id);
        // id is a mandatory input and must a number > 0
        if ((!this.id && this.id !== 0) || this.id < 0) {
            throw new Error("'[id]=\"a number >= 0\"' is a mandatory input from 6.0.0 in angular-modal-gallery." +
                "If you are using multiple instances of this library, please be sure to use different ids");
        }
        // call initImages to init images and to emit `hasData` event
        this.initImages();
        /** @type {?} */
        var defaultSlideConfig = {
            infinite: false,
            playConfig: (/** @type {?} */ ({ autoPlay: false, interval: 5000, pauseOnHover: true })),
            sidePreviews: (/** @type {?} */ ({ show: true, size: { width: '100px', height: 'auto' } }))
        };
        this.configSlide = Object.assign({}, defaultSlideConfig, this.slideConfig);
        this.galleryServiceNavigateSubscription = this.galleryService.navigate.subscribe((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            if (!payload) {
                return;
            }
            // if galleryId is not valid OR galleryId is related to another instance and not this one
            if (payload.galleryId === undefined || payload.galleryId < 0 || payload.galleryId !== _this.id) {
                return;
            }
            // if image index is not valid
            if (payload.index < 0 || payload.index > _this.images.length) {
                return;
            }
            _this.showModalGallery(payload.index, true);
        }));
        this.galleryServiceCloseSubscription = this.galleryService.close.subscribe((/**
         * @param {?} galleryId
         * @return {?}
         */
        function (galleryId) {
            if (galleryId < 0 || _this.id !== galleryId) {
                return;
            }
            _this.closeGallery(Action.NORMAL, true);
        }));
        this.galleryServiceUpdateSubscription = this.galleryService.update.subscribe((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            if (!payload) {
                return;
            }
            // if galleryId is not valid OR galleryId is related to another instance and not this one
            if (payload.galleryId === undefined || payload.galleryId < 0 || payload.galleryId !== _this.id) {
                return;
            }
            // if either image index or image are not valid
            if (payload.index < 0 || payload.index > _this.images.length || !payload.image) {
                return;
            }
            /** @type {?} */
            var currentIndex = getIndex(payload.image, _this.images);
            _this.images = _this.images.map((/**
             * @param {?} image
             * @param {?} index
             * @return {?}
             */
            function (image, index) {
                if (image.id === payload.index) {
                    return (/** @type {?} */ (payload.image));
                }
                return image;
            }));
            if (currentIndex === payload.index) {
                _this.currentImage = _this.images[payload.index];
            }
            _this.changeDetectorRef.markForCheck();
        }));
        this.galleryServiceAutoPlaySubscription = this.galleryService.autoPlay.subscribe((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            // if galleryId is not valid OR galleryId is related to another instance and not this one
            if (payload.galleryId === undefined || payload.galleryId < 0 || payload.galleryId !== _this.id) {
                return;
            }
            _this.configSlide.playConfig.autoPlay = payload.result;
        }));
    };
    /**
     * Method called by custom upper buttons.
     * @param ButtonEvent event payload
     */
    /**
     * Method called by custom upper buttons.
     * @param {?} event
     * @return {?}
     */
    ModalGalleryComponent.prototype.onCustomEmit = /**
     * Method called by custom upper buttons.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var eventToEmit = this.getButtonEventToEmit(event);
        this.buttonBeforeHook.emit(eventToEmit);
        // console.log('on onCustomEmit', eventToEmit);
        this.buttonAfterHook.emit(eventToEmit);
    };
    // TODO implement on refresh
    // /**
    //  * Method called by the refresh upper button.
    //  * STILL NOT IMPLEMENTED, SO DON'T USE IT
    //  * @param ButtonEvent event payload
    //  */
    // onRefresh(event: ButtonEvent) {
    //   const eventToEmit: ButtonEvent = this.getButtonEventToEmit(event);
    //
    //   this.buttonBeforeHook.emit(eventToEmit);
    //   // console.log('TODO implement on refresh inside the library', eventToEmit);
    //
    //   this.currentImage = Object.assign({}, this.currentImage, { previouslyLoaded: false });
    //
    //   // TODO add logic to hide and show the current image
    //
    //   // console.log('onRefresh', this.currentImage);
    //
    //   // const indexNum: number = this.currentImageComponent.getIndex();
    //
    //   // this.images = this.images.map((val: InternalLibImage, index: number) => {
    //   //   if (index !== 2) {
    //   //     return val;
    //   //   } else {
    //   //     const img: InternalLibImage = Object.assign({}, val, {previouslyLoaded: false});
    //   //     return img;
    //   //   }
    //   // });
    //   //
    //   // this.closeGallery();
    //   // this.showModalGallery(2);
    //
    //   this.buttonAfterHook.emit(eventToEmit);
    // }
    // /**
    //  * Method called by the rotate upper button.
    //  * @param ButtonEvent event payload
    //  */
    // onRotate(event: ButtonEvent) {
    //   const eventToEmit: ButtonEvent = this.getButtonEventToEmit(event);
    //   this.buttonBeforeHook.emit(eventToEmit);
    //
    //   // TODO implement rotation logic
    //
    //   this.buttonAfterHook.emit(eventToEmit);
    // }
    /**
     * Method called by the full-screen upper button.
     * @param ButtonEvent event payload
     */
    // TODO implement on refresh
    // /**
    //  * Method called by the refresh upper button.
    //  * STILL NOT IMPLEMENTED, SO DON'T USE IT
    //  * @param ButtonEvent event payload
    //  */
    // onRefresh(event: ButtonEvent) {
    //   const eventToEmit: ButtonEvent = this.getButtonEventToEmit(event);
    //
    //   this.buttonBeforeHook.emit(eventToEmit);
    //   // console.log('TODO implement on refresh inside the library', eventToEmit);
    //
    //   this.currentImage = Object.assign({}, this.currentImage, { previouslyLoaded: false });
    //
    //   // TODO add logic to hide and show the current image
    //
    //   // console.log('onRefresh', this.currentImage);
    //
    //   // const indexNum: number = this.currentImageComponent.getIndex();
    //
    //   // this.images = this.images.map((val: InternalLibImage, index: number) => {
    //   //   if (index !== 2) {
    //   //     return val;
    //   //   } else {
    //   //     const img: InternalLibImage = Object.assign({}, val, {previouslyLoaded: false});
    //   //     return img;
    //   //   }
    //   // });
    //   //
    //   // this.closeGallery();
    //   // this.showModalGallery(2);
    //
    //   this.buttonAfterHook.emit(eventToEmit);
    // }
    // /**
    //  * Method called by the rotate upper button.
    //  * @param ButtonEvent event payload
    //  */
    // onRotate(event: ButtonEvent) {
    //   const eventToEmit: ButtonEvent = this.getButtonEventToEmit(event);
    //   this.buttonBeforeHook.emit(eventToEmit);
    //
    //   // TODO implement rotation logic
    //
    //   this.buttonAfterHook.emit(eventToEmit);
    // }
    /**
     * Method called by the full-screen upper button.
     * @param {?} event
     * @return {?}
     */
    ModalGalleryComponent.prototype.onFullScreen = 
    // TODO implement on refresh
    // /**
    //  * Method called by the refresh upper button.
    //  * STILL NOT IMPLEMENTED, SO DON'T USE IT
    //  * @param ButtonEvent event payload
    //  */
    // onRefresh(event: ButtonEvent) {
    //   const eventToEmit: ButtonEvent = this.getButtonEventToEmit(event);
    //
    //   this.buttonBeforeHook.emit(eventToEmit);
    //   // console.log('TODO implement on refresh inside the library', eventToEmit);
    //
    //   this.currentImage = Object.assign({}, this.currentImage, { previouslyLoaded: false });
    //
    //   // TODO add logic to hide and show the current image
    //
    //   // console.log('onRefresh', this.currentImage);
    //
    //   // const indexNum: number = this.currentImageComponent.getIndex();
    //
    //   // this.images = this.images.map((val: InternalLibImage, index: number) => {
    //   //   if (index !== 2) {
    //   //     return val;
    //   //   } else {
    //   //     const img: InternalLibImage = Object.assign({}, val, {previouslyLoaded: false});
    //   //     return img;
    //   //   }
    //   // });
    //   //
    //   // this.closeGallery();
    //   // this.showModalGallery(2);
    //
    //   this.buttonAfterHook.emit(eventToEmit);
    // }
    // /**
    //  * Method called by the rotate upper button.
    //  * @param ButtonEvent event payload
    //  */
    // onRotate(event: ButtonEvent) {
    //   const eventToEmit: ButtonEvent = this.getButtonEventToEmit(event);
    //   this.buttonBeforeHook.emit(eventToEmit);
    //
    //   // TODO implement rotation logic
    //
    //   this.buttonAfterHook.emit(eventToEmit);
    // }
    /**
     * Method called by the full-screen upper button.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var eventToEmit = this.getButtonEventToEmit(event);
        this.buttonBeforeHook.emit(eventToEmit);
        /** @type {?} */
        var doc = (/** @type {?} */ (document));
        /** @type {?} */
        var docEl = (/** @type {?} */ (document.documentElement));
        /** @type {?} */
        var fullscreenDisabled = !doc.fullscreenElement && !doc.webkitFullscreenElement && !doc.mozFullScreenElement && !doc.msFullscreenElement;
        if (fullscreenDisabled) {
            if (docEl.requestFullscreen) {
                docEl.requestFullscreen();
            }
            else if (docEl.webkitRequestFullscreen) {
                docEl.webkitRequestFullscreen();
            }
            else if (docEl.mozRequestFullScreen) {
                docEl.mozRequestFullScreen();
            }
            else if (docEl.msRequestFullscreen) {
                docEl.msRequestFullscreen();
            }
        }
        else {
            if (doc.exitFullscreen) {
                doc.exitFullscreen();
            }
            else if (doc.msExitFullscreen) {
                doc.msExitFullscreen();
            }
            else if (doc.mozCancelFullScreen) {
                doc.mozCancelFullScreen();
            }
            else if (doc.webkitExitFullscreen) {
                doc.webkitExitFullscreen();
            }
        }
        this.buttonAfterHook.emit(eventToEmit);
    };
    /**
     * Method called by the delete upper button.
     * @param ButtonEvent event payload
     */
    /**
     * Method called by the delete upper button.
     * @param {?} event
     * @return {?}
     */
    ModalGalleryComponent.prototype.onDelete = /**
     * Method called by the delete upper button.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var eventToEmit = this.getButtonEventToEmit(event);
        this.buttonBeforeHook.emit(eventToEmit);
        if (this.images.length === 1) {
            this.closeGallery();
        }
        /** @type {?} */
        var imageIndexToDelete = this.currentImageComponent.getIndexToDelete(event.image);
        if (imageIndexToDelete === this.images.length - 1) {
            // last image
            this.currentImageComponent.prevImage();
        }
        else {
            this.currentImageComponent.nextImage();
        }
        this.buttonAfterHook.emit(eventToEmit);
    };
    /**
     * Method called by the navigate upper button.
     * @param ButtonEvent event payload
     */
    /**
     * Method called by the navigate upper button.
     * @param {?} event
     * @return {?}
     */
    ModalGalleryComponent.prototype.onNavigate = /**
     * Method called by the navigate upper button.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var eventToEmit = this.getButtonEventToEmit(event);
        this.buttonBeforeHook.emit(eventToEmit);
        // To support SSR
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            if (eventToEmit.image && eventToEmit.image.modal.extUrl) {
                // where I should open this link? The current tab or another one?
                if (eventToEmit.button && eventToEmit.button.extUrlInNewTab) {
                    // in this case I should use target _blank to open the url in a new tab, however these is a security issue.
                    // Prevent Reverse Tabnabbing's attacks (https://www.owasp.org/index.php/Reverse_Tabnabbing)
                    // Some resources:
                    // - https://www.owasp.org/index.php/HTML5_Security_Cheat_Sheet#Tabnabbing
                    // - https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c
                    // - https://developer.mozilla.org/en-US/docs/Web/API/Window/open
                    /** @type {?} */
                    var newWindow = window.open(eventToEmit.image.modal.extUrl, 'noopener,noreferrer,');
                    newWindow.opener = null; // required to prevent security issues
                }
                else {
                    window.location.href = eventToEmit.image.modal.extUrl;
                }
            }
        }
        this.buttonAfterHook.emit(eventToEmit);
    };
    /**
     * Method called by the download upper button.
     * @param ButtonEvent event payload
     */
    /**
     * Method called by the download upper button.
     * @param {?} event
     * @return {?}
     */
    ModalGalleryComponent.prototype.onDownload = /**
     * Method called by the download upper button.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var eventToEmit = this.getButtonEventToEmit(event);
        this.buttonBeforeHook.emit(eventToEmit);
        this.downloadImage();
        this.buttonAfterHook.emit(eventToEmit);
    };
    /**
     * Method called by the close upper button.
     * @param ButtonEvent event payload
     * @param Action action that triggered the close method. `Action.NORMAL` by default
     */
    /**
     * Method called by the close upper button.
     * @param {?} event
     * @param {?=} action
     * @return {?}
     */
    ModalGalleryComponent.prototype.onCloseGallery = /**
     * Method called by the close upper button.
     * @param {?} event
     * @param {?=} action
     * @return {?}
     */
    function (event, action) {
        if (action === void 0) { action = Action.NORMAL; }
        /** @type {?} */
        var eventToEmit = this.getButtonEventToEmit(event);
        this.buttonBeforeHook.emit(eventToEmit);
        this.closeGallery(action);
        this.buttonAfterHook.emit(eventToEmit);
    };
    /**
     * Method to close the modal gallery specifying the action.
     * It also reset the `keyboardService` to prevent multiple listeners.
     * @param Action action type. `Action.NORMAL` by default
     * @param boolean isCalledByService is true if called by gallery.service, otherwise false
     */
    /**
     * Method to close the modal gallery specifying the action.
     * It also reset the `keyboardService` to prevent multiple listeners.
     * @param {?=} action
     * @param {?=} isCalledByService
     * @return {?}
     */
    ModalGalleryComponent.prototype.closeGallery = /**
     * Method to close the modal gallery specifying the action.
     * It also reset the `keyboardService` to prevent multiple listeners.
     * @param {?=} action
     * @param {?=} isCalledByService
     * @return {?}
     */
    function (action, isCalledByService) {
        if (action === void 0) { action = Action.NORMAL; }
        if (isCalledByService === void 0) { isCalledByService = false; }
        this.close.emit(new ImageModalEvent(action, true));
        this.opened = false;
        this.keyboardService.reset();
        // shows scrollbar
        document.body.style.overflow = 'visible';
        if (isCalledByService) {
            // the following is required, otherwise the view will not be updated
            // this happens only if called by gallery.service
            this.changeDetectorRef.markForCheck();
        }
    };
    /**
     * Method called when you click on an image of your plain (or inline) gallery.
     * @param number index of the clicked image
     */
    /**
     * Method called when you click on an image of your plain (or inline) gallery.
     * @param {?} index
     * @return {?}
     */
    ModalGalleryComponent.prototype.onShowModalGallery = /**
     * Method called when you click on an image of your plain (or inline) gallery.
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.showModalGallery(index);
    };
    /**
     * Method to show the modal gallery displaying the image with
     * the index specified as input parameter.
     * It will also register a new `keyboardService` to catch keyboard's events to download the current
     * image with keyboard's shortcuts. This service, will be removed either when modal gallery component
     * will be destroyed or when the gallery is closed invoking the `closeGallery` method.
     * @param number index of the image to show
     * @param boolean isCalledByService is true if called by gallery.service, otherwise false
     */
    /**
     * Method to show the modal gallery displaying the image with
     * the index specified as input parameter.
     * It will also register a new `keyboardService` to catch keyboard's events to download the current
     * image with keyboard's shortcuts. This service, will be removed either when modal gallery component
     * will be destroyed or when the gallery is closed invoking the `closeGallery` method.
     * @param {?} index
     * @param {?=} isCalledByService
     * @return {?}
     */
    ModalGalleryComponent.prototype.showModalGallery = /**
     * Method to show the modal gallery displaying the image with
     * the index specified as input parameter.
     * It will also register a new `keyboardService` to catch keyboard's events to download the current
     * image with keyboard's shortcuts. This service, will be removed either when modal gallery component
     * will be destroyed or when the gallery is closed invoking the `closeGallery` method.
     * @param {?} index
     * @param {?=} isCalledByService
     * @return {?}
     */
    function (index, isCalledByService) {
        var _this = this;
        if (isCalledByService === void 0) { isCalledByService = false; }
        // hides scrollbar
        document.body.style.overflow = 'hidden';
        this.keyboardService.add((/**
         * @param {?} event
         * @param {?} combo
         * @return {?}
         */
        function (event, combo) {
            if (event.preventDefault) {
                event.preventDefault();
            }
            else {
                // internet explorer
                event.returnValue = false;
            }
            _this.downloadImage();
        }));
        this.opened = true;
        this.currentImage = this.images[index];
        // emit a new ImageModalEvent with the index of the current image
        this.show.emit(new ImageModalEvent(Action.LOAD, index + 1));
        if (isCalledByService) {
            // the following is required, otherwise the view will not be updated
            // this happens only if called by gallery.service
            this.changeDetectorRef.markForCheck();
        }
    };
    /**
     * Method called when the image changes and used to update the `currentImage` object.
     * @param ImageModalEvent event payload
     */
    /**
     * Method called when the image changes and used to update the `currentImage` object.
     * @param {?} event
     * @return {?}
     */
    ModalGalleryComponent.prototype.onChangeCurrentImage = /**
     * Method called when the image changes and used to update the `currentImage` object.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var newIndex = (/** @type {?} */ (event.result));
        if (newIndex < 0 || newIndex >= this.images.length) {
            return;
        }
        this.currentImage = this.images[newIndex];
        // emit first/last event based on newIndex value
        this.emitBoundaryEvent(event.action, newIndex);
        // emit current visible image index
        this.show.emit(new ImageModalEvent(event.action, newIndex + 1));
    };
    /**
     * @return {?}
     */
    ModalGalleryComponent.prototype.isPlainGalleryVisible = /**
     * @return {?}
     */
    function () {
        if (this.plainGalleryConfig && this.plainGalleryConfig.layout && this.plainGalleryConfig.layout instanceof AdvancedLayout) {
            return !this.plainGalleryConfig.layout.hideDefaultPlainGallery;
        }
        return true;
    };
    /**
     * Method called when you click 'outside' (i.e. on the semi-transparent background)
     * to close the modal gallery if `enableCloseOutside` is true.
     * @param boolean event payload. True to close the modal gallery, false otherwise
     */
    /**
     * Method called when you click 'outside' (i.e. on the semi-transparent background)
     * to close the modal gallery if `enableCloseOutside` is true.
     * @param {?} event
     * @return {?}
     */
    ModalGalleryComponent.prototype.onClickOutside = /**
     * Method called when you click 'outside' (i.e. on the semi-transparent background)
     * to close the modal gallery if `enableCloseOutside` is true.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event && this.enableCloseOutside) {
            this.closeGallery(Action.CLICK);
        }
    };
    /**
     * Method called when an image is loaded and the loading spinner has gone.
     * It sets the previouslyLoaded flag inside the Image to hide loading spinner when displayed again.
     * @param ImageLoadEvent event payload
     */
    /**
     * Method called when an image is loaded and the loading spinner has gone.
     * It sets the previouslyLoaded flag inside the Image to hide loading spinner when displayed again.
     * @param {?} event
     * @return {?}
     */
    ModalGalleryComponent.prototype.onImageLoad = /**
     * Method called when an image is loaded and the loading spinner has gone.
     * It sets the previouslyLoaded flag inside the Image to hide loading spinner when displayed again.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // console.log('modal-image onImageLoad', event);
        // console.log('modal-image onImageLoad images before', this.images);
        // sets as previously loaded the image with index specified by `event.status`
        this.images = this.images.map((/**
         * @param {?} img
         * @return {?}
         */
        function (img) {
            if (img && img.id === event.id) {
                return Object.assign({}, img, { previouslyLoaded: event.status });
            }
            return img;
        }));
        // console.log('modal-image onImageLoad images after', this.images);
    };
    /**
     * Method called when a dot is clicked and used to update the current image.
     * @param number index of the clicked dot
     */
    /**
     * Method called when a dot is clicked and used to update the current image.
     * @param {?} index
     * @return {?}
     */
    ModalGalleryComponent.prototype.onClickDot = /**
     * Method called when a dot is clicked and used to update the current image.
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.currentImage = this.images[index];
    };
    /**
     * Method called when an image preview is clicked and used to update the current image.
     * @param Image preview image
     */
    /**
     * Method called when an image preview is clicked and used to update the current image.
     * @param {?} event
     * @return {?}
     */
    ModalGalleryComponent.prototype.onClickPreview = /**
     * Method called when an image preview is clicked and used to update the current image.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onChangeCurrentImage(event);
    };
    // onClickArrow(event: InteractionEvent) {
    //   // TODO validate before to emit
    //   this.arrow.emit(event);
    // }
    /**
     * Method to download the current image, only if `downloadable` is true.
     * It contains also a logic to enable downloading features also for IE11.
     */
    // onClickArrow(event: InteractionEvent) {
    //   // TODO validate before to emit
    //   this.arrow.emit(event);
    // }
    /**
     * Method to download the current image, only if `downloadable` is true.
     * It contains also a logic to enable downloading features also for IE11.
     * @return {?}
     */
    ModalGalleryComponent.prototype.downloadImage = 
    // onClickArrow(event: InteractionEvent) {
    //   // TODO validate before to emit
    //   this.arrow.emit(event);
    // }
    /**
     * Method to download the current image, only if `downloadable` is true.
     * It contains also a logic to enable downloading features also for IE11.
     * @return {?}
     */
    function () {
        if (this.currentImageConfig && !this.currentImageConfig.downloadable) {
            return;
        }
        // If IE11 or Microsoft Edge use msSaveBlob(...)
        if (this.isIEorEdge()) {
            // I cannot use fetch API because IE11 doesn't support it,
            // so I have to switch to XMLHttpRequest
            this.downloadImageOnlyIEorEdge();
        }
        else {
            // for all other browsers
            this.downloadImageAllBrowsers();
        }
    };
    /**
     * Method to cleanup resources. In fact, this will reset keyboard's service.
     * This is an Angular's lifecycle hook that is called when this component is destroyed.
     */
    /**
     * Method to cleanup resources. In fact, this will reset keyboard's service.
     * This is an Angular's lifecycle hook that is called when this component is destroyed.
     * @return {?}
     */
    ModalGalleryComponent.prototype.ngOnDestroy = /**
     * Method to cleanup resources. In fact, this will reset keyboard's service.
     * This is an Angular's lifecycle hook that is called when this component is destroyed.
     * @return {?}
     */
    function () {
        this.keyboardService.reset();
        this.idValidatorService.remove(this.id);
        if (this.galleryServiceNavigateSubscription) {
            this.galleryServiceNavigateSubscription.unsubscribe();
        }
        if (this.galleryServiceCloseSubscription) {
            this.galleryServiceCloseSubscription.unsubscribe();
        }
        if (this.galleryServiceUpdateSubscription) {
            this.galleryServiceUpdateSubscription.unsubscribe();
        }
        if (this.galleryServiceAutoPlaySubscription) {
            this.galleryServiceAutoPlaySubscription.unsubscribe();
        }
    };
    /**
     * Private method to download the current image for all browsers except for IE11.
     */
    /**
     * Private method to download the current image for all browsers except for IE11.
     * @private
     * @return {?}
     */
    ModalGalleryComponent.prototype.downloadImageAllBrowsers = /**
     * Private method to download the current image for all browsers except for IE11.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var link = document.createElement('a');
        link.href = (/** @type {?} */ (this.currentImage.modal.img));
        link.setAttribute('download', this.getFileName(this.currentImage));
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    /**
     * Private method to download the current image only for IE11 using
     * custom javascript's methods available only on IE.
     */
    /**
     * Private method to download the current image only for IE11 using
     * custom javascript's methods available only on IE.
     * @private
     * @return {?}
     */
    ModalGalleryComponent.prototype.downloadImageOnlyIEorEdge = /**
     * Private method to download the current image only for IE11 using
     * custom javascript's methods available only on IE.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            /** @type {?} */
            var req_1 = new XMLHttpRequest();
            req_1.open('GET', (/** @type {?} */ (this.currentImage.modal.img)), true);
            req_1.responseType = 'arraybuffer';
            req_1.onload = (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                /** @type {?} */
                var blob = new Blob([req_1.response], { type: 'image/png' });
                window.navigator.msSaveBlob(blob, _this.getFileName(_this.currentImage));
            });
            req_1.send();
        }
    };
    /**
     * Private method to get the `ButtonEvent` to emit, merging the input `ButtonEvent`
     * with the current image.
     * @param ButtonEvent event payload to return
     * @returns ButtonEvent event payload with the current image included
     */
    /**
     * Private method to get the `ButtonEvent` to emit, merging the input `ButtonEvent`
     * with the current image.
     * @private
     * @param {?} event
     * @return {?} ButtonEvent event payload with the current image included
     */
    ModalGalleryComponent.prototype.getButtonEventToEmit = /**
     * Private method to get the `ButtonEvent` to emit, merging the input `ButtonEvent`
     * with the current image.
     * @private
     * @param {?} event
     * @return {?} ButtonEvent event payload with the current image included
     */
    function (event) {
        return Object.assign(event, { image: this.currentImage });
    };
    /**
     * Private method to get the file name from an input path.
     * This is used either to get the image's name from its path or from the Image itself,
     * if specified as 'downloadFileName' by the user.
     * @param Image image to extract its file name
     * @returns string string file name of the input image.
     */
    /**
     * Private method to get the file name from an input path.
     * This is used either to get the image's name from its path or from the Image itself,
     * if specified as 'downloadFileName' by the user.
     * @private
     * @param {?} image
     * @return {?} string string file name of the input image.
     */
    ModalGalleryComponent.prototype.getFileName = /**
     * Private method to get the file name from an input path.
     * This is used either to get the image's name from its path or from the Image itself,
     * if specified as 'downloadFileName' by the user.
     * @private
     * @param {?} image
     * @return {?} string string file name of the input image.
     */
    function (image) {
        if (!image.modal.downloadFileName || image.modal.downloadFileName.length === 0) {
            return ((/** @type {?} */ (this.currentImage.modal.img))).replace(/^.*[\\\/]/, '');
        }
        else {
            return image.modal.downloadFileName;
        }
    };
    /**
     * Private method to initialize `images` as array of `Image`s.
     * Also, it will emit ImageowmodaModalEvent to say that images are loaded.
     */
    /**
     * Private method to initialize `images` as array of `Image`s.
     * Also, it will emit ImageowmodaModalEvent to say that images are loaded.
     * @private
     * @return {?}
     */
    ModalGalleryComponent.prototype.initImages = /**
     * Private method to initialize `images` as array of `Image`s.
     * Also, it will emit ImageowmodaModalEvent to say that images are loaded.
     * @private
     * @return {?}
     */
    function () {
        // I'm not cloning the array, but I'm doing this to cast it to an array of InternalLibImages
        this.images = (/** @type {?} */ (this.modalImages));
        this.hasData.emit(new ImageModalEvent(Action.LOAD, true));
        this.showGallery = this.images.length > 0;
    };
    /**
     * Private method to emit events when either the last or the first image are visible.
     * @param action Enum of type Action that represents the source of the event that changed the
     *  current image to the first one or the last one.
     * @param indexToCheck is the index number of the image (the first or the last one).
     */
    /**
     * Private method to emit events when either the last or the first image are visible.
     * @private
     * @param {?} action Enum of type Action that represents the source of the event that changed the
     *  current image to the first one or the last one.
     * @param {?} indexToCheck is the index number of the image (the first or the last one).
     * @return {?}
     */
    ModalGalleryComponent.prototype.emitBoundaryEvent = /**
     * Private method to emit events when either the last or the first image are visible.
     * @private
     * @param {?} action Enum of type Action that represents the source of the event that changed the
     *  current image to the first one or the last one.
     * @param {?} indexToCheck is the index number of the image (the first or the last one).
     * @return {?}
     */
    function (action, indexToCheck) {
        // to emit first/last event
        switch (indexToCheck) {
            case 0:
                this.firstImage.emit(new ImageModalEvent(action, true));
                break;
            case this.images.length - 1:
                this.lastImage.emit(new ImageModalEvent(action, true));
                break;
        }
    };
    /**
     * Private method to check if this library is running on
     * Microsoft browsers or not (i.e. it detects both IE11 and Edge)
     * supporting also Server-Side Rendering.
     * Inspired by https://msdn.microsoft.com/it-it/library/hh779016(v=vs.85).aspx
     * @returns any the result
     */
    /**
     * Private method to check if this library is running on
     * Microsoft browsers or not (i.e. it detects both IE11 and Edge)
     * supporting also Server-Side Rendering.
     * Inspired by https://msdn.microsoft.com/it-it/library/hh779016(v=vs.85).aspx
     * @private
     * @return {?} any the result
     */
    ModalGalleryComponent.prototype.isIEorEdge = /**
     * Private method to check if this library is running on
     * Microsoft browsers or not (i.e. it detects both IE11 and Edge)
     * supporting also Server-Side Rendering.
     * Inspired by https://msdn.microsoft.com/it-it/library/hh779016(v=vs.85).aspx
     * @private
     * @return {?} any the result
     */
    function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            // if both Blob constructor and msSaveOrOpenBlob are supported by the current browser
            return window.Blob && window.navigator.msSaveOrOpenBlob;
        }
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformServer"])(this.platformId)) {
            // server only
            return true;
        }
    };
    /** @nocollapse */
    ModalGalleryComponent.ctorParameters = function () { return [
        { type: KeyboardService },
        { type: GalleryService },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["PLATFORM_ID"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] },
        { type: IdValidatorService }
    ]; };
    ModalGalleryComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        modalImages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        buttonsConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        enableCloseOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        currentImageConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        dotsConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        previewConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        slideConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        accessibilityConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        keyboardConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        plainGalleryConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        firstImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        lastImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        hasData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        buttonBeforeHook: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        buttonAfterHook: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        arrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        currentImageComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: [CurrentImageComponent,] }],
        onPopState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"], args: ['window:popstate', ['$event'],] }]
    };
ModalGalleryComponent.ɵfac = function ModalGalleryComponent_Factory(t) { return new (t || ModalGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](KeyboardService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](GalleryService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](IdValidatorService)); };
ModalGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ModalGalleryComponent, selectors: [["ks-modal-gallery"]], viewQuery: function ModalGalleryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](CurrentImageComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.currentImageComponent = _t.first);
    } }, hostBindings: function ModalGalleryComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("popstate", function ModalGalleryComponent_popstate_HostBindingHandler($event) { return ctx.onPopState($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
    } }, inputs: { enableCloseOutside: "enableCloseOutside", accessibilityConfig: "accessibilityConfig", id: "id", modalImages: "modalImages", buttonsConfig: "buttonsConfig", currentImageConfig: "currentImageConfig", dotsConfig: "dotsConfig", previewConfig: "previewConfig", slideConfig: "slideConfig", keyboardConfig: "keyboardConfig", plainGalleryConfig: "plainGalleryConfig" }, outputs: { close: "close", show: "show", firstImage: "firstImage", lastImage: "lastImage", hasData: "hasData", buttonBeforeHook: "buttonBeforeHook", buttonAfterHook: "buttonAfterHook", arrow: "arrow" }, exportAs: ["ksModalGallery"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]()], decls: 3, vars: 7, consts: [[3, "images", "showGallery", "plainGalleryConfig", "accessibilityConfig", "show"], [3, "isOpen", "accessibilityConfig"], ["id", "modal-gallery-wrapper", "ksClickOutside", "", 3, "title", "clickOutsideEnable", "clickOutside", 4, "ngIf"], ["id", "modal-gallery-wrapper", "ksClickOutside", "", 3, "title", "clickOutsideEnable", "clickOutside"], ["id", "flex-min-height-ie-fix"], ["id", "modal-gallery-container"], [3, "currentImage", "buttonsConfig", "delete", "navigate", "download", "close", "fullscreen", "customEmit"], [3, "id", "images", "currentImage", "isOpen", "slideConfig", "keyboardConfig", "accessibilityConfig", "currentImageConfig", "loadImage", "changeImage", "close"], [3, "images", "currentImage", "dotsConfig", "accessibilityConfig", "clickDot"], [3, "images", "currentImage", "previewConfig", "accessibilityConfig", "clickPreview"]], template: function ModalGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ks-plain-gallery", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("show", function ModalGalleryComponent_Template_ks_plain_gallery_show_0_listener($event) { return ctx.onShowModalGallery($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ks-background", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ModalGalleryComponent_div_2_Template, 8, 21, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("images", ctx.images)("showGallery", ctx.showGallery && ctx.isPlainGalleryVisible())("plainGalleryConfig", ctx.plainGalleryConfig)("accessibilityConfig", ctx.accessibilityConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isOpen", ctx.opened)("accessibilityConfig", ctx.accessibilityConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.opened);
    } }, directives: function () { return [PlainGalleryComponent,
        BackgroundComponent, _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], ClickOutsideDirective,
        UpperButtonsComponent,
        CurrentImageComponent,
        DotsComponent,
        PreviewsComponent]; }, styles: ["#modal-gallery-wrapper[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:10000}#flex-min-height-ie-fix[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}#modal-gallery-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;min-height:100vh}"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](ModalGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'ks-modal-gallery',
                exportAs: 'ksModalGallery',
                template: "<ks-plain-gallery [images]=\"images\"\n                  [showGallery]=\"showGallery && isPlainGalleryVisible()\"\n                  [plainGalleryConfig]=\"plainGalleryConfig\"\n                  [accessibilityConfig]=\"accessibilityConfig\"\n                  (show)=\"onShowModalGallery($event)\"></ks-plain-gallery>\n\n<ks-background [isOpen]=\"opened\"\n               [accessibilityConfig]=\"accessibilityConfig\"></ks-background>\n\n<div id=\"modal-gallery-wrapper\" *ngIf=\"opened\"\n     [attr.aria-label]=\"accessibilityConfig.modalGalleryContentAriaLabel\"\n     [title]=\"accessibilityConfig.modalGalleryContentTitle\"\n     ksClickOutside [clickOutsideEnable]=\"enableCloseOutside\"\n     (clickOutside)=\"onClickOutside($event)\">\n\n  <div id=\"flex-min-height-ie-fix\">\n    <div id=\"modal-gallery-container\">\n\n      <ks-upper-buttons [currentImage]=\"currentImage\"\n                        [buttonsConfig]=\"buttonsConfig\"\n                        (delete)=\"onDelete($event)\"\n                        (navigate)=\"onNavigate($event)\"\n                        (download)=\"onDownload($event)\"\n                        (close)=\"onCloseGallery($event)\"\n                        (fullscreen)=\"onFullScreen($event)\"\n                        (customEmit)=\"onCustomEmit($event)\"></ks-upper-buttons>\n                        <!--(rotate)=\"onRotate($event)\"-->\n\n      <ks-current-image [id]=\"id\"\n                        [images]=\"images\"\n                        [currentImage]=\"currentImage\"\n                        [isOpen]=\"opened\"\n                        [slideConfig]=\"configSlide\"\n                        [keyboardConfig]=\"keyboardConfig\"\n                        [accessibilityConfig]=\"accessibilityConfig\"\n                        [currentImageConfig]=\"currentImageConfig\"\n                        (loadImage)=\"onImageLoad($event)\"\n                        (changeImage)=\"onChangeCurrentImage($event)\"\n                        (close)=\"onCloseGallery($event)\"></ks-current-image>\n\n      <div>\n        <ks-dots [images]=\"images\"\n                 [currentImage]=\"currentImage\"\n                 [dotsConfig]=\"dotsConfig\"\n                 [accessibilityConfig]=\"accessibilityConfig\"\n                 (clickDot)=\"onClickDot($event)\"></ks-dots>\n\n        <ks-previews [images]=\"images\"\n                     [currentImage]=\"currentImage\"\n                     [previewConfig]=\"previewConfig\"\n                     [accessibilityConfig]=\"accessibilityConfig\"\n                     (clickPreview)=\"onClickPreview($event)\"></ks-previews>\n      </div>\n    </div>\n  </div>\n</div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
                styles: ["#modal-gallery-wrapper{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:10000}#flex-min-height-ie-fix{display:flex;flex-direction:column;justify-content:center}#modal-gallery-container{display:flex;flex-direction:column;justify-content:space-between;min-height:100vh}"]
            }]
    }], function () { return [{ type: KeyboardService }, { type: GalleryService }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["PLATFORM_ID"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] }, { type: IdValidatorService }]; }, { enableCloseOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], accessibilityConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], firstImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], lastImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], hasData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], buttonBeforeHook: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], buttonAfterHook: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], arrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], onPopState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
            args: ['window:popstate', ['$event']]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], modalImages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], buttonsConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], currentImageConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], dotsConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], previewConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], slideConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], keyboardConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], plainGalleryConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], currentImageComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: [CurrentImageComponent]
        }] }); })();
    return ModalGalleryComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with configurable inline/plain carousel.
 */
var CarouselComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(CarouselComponent, _super);
    function CarouselComponent(_platformId, _ngZone, galleryService, ref, sanitizer) {
        var _this = _super.call(this) || this;
        _this._platformId = _platformId;
        _this._ngZone = _ngZone;
        _this.galleryService = galleryService;
        _this.ref = ref;
        _this.sanitizer = sanitizer;
        /**
         * Attribute to set ariaLabel of the host component
         */
        _this.ariaLabel = "Carousel";
        /**
         * Object of type `DotsConfig` to init DotsComponent's features.
         * For instance, it contains a param to show/hide this component.
         */
        _this.dotsConfig = { visible: true };
        /**
         * boolean to enable/disable infinite sliding. Enabled by default.
         */
        _this.infinite = true;
        /**
         * Object of type `AccessibilityConfig` to init custom accessibility features.
         * For instance, it contains titles, alt texts, aria-labels and so on.
         */
        _this.accessibilityConfig = KS_DEFAULT_ACCESSIBILITY_CONFIG;
        /**
         * Output to emit an event when an image is changed.
         */
        _this.show = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Output to emit an event when the current image is the first one.
         */
        _this.firstImage = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Output to emit an event when the current image is the last one.
         */
        _this.lastImage = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Enum of type `Action` that represents a mouse click on a button.
         * Declared here to be used inside the template.
         */
        _this.clickAction = Action.CLICK;
        /**
         * Enum of type `Action` that represents a keyboard action.
         * Declared here to be used inside the template.
         */
        _this.keyboardAction = Action.KEYBOARD;
        /**
         * Boolean that it's true when you are watching the first image (currently visible).
         * False by default
         */
        _this.isFirstImage = false;
        /**
         * Boolean that it's true when you are watching the last image (currently visible).
         * False by default
         */
        _this.isLastImage = false;
        /**
         * Object of type `PlainGalleryConfig` to force ks-modal-gallery to hide plain-gallery
         */
        _this.plainGalleryHidden = {
            strategy: PlainGalleryStrategy.CUSTOM,
            layout: new AdvancedLayout(-1, true)
        };
        /**
         * Subject to play the carousel.
         */
        _this.start$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Subject to stop the carousel.
         */
        _this.stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Private object without type to define all swipe actions used by hammerjs.
         */
        _this.SWIPE_ACTION = {
            LEFT: 'swipeleft',
            RIGHT: 'swiperight',
            UP: 'swipeup',
            DOWN: 'swipedown'
        };
        return _this;
    }
    /**
     * Listener to stop the gallery when the mouse pointer is over the current image.
     */
    /**
     * Listener to stop the gallery when the mouse pointer is over the current image.
     * @return {?}
     */
    CarouselComponent.prototype.onMouseEnter = /**
     * Listener to stop the gallery when the mouse pointer is over the current image.
     * @return {?}
     */
    function () {
        if (!this.configPlay.pauseOnHover) {
            return;
        }
        this.stopCarousel();
    };
    /**
     * Listener to play the gallery when the mouse pointer leave the current image.
     */
    /**
     * Listener to play the gallery when the mouse pointer leave the current image.
     * @return {?}
     */
    CarouselComponent.prototype.onMouseLeave = /**
     * Listener to play the gallery when the mouse pointer leave the current image.
     * @return {?}
     */
    function () {
        if (!this.configPlay.pauseOnHover || !this.configPlay.autoPlay) {
            return;
        }
        this.playCarousel();
    };
    /**
     * Listener to navigate carousel images with keyboard (left).
     */
    /**
     * Listener to navigate carousel images with keyboard (left).
     * @return {?}
     */
    CarouselComponent.prototype.onKeyDownLeft = /**
     * Listener to navigate carousel images with keyboard (left).
     * @return {?}
     */
    function () {
        if (!this.configCarousel.keyboardEnable) {
            return;
        }
        this.prevImage();
    };
    /**
     * Listener to navigate carousel images with keyboard (right).
     */
    /**
     * Listener to navigate carousel images with keyboard (right).
     * @return {?}
     */
    CarouselComponent.prototype.onKeyDownLRight = /**
     * Listener to navigate carousel images with keyboard (right).
     * @return {?}
     */
    function () {
        if (!this.configCarousel.keyboardEnable) {
            return;
        }
        this.nextImage();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CarouselComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // handle changes of dotsConfig
        /** @type {?} */
        var configDotsChange = changes.dotsConfig;
        if (configDotsChange && configDotsChange.currentValue !== configDotsChange.previousValue) {
            this.configDots = configDotsChange.currentValue;
        }
        // handle changes of carouselConfig
        /** @type {?} */
        var carouselConfigChange = changes.carouselConfig;
        if (carouselConfigChange && carouselConfigChange.currentValue !== carouselConfigChange.previousValue) {
            this.configCarousel = carouselConfigChange.currentValue;
        }
        // handle changes of playConfig starting/stopping the carousel accordingly
        /** @type {?} */
        var playConfigChange = changes.playConfig;
        if (playConfigChange) {
            /** @type {?} */
            var playConfigChangePrev = playConfigChange.previousValue;
            /** @type {?} */
            var playConfigChangeCurr = playConfigChange.currentValue;
            if (playConfigChangePrev !== playConfigChangeCurr) {
                this.configPlay = playConfigChange.currentValue;
                // if autoplay is enabled, and this is not the
                // first change (to prevent multiple starts at the beginning)
                if (playConfigChangeCurr.autoPlay && !playConfigChange.isFirstChange()) {
                    this.start$.next();
                }
                else {
                    this.stopCarousel();
                }
            }
        }
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.currentImage = this.images[0];
        /** @type {?} */
        var defaultDescriptionStyle = {
            bgColor: 'rgba(0, 0, 0, .5)',
            textColor: 'white',
            marginTop: '0px',
            marginBottom: '0px',
            marginLeft: '0px',
            marginRight: '0px'
        };
        /** @type {?} */
        var defaultDescription = {
            strategy: DescriptionStrategy.ALWAYS_HIDDEN,
            imageText: 'Image ',
            numberSeparator: '/',
            beforeTextDescription: ' - ',
            style: defaultDescriptionStyle
        };
        /** @type {?} */
        var defaultCurrentImageConfig = {
            description: defaultDescription,
            invertSwipe: false
        };
        /** @type {?} */
        var defaultCurrentCarouselConfig = {
            maxWidth: '100%',
            maxHeight: '400px',
            showArrows: true,
            objectFit: 'cover',
            keyboardEnable: true,
            modalGalleryEnable: false,
            legacyIE11Mode: false
        };
        /** @type {?} */
        var defaultCurrentCarouselPlay = {
            autoPlay: true,
            interval: 5000,
            pauseOnHover: true
        };
        this.configCurrentImageCarousel = Object.assign({}, defaultCurrentImageConfig, this.carouselImageConfig);
        this.configCurrentImageCarousel.description = Object.assign({}, defaultDescription, this.configCurrentImageCarousel.description);
        /** @type {?} */
        var defaultConfig = { visible: true };
        this.configDots = Object.assign(defaultConfig, this.dotsConfig);
        this.configCarousel = Object.assign({}, defaultCurrentCarouselConfig, this.carouselConfig);
        this.configPlay = Object.assign({}, defaultCurrentCarouselPlay, this.playConfig);
        // check values
        if (this.configPlay.interval <= 0) {
            throw new Error("Carousel's interval must be a number >= 0");
        }
        this.manageSlideConfig();
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // interval doesn't play well with SSR and protractor,
        // so we should run it in the browser and outside Angular
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this._platformId)) {
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.start$
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
                 * @return {?}
                 */
                function () { return _this.configPlay.interval; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
                 * @param {?} interval
                 * @return {?}
                 */
                function (interval) { return interval > 0; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((/**
                 * @param {?} interval
                 * @return {?}
                 */
                function (interval) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(interval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this.stop$)); })))
                    .subscribe((/**
                 * @return {?}
                 */
                function () {
                    return _this._ngZone.run((/**
                     * @return {?}
                     */
                    function () {
                        if (_this.configPlay.autoPlay) {
                            _this.nextImage();
                        }
                        _this.ref.markForCheck();
                    }));
                }));
                _this.start$.next();
            }));
        }
    };
    /**
     * Method used in template to sanitize an url when you need legacyIE11Mode.
     * In this way you can set an url as background of a div.
     * @param unsafeStyle is a string and represents the url to sanitize.
     * @returns a SafeStyle object that can be used in template without problems.
     */
    /**
     * Method used in template to sanitize an url when you need legacyIE11Mode.
     * In this way you can set an url as background of a div.
     * @param {?} unsafeStyle is a string and represents the url to sanitize.
     * @return {?} a SafeStyle object that can be used in template without problems.
     */
    CarouselComponent.prototype.sanitizeUrlBgStyle = /**
     * Method used in template to sanitize an url when you need legacyIE11Mode.
     * In this way you can set an url as background of a div.
     * @param {?} unsafeStyle is a string and represents the url to sanitize.
     * @return {?} a SafeStyle object that can be used in template without problems.
     */
    function (unsafeStyle) {
        // Method used only to sanitize background-image style before add it to background property when legacyIE11Mode is enabled
        return this.sanitizer.bypassSecurityTrustStyle('url(' + unsafeStyle + ')');
    };
    /**
     * Method called when a dot is clicked and used to update the current image.
     * @param number index of the clicked dot
     */
    /**
     * Method called when a dot is clicked and used to update the current image.
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.onClickDot = /**
     * Method called when a dot is clicked and used to update the current image.
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.changeCurrentImage(this.images[index], Action.NORMAL);
    };
    /**
     * Method called by events from both keyboard and mouse on a navigation arrow.
     * @param string direction of the navigation that can be either 'next' or 'prev'
     * @param KeyboardEvent | MouseEvent event payload
     * @param Action action that triggered the event or `Action.NORMAL` if not provided
     */
    /**
     * Method called by events from both keyboard and mouse on a navigation arrow.
     * @param {?} direction
     * @param {?} event
     * @param {?=} action
     * @return {?}
     */
    CarouselComponent.prototype.onNavigationEvent = /**
     * Method called by events from both keyboard and mouse on a navigation arrow.
     * @param {?} direction
     * @param {?} event
     * @param {?=} action
     * @return {?}
     */
    function (direction, event, action) {
        if (action === void 0) { action = Action.NORMAL; }
        /** @type {?} */
        var result = _super.prototype.handleNavigationEvent.call(this, direction, event);
        if (result === NEXT) {
            this.nextImage(action);
        }
        else if (result === PREV) {
            this.prevImage(action);
        }
    };
    /**
     * Method triggered when you click on the current image.
     * Also, if modalGalleryEnable is true, you can open the modal-gallery.
     */
    /**
     * Method triggered when you click on the current image.
     * Also, if modalGalleryEnable is true, you can open the modal-gallery.
     * @return {?}
     */
    CarouselComponent.prototype.onClickCurrentImage = /**
     * Method triggered when you click on the current image.
     * Also, if modalGalleryEnable is true, you can open the modal-gallery.
     * @return {?}
     */
    function () {
        if (!this.configCarousel.modalGalleryEnable) {
            return;
        }
        /** @type {?} */
        var index = getIndex(this.currentImage, this.images);
        this.galleryService.openGallery(this.id, index);
    };
    /**
     * Method to get the image description based on input params.
     * If you provide a full description this will be the visible description, otherwise,
     * it will be built using the `Description` object, concatenating its fields.
     * @param Image image to get its description. If not provided it will be the current image
     * @returns String description of the image (or the current image if not provided)
     * @throws an Error if description isn't available
     */
    /**
     * Method to get the image description based on input params.
     * If you provide a full description this will be the visible description, otherwise,
     * it will be built using the `Description` object, concatenating its fields.
     * @throws an Error if description isn't available
     * @param {?=} image
     * @return {?} String description of the image (or the current image if not provided)
     */
    CarouselComponent.prototype.getDescriptionToDisplay = /**
     * Method to get the image description based on input params.
     * If you provide a full description this will be the visible description, otherwise,
     * it will be built using the `Description` object, concatenating its fields.
     * @throws an Error if description isn't available
     * @param {?=} image
     * @return {?} String description of the image (or the current image if not provided)
     */
    function (image) {
        if (image === void 0) { image = this.currentImage; }
        if (!this.configCurrentImageCarousel || !this.configCurrentImageCarousel.description) {
            throw new Error('Description input must be a valid object implementing the Description interface');
        }
        /** @type {?} */
        var imageWithoutDescription = !image.modal || !image.modal.description || image.modal.description === '';
        switch (this.configCurrentImageCarousel.description.strategy) {
            case DescriptionStrategy.HIDE_IF_EMPTY:
                return imageWithoutDescription ? '' : image.modal.description + '';
            case DescriptionStrategy.ALWAYS_HIDDEN:
                return '';
            default:
                // ----------- DescriptionStrategy.ALWAYS_VISIBLE -----------------
                return this.buildTextDescription(image, imageWithoutDescription);
        }
    };
    /**
     * Method used by Hammerjs to support touch gestures (you can also invert the swipe direction with configCurrentImage.invertSwipe).
     * @param action String that represent the direction of the swipe action. 'swiperight' by default.
     */
    /**
     * Method used by Hammerjs to support touch gestures (you can also invert the swipe direction with configCurrentImage.invertSwipe).
     * @param {?=} action String that represent the direction of the swipe action. 'swiperight' by default.
     * @return {?}
     */
    CarouselComponent.prototype.swipe = /**
     * Method used by Hammerjs to support touch gestures (you can also invert the swipe direction with configCurrentImage.invertSwipe).
     * @param {?=} action String that represent the direction of the swipe action. 'swiperight' by default.
     * @return {?}
     */
    function (action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        switch (action) {
            case this.SWIPE_ACTION.RIGHT:
                if (this.configCurrentImageCarousel.invertSwipe) {
                    this.prevImage(Action.SWIPE);
                }
                else {
                    this.nextImage(Action.SWIPE);
                }
                break;
            case this.SWIPE_ACTION.LEFT:
                if (this.configCurrentImageCarousel.invertSwipe) {
                    this.nextImage(Action.SWIPE);
                }
                else {
                    this.prevImage(Action.SWIPE);
                }
                break;
            // case this.SWIPE_ACTION.UP:
            //   break;
            // case this.SWIPE_ACTION.DOWN:
            //   break;
        }
    };
    /**
     * Method to go back to the previous image.
     * @param action Enum of type `Action` that represents the source
     *  action that moved back to the previous image. `Action.NORMAL` by default.
     */
    /**
     * Method to go back to the previous image.
     * @param {?=} action Enum of type `Action` that represents the source
     *  action that moved back to the previous image. `Action.NORMAL` by default.
     * @return {?}
     */
    CarouselComponent.prototype.prevImage = /**
     * Method to go back to the previous image.
     * @param {?=} action Enum of type `Action` that represents the source
     *  action that moved back to the previous image. `Action.NORMAL` by default.
     * @return {?}
     */
    function (action) {
        if (action === void 0) { action = Action.NORMAL; }
        // check if prevImage should be blocked
        if (this.isPreventSliding(0)) {
            return;
        }
        this.changeCurrentImage(this.getPrevImage(), action);
        this.manageSlideConfig();
        this.start$.next();
    };
    /**
     * Method to go back to the previous image.
     * @param action Enum of type `Action` that represents the source
     *  action that moved to the next image. `Action.NORMAL` by default.
     */
    /**
     * Method to go back to the previous image.
     * @param {?=} action Enum of type `Action` that represents the source
     *  action that moved to the next image. `Action.NORMAL` by default.
     * @return {?}
     */
    CarouselComponent.prototype.nextImage = /**
     * Method to go back to the previous image.
     * @param {?=} action Enum of type `Action` that represents the source
     *  action that moved to the next image. `Action.NORMAL` by default.
     * @return {?}
     */
    function (action) {
        if (action === void 0) { action = Action.NORMAL; }
        // check if nextImage should be blocked
        if (this.isPreventSliding(this.images.length - 1)) {
            return;
        }
        this.changeCurrentImage(this.getNextImage(), action);
        this.manageSlideConfig();
        this.start$.next();
    };
    /**
     * Method used in the template to track ids in ngFor.
     * @param number index of the array
     * @param Image item of the array
     * @returns number the id of the item
     */
    /**
     * Method used in the template to track ids in ngFor.
     * @param {?} index
     * @param {?} item
     * @return {?} number the id of the item
     */
    CarouselComponent.prototype.trackById = /**
     * Method used in the template to track ids in ngFor.
     * @param {?} index
     * @param {?} item
     * @return {?} number the id of the item
     */
    function (index, item) {
        return item.id;
    };
    /**
     * Method called when an image preview is clicked and used to update the current image.
     * @param event an ImageEvent object with the relative action and the index of the clicked preview.
     */
    /**
     * Method called when an image preview is clicked and used to update the current image.
     * @param {?} event an ImageEvent object with the relative action and the index of the clicked preview.
     * @return {?}
     */
    CarouselComponent.prototype.onClickPreview = /**
     * Method called when an image preview is clicked and used to update the current image.
     * @param {?} event an ImageEvent object with the relative action and the index of the clicked preview.
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var imageFound = this.images[(/** @type {?} */ (event.result))];
        if (!!imageFound) {
            this.manageSlideConfig();
            this.changeCurrentImage((/** @type {?} */ (imageFound)), event.action);
        }
    };
    /**
     * Method to play carousel.
     */
    /**
     * Method to play carousel.
     * @return {?}
     */
    CarouselComponent.prototype.playCarousel = /**
     * Method to play carousel.
     * @return {?}
     */
    function () {
        this.start$.next();
    };
    /**
     * Stops the carousel from cycling through items.
     */
    /**
     * Stops the carousel from cycling through items.
     * @return {?}
     */
    CarouselComponent.prototype.stopCarousel = /**
     * Stops the carousel from cycling through items.
     * @return {?}
     */
    function () {
        this.stop$.next();
    };
    // TODO remove this because duplicated
    /**
     * Method to get `alt attribute`.
     * `alt` specifies an alternate text for an image, if the image cannot be displayed.
     * @param Image image to get its alt description. If not provided it will be the current image
     * @returns String alt description of the image (or the current image if not provided)
     */
    // TODO remove this because duplicated
    /**
     * Method to get `alt attribute`.
     * `alt` specifies an alternate text for an image, if the image cannot be displayed.
     * @param {?=} image
     * @return {?} String alt description of the image (or the current image if not provided)
     */
    CarouselComponent.prototype.getAltDescriptionByImage = 
    // TODO remove this because duplicated
    /**
     * Method to get `alt attribute`.
     * `alt` specifies an alternate text for an image, if the image cannot be displayed.
     * @param {?=} image
     * @return {?} String alt description of the image (or the current image if not provided)
     */
    function (image) {
        if (image === void 0) { image = this.currentImage; }
        if (!image) {
            return '';
        }
        return image.modal && image.modal.description ? image.modal.description : "Image " + (getIndex(image, this.images) + 1);
    };
    // TODO remove this because duplicated
    /**
     * Method to get the title attributes based on descriptions.
     * This is useful to prevent accessibility issues, because if DescriptionStrategy is ALWAYS_HIDDEN,
     * it prevents an empty string as title.
     * @param Image image to get its description. If not provided it will be the current image
     * @returns String title of the image based on descriptions
     * @throws an Error if description isn't available
     */
    // TODO remove this because duplicated
    /**
     * Method to get the title attributes based on descriptions.
     * This is useful to prevent accessibility issues, because if DescriptionStrategy is ALWAYS_HIDDEN,
     * it prevents an empty string as title.
     * @throws an Error if description isn't available
     * @param {?=} image
     * @return {?} String title of the image based on descriptions
     */
    CarouselComponent.prototype.getTitleToDisplay = 
    // TODO remove this because duplicated
    /**
     * Method to get the title attributes based on descriptions.
     * This is useful to prevent accessibility issues, because if DescriptionStrategy is ALWAYS_HIDDEN,
     * it prevents an empty string as title.
     * @throws an Error if description isn't available
     * @param {?=} image
     * @return {?} String title of the image based on descriptions
     */
    function (image) {
        if (image === void 0) { image = this.currentImage; }
        if (!this.configCurrentImageCarousel || !this.configCurrentImageCarousel.description) {
            throw new Error('Description input must be a valid object implementing the Description interface');
        }
        /** @type {?} */
        var imageWithoutDescription = !image.modal || !image.modal.description || image.modal.description === '';
        /** @type {?} */
        var description = this.buildTextDescription(image, imageWithoutDescription);
        return description;
    };
    /**
     * Method to reset carousel (force image with index 0 to be the current image and re-init also previews)
     */
    // temporary removed because never tested
    // reset() {
    //   if (this.configPlay && this.configPlay.autoPlay) {
    //     this.stopCarousel();
    //   }
    //   this.currentImage = this.images[0];
    //   this.handleBoundaries(0);
    //   if (this.configPlay && this.configPlay.autoPlay) {
    //     this.playCarousel();
    //   }
    //   this.ref.markForCheck();
    // }
    /**
     * Method to cleanup resources. In fact, this will stop the carousel.
     * This is an Angular's lifecycle hook that is called when this component is destroyed.
     */
    /**
       * Method to reset carousel (force image with index 0 to be the current image and re-init also previews)
       */
    // temporary removed because never tested
    // reset() {
    //   if (this.configPlay && this.configPlay.autoPlay) {
    //     this.stopCarousel();
    //   }
    //   this.currentImage = this.images[0];
    //   this.handleBoundaries(0);
    //   if (this.configPlay && this.configPlay.autoPlay) {
    //     this.playCarousel();
    //   }
    //   this.ref.markForCheck();
    // }
    /**
     * Method to cleanup resources. In fact, this will stop the carousel.
     * This is an Angular's lifecycle hook that is called when this component is destroyed.
     * @return {?}
     */
    CarouselComponent.prototype.ngOnDestroy = /**
       * Method to reset carousel (force image with index 0 to be the current image and re-init also previews)
       */
    // temporary removed because never tested
    // reset() {
    //   if (this.configPlay && this.configPlay.autoPlay) {
    //     this.stopCarousel();
    //   }
    //   this.currentImage = this.images[0];
    //   this.handleBoundaries(0);
    //   if (this.configPlay && this.configPlay.autoPlay) {
    //     this.playCarousel();
    //   }
    //   this.ref.markForCheck();
    // }
    /**
     * Method to cleanup resources. In fact, this will stop the carousel.
     * This is an Angular's lifecycle hook that is called when this component is destroyed.
     * @return {?}
     */
    function () {
        this.stopCarousel();
    };
    /**
     * Method to change the current image, receiving the new image as input the relative action.
     * @param image an Image object that represents the new image to set as current.
     * @param action Enum of type `Action` that represents the source action that triggered the change.
     */
    /**
     * Method to change the current image, receiving the new image as input the relative action.
     * @private
     * @param {?} image an Image object that represents the new image to set as current.
     * @param {?} action Enum of type `Action` that represents the source action that triggered the change.
     * @return {?}
     */
    CarouselComponent.prototype.changeCurrentImage = /**
     * Method to change the current image, receiving the new image as input the relative action.
     * @private
     * @param {?} image an Image object that represents the new image to set as current.
     * @param {?} action Enum of type `Action` that represents the source action that triggered the change.
     * @return {?}
     */
    function (image, action) {
        this.currentImage = image;
        /** @type {?} */
        var index = getIndex(image, this.images);
        // emit first/last event based on newIndex value
        this.emitBoundaryEvent(action, index);
        // emit current visible image index
        this.show.emit(new ImageModalEvent(action, index + 1));
    };
    /**
     * Private method to get the next index.
     * This is necessary because at the end, when you call next again, you'll go to the first image.
     * That happens because all modal images are shown like in a circle.
     */
    /**
     * Private method to get the next index.
     * This is necessary because at the end, when you call next again, you'll go to the first image.
     * That happens because all modal images are shown like in a circle.
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.getNextImage = /**
     * Private method to get the next index.
     * This is necessary because at the end, when you call next again, you'll go to the first image.
     * That happens because all modal images are shown like in a circle.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentIndex = getIndex(this.currentImage, this.images);
        /** @type {?} */
        var newIndex = 0;
        if (currentIndex >= 0 && currentIndex < this.images.length - 1) {
            newIndex = currentIndex + 1;
        }
        else {
            newIndex = 0; // start from the first index
        }
        return this.images[newIndex];
    };
    /**
     * Private method to get the previous index.
     * This is necessary because at index 0, when you call prev again, you'll go to the last image.
     * That happens because all modal images are shown like in a circle.
     */
    /**
     * Private method to get the previous index.
     * This is necessary because at index 0, when you call prev again, you'll go to the last image.
     * That happens because all modal images are shown like in a circle.
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.getPrevImage = /**
     * Private method to get the previous index.
     * This is necessary because at index 0, when you call prev again, you'll go to the last image.
     * That happens because all modal images are shown like in a circle.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentIndex = getIndex(this.currentImage, this.images);
        /** @type {?} */
        var newIndex = 0;
        if (currentIndex > 0 && currentIndex <= this.images.length - 1) {
            newIndex = currentIndex - 1;
        }
        else {
            newIndex = this.images.length - 1; // start from the last index
        }
        return this.images[newIndex];
    };
    /**
     * Private method to build a text description.
     * This is used also to create titles.
     * @param Image image to get its description. If not provided it will be the current image.
     * @param boolean imageWithoutDescription is a boolean that it's true if the image hasn't a 'modal' description.
     * @returns String description built concatenating image fields with a specific logic.
     */
    /**
     * Private method to build a text description.
     * This is used also to create titles.
     * @private
     * @param {?} image
     * @param {?} imageWithoutDescription
     * @return {?} String description built concatenating image fields with a specific logic.
     */
    CarouselComponent.prototype.buildTextDescription = /**
     * Private method to build a text description.
     * This is used also to create titles.
     * @private
     * @param {?} image
     * @param {?} imageWithoutDescription
     * @return {?} String description built concatenating image fields with a specific logic.
     */
    function (image, imageWithoutDescription) {
        if (!this.configCurrentImageCarousel || !this.configCurrentImageCarousel.description) {
            throw new Error('Description input must be a valid object implementing the Description interface');
        }
        // If customFullDescription use it, otherwise proceed to build a description
        if (this.configCurrentImageCarousel.description.customFullDescription && this.configCurrentImageCarousel.description.customFullDescription !== '') {
            return this.configCurrentImageCarousel.description.customFullDescription;
        }
        /** @type {?} */
        var currentIndex = getIndex(image, this.images);
        // If the current image hasn't a description,
        // prevent to write the ' - ' (or this.description.beforeTextDescription)
        /** @type {?} */
        var prevDescription = this.configCurrentImageCarousel.description.imageText ? this.configCurrentImageCarousel.description.imageText : '';
        /** @type {?} */
        var midSeparator = this.configCurrentImageCarousel.description.numberSeparator
            ? this.configCurrentImageCarousel.description.numberSeparator
            : '';
        /** @type {?} */
        var middleDescription = currentIndex + 1 + midSeparator + this.images.length;
        if (imageWithoutDescription) {
            return prevDescription + middleDescription;
        }
        /** @type {?} */
        var currImgDescription = image.modal && image.modal.description ? image.modal.description : '';
        /** @type {?} */
        var endDescription = this.configCurrentImageCarousel.description.beforeTextDescription + currImgDescription;
        return prevDescription + middleDescription + endDescription;
    };
    /**
     * Private method to update both `isFirstImage` and `isLastImage` based on
     * the index of the current image.
     * @param number currentIndex is the index of the current image
     */
    /**
     * Private method to update both `isFirstImage` and `isLastImage` based on
     * the index of the current image.
     * @private
     * @param {?} currentIndex
     * @return {?}
     */
    CarouselComponent.prototype.handleBoundaries = /**
     * Private method to update both `isFirstImage` and `isLastImage` based on
     * the index of the current image.
     * @private
     * @param {?} currentIndex
     * @return {?}
     */
    function (currentIndex) {
        if (this.images.length === 1) {
            this.isFirstImage = true;
            this.isLastImage = true;
            return;
        }
        switch (currentIndex) {
            case 0:
                // execute this only if infinite sliding is disabled
                this.isFirstImage = true;
                this.isLastImage = false;
                break;
            case this.images.length - 1:
                // execute this only if infinite sliding is disabled
                this.isFirstImage = false;
                this.isLastImage = true;
                break;
            default:
                this.isFirstImage = false;
                this.isLastImage = false;
                break;
        }
    };
    /**
     * Private method to manage boundary arrows and sliding.
     * This is based on the slideConfig input to enable/disable 'infinite sliding'.
     * @param number index of the visible image
     */
    /**
     * Private method to manage boundary arrows and sliding.
     * This is based on the slideConfig input to enable/disable 'infinite sliding'.
     * @private
     * @return {?}
     */
    CarouselComponent.prototype.manageSlideConfig = /**
     * Private method to manage boundary arrows and sliding.
     * This is based on the slideConfig input to enable/disable 'infinite sliding'.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index;
        try {
            index = getIndex(this.currentImage, this.images);
        }
        catch (err) {
            console.error('Cannot get the current image index in current-image');
            throw err;
        }
        if (this.infinite === true) {
            // enable infinite sliding
            this.isFirstImage = false;
            this.isLastImage = false;
        }
        else {
            this.handleBoundaries(index);
        }
    };
    /**
     * Private method to emit events when either the last or the first image are visible.
     * @param action Enum of type Action that represents the source of the event that changed the
     *  current image to the first one or the last one.
     * @param indexToCheck is the index number of the image (the first or the last one).
     */
    /**
     * Private method to emit events when either the last or the first image are visible.
     * @private
     * @param {?} action Enum of type Action that represents the source of the event that changed the
     *  current image to the first one or the last one.
     * @param {?} indexToCheck is the index number of the image (the first or the last one).
     * @return {?}
     */
    CarouselComponent.prototype.emitBoundaryEvent = /**
     * Private method to emit events when either the last or the first image are visible.
     * @private
     * @param {?} action Enum of type Action that represents the source of the event that changed the
     *  current image to the first one or the last one.
     * @param {?} indexToCheck is the index number of the image (the first or the last one).
     * @return {?}
     */
    function (action, indexToCheck) {
        // to emit first/last event
        switch (indexToCheck) {
            case 0:
                this.firstImage.emit(new ImageModalEvent(action, true));
                break;
            case this.images.length - 1:
                this.lastImage.emit(new ImageModalEvent(action, true));
                break;
        }
    };
    /**
     * Private method to check if next/prev actions should be blocked.
     * It checks if slideConfig.infinite === false and if the image index is equals to the input parameter.
     * If yes, it returns true to say that sliding should be blocked, otherwise not.
     * @param number boundaryIndex that could be either the beginning index (0) or the last index
     *  of images (this.images.length - 1).
     * @returns boolean true if slideConfig.infinite === false and the current index is
     *  either the first or the last one.
     */
    /**
     * Private method to check if next/prev actions should be blocked.
     * It checks if slideConfig.infinite === false and if the image index is equals to the input parameter.
     * If yes, it returns true to say that sliding should be blocked, otherwise not.
     * @private
     * @param {?} boundaryIndex
     * @return {?} boolean true if slideConfig.infinite === false and the current index is
     *  either the first or the last one.
     */
    CarouselComponent.prototype.isPreventSliding = /**
     * Private method to check if next/prev actions should be blocked.
     * It checks if slideConfig.infinite === false and if the image index is equals to the input parameter.
     * If yes, it returns true to say that sliding should be blocked, otherwise not.
     * @private
     * @param {?} boundaryIndex
     * @return {?} boolean true if slideConfig.infinite === false and the current index is
     *  either the first or the last one.
     */
    function (boundaryIndex) {
        return !this.infinite && getIndex(this.currentImage, this.images) === boundaryIndex;
    };
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["PLATFORM_ID"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"] },
        { type: GalleryService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }
    ]; };
    CarouselComponent.propDecorators = {
        ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostBinding"], args: ['attr.aria-label',] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        carouselConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        playConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        carouselImageConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        dotsConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        previewConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        accessibilityConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        firstImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        lastImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        onMouseEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"], args: ['mouseenter',] }],
        onMouseLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"], args: ['mouseleave',] }],
        onKeyDownLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"], args: ['keydown.arrowLeft',] }],
        onKeyDownLRight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"], args: ['keydown.arrowRight',] }]
    };
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](GalleryService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["ks-carousel"]], hostVars: 1, hostBindings: function CarouselComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseenter", function CarouselComponent_mouseenter_HostBindingHandler($event) { return ctx.onMouseEnter(); })("mouseleave", function CarouselComponent_mouseleave_HostBindingHandler($event) { return ctx.onMouseLeave(); })("keydown.arrowLeft", function CarouselComponent_keydown_arrowLeft_HostBindingHandler($event) { return ctx.onKeyDownLeft(); })("keydown.arrowRight", function CarouselComponent_keydown_arrowRight_HostBindingHandler($event) { return ctx.onKeyDownLRight(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx.ariaLabel);
    } }, inputs: { id: "id", images: "images", carouselConfig: "carouselConfig", playConfig: "playConfig", carouselImageConfig: "carouselImageConfig", dotsConfig: "dotsConfig", previewConfig: "previewConfig", infinite: "infinite", accessibilityConfig: "accessibilityConfig" }, outputs: { show: "show", firstImage: "firstImage", lastImage: "lastImage" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]()], ngContentSelectors: _c6, decls: 8, vars: 15, consts: [["id", "carousel-container", "ksMaxSize", "", 3, "title", "sizeConfig"], ["content", ""], ["class", "current-figure", "ksSize", "", 3, "sizeConfig", 4, "ngIf", "ngIfElse"], ["legacyMode", ""], [3, "images", "currentImage", "carouselConfig", "previewConfig", "accessibilityConfig", "clickPreview"], [3, "id", "modalImages", "plainGalleryConfig"], ["ksSize", "", 1, "current-figure", 3, "sizeConfig"], ["class", "nav-left", "role", "button", 3, "tabindex", "click", "keyup", 4, "ngIf"], [4, "ngTemplateOutlet"], ["id", "current-image", "ksMaxSize", "", "role", "img", 3, "sizeConfig", "src", "title", "alt", "tabindex", "click", "swipeleft", "swiperight"], ["class", "description", "ksDescription", "", 3, "description", "innerHTML", 4, "ngIf"], ["class", "nav-right", "role", "button", 3, "tabindex", "click", "keyup", 4, "ngIf"], ["id", "dots"], [3, "currentImage", "dotsConfig", "accessibilityConfig", "images", "clickDot"], ["role", "button", 1, "nav-left", 3, "tabindex", "click", "keyup"], ["aria-hidden", "true", 3, "title"], ["ksDescription", "", 1, "description", 3, "description", "innerHTML"], ["role", "button", 1, "nav-right", 3, "tabindex", "click", "keyup"], ["id", "current-image-legacy", "ksSize", "", "ksMaxSize", "", "role", "img", 3, "sizeConfig", "title", "tabindex", "click", "swipeleft", "swiperight"], ["class", "description-ie11", "ksDescription", "", 3, "description", "innerHTML", 4, "ngIf"], ["id", "dots-ie11"], ["ksDescription", "", 1, "description-ie11", 3, "description", "innerHTML"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CarouselComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CarouselComponent_figure_3_Template, 8, 22, "figure", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CarouselComponent_ng_template_4_Template, 8, 32, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ks-carousel-previews", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("clickPreview", function CarouselComponent_Template_ks_carousel_previews_clickPreview_6_listener($event) { return ctx.onClickPreview($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "ks-modal-gallery", 5);
    } if (rf & 2) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx.accessibilityConfig.carouselContainerTitle)("sizeConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](13, _c5, ctx.configCarousel == null ? null : ctx.configCarousel.maxWidth));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx.accessibilityConfig.carouselContainerAriaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.configCarousel == null ? null : ctx.configCarousel.legacyIE11Mode) === false)("ngIfElse", _r40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("images", ctx.images)("currentImage", ctx.currentImage)("carouselConfig", ctx.configCarousel)("previewConfig", ctx.previewConfig)("accessibilityConfig", ctx.accessibilityConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", ctx.id)("modalImages", ctx.images)("plainGalleryConfig", ctx.plainGalleryHidden);
    } }, directives: function () { return [MaxSizeDirective, _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], CarouselPreviewsComponent,
        ModalGalleryComponent,
        SizeDirective, _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgTemplateOutlet"], DotsComponent,
        DescriptionDirective]; }, styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center}#carousel-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%]{-webkit-animation:.8s fadein-visible;animation:.8s fadein-visible;text-align:center;margin:0;position:relative}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%], #carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%], #carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{-webkit-animation:1s animatezoom;animation:1s animatezoom;cursor:pointer;transition:.5s;top:50%;position:absolute}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]:hover, #carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]:hover, #carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]:hover{transform:scale(1.1)}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{left:5px}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{right:5px}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > #current-image[_ngcontent-%COMP%], #carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > #current-image-legacy[_ngcontent-%COMP%]{width:100%;height:auto;display:block}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > #current-image-legacy[_ngcontent-%COMP%] > .description-ie11[_ngcontent-%COMP%]{bottom:0;width:100%;position:absolute;padding-top:10px;padding-bottom:10px}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > figcaption[_ngcontent-%COMP%]{padding:10px;position:absolute;bottom:0;left:0;right:0}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > figcaption[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-weight:700;text-align:center}#carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > #dots[_ngcontent-%COMP%], #carousel-container[_ngcontent-%COMP%] > .current-figure[_ngcontent-%COMP%] > #dots-ie11[_ngcontent-%COMP%]{position:absolute;bottom:20px;width:100%}", ".arrow-image[_ngcontent-%COMP%], .empty-arrow-image[_ngcontent-%COMP%], .left-arrow-image[_ngcontent-%COMP%], .right-arrow-image[_ngcontent-%COMP%]{width:30px;height:30px;background-size:30px}.empty-arrow-image[_ngcontent-%COMP%]{background:#000;opacity:0}.left-arrow-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:.5s}.left-arrow-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.right-arrow-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:.5s}.right-arrow-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'ks-carousel',
                template: "<main id=\"carousel-container\"\n      [attr.aria-label]=\"accessibilityConfig.carouselContainerAriaLabel\"\n      [title]=\"accessibilityConfig.carouselContainerTitle\"\n      ksMaxSize [sizeConfig]=\"{maxWidth: configCarousel?.maxWidth,\n                               maxHeight: ''}\">\n\n\n  <!-- Workaround to support 2 ng-content in the same template in 2 ngIf (https://github.com/angular/angular/issues/22972) -->\n  <ng-template #content><ng-content></ng-content></ng-template>\n\n  <!-- Normal figure used by all browsers except for IE11, because\n    it doesn't support object-fit cover.-->\n  <figure class=\"current-figure\" *ngIf=\"configCarousel?.legacyIE11Mode === false; else legacyMode\"\n          ksSize [sizeConfig]=\"{width: configCarousel?.maxWidth,\n                                height: ''}\">\n\n    <a class=\"nav-left\" *ngIf=\"configCarousel?.showArrows\"\n       [attr.aria-label]=\"accessibilityConfig.carouselPrevImageAriaLabel\"\n       [tabindex]=\"isLastImage && !infinite ? -1 : 0\" role=\"button\"\n       (click)=\"onNavigationEvent('left', $event, clickAction)\" (keyup)=\"onNavigationEvent('left', $event, keyboardAction)\">\n      <div class=\"inside {{(isFirstImage && !infinite) || !configCarousel.showArrows ? 'empty-arrow-image' : 'left-arrow-image'}}\"\n           aria-hidden=\"true\"\n           [title]=\"accessibilityConfig.carouselPrevImageTitle\"></div>\n    </a>\n\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n\n    <img id=\"current-image\"\n         [style.object-fit]=\"configCarousel?.objectFit\"\n         ksMaxSize [sizeConfig]=\"{maxWidth: configCarousel?.maxWidth,\n                                  maxHeight: configCarousel?.maxHeight}\"\n         [src]=\"currentImage.modal.img\"\n         [attr.aria-label]=\"currentImage.modal.ariaLabel\"\n         [title]=\"currentImage.modal.title ? currentImage.modal.title : getTitleToDisplay()\"\n         alt=\"{{currentImage.modal.alt ? currentImage.modal.alt : getAltDescriptionByImage()}}\"\n         [tabindex]=\"0\" role=\"img\"\n         (click)=\"onClickCurrentImage()\"\n         (swipeleft)=\"swipe($event.type)\"\n         (swiperight)=\"swipe($event.type)\"/>\n\n    <figcaption *ngIf=\"getDescriptionToDisplay() !== ''\"\n                class=\"description\"\n                ksDescription [description]=\"configCurrentImageCarousel?.description\"\n                [innerHTML]=\"getDescriptionToDisplay()\"></figcaption>\n\n    <a class=\"nav-right\" *ngIf=\"configCarousel?.showArrows\"\n       [attr.aria-label]=\"accessibilityConfig.carouselNextImageAriaLabel\"\n       [tabindex]=\"isLastImage && !infinite ? -1 : 0\" role=\"button\"\n       (click)=\"onNavigationEvent('right', $event, clickAction)\" (keyup)=\"onNavigationEvent('right', $event, keyboardAction)\">\n      <div class=\"inside {{(isLastImage && !infinite) || !configCarousel.showArrows ? 'empty-arrow-image' : 'right-arrow-image'}}\"\n           aria-hidden=\"true\"\n           [title]=\"accessibilityConfig.carouselNextImageTitle\"></div>\n    </a>\n\n    <div id=\"dots\">\n      <ks-dots [currentImage]=\"currentImage\"\n               [dotsConfig]=\"configDots\"\n               [accessibilityConfig]=\"accessibilityConfig\"\n               [images]=\"images\"\n               (clickDot)=\"onClickDot($event)\"></ks-dots>\n    </div>\n\n  </figure>\n\n  <!-- Legacy mode to support img cover also on IE11,\n    because it doesn't support natively object-fit cover. -->\n  <ng-template #legacyMode>\n    <div class=\"current-figure\"\n         ksSize [sizeConfig]=\"{width: configCarousel?.maxWidth,\n                               height: ''}\">\n\n      <a class=\"nav-left\" *ngIf=\"configCarousel?.showArrows\"\n         [attr.aria-label]=\"accessibilityConfig.carouselNextImageAriaLabel\"\n         [tabindex]=\"isLastImage && !infinite ? -1 : 0\" role=\"button\"\n         (click)=\"onNavigationEvent('left', $event, clickAction)\" (keyup)=\"onNavigationEvent('left', $event, keyboardAction)\">\n        <div class=\"inside {{(isFirstImage && !infinite) || !configCarousel.showArrows ? 'empty-arrow-image' : 'left-arrow-image'}}\"\n             aria-hidden=\"true\"\n             [title]=\"accessibilityConfig.carouselNextImageTitle\"></div>\n      </a>\n\n      <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n\n      <div id=\"current-image-legacy\"\n           [style.background-color]=\"'transparent'\"\n           [style.background-image]=\"sanitizeUrlBgStyle(currentImage.modal.img + '')\"\n           [style.background-position]=\"'center center'\"\n           [style.background-size]=\"'cover'\"\n           [style.background-repeat]=\"'no-repeat'\"\n           [style.background-attachment]=\"'scroll'\"\n           ksSize [sizeConfig]=\"{width: '100%',\n                                 height: configCarousel?.maxHeight}\"\n           ksMaxSize [sizeConfig]=\"{maxWidth: configCarousel?.maxWidth}\"\n           [attr.aria-label]=\"currentImage.modal.ariaLabel\"\n           [title]=\"currentImage.modal.title ? currentImage.modal.title : getTitleToDisplay()\"\n           [tabindex]=\"0\" role=\"img\"\n           (click)=\"onClickCurrentImage()\"\n           (swipeleft)=\"swipe($event.type)\"\n           (swiperight)=\"swipe($event.type)\">\n\n        <div *ngIf=\"getDescriptionToDisplay() !== ''\"\n             class=\"description-ie11\"\n             ksDescription [description]=\"configCurrentImageCarousel?.description\"\n             [innerHTML]=\"getDescriptionToDisplay()\"></div>\n      </div>\n\n      <a class=\"nav-right\" *ngIf=\"configCarousel?.showArrows\"\n         [attr.aria-label]=\"accessibilityConfig.carouselNextImageAriaLabel\"\n         [tabindex]=\"isLastImage && !infinite ? -1 : 0\" role=\"button\"\n         (click)=\"onNavigationEvent('right', $event, clickAction)\" (keyup)=\"onNavigationEvent('right', $event, keyboardAction)\">\n        <div class=\"inside {{(isLastImage && !infinite) || !configCarousel.showArrows ? 'empty-arrow-image' : 'right-arrow-image'}}\"\n             aria-hidden=\"true\"\n             [title]=\"accessibilityConfig.carouselNextImageTitle\"></div>\n      </a>\n\n      <div id=\"dots-ie11\">\n        <ks-dots [currentImage]=\"currentImage\"\n                 [dotsConfig]=\"configDots\"\n                 [accessibilityConfig]=\"accessibilityConfig\"\n                 [images]=\"images\"\n                 (clickDot)=\"onClickDot($event)\"></ks-dots>\n      </div>\n\n    </div>\n  </ng-template>\n\n</main>\n\n<ks-carousel-previews [images]=\"images\"\n                      [currentImage]=\"currentImage\"\n                      [carouselConfig]=\"configCarousel\"\n                      [previewConfig]=\"previewConfig\"\n                      [accessibilityConfig]=\"accessibilityConfig\"\n                      (clickPreview)=\"onClickPreview($event)\"></ks-carousel-previews>\n\n<ks-modal-gallery [id]=\"id\" [modalImages]=\"images\" [plainGalleryConfig]=\"plainGalleryHidden\"></ks-modal-gallery>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
                styles: [":host{display:flex;flex-direction:column;justify-content:flex-start;align-items:center}#carousel-container{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%}#carousel-container>.current-figure{-webkit-animation:.8s fadein-visible;animation:.8s fadein-visible;text-align:center;margin:0;position:relative}#carousel-container>.current-figure .nav,#carousel-container>.current-figure>.nav-left,#carousel-container>.current-figure>.nav-right{-webkit-animation:1s animatezoom;animation:1s animatezoom;cursor:pointer;transition:.5s;top:50%;position:absolute}#carousel-container>.current-figure .nav:hover,#carousel-container>.current-figure>.nav-left:hover,#carousel-container>.current-figure>.nav-right:hover{transform:scale(1.1)}#carousel-container>.current-figure>.nav-left{left:5px}#carousel-container>.current-figure>.nav-right{right:5px}#carousel-container>.current-figure>#current-image,#carousel-container>.current-figure>#current-image-legacy{width:100%;height:auto;display:block}#carousel-container>.current-figure>#current-image-legacy>.description-ie11{bottom:0;width:100%;position:absolute;padding-top:10px;padding-bottom:10px}#carousel-container>.current-figure>figcaption{padding:10px;position:absolute;bottom:0;left:0;right:0}#carousel-container>.current-figure>figcaption .description{font-weight:700;text-align:center}#carousel-container>.current-figure>#dots,#carousel-container>.current-figure>#dots-ie11{position:absolute;bottom:20px;width:100%}", ".arrow-image,.empty-arrow-image,.left-arrow-image,.right-arrow-image{width:30px;height:30px;background-size:30px}.empty-arrow-image{background:#000;opacity:0}.left-arrow-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:.5s}.left-arrow-image:hover{transform:scale(1.2)}.right-arrow-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);opacity:.8;transition:.5s}.right-arrow-image:hover{transform:scale(1.2)}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["PLATFORM_ID"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"] }, { type: GalleryService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }]; }, { onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
            args: ['mouseleave']
        }], onKeyDownLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
            args: ['keydown.arrowLeft']
        }], onKeyDownLRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
            args: ['keydown.arrowRight']
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostBinding"],
            args: ['attr.aria-label']
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], carouselConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], playConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], carouselImageConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], dotsConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], previewConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], infinite: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], accessibilityConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], firstImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], lastImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }] }); })();
    return CarouselComponent;
}(AccessibleComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with image previews for carousel
 */
var CarouselPreviewsComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(CarouselPreviewsComponent, _super);
    function CarouselPreviewsComponent(ref, breakpointObserver, sanitizer) {
        var _this = _super.call(this) || this;
        _this.ref = ref;
        _this.breakpointObserver = breakpointObserver;
        _this.sanitizer = sanitizer;
        /**
         * Variable to change the max-width of the host component
         */
        _this.hostMaxWidth = '100%';
        /**
         * Variable to set aria-label of the host component
         */
        _this.ariaLabel = "Carousel previews";
        /**
         * Output to emit the clicked preview. The payload contains the `InternalLibImage` associated to the clicked preview.
         */
        _this.clickPreview = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Enum of type `Action` that represents a mouse click on a button.
         * Declared here to be used inside the template.
         */
        _this.clickAction = Action.CLICK;
        /**
         * Enum of type `Action` that represents a keyboard action.
         * Declared here to be used inside the template.
         */
        _this.keyboardAction = Action.KEYBOARD;
        /**
         * Array of `InternalLibImage` exposed to the template. This field is initialized
         * applying transformations, default values and so on to the input of the same type.
         */
        _this.previews = [];
        /**
         * Private property with the default max height of previews.
         */
        _this.defaultMaxHeight = '200px';
        // listen for width changes and update preview heights accordingly
        _this.breakpointSubscription = breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Large, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].XLarge])
            .subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (!_this.configPreview) {
                return;
            }
            if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].XSmall]) {
                _this.updateHeight(_this.configPreview.breakpoints.xSmall);
            }
            else if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Small]) {
                _this.updateHeight(_this.configPreview.breakpoints.small);
            }
            else if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Medium]) {
                _this.updateHeight(_this.configPreview.breakpoints.medium);
            }
            else if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Large]) {
                _this.updateHeight(_this.configPreview.breakpoints.large);
            }
            else if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].XLarge]) {
                _this.updateHeight(_this.configPreview.breakpoints.xLarge);
            }
        }));
        return _this;
    }
    /**
     * Method to update the height of previews, passing the desired height as input.
     * @param configBreakpointHeight is a number that represent the desired height to set.
     */
    /**
     * Method to update the height of previews, passing the desired height as input.
     * @private
     * @param {?} configBreakpointHeight is a number that represent the desired height to set.
     * @return {?}
     */
    CarouselPreviewsComponent.prototype.updateHeight = /**
     * Method to update the height of previews, passing the desired height as input.
     * @private
     * @param {?} configBreakpointHeight is a number that represent the desired height to set.
     * @return {?}
     */
    function (configBreakpointHeight) {
        /** @type {?} */
        var newConfigPreview = Object.assign({}, this.configPreview);
        if (this.previewConfig && this.previewConfig.maxHeight) {
            /** @type {?} */
            var heightNum = +this.previewConfig.maxHeight.replace('px', '').replace('%', '');
            newConfigPreview.maxHeight = Math.min(configBreakpointHeight, heightNum) + 'px';
        }
        else {
            /** @type {?} */
            var heightNum = +this.defaultMaxHeight.replace('px', '').replace('%', '');
            newConfigPreview.maxHeight = Math.min(configBreakpointHeight, heightNum) + 'px';
        }
        this.configPreview = newConfigPreview;
        this.ref.markForCheck();
    };
    /**
     * Method ´ngOnInit´ to build `configPreview` applying a default value and also to
     * init the `previews` array.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     */
    /**
     * Method ´ngOnInit´ to build `configPreview` applying a default value and also to
     * init the `previews` array.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    CarouselPreviewsComponent.prototype.ngOnInit = /**
     * Method ´ngOnInit´ to build `configPreview` applying a default value and also to
     * init the `previews` array.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    function () {
        /** @type {?} */
        var defaultBreakpoints = { xSmall: 100, small: 100, medium: 150, large: 200, xLarge: 200 };
        /** @type {?} */
        var defaultPreviewConfig = {
            visible: true,
            number: 4,
            arrows: true,
            clickable: true,
            width: 100 / 4 + '%',
            maxHeight: this.defaultMaxHeight,
            breakpoints: defaultBreakpoints
        };
        this.configPreview = Object.assign({}, defaultPreviewConfig, this.previewConfig);
        // if number is <= 0 reset to default
        if (this.configPreview && this.configPreview.number <= 0) {
            this.configPreview.number = defaultPreviewConfig.number;
        }
        // Init preview image width based on the number of previews in PreviewConfig
        // Don't move this line above, because I need to be sure that both configPreview.number
        // and configPreview.size are initialized
        this.configPreview.width = 100 / this.configPreview.number + '%';
        // change the max-width of this component if there is a specified width !== 100% in carouselConfig
        if (this.carouselConfig && this.carouselConfig.maxWidth !== '100%') {
            this.hostMaxWidth = this.carouselConfig.maxWidth;
        }
        // init previews based on currentImage and the full array of images
        this.initPreviews(this.currentImage, this.images);
        // apply custom height based on responsive breakpoints
        // This is required, because the breakpointSubscription is not triggered at creation,
        // but only when the width changes
        /** @type {?} */
        var isXsmallScreen = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].XSmall);
        /** @type {?} */
        var isSmallScreen = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Small);
        /** @type {?} */
        var isMediumScreen = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Medium);
        /** @type {?} */
        var isLargeScreen = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Large);
        /** @type {?} */
        var isxLargeScreen = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].XLarge);
        if (isXsmallScreen) {
            this.updateHeight(this.configPreview.breakpoints.xSmall);
        }
        else if (isSmallScreen) {
            this.updateHeight(this.configPreview.breakpoints.small);
        }
        else if (isMediumScreen) {
            this.updateHeight(this.configPreview.breakpoints.medium);
        }
        else if (isLargeScreen) {
            this.updateHeight(this.configPreview.breakpoints.large);
        }
        else if (isxLargeScreen) {
            this.updateHeight(this.configPreview.breakpoints.xLarge);
        }
    };
    /**
     * Method to check if an image is active (i.e. a preview image).
     * @param InternalLibImage preview is an image to check if it's active or not
     * @returns boolean true if is active, false otherwise
     */
    /**
     * Method to check if an image is active (i.e. a preview image).
     * @param {?} preview
     * @return {?} boolean true if is active, false otherwise
     */
    CarouselPreviewsComponent.prototype.isActive = /**
     * Method to check if an image is active (i.e. a preview image).
     * @param {?} preview
     * @return {?} boolean true if is active, false otherwise
     */
    function (preview) {
        if (!preview || !this.currentImage) {
            return false;
        }
        return preview.id === this.currentImage.id;
    };
    /**
     * Method ´ngOnChanges´ to update `previews` array.
     * Also, both `start` and `end` local variables will be updated accordingly.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     */
    /**
     * Method ´ngOnChanges´ to update `previews` array.
     * Also, both `start` and `end` local variables will be updated accordingly.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @param {?} changes
     * @return {?}
     */
    CarouselPreviewsComponent.prototype.ngOnChanges = /**
     * Method ´ngOnChanges´ to update `previews` array.
     * Also, both `start` and `end` local variables will be updated accordingly.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        /** @type {?} */
        var simpleChange = changes.currentImage;
        if (!simpleChange) {
            return;
        }
        /** @type {?} */
        var prev = simpleChange.previousValue;
        /** @type {?} */
        var current = simpleChange.currentValue;
        if (current && changes.images && changes.images.previousValue && changes.images.currentValue) {
            // I'm in this if statement, if input images are changed (for instance, because I removed one of them with the 'delete button',
            // or because users changed the images array while modal gallery is still open).
            // In this case, I have to re-init previews, because the input array of images is changed.
            this.initPreviews(current, changes.images.currentValue);
        }
        if (prev && current && prev.id !== current.id) {
            // to manage infinite sliding I have to reset both `start` and `end` at the beginning
            // to show again previews from the first image.
            // This happens when you navigate over the last image to return to the first one
            /** @type {?} */
            var prevIndex = void 0;
            /** @type {?} */
            var currentIndex = void 0;
            try {
                prevIndex = getIndex(prev, this.images);
                currentIndex = getIndex(current, this.images);
            }
            catch (err) {
                console.error('Cannot get previous and current image indexes in previews');
                throw err;
            }
            // apply a formula to get a values to be used to decide if go next, return back or stay without doing anything
            /** @type {?} */
            var calc = Math.floor((this.end - this.start) / 2) + this.start;
            if (prevIndex === this.images.length - 1 && currentIndex === 0) {
                // first image
                this.setBeginningIndexesPreviews();
                this.previews = this.images.filter((/**
                 * @param {?} img
                 * @param {?} i
                 * @return {?}
                 */
                function (img, i) { return i >= _this.start && i < _this.end; }));
                return;
            }
            // the same for the opposite case, when you navigate back from the fist image to go to the last one.
            if (prevIndex === 0 && currentIndex === this.images.length - 1) {
                // last image
                this.setEndIndexesPreviews();
                this.previews = this.images.filter((/**
                 * @param {?} img
                 * @param {?} i
                 * @return {?}
                 */
                function (img, i) { return i >= _this.start && i < _this.end; }));
                return;
            }
            if (this.configPreview.number % 2 === 0) {
                if (calc > currentIndex) {
                    this.previous();
                }
                else {
                    this.next();
                }
            }
            else {
                if (calc > currentIndex) {
                    this.previous();
                }
                if (calc < currentIndex) {
                    this.next();
                }
            }
        }
    };
    /**
     * Method called by events from both keyboard and mouse on a preview.
     * This will trigger the `clickpreview` output with the input preview as its payload.
     * @param InternalLibImage preview that triggered this method
     * @param KeyboardEvent | MouseEvent event payload
     * @param Action that triggered this event (Action.NORMAL by default)
     */
    /**
     * Method called by events from both keyboard and mouse on a preview.
     * This will trigger the `clickpreview` output with the input preview as its payload.
     * @param {?} preview
     * @param {?} event
     * @param {?=} action
     * @return {?}
     */
    CarouselPreviewsComponent.prototype.onImageEvent = /**
     * Method called by events from both keyboard and mouse on a preview.
     * This will trigger the `clickpreview` output with the input preview as its payload.
     * @param {?} preview
     * @param {?} event
     * @param {?=} action
     * @return {?}
     */
    function (preview, event, action) {
        if (action === void 0) { action = Action.NORMAL; }
        if (!this.configPreview || !this.configPreview.clickable) {
            return;
        }
        /** @type {?} */
        var clickedImageIndex = this.images.indexOf(preview);
        /** @type {?} */
        var result = _super.prototype.handleImageEvent.call(this, event);
        if (result === NEXT) {
            this.clickPreview.emit((/** @type {?} */ ({ action: action, result: clickedImageIndex })));
        }
        else if (result === PREV) {
            this.clickPreview.emit((/** @type {?} */ ({ action: action, result: clickedImageIndex })));
        }
    };
    /**
     * Method called by events from both keyboard and mouse on a navigation arrow.
     * @param string direction of the navigation that can be either 'next' or 'prev'
     * @param KeyboardEvent | MouseEvent event payload
     */
    /**
     * Method called by events from both keyboard and mouse on a navigation arrow.
     * @param {?} direction
     * @param {?} event
     * @return {?}
     */
    CarouselPreviewsComponent.prototype.onNavigationEvent = /**
     * Method called by events from both keyboard and mouse on a navigation arrow.
     * @param {?} direction
     * @param {?} event
     * @return {?}
     */
    function (direction, event) {
        /** @type {?} */
        var result = _super.prototype.handleNavigationEvent.call(this, direction, event);
        if (result === NEXT) {
            this.next();
        }
        else if (result === PREV) {
            this.previous();
        }
    };
    /**
     * Method to get aria-label text for a preview image.
     * @param Image is the preview
     */
    /**
     * Method to get aria-label text for a preview image.
     * @param {?} preview
     * @return {?}
     */
    CarouselPreviewsComponent.prototype.getAriaLabel = /**
     * Method to get aria-label text for a preview image.
     * @param {?} preview
     * @return {?}
     */
    function (preview) {
        if (!preview.plain) {
            return preview.modal.ariaLabel || '';
        }
        return preview.plain.ariaLabel || preview.modal.ariaLabel || '';
    };
    /**
     * Method to get title text for a preview image.
     * @param Image is the preview
     */
    /**
     * Method to get title text for a preview image.
     * @param {?} preview
     * @return {?}
     */
    CarouselPreviewsComponent.prototype.getTitle = /**
     * Method to get title text for a preview image.
     * @param {?} preview
     * @return {?}
     */
    function (preview) {
        if (!preview.plain) {
            return preview.modal.title || '';
        }
        return preview.plain.title || preview.modal.title || '';
    };
    /**
     * Method to get alt text for a preview image.
     * @param Image is the preview
     */
    /**
     * Method to get alt text for a preview image.
     * @param {?} preview
     * @return {?}
     */
    CarouselPreviewsComponent.prototype.getAlt = /**
     * Method to get alt text for a preview image.
     * @param {?} preview
     * @return {?}
     */
    function (preview) {
        if (!preview.plain) {
            return preview.modal.alt || '';
        }
        return preview.plain.alt || preview.modal.alt || '';
    };
    /**
     * Method used in the template to track ids in ngFor.
     * @param number index of the array
     * @param Image item of the array
     * @returns number the id of the item
     */
    /**
     * Method used in the template to track ids in ngFor.
     * @param {?} index
     * @param {?} item
     * @return {?} number the id of the item
     */
    CarouselPreviewsComponent.prototype.trackById = /**
     * Method used in the template to track ids in ngFor.
     * @param {?} index
     * @param {?} item
     * @return {?} number the id of the item
     */
    function (index, item) {
        return item.id;
    };
    /**
     * Method used in template to sanitize an url when you need legacyIE11Mode.
     * In this way you can set an url as background of a div.
     * @param unsafeStyle is a string and represents the url to sanitize.
     * @returns a SafeStyle object that can be used in template without problems.
     */
    /**
     * Method used in template to sanitize an url when you need legacyIE11Mode.
     * In this way you can set an url as background of a div.
     * @param {?} unsafeStyle is a string and represents the url to sanitize.
     * @return {?} a SafeStyle object that can be used in template without problems.
     */
    CarouselPreviewsComponent.prototype.sanitizeUrlBgStyle = /**
     * Method used in template to sanitize an url when you need legacyIE11Mode.
     * In this way you can set an url as background of a div.
     * @param {?} unsafeStyle is a string and represents the url to sanitize.
     * @return {?} a SafeStyle object that can be used in template without problems.
     */
    function (unsafeStyle) {
        // Method used only to sanitize background-image style before add it to background property when legacyIE11Mode is enabled
        return this.sanitizer.bypassSecurityTrustStyle('url(' + unsafeStyle + ')');
    };
    /**
     * Method to get the background-size value when IE11LegacyMode is enabled.
     * This prevent weired behaviour on IE11 when previews are really small, but original images (.png/.jgp/...) are big.
     * Using 'cover' it's not enough, because it's causing empty background in some cases.
     * After some experiments, I decided to use the double of the height and auto as width.
     */
    /**
     * Method to get the background-size value when IE11LegacyMode is enabled.
     * This prevent weired behaviour on IE11 when previews are really small, but original images (.png/.jgp/...) are big.
     * Using 'cover' it's not enough, because it's causing empty background in some cases.
     * After some experiments, I decided to use the double of the height and auto as width.
     * @return {?}
     */
    CarouselPreviewsComponent.prototype.getIE11LegacyBgSize = /**
     * Method to get the background-size value when IE11LegacyMode is enabled.
     * This prevent weired behaviour on IE11 when previews are really small, but original images (.png/.jgp/...) are big.
     * Using 'cover' it's not enough, because it's causing empty background in some cases.
     * After some experiments, I decided to use the double of the height and auto as width.
     * @return {?}
     */
    function () {
        if (this.configPreview && this.configPreview.maxHeight) {
            /** @type {?} */
            var bgHeight = +this.configPreview.maxHeight.replace('px', '');
            return '100% ' + bgHeight * 2 + 'px';
        }
        return 'cover';
    };
    /**
     * Method to cleanup resources. In fact, it cleans breakpointSubscription.
     * This is an Angular's lifecycle hook that is called when this component is destroyed.
     */
    /**
     * Method to cleanup resources. In fact, it cleans breakpointSubscription.
     * This is an Angular's lifecycle hook that is called when this component is destroyed.
     * @return {?}
     */
    CarouselPreviewsComponent.prototype.ngOnDestroy = /**
     * Method to cleanup resources. In fact, it cleans breakpointSubscription.
     * This is an Angular's lifecycle hook that is called when this component is destroyed.
     * @return {?}
     */
    function () {
        if (this.breakpointSubscription) {
            this.breakpointSubscription.unsubscribe();
        }
    };
    /**
     * Private method to init previews based on the currentImage and the full array of images.
     * The current image in mandatory to show always the current preview (as highlighted).
     * @param InternalLibImage currentImage to decide how to show previews, because I always want to see the current image as highlighted
     * @param InternalLibImage[] images is the array of all images.
     */
    /**
     * Private method to init previews based on the currentImage and the full array of images.
     * The current image in mandatory to show always the current preview (as highlighted).
     * @private
     * @param {?} currentImage
     * @param {?} images
     * @return {?}
     */
    CarouselPreviewsComponent.prototype.initPreviews = /**
     * Private method to init previews based on the currentImage and the full array of images.
     * The current image in mandatory to show always the current preview (as highlighted).
     * @private
     * @param {?} currentImage
     * @param {?} images
     * @return {?}
     */
    function (currentImage, images) {
        var _this = this;
        /** @type {?} */
        var index;
        try {
            index = getIndex(currentImage, images);
        }
        catch (err) {
            throw err;
        }
        switch (index) {
            case 0:
                // first image
                this.setBeginningIndexesPreviews();
                break;
            case images.length - 1:
                // last image
                this.setEndIndexesPreviews();
                break;
            // default:
            //   // other images
            //   // TODO unused because it starts always at image 0
            //   this.setIndexesPreviews();
            //   break;
        }
        this.previews = images.filter((/**
         * @param {?} img
         * @param {?} i
         * @return {?}
         */
        function (img, i) { return i >= _this.start && i < _this.end; }));
    };
    /**
     * Private method to init both `start` and `end` to the beginning.
     */
    /**
     * Private method to init both `start` and `end` to the beginning.
     * @private
     * @return {?}
     */
    CarouselPreviewsComponent.prototype.setBeginningIndexesPreviews = /**
     * Private method to init both `start` and `end` to the beginning.
     * @private
     * @return {?}
     */
    function () {
        this.start = 0;
        this.end = Math.min((/** @type {?} */ (this.configPreview.number)), this.images.length);
    };
    /**
     * Private method to init both `start` and `end` to the end.
     */
    /**
     * Private method to init both `start` and `end` to the end.
     * @private
     * @return {?}
     */
    CarouselPreviewsComponent.prototype.setEndIndexesPreviews = /**
     * Private method to init both `start` and `end` to the end.
     * @private
     * @return {?}
     */
    function () {
        this.start = this.images.length - 1 - ((/** @type {?} */ (this.configPreview.number)) - 1);
        this.end = this.images.length;
    };
    /**
     * Private method to update the visible previews navigating to the right (next).
     */
    /**
     * Private method to update the visible previews navigating to the right (next).
     * @private
     * @return {?}
     */
    CarouselPreviewsComponent.prototype.next = /**
     * Private method to update the visible previews navigating to the right (next).
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // check if nextImage should be blocked
        if (this.isPreventSliding(this.images.length - 1)) {
            return;
        }
        if (this.end === this.images.length) {
            return;
        }
        this.start++;
        this.end = Math.min(this.end + 1, this.images.length);
        this.previews = this.images.filter((/**
         * @param {?} img
         * @param {?} i
         * @return {?}
         */
        function (img, i) { return i >= _this.start && i < _this.end; }));
    };
    /**
     * Private method to update the visible previews navigating to the left (previous).
     */
    /**
     * Private method to update the visible previews navigating to the left (previous).
     * @private
     * @return {?}
     */
    CarouselPreviewsComponent.prototype.previous = /**
     * Private method to update the visible previews navigating to the left (previous).
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // check if prevImage should be blocked
        if (this.isPreventSliding(0)) {
            return;
        }
        if (this.start === 0) {
            return;
        }
        this.start = Math.max(this.start - 1, 0);
        this.end = Math.min(this.end - 1, this.images.length);
        this.previews = this.images.filter((/**
         * @param {?} img
         * @param {?} i
         * @return {?}
         */
        function (img, i) { return i >= _this.start && i < _this.end; }));
    };
    /**
     * Private method to block/permit sliding between previews.
     * @param number boundaryIndex is the first or the last index of `images` input array
     * @returns boolean if true block sliding, otherwise not
     */
    /**
     * Private method to block/permit sliding between previews.
     * @private
     * @param {?} boundaryIndex
     * @return {?} boolean if true block sliding, otherwise not
     */
    CarouselPreviewsComponent.prototype.isPreventSliding = /**
     * Private method to block/permit sliding between previews.
     * @private
     * @param {?} boundaryIndex
     * @return {?} boolean if true block sliding, otherwise not
     */
    function (boundaryIndex) {
        return getIndex(this.currentImage, this.images) === boundaryIndex;
    };
    /** @nocollapse */
    CarouselPreviewsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] },
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }
    ]; };
    CarouselPreviewsComponent.propDecorators = {
        hostMaxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostBinding"], args: ['style.max-width',] }],
        ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostBinding"], args: ['attr.aria-label',] }],
        carouselConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        currentImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        previewConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        accessibilityConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        clickPreview: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }]
    };
CarouselPreviewsComponent.ɵfac = function CarouselPreviewsComponent_Factory(t) { return new (t || CarouselPreviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"])); };
CarouselPreviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CarouselPreviewsComponent, selectors: [["ks-carousel-previews"]], hostVars: 3, hostBindings: function CarouselPreviewsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx.ariaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("max-width", ctx.hostMaxWidth);
    } }, inputs: { carouselConfig: "carouselConfig", currentImage: "currentImage", images: "images", previewConfig: "previewConfig", accessibilityConfig: "accessibilityConfig" }, outputs: { clickPreview: "clickPreview" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]()], decls: 1, vars: 1, consts: [["class", "previews-container", 3, "title", 4, "ngIf"], [1, "previews-container", 3, "title"], ["role", "button", 1, "nav-left", 3, "tabindex", "click", "keyup"], ["aria-hidden", "true", 3, "title"], [1, "preview-inner-container"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "button", 1, "nav-right", 3, "tabindex", "click", "keyup"], [4, "ngIf", "ngIfElse"], ["legacyMode", ""], ["ksSize", "", "role", "img", 3, "class", "src", "sizeConfig", "title", "alt", "tabindex", "click", "keyup", 4, "ngIf"], ["ksSize", "", "role", "img", 3, "src", "sizeConfig", "title", "alt", "tabindex", "click", "keyup"], ["ksSize", "", "role", "img", 3, "class", "background-color", "background-image", "background-position", "background-size", "background-repeat", "background-attachment", "sizeConfig", "title", "tabindex", "click", "keyup", 4, "ngIf"], ["ksSize", "", "role", "img", 3, "sizeConfig", "title", "tabindex", "click", "keyup"]], template: function CarouselPreviewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CarouselPreviewsComponent_nav_0_Template, 7, 16, "nav", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.configPreview == null ? null : ctx.configPreview.visible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], SizeDirective], styles: ["[_nghost-%COMP%]{position:relative;margin-top:3px;margin-bottom:3px;width:100%}.previews-container[_ngcontent-%COMP%]{align-items:center;-webkit-animation:.8s fadein-semi-visible08;animation:.8s fadein-semi-visible08;display:flex;flex-direction:row;justify-content:center;margin-bottom:0}.previews-container[_ngcontent-%COMP%] > .preview-inner-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:nowrap;width:100%}.previews-container[_ngcontent-%COMP%] > .preview-inner-container[_ngcontent-%COMP%] > .preview-image[_ngcontent-%COMP%]{cursor:pointer;-o-object-fit:cover;object-fit:cover}.previews-container[_ngcontent-%COMP%] > .preview-inner-container[_ngcontent-%COMP%] > .preview-image.unclickable[_ngcontent-%COMP%]{cursor:not-allowed}.previews-container[_ngcontent-%COMP%] > .preview-inner-container[_ngcontent-%COMP%] > .preview-ie11-image[_ngcontent-%COMP%]{cursor:pointer}.previews-container[_ngcontent-%COMP%] > .preview-inner-container[_ngcontent-%COMP%] > .preview-ie11-image.unclickable[_ngcontent-%COMP%]{cursor:not-allowed}.previews-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%], .previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%], .previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{position:absolute;top:calc(50% - 7px);color:#919191;z-index:1000;cursor:pointer;transition:.5s}.previews-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]:hover, .previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]:hover, .previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{margin-right:10px;left:10px}.previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%] > .left-arrow-preview-image[_ngcontent-%COMP%]{opacity:1}.previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{margin-left:10px;right:10px}.previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%] > .right-arrow-preview-image[_ngcontent-%COMP%]{opacity:1}", ".arrow-preview-image[_ngcontent-%COMP%], .empty-arrow-preview-image[_ngcontent-%COMP%], .left-arrow-preview-image[_ngcontent-%COMP%], .right-arrow-preview-image[_ngcontent-%COMP%]{width:15px;height:15px;opacity:.5}.empty-arrow-preview-image[_ngcontent-%COMP%]{background:#000;opacity:0}.left-arrow-preview-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:.5s}.left-arrow-preview-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.right-arrow-preview-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:.5s}.right-arrow-preview-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](CarouselPreviewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'ks-carousel-previews',
                template: "<nav *ngIf=\"configPreview?.visible\"\n     class=\"previews-container\"\n     [attr.aria-label]=\"accessibilityConfig?.carouselPreviewsContainerAriaLabel\"\n     [title]=\"accessibilityConfig?.carouselPreviewsContainerTitle\">\n\n  <a class=\"nav-left\"\n     [attr.aria-label]=\"accessibilityConfig?.carouselPreviewScrollPrevAriaLabel\"\n     [tabindex]=\"configPreview.arrows && start > 0 ? 0 : -1\" role=\"button\"\n     (click)=\"onNavigationEvent('left', $event)\" (keyup)=\"onNavigationEvent('left', $event)\">\n    <div class=\"inside {{configPreview.arrows && start > 0 ? 'left-arrow-preview-image' : 'empty-arrow-preview-image'}}\"\n         aria-hidden=\"true\"\n         [title]=\"accessibilityConfig?.carouselPreviewScrollPrevTitle\"></div>\n  </a>\n\n  <div class=\"preview-inner-container\">\n    <ng-container *ngFor=\"let preview of previews; trackBy: trackById; let index = index\">\n      <ng-container *ngIf=\"!carouselConfig?.legacyIE11Mode; else legacyMode\">\n        <img *ngIf=\"preview?.modal?.img\"\n             class=\"inside preview-image{{isActive(preview) ? ' active' : ''}}{{!configPreview.clickable ? ' unclickable' : ''}}\"\n             [src]=\"preview.plain?.img ? preview.plain.img : preview.modal.img\"\n             ksSize [sizeConfig]=\"{width: configPreview?.width,\n                                 height: configPreview?.maxHeight}\"\n             [attr.aria-label]=\"getAriaLabel(preview)\"\n             [title]=\"getTitle(preview)\"\n             alt=\"{{getAlt(preview)}}\"\n             [tabindex]=\"0\" role=\"img\"\n             (click)=\"onImageEvent(preview, $event, clickAction)\" (keyup)=\"onImageEvent(preview, $event, keyboardAction)\"/>\n      </ng-container>\n      <ng-template #legacyMode>\n        <div *ngIf=\"preview?.modal?.img\"\n             class=\"inside preview-ie11-image{{isActive(preview) ? ' active' : ''}}{{!configPreview.clickable ? ' unclickable' : ''}}\"\n             [style.background-color]=\"'transparent'\"\n             [style.background-image]=\"sanitizeUrlBgStyle(preview.plain?.img ? preview.plain.img : preview.modal.img)\"\n             [style.background-position]=\"'center center'\"\n             [style.background-size]=\"getIE11LegacyBgSize()\"\n             [style.background-repeat]=\"'no-repeat'\"\n             [style.background-attachment]=\"'scroll'\"\n             ksSize [sizeConfig]=\"{width: configPreview?.width,\n                                 height: configPreview?.maxHeight}\"\n             [attr.aria-label]=\"getAriaLabel(preview)\"\n             [title]=\"getTitle(preview)\"\n             [tabindex]=\"0\" role=\"img\"\n             (click)=\"onImageEvent(preview, $event, clickAction)\" (keyup)=\"onImageEvent(preview, $event, keyboardAction)\"></div>\n      </ng-template>\n    </ng-container>\n  </div>\n\n  <a class=\"nav-right\"\n     [attr.aria-label]=\"accessibilityConfig?.carouselPreviewScrollNextAriaLabel\"\n     [tabindex]=\"configPreview.arrows && end < images.length ? 0 : -1\" role=\"button\"\n     (click)=\"onNavigationEvent('right', $event)\" (keyup)=\"onNavigationEvent('right', $event)\">\n    <div class=\"inside {{configPreview.arrows && end < images.length ? 'right-arrow-preview-image' : 'empty-arrow-preview-image'}}\"\n         aria-hidden=\"true\"\n         [title]=\"accessibilityConfig?.carouselPreviewScrollNextTitle\"></div>\n  </a>\n\n</nav>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
                styles: [":host{position:relative;margin-top:3px;margin-bottom:3px;width:100%}.previews-container{align-items:center;-webkit-animation:.8s fadein-semi-visible08;animation:.8s fadein-semi-visible08;display:flex;flex-direction:row;justify-content:center;margin-bottom:0}.previews-container>.preview-inner-container{display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:nowrap;width:100%}.previews-container>.preview-inner-container>.preview-image{cursor:pointer;-o-object-fit:cover;object-fit:cover}.previews-container>.preview-inner-container>.preview-image.unclickable{cursor:not-allowed}.previews-container>.preview-inner-container>.preview-ie11-image{cursor:pointer}.previews-container>.preview-inner-container>.preview-ie11-image.unclickable{cursor:not-allowed}.previews-container .nav,.previews-container>.nav-left,.previews-container>.nav-right{position:absolute;top:calc(50% - 7px);color:#919191;z-index:1000;cursor:pointer;transition:.5s}.previews-container .nav:hover,.previews-container>.nav-left:hover,.previews-container>.nav-right:hover{transform:scale(1.1)}.previews-container>.nav-left{margin-right:10px;left:10px}.previews-container>.nav-left>.left-arrow-preview-image{opacity:1}.previews-container>.nav-right{margin-left:10px;right:10px}.previews-container>.nav-right>.right-arrow-preview-image{opacity:1}", ".arrow-preview-image,.empty-arrow-preview-image,.left-arrow-preview-image,.right-arrow-preview-image{width:15px;height:15px;opacity:.5}.empty-arrow-preview-image{background:#000;opacity:0}.left-arrow-preview-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:.5s}.left-arrow-preview-image:hover{transform:scale(1.2)}.right-arrow-preview-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:.5s}.right-arrow-preview-image:hover{transform:scale(1.2)}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }]; }, { hostMaxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostBinding"],
            args: ['style.max-width']
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostBinding"],
            args: ['attr.aria-label']
        }], carouselConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], currentImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], previewConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], accessibilityConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], clickPreview: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }] }); })();
    return CarouselPreviewsComponent;
}(AccessibleComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var ButtonsStrategy = {
    // don't use 0 here
    // the first index is 1 and all of the following members are auto-incremented from that point on
    DEFAULT: 1,
    SIMPLE: 2,
    ADVANCED: 3,
    FULL: 4,
    CUSTOM: 5,
};
ButtonsStrategy[ButtonsStrategy.DEFAULT] = 'DEFAULT';
ButtonsStrategy[ButtonsStrategy.SIMPLE] = 'SIMPLE';
ButtonsStrategy[ButtonsStrategy.ADVANCED] = 'ADVANCED';
ButtonsStrategy[ButtonsStrategy.FULL] = 'FULL';
ButtonsStrategy[ButtonsStrategy.CUSTOM] = 'CUSTOM';
/** @enum {number} */
var ButtonType = {
    // don't use 0 here
    // the first index is 1 and all of the following members are auto-incremented from that point on
    // REFRESH = 1,
    DELETE: 1,
    EXTURL: 2,
    DOWNLOAD: 3,
    CLOSE: 4,
    CUSTOM: 5,
    FULLSCREEN: 6,
    // ROTATE
};
ButtonType[ButtonType.DELETE] = 'DELETE';
ButtonType[ButtonType.EXTURL] = 'EXTURL';
ButtonType[ButtonType.DOWNLOAD] = 'DOWNLOAD';
ButtonType[ButtonType.CLOSE] = 'CLOSE';
ButtonType[ButtonType.CUSTOM] = 'CUSTOM';
ButtonType[ButtonType.FULLSCREEN] = 'FULLSCREEN';
/**
 * Array of admitted types of buttons.
 * @type {?}
 */
var WHITELIST_BUTTON_TYPES = [
    // ButtonType.REFRESH,
    ButtonType.FULLSCREEN,
    ButtonType.DELETE,
    ButtonType.EXTURL,
    ButtonType.DOWNLOAD,
    ButtonType.CLOSE,
    ButtonType.CUSTOM
    // ButtonType.ROTATE
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default button size object
 * @type {?}
 */
var KS_DEFAULT_SIZE = { height: 'auto', width: '30px' };
/**
 * Default close button object
 * @type {?}
 */
var KS_DEFAULT_BTN_CLOSE = {
    className: 'close-image',
    size: KS_DEFAULT_SIZE,
    type: ButtonType.CLOSE,
    title: 'Close this modal image gallery',
    ariaLabel: 'Close this modal image gallery'
};
/**
 * Default download button object
 * @type {?}
 */
var KS_DEFAULT_BTN_DOWNLOAD = {
    className: 'download-image',
    size: KS_DEFAULT_SIZE,
    type: ButtonType.DOWNLOAD,
    title: 'Download the current image',
    ariaLabel: 'Download the current image'
};
/**
 * Default exturl button object
 * @type {?}
 */
var KS_DEFAULT_BTN_EXTURL = {
    className: 'ext-url-image',
    size: KS_DEFAULT_SIZE,
    type: ButtonType.EXTURL,
    title: 'Navigate the current image',
    ariaLabel: 'Navigate the current image'
};
// /**
//  * Default refresh button object
//  */
// export const KS_DEFAULT_BTN_REFRESH: ButtonConfig = {
//   className: 'refresh-image',
//   size: KS_DEFAULT_SIZE,
//   type: ButtonType.REFRESH,
//   title: 'Refresh all images',
//   ariaLabel: 'Refresh all images'
// };
/**
 * Default delete button object
 * @type {?}
 */
var KS_DEFAULT_BTN_DELETE = {
    className: 'delete-image',
    size: KS_DEFAULT_SIZE,
    type: ButtonType.DELETE,
    title: 'Delete the current image',
    ariaLabel: 'Delete the current image'
};
/**
 * Default full-screen button object
 * @type {?}
 */
var KS_DEFAULT_BTN_FULL_SCREEN = {
    className: 'fullscreen-image',
    size: KS_DEFAULT_SIZE,
    type: ButtonType.FULLSCREEN,
    title: 'Switch to full-screen',
    ariaLabel: 'Switch to full-screen'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with all upper buttons.
 * Also it emits click events as outputs.
 */
var UpperButtonsComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(UpperButtonsComponent, _super);
    function UpperButtonsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Output to emit clicks on refresh button. The payload contains a `ButtonEvent`.
         */
        _this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Output to emit clicks on delete button. The payload contains a `ButtonEvent`.
         */
        _this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Output to emit clicks on navigate button. The payload contains a `ButtonEvent`.
         */
        _this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Output to emit clicks on download button. The payload contains a `ButtonEvent`.
         */
        _this.download = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Output to emit clicks on close button. The payload contains a `ButtonEvent`.
         */
        _this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Output to emit clicks on full-screen button. The payload contains a `ButtonEvent`.
         */
        _this.fullscreen = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        // /**
        //  * Output to emit clicks on rotate button. The payload contains a `ButtonEvent`.
        //  */
        // @Output()
        // rotate: EventEmitter<ButtonEvent> = new EventEmitter<ButtonEvent>();
        /**
         * Output to emit clicks on all custom buttons. The payload contains a `ButtonEvent`.
         */
        _this.customEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Default buttons array for standard configuration
         */
        _this.defaultButtonsDefault = [KS_DEFAULT_BTN_CLOSE];
        /**
         * Default buttons array for simple configuration
         */
        _this.simpleButtonsDefault = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__spread"])([KS_DEFAULT_BTN_DOWNLOAD], _this.defaultButtonsDefault);
        /**
         * Default buttons array for advanced configuration
         */
        _this.advancedButtonsDefault = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__spread"])([KS_DEFAULT_BTN_EXTURL], _this.simpleButtonsDefault);
        /**
         * Default buttons array for full configuration
         */
        _this.fullButtonsDefault = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__spread"])([
            /*KS_DEFAULT_BTN_REFRESH, */
            KS_DEFAULT_BTN_FULL_SCREEN,
            KS_DEFAULT_BTN_DELETE
        ], _this.advancedButtonsDefault);
        return _this;
    }
    /**
     * Method ´ngOnInit´ to build `configButtons` applying a default value and also to
     * init the `buttons` array.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     */
    /**
     * Method ´ngOnInit´ to build `configButtons` applying a default value and also to
     * init the `buttons` array.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    UpperButtonsComponent.prototype.ngOnInit = /**
     * Method ´ngOnInit´ to build `configButtons` applying a default value and also to
     * init the `buttons` array.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    function () {
        /** @type {?} */
        var defaultConfig = { visible: true, strategy: ButtonsStrategy.DEFAULT };
        this.configButtons = Object.assign(defaultConfig, this.buttonsConfig);
        switch (this.configButtons.strategy) {
            case ButtonsStrategy.SIMPLE:
                this.buttons = this.addButtonIds(this.simpleButtonsDefault);
                break;
            case ButtonsStrategy.ADVANCED:
                this.buttons = this.addButtonIds(this.advancedButtonsDefault);
                break;
            case ButtonsStrategy.FULL:
                this.buttons = this.addButtonIds(this.fullButtonsDefault);
                break;
            case ButtonsStrategy.CUSTOM:
                this.buttons = this.addButtonIds(this.validateCustomButtons(this.configButtons.buttons));
                break;
            case ButtonsStrategy.DEFAULT:
            default:
                this.buttons = this.addButtonIds(this.defaultButtonsDefault);
                break;
        }
    };
    /**
     * Method called by events from both keyboard and mouse on a button.
     * This will call a private method to trigger an output with the right payload.
     * @param InternalButtonConfig button that called this method
     * @param KeyboardEvent | MouseEvent event payload
     * @param Action action that triggered the source event or `Action.CLICK` if not specified
     * @throws an error if the button type is unknown
     */
    /**
     * Method called by events from both keyboard and mouse on a button.
     * This will call a private method to trigger an output with the right payload.
     * @throws an error if the button type is unknown
     * @param {?} button
     * @param {?} event
     * @param {?=} action
     * @return {?}
     */
    UpperButtonsComponent.prototype.onEvent = /**
     * Method called by events from both keyboard and mouse on a button.
     * This will call a private method to trigger an output with the right payload.
     * @throws an error if the button type is unknown
     * @param {?} button
     * @param {?} event
     * @param {?=} action
     * @return {?}
     */
    function (button, event, action) {
        if (action === void 0) { action = Action.CLICK; }
        if (!event) {
            return;
        }
        /** @type {?} */
        var dataToEmit = {
            button: button,
            // current image initialized as null
            // (I'll fill this value inside the parent of this component
            image: null,
            action: action
        };
        switch (button.type) {
            // case ButtonType.REFRESH:
            //   this.triggerOnMouseAndKeyboard(this.refresh, event, dataToEmit);
            //   break;
            case ButtonType.DELETE:
                this.triggerOnMouseAndKeyboard(this.delete, event, dataToEmit);
                break;
            case ButtonType.EXTURL:
                if (!this.currentImage || !this.currentImage.modal || !this.currentImage.modal.extUrl) {
                    return;
                }
                this.triggerOnMouseAndKeyboard(this.navigate, event, dataToEmit);
                break;
            case ButtonType.DOWNLOAD:
                this.triggerOnMouseAndKeyboard(this.download, event, dataToEmit);
                break;
            case ButtonType.CLOSE:
                this.triggerOnMouseAndKeyboard(this.close, event, dataToEmit);
                break;
            case ButtonType.CUSTOM:
                this.triggerOnMouseAndKeyboard(this.customEmit, event, dataToEmit);
                break;
            case ButtonType.FULLSCREEN:
                this.triggerOnMouseAndKeyboard(this.fullscreen, event, dataToEmit);
                break;
            // case ButtonType.ROTATE:
            //   this.triggerOnMouseAndKeyboard(this.rotate, event, dataToEmit);
            //   break;
            default:
                throw new Error("Unknown button's type into ButtonConfig");
        }
    };
    /**
     * Method used in the template to track ids in ngFor.
     * @param number index of the array
     * @param Image item of the array
     * @returns number the id of the item or undefined if the item is not valid
     */
    /**
     * Method used in the template to track ids in ngFor.
     * @param {?} index
     * @param {?} item
     * @return {?} number the id of the item or undefined if the item is not valid
     */
    UpperButtonsComponent.prototype.trackById = /**
     * Method used in the template to track ids in ngFor.
     * @param {?} index
     * @param {?} item
     * @return {?} number the id of the item or undefined if the item is not valid
     */
    function (index, item) {
        return item ? item.id : undefined;
    };
    /**
     * Private method to emit an event using the specified output as an `EventEmitter`.
     * @param EventEmitter<ButtonEvent> emitter is the output to emit the `ButtonEvent`
     * @param KeyboardEvent | MouseEvent event is the source that triggered this method
     * @param ButtonEvent dataToEmit payload to emit
     */
    /**
     * Private method to emit an event using the specified output as an `EventEmitter`.
     * @private
     * @param {?} emitter
     * @param {?} event
     * @param {?} dataToEmit
     * @return {?}
     */
    UpperButtonsComponent.prototype.triggerOnMouseAndKeyboard = /**
     * Private method to emit an event using the specified output as an `EventEmitter`.
     * @private
     * @param {?} emitter
     * @param {?} event
     * @param {?} dataToEmit
     * @return {?}
     */
    function (emitter, event, dataToEmit) {
        if (!emitter) {
            throw new Error("UpperButtonsComponent unknown emitter in triggerOnMouseAndKeyboard");
        }
        /** @type {?} */
        var result = _super.prototype.handleImageEvent.call(this, event);
        if (result === NEXT) {
            emitter.emit(dataToEmit);
        }
    };
    /**
     * Private method to add ids to the array of buttons.
     * It adds ids in a reverse way, to be sure that the last button will always have id = 0.
     * This is really useful in unit testing to be sure that close button always have id = 0, download 1 and so on...
     * It's totally transparent to the user.
     * @param ButtonConfig[] buttons config array
     * @returns ButtonConfig[] the input array with incremental numeric ids
     */
    /**
     * Private method to add ids to the array of buttons.
     * It adds ids in a reverse way, to be sure that the last button will always have id = 0.
     * This is really useful in unit testing to be sure that close button always have id = 0, download 1 and so on...
     * It's totally transparent to the user.
     * @private
     * @param {?} buttons
     * @return {?} ButtonConfig[] the input array with incremental numeric ids
     */
    UpperButtonsComponent.prototype.addButtonIds = /**
     * Private method to add ids to the array of buttons.
     * It adds ids in a reverse way, to be sure that the last button will always have id = 0.
     * This is really useful in unit testing to be sure that close button always have id = 0, download 1 and so on...
     * It's totally transparent to the user.
     * @private
     * @param {?} buttons
     * @return {?} ButtonConfig[] the input array with incremental numeric ids
     */
    function (buttons) {
        return buttons.map((/**
         * @param {?} val
         * @param {?} i
         * @return {?}
         */
        function (val, i) { return Object.assign(val, { id: buttons.length - 1 - i }); }));
    };
    /**
     * Private method to validate custom buttons received as input.
     * @param ButtonConfig[] buttons config array
     * @returns ButtonConfig[] the same input buttons config array
     * @throws an error is exists a button with an unknown type
     */
    /**
     * Private method to validate custom buttons received as input.
     * @throws an error is exists a button with an unknown type
     * @private
     * @param {?=} buttons
     * @return {?} ButtonConfig[] the same input buttons config array
     */
    UpperButtonsComponent.prototype.validateCustomButtons = /**
     * Private method to validate custom buttons received as input.
     * @throws an error is exists a button with an unknown type
     * @private
     * @param {?=} buttons
     * @return {?} ButtonConfig[] the same input buttons config array
     */
    function (buttons) {
        if (buttons === void 0) { buttons = []; }
        buttons.forEach((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var indexOfButtonType = WHITELIST_BUTTON_TYPES.findIndex((/**
             * @param {?} type
             * @return {?}
             */
            function (type) { return type === val.type; }));
            if (indexOfButtonType === -1) {
                throw new Error("Unknown ButtonType. For custom types use ButtonType.CUSTOM");
            }
        }));
        return buttons;
    };
    UpperButtonsComponent.propDecorators = {
        currentImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        buttonsConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        refresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        delete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        navigate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        download: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        fullscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        customEmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }]
    };
UpperButtonsComponent.ɵfac = function UpperButtonsComponent_Factory(t) { return ɵUpperButtonsComponent_BaseFactory(t || UpperButtonsComponent); };
UpperButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: UpperButtonsComponent, selectors: [["ks-upper-buttons"]], inputs: { currentImage: "currentImage", buttonsConfig: "buttonsConfig" }, outputs: { refresh: "refresh", delete: "delete", navigate: "navigate", download: "download", close: "close", fullscreen: "fullscreen", customEmit: "customEmit" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 1, consts: [[1, "buttons-container"], [4, "ngIf"], ["class", "upper-button", "ksSize", "", "role", "button", 3, "sizeConfig", "ngStyle", "tabindex", "click", "keyup", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ksSize", "", "role", "button", 1, "upper-button", 3, "sizeConfig", "ngStyle", "tabindex", "click", "keyup"], ["aria-hidden", "true", 3, "title"]], template: function UpperButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UpperButtonsComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.configButtons || (ctx.configButtons == null ? null : ctx.configButtons.visible));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], SizeDirective, _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"]], styles: [".buttons-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end}.buttons-container[_ngcontent-%COMP%] > .upper-button[_ngcontent-%COMP%]{-ms-grid-row-align:center;align-self:center;margin-right:30px;margin-top:28px;font-size:50px;text-decoration:none;cursor:pointer;-webkit-animation:.6s animatezoom;animation:.6s animatezoom;color:#fff}@-webkit-keyframes animatezoom{from{transform:scale(0)}to{transform:scale(1)}}@keyframes animatezoom{from{transform:scale(0)}to{transform:scale(1)}}.base-btn[_ngcontent-%COMP%], .close-image[_ngcontent-%COMP%], .copy[_ngcontent-%COMP%], .delete-image[_ngcontent-%COMP%], .download-image[_ngcontent-%COMP%], .ext-url-image[_ngcontent-%COMP%], .fullscreen-image[_ngcontent-%COMP%], .refresh-image[_ngcontent-%COMP%], .rotate-image[_ngcontent-%COMP%]{width:30px;height:30px;background-size:30px;opacity:.8;transition:.5s}.base-btn[_ngcontent-%COMP%]:hover, .close-image[_ngcontent-%COMP%]:hover, .copy[_ngcontent-%COMP%]:hover, .delete-image[_ngcontent-%COMP%]:hover, .download-image[_ngcontent-%COMP%]:hover, .ext-url-image[_ngcontent-%COMP%]:hover, .fullscreen-image[_ngcontent-%COMP%]:hover, .refresh-image[_ngcontent-%COMP%]:hover, .rotate-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.rotate-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTMzLDJjNy43NDYsMCwxNS4wMjgsMy4wMTcsMjAuNTA1LDguNDk0YzEwLjEzOCwxMC4xMzcsMTEuMzEsMjYuMzk2LDIuNzQsMzcuODQ5TDUyLDUyLjU4OVY0NGgtMnYxMWwxLDFoMTF2LTJoLTguNTgyICAgIGw0LjI5Mi00LjI5M2wwLjA5Mi0wLjEwNmM5LjIxMS0xMi4yNDcsNy45NzItMjkuNjY3LTIuODgzLTQwLjUyMUM0OS4wNjQsMy4yMjUsNDEuMjgsMCwzMywwVjJ6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTcuNzU1LDE1LjY1N0wxMiwxMS40MTFWMjBoMlY5bC0xLTFIMnYyaDguNTgyTDYuMjksMTQuMjkzbC0wLjA5MiwwLjEwNkMtMy4wMTMsMjYuNjQ2LTEuNzczLDQ0LjA2Niw5LjA4MSw1NC45MiAgICBDMTQuOTM2LDYwLjc3NSwyMi43Miw2NCwzMSw2NHYtMmMtNy43NDYsMC0xNS4wMjgtMy4wMTctMjAuNTA1LTguNDk0QzAuMzU3LDQzLjM2OS0wLjgxNCwyNy4xMSw3Ljc1NSwxNS42NTd6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}.fullscreen-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTMgNTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzIDUzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNNTIuOTIzLDAuNjE4Yy0wLjEwMS0wLjI0NC0wLjI5Ni0wLjQzOS0wLjU0MS0wLjU0MUM1Mi4yNiwwLjAyNyw1Mi4xMywwLDUyLDBINDBjLTAuNTUyLDAtMSwwLjQ0OC0xLDFzMC40NDgsMSwxLDFoOS41ODYgICBMMzMuMjkzLDE4LjI5M2MtMC4zOTEsMC4zOTEtMC4zOTEsMS4wMjMsMCwxLjQxNEMzMy40ODgsMTkuOTAyLDMzLjc0NCwyMCwzNCwyMHMwLjUxMi0wLjA5OCwwLjcwNy0wLjI5M0w1MSwzLjQxNFYxMyAgIGMwLDAuNTUyLDAuNDQ4LDEsMSwxczEtMC40NDgsMS0xVjFDNTMsMC44Nyw1Mi45NzMsMC43NCw1Mi45MjMsMC42MTh6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTE4LjI5MywzMy4yOTNMMiw0OS41ODZWNDBjMC0wLjU1Mi0wLjQ0OC0xLTEtMXMtMSwwLjQ0OC0xLDF2MTJjMCwwLjEzLDAuMDI3LDAuMjYsMC4wNzcsMC4zODIgICBjMC4xMDEsMC4yNDQsMC4yOTYsMC40MzksMC41NDEsMC41NDFDMC43NCw1Mi45NzMsMC44Nyw1MywxLDUzaDEyYzAuNTUyLDAsMS0wLjQ0OCwxLTFzLTAuNDQ4LTEtMS0xSDMuNDE0bDE2LjI5My0xNi4yOTMgICBjMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNFMxOC42ODQsMzIuOTAyLDE4LjI5MywzMy4yOTN6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTEsMTRjMC41NTIsMCwxLTAuNDQ4LDEtMVYzLjQxNGwxNi4yOTIsMTYuMjkyYzAuMTk1LDAuMTk1LDAuNDUxLDAuMjkzLDAuNzA3LDAuMjkzczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzICAgYzAuMzkxLTAuMzkxLDAuMzkxLTEuMDIzLDAtMS40MTRMMy40MTQsMkgxM2MwLjU1MiwwLDEtMC40NDgsMS0xcy0wLjQ0OC0xLTEtMUgxQzAuODcsMCwwLjc0LDAuMDI3LDAuNjE4LDAuMDc3ICAgQzAuMzczLDAuMTc5LDAuMTc5LDAuMzczLDAuMDc3LDAuNjE4QzAuMDI3LDAuNzQsMCwwLjg3LDAsMXYxMkMwLDEzLjU1MiwwLjQ0OCwxNCwxLDE0eiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik01MiwzOWMtMC41NTIsMC0xLDAuNDQ4LTEsMXY5LjU4NkwzNC43MDcsMzMuMjkyYy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwcy0wLjM5MSwxLjAyMywwLDEuNDE0TDQ5LjU4Niw1MUg0MCAgIGMtMC41NTIsMC0xLDAuNDQ4LTEsMXMwLjQ0OCwxLDEsMWgxMmMwLjEzLDAsMC4yNi0wLjAyNywwLjM4Mi0wLjA3N2MwLjI0NC0wLjEwMSwwLjQzOS0wLjI5NiwwLjU0MS0wLjU0MSAgIEM1Mi45NzMsNTIuMjYsNTMsNTIuMTMsNTMsNTJWNDBDNTMsMzkuNDQ4LDUyLjU1MiwzOSw1MiwzOXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.delete-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4Ni40IDQ4Ni40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODYuNCA0ODYuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQ0Niw3MEgzNDQuOFY1My41YzAtMjkuNS0yNC01My41LTUzLjUtNTMuNWgtOTYuMmMtMjkuNSwwLTUzLjUsMjQtNTMuNSw1My41VjcwSDQwLjRjLTcuNSwwLTEzLjUsNi0xMy41LDEzLjUgICAgUzMyLjksOTcsNDAuNCw5N2gyNC40djMxNy4yYzAsMzkuOCwzMi40LDcyLjIsNzIuMiw3Mi4yaDIxMi40YzM5LjgsMCw3Mi4yLTMyLjQsNzIuMi03Mi4yVjk3SDQ0NmM3LjUsMCwxMy41LTYsMTMuNS0xMy41ICAgIFM0NTMuNSw3MCw0NDYsNzB6IE0xNjguNiw1My41YzAtMTQuNiwxMS45LTI2LjUsMjYuNS0yNi41aDk2LjJjMTQuNiwwLDI2LjUsMTEuOSwyNi41LDI2LjVWNzBIMTY4LjZWNTMuNXogTTM5NC42LDQxNC4yICAgIGMwLDI0LjktMjAuMyw0NS4yLTQ1LjIsNDUuMkgxMzdjLTI0LjksMC00NS4yLTIwLjMtNDUuMi00NS4yVjk3aDMwMi45djMxNy4ySDM5NC42eiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0yNDMuMiw0MTFjNy41LDAsMTMuNS02LDEzLjUtMTMuNVYxNTguOWMwLTcuNS02LTEzLjUtMTMuNS0xMy41cy0xMy41LDYtMTMuNSwxMy41djIzOC41ICAgIEMyMjkuNyw0MDQuOSwyMzUuNyw0MTEsMjQzLjIsNDExeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0xNTUuMSwzOTYuMWM3LjUsMCwxMy41LTYsMTMuNS0xMy41VjE3My43YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjA4LjkgICAgQzE0MS42LDM5MC4xLDE0Ny43LDM5Ni4xLDE1NS4xLDM5Ni4xeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0zMzEuMywzOTYuMWM3LjUsMCwxMy41LTYsMTMuNS0xMy41VjE3My43YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjA4LjkgICAgQzMxNy44LDM5MC4xLDMyMy44LDM5Ni4xLDMzMS4zLDM5Ni4xeiIgZmlsbD0iI0ZGRkZGRiIvPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.ext-url-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPjxnPjxnPjxnPjxwYXRoIGQ9Ik00ODAsMjg4djExMmMwLDQ0LjE4My0zNS44MTcsODAtODAsODBIMTEyYy00NC4xODMsMC04MC0zNS44MTctODAtODBWMTEyYzAtNDQuMTgzLDM1LjgxNy04MCw4MC04MGg5NlYwaC05NiAgICAgQzUwLjE0NCwwLDAsNTAuMTQ0LDAsMTEydjI4OGMwLDYxLjg1Niw1MC4xNDQsMTEyLDExMiwxMTJoMjg4YzYxLjg1NiwwLDExMi01MC4xNDQsMTEyLTExMlYyODhINDgweiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0xNzYsNDE2aDMyVjI4OGMwLTEyNS43NiwxMDcuNTItMTI4LDExMi0xMjhoMTA1LjQ0bC04NC42NCw4NC42NGwyMi41NiwyMi41NmwxMTItMTEyYzYuMjA0LTYuMjQxLDYuMjA0LTE2LjMxOSwwLTIyLjU2ICAgICBsLTExMi0xMTJsLTIyLjcyLDIyLjcybDg0LjgsODQuNjRIMzIwYy0xLjQ0LDAtMTQ0LDEuNzYtMTQ0LDE2MFY0MTZ6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.download-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3MS4yIDQ3MS4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzEuMiA0NzEuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQ1Ny43LDIzMC4xNWMtNy41LDAtMTMuNSw2LTEzLjUsMTMuNXYxMjIuOGMwLDMzLjQtMjcuMiw2MC41LTYwLjUsNjAuNUg4Ny41Yy0zMy40LDAtNjAuNS0yNy4yLTYwLjUtNjAuNXYtMTI0LjggICAgYzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MTI0LjhjMCw0OC4zLDM5LjMsODcuNSw4Ny41LDg3LjVoMjk2LjJjNDguMywwLDg3LjUtMzkuMyw4Ny41LTg3LjV2LTEyMi44ICAgIEM0NzEuMiwyMzYuMjUsNDY1LjIsMjMwLjE1LDQ1Ny43LDIzMC4xNXoiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJNMjI2LjEsMzQ2Ljc1YzIuNiwyLjYsNi4xLDQsOS41LDRzNi45LTEuMyw5LjUtNGw4NS44LTg1LjhjNS4zLTUuMyw1LjMtMTMuOCwwLTE5LjFjLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwbC02Mi43LDYyLjggICAgVjMwLjc1YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjczLjlsLTYyLjgtNjIuOGMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xICAgIEwyMjYuMSwzNDYuNzV6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}.close-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3NS4yIDQ3NS4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzUuMiA0NzUuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQwNS42LDY5LjZDMzYwLjcsMjQuNywzMDEuMSwwLDIzNy42LDBzLTEyMy4xLDI0LjctMTY4LDY5LjZTMCwxNzQuMSwwLDIzNy42czI0LjcsMTIzLjEsNjkuNiwxNjhzMTA0LjUsNjkuNiwxNjgsNjkuNiAgICBzMTIzLjEtMjQuNywxNjgtNjkuNnM2OS42LTEwNC41LDY5LjYtMTY4UzQ1MC41LDExNC41LDQwNS42LDY5LjZ6IE0zODYuNSwzODYuNWMtMzkuOCwzOS44LTkyLjcsNjEuNy0xNDguOSw2MS43ICAgIHMtMTA5LjEtMjEuOS0xNDguOS02MS43Yy04Mi4xLTgyLjEtODIuMS0yMTUuNywwLTI5Ny44QzEyOC41LDQ4LjksMTgxLjQsMjcsMjM3LjYsMjdzMTA5LjEsMjEuOSwxNDguOSw2MS43ICAgIEM0NjguNiwxNzAuOCw0NjguNiwzMDQuNCwzODYuNSwzODYuNXoiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJNMzQyLjMsMTMyLjljLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwbC04NS42LDg1LjZMMTUyLDEzMi45Yy01LjMtNS4zLTEzLjgtNS4zLTE5LjEsMGMtNS4zLDUuMy01LjMsMTMuOCwwLDE5LjEgICAgbDg1LjYsODUuNmwtODUuNiw4NS42Yy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWMyLjYsMi42LDYuMSw0LDkuNSw0czYuOS0xLjMsOS41LTRsODUuNi04NS42bDg1LjYsODUuNmMyLjYsMi42LDYuMSw0LDkuNSw0ICAgIGMzLjUsMCw2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xbC04NS40LTg1LjZsODUuNi04NS42QzM0Ny42LDE0Ni43LDM0Ny42LDEzOC4yLDM0Mi4zLDEzMi45eiIgZmlsbD0iI0ZGRkZGRiIvPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.refresh-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OS43MTEgNDg5LjcxMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg5LjcxMSA0ODkuNzExOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48Zz48cGF0aCBkPSJNMTEyLjE1Niw5Ny4xMTFjNzIuMy02NS40LDE4MC41LTY2LjQsMjUzLjgtNi43bC01OC4xLDIuMmMtNy41LDAuMy0xMy4zLDYuNS0xMywxNGMwLjMsNy4zLDYuMywxMywxMy41LDEzICAgIGMwLjIsMCwwLjMsMCwwLjUsMGw4OS4yLTMuM2M3LjMtMC4zLDEzLTYuMiwxMy0xMy41di0xYzAtMC4yLDAtMC4zLDAtMC41di0wLjFsMCwwbC0zLjMtODguMmMtMC4zLTcuNS02LjYtMTMuMy0xNC0xMyAgICBjLTcuNSwwLjMtMTMuMyw2LjUtMTMsMTRsMi4xLDU1LjNjLTM2LjMtMjkuNy04MS00Ni45LTEyOC44LTQ5LjNjLTU5LjItMy0xMTYuMSwxNy4zLTE2MCw1Ny4xYy02MC40LDU0LjctODYsMTM3LjktNjYuOCwyMTcuMSAgICBjMS41LDYuMiw3LDEwLjMsMTMuMSwxMC4zYzEuMSwwLDIuMS0wLjEsMy4yLTAuNGM3LjItMS44LDExLjctOS4xLDkuOS0xNi4zQzM2LjY1NiwyMTguMjExLDU5LjA1NiwxNDUuMTExLDExMi4xNTYsOTcuMTExeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik00NjIuNDU2LDE5NS41MTFjLTEuOC03LjItOS4xLTExLjctMTYuMy05LjljLTcuMiwxLjgtMTEuNyw5LjEtOS45LDE2LjNjMTYuOSw2OS42LTUuNiwxNDIuNy01OC43LDE5MC43ICAgIGMtMzcuMywzMy43LTg0LjEsNTAuMy0xMzAuNyw1MC4zYy00NC41LDAtODguOS0xNS4xLTEyNC43LTQ0LjlsNTguOC01LjNjNy40LTAuNywxMi45LTcuMiwxMi4yLTE0LjdzLTcuMi0xMi45LTE0LjctMTIuMmwtODguOSw4ICAgIGMtNy40LDAuNy0xMi45LDcuMi0xMi4yLDE0LjdsOCw4OC45YzAuNiw3LDYuNSwxMi4zLDEzLjQsMTIuM2MwLjQsMCwwLjgsMCwxLjItMC4xYzcuNC0wLjcsMTIuOS03LjIsMTIuMi0xNC43bC00LjgtNTQuMSAgICBjMzYuMywyOS40LDgwLjgsNDYuNSwxMjguMyw0OC45YzMuOCwwLjIsNy42LDAuMywxMS4zLDAuM2M1NS4xLDAsMTA3LjUtMjAuMiwxNDguNy01Ny40ICAgIEM0NTYuMDU2LDM1Ny45MTEsNDgxLjY1NiwyNzQuODExLDQ2Mi40NTYsMTk1LjUxMXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPg==)}.copy[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OC4zIDQ4OC4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODguMyA0ODguMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTMxNC4yNSw4NS40aC0yMjdjLTIxLjMsMC0zOC42LDE3LjMtMzguNiwzOC42djMyNS43YzAsMjEuMywxNy4zLDM4LjYsMzguNiwzOC42aDIyN2MyMS4zLDAsMzguNi0xNy4zLDM4LjYtMzguNlYxMjQgICAgQzM1Mi43NSwxMDIuNywzMzUuNDUsODUuNCwzMTQuMjUsODUuNHogTTMyNS43NSw0NDkuNmMwLDYuNC01LjIsMTEuNi0xMS42LDExLjZoLTIyN2MtNi40LDAtMTEuNi01LjItMTEuNi0xMS42VjEyNCAgICBjMC02LjQsNS4yLTExLjYsMTEuNi0xMS42aDIyN2M2LjQsMCwxMS42LDUuMiwxMS42LDExLjZWNDQ5LjZ6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTQwMS4wNSwwaC0yMjdjLTIxLjMsMC0zOC42LDE3LjMtMzguNiwzOC42YzAsNy41LDYsMTMuNSwxMy41LDEzLjVzMTMuNS02LDEzLjUtMTMuNWMwLTYuNCw1LjItMTEuNiwxMS42LTExLjZoMjI3ICAgIGM2LjQsMCwxMS42LDUuMiwxMS42LDExLjZ2MzI1LjdjMCw2LjQtNS4yLDExLjYtMTEuNiwxMS42Yy03LjUsMC0xMy41LDYtMTMuNSwxMy41czYsMTMuNSwxMy41LDEzLjVjMjEuMywwLDM4LjYtMTcuMywzOC42LTM4LjYgICAgVjM4LjZDNDM5LjY1LDE3LjMsNDIyLjM1LDAsNDAxLjA1LDB6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}"], changeDetection: 0 });
var ɵUpperButtonsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](UpperButtonsComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](UpperButtonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'ks-upper-buttons',
                template: "<header class=\"buttons-container\">\n\n  <ng-container *ngIf=\"!configButtons || configButtons?.visible\">\n    <a *ngFor=\"let btn of buttons; trackBy: trackById; let index = index\"\n       class=\"upper-button\"\n       ksSize [sizeConfig]=\"{width: btn.size?.width, height: btn.size?.height}\"\n       [ngStyle]=\"{'font-size': btn.fontSize}\"\n       [attr.aria-label]=\"btn.ariaLabel\"\n       [tabindex]=\"0\" role=\"button\"\n       (click)=\"onEvent(btn, $event)\" (keyup)=\"onEvent(btn, $event)\">\n      <div class=\"inside {{btn.className}}\" aria-hidden=\"true\" title=\"{{btn.title}}\"></div>\n    </a>\n  </ng-container>\n</header>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
                styles: [".buttons-container{display:flex;flex-direction:row;justify-content:flex-end}.buttons-container>.upper-button{-ms-grid-row-align:center;align-self:center;margin-right:30px;margin-top:28px;font-size:50px;text-decoration:none;cursor:pointer;-webkit-animation:.6s animatezoom;animation:.6s animatezoom;color:#fff}@-webkit-keyframes animatezoom{from{transform:scale(0)}to{transform:scale(1)}}@keyframes animatezoom{from{transform:scale(0)}to{transform:scale(1)}}.base-btn,.close-image,.copy,.delete-image,.download-image,.ext-url-image,.fullscreen-image,.refresh-image,.rotate-image{width:30px;height:30px;background-size:30px;opacity:.8;transition:.5s}.base-btn:hover,.close-image:hover,.copy:hover,.delete-image:hover,.download-image:hover,.ext-url-image:hover,.fullscreen-image:hover,.refresh-image:hover,.rotate-image:hover{transform:scale(1.2)}.rotate-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTMzLDJjNy43NDYsMCwxNS4wMjgsMy4wMTcsMjAuNTA1LDguNDk0YzEwLjEzOCwxMC4xMzcsMTEuMzEsMjYuMzk2LDIuNzQsMzcuODQ5TDUyLDUyLjU4OVY0NGgtMnYxMWwxLDFoMTF2LTJoLTguNTgyICAgIGw0LjI5Mi00LjI5M2wwLjA5Mi0wLjEwNmM5LjIxMS0xMi4yNDcsNy45NzItMjkuNjY3LTIuODgzLTQwLjUyMUM0OS4wNjQsMy4yMjUsNDEuMjgsMCwzMywwVjJ6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTcuNzU1LDE1LjY1N0wxMiwxMS40MTFWMjBoMlY5bC0xLTFIMnYyaDguNTgyTDYuMjksMTQuMjkzbC0wLjA5MiwwLjEwNkMtMy4wMTMsMjYuNjQ2LTEuNzczLDQ0LjA2Niw5LjA4MSw1NC45MiAgICBDMTQuOTM2LDYwLjc3NSwyMi43Miw2NCwzMSw2NHYtMmMtNy43NDYsMC0xNS4wMjgtMy4wMTctMjAuNTA1LTguNDk0QzAuMzU3LDQzLjM2OS0wLjgxNCwyNy4xMSw3Ljc1NSwxNS42NTd6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}.fullscreen-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTMgNTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzIDUzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNNTIuOTIzLDAuNjE4Yy0wLjEwMS0wLjI0NC0wLjI5Ni0wLjQzOS0wLjU0MS0wLjU0MUM1Mi4yNiwwLjAyNyw1Mi4xMywwLDUyLDBINDBjLTAuNTUyLDAtMSwwLjQ0OC0xLDFzMC40NDgsMSwxLDFoOS41ODYgICBMMzMuMjkzLDE4LjI5M2MtMC4zOTEsMC4zOTEtMC4zOTEsMS4wMjMsMCwxLjQxNEMzMy40ODgsMTkuOTAyLDMzLjc0NCwyMCwzNCwyMHMwLjUxMi0wLjA5OCwwLjcwNy0wLjI5M0w1MSwzLjQxNFYxMyAgIGMwLDAuNTUyLDAuNDQ4LDEsMSwxczEtMC40NDgsMS0xVjFDNTMsMC44Nyw1Mi45NzMsMC43NCw1Mi45MjMsMC42MTh6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTE4LjI5MywzMy4yOTNMMiw0OS41ODZWNDBjMC0wLjU1Mi0wLjQ0OC0xLTEtMXMtMSwwLjQ0OC0xLDF2MTJjMCwwLjEzLDAuMDI3LDAuMjYsMC4wNzcsMC4zODIgICBjMC4xMDEsMC4yNDQsMC4yOTYsMC40MzksMC41NDEsMC41NDFDMC43NCw1Mi45NzMsMC44Nyw1MywxLDUzaDEyYzAuNTUyLDAsMS0wLjQ0OCwxLTFzLTAuNDQ4LTEtMS0xSDMuNDE0bDE2LjI5My0xNi4yOTMgICBjMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNFMxOC42ODQsMzIuOTAyLDE4LjI5MywzMy4yOTN6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTEsMTRjMC41NTIsMCwxLTAuNDQ4LDEtMVYzLjQxNGwxNi4yOTIsMTYuMjkyYzAuMTk1LDAuMTk1LDAuNDUxLDAuMjkzLDAuNzA3LDAuMjkzczAuNTEyLTAuMDk4LDAuNzA3LTAuMjkzICAgYzAuMzkxLTAuMzkxLDAuMzkxLTEuMDIzLDAtMS40MTRMMy40MTQsMkgxM2MwLjU1MiwwLDEtMC40NDgsMS0xcy0wLjQ0OC0xLTEtMUgxQzAuODcsMCwwLjc0LDAuMDI3LDAuNjE4LDAuMDc3ICAgQzAuMzczLDAuMTc5LDAuMTc5LDAuMzczLDAuMDc3LDAuNjE4QzAuMDI3LDAuNzQsMCwwLjg3LDAsMXYxMkMwLDEzLjU1MiwwLjQ0OCwxNCwxLDE0eiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik01MiwzOWMtMC41NTIsMC0xLDAuNDQ4LTEsMXY5LjU4NkwzNC43MDcsMzMuMjkyYy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwcy0wLjM5MSwxLjAyMywwLDEuNDE0TDQ5LjU4Niw1MUg0MCAgIGMtMC41NTIsMC0xLDAuNDQ4LTEsMXMwLjQ0OCwxLDEsMWgxMmMwLjEzLDAsMC4yNi0wLjAyNywwLjM4Mi0wLjA3N2MwLjI0NC0wLjEwMSwwLjQzOS0wLjI5NiwwLjU0MS0wLjU0MSAgIEM1Mi45NzMsNTIuMjYsNTMsNTIuMTMsNTMsNTJWNDBDNTMsMzkuNDQ4LDUyLjU1MiwzOSw1MiwzOXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.delete-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4Ni40IDQ4Ni40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODYuNCA0ODYuNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQ0Niw3MEgzNDQuOFY1My41YzAtMjkuNS0yNC01My41LTUzLjUtNTMuNWgtOTYuMmMtMjkuNSwwLTUzLjUsMjQtNTMuNSw1My41VjcwSDQwLjRjLTcuNSwwLTEzLjUsNi0xMy41LDEzLjUgICAgUzMyLjksOTcsNDAuNCw5N2gyNC40djMxNy4yYzAsMzkuOCwzMi40LDcyLjIsNzIuMiw3Mi4yaDIxMi40YzM5LjgsMCw3Mi4yLTMyLjQsNzIuMi03Mi4yVjk3SDQ0NmM3LjUsMCwxMy41LTYsMTMuNS0xMy41ICAgIFM0NTMuNSw3MCw0NDYsNzB6IE0xNjguNiw1My41YzAtMTQuNiwxMS45LTI2LjUsMjYuNS0yNi41aDk2LjJjMTQuNiwwLDI2LjUsMTEuOSwyNi41LDI2LjVWNzBIMTY4LjZWNTMuNXogTTM5NC42LDQxNC4yICAgIGMwLDI0LjktMjAuMyw0NS4yLTQ1LjIsNDUuMkgxMzdjLTI0LjksMC00NS4yLTIwLjMtNDUuMi00NS4yVjk3aDMwMi45djMxNy4ySDM5NC42eiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0yNDMuMiw0MTFjNy41LDAsMTMuNS02LDEzLjUtMTMuNVYxNTguOWMwLTcuNS02LTEzLjUtMTMuNS0xMy41cy0xMy41LDYtMTMuNSwxMy41djIzOC41ICAgIEMyMjkuNyw0MDQuOSwyMzUuNyw0MTEsMjQzLjIsNDExeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0xNTUuMSwzOTYuMWM3LjUsMCwxMy41LTYsMTMuNS0xMy41VjE3My43YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjA4LjkgICAgQzE0MS42LDM5MC4xLDE0Ny43LDM5Ni4xLDE1NS4xLDM5Ni4xeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0zMzEuMywzOTYuMWM3LjUsMCwxMy41LTYsMTMuNS0xMy41VjE3My43YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjA4LjkgICAgQzMxNy44LDM5MC4xLDMyMy44LDM5Ni4xLDMzMS4zLDM5Ni4xeiIgZmlsbD0iI0ZGRkZGRiIvPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.ext-url-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPjxnPjxnPjxnPjxwYXRoIGQ9Ik00ODAsMjg4djExMmMwLDQ0LjE4My0zNS44MTcsODAtODAsODBIMTEyYy00NC4xODMsMC04MC0zNS44MTctODAtODBWMTEyYzAtNDQuMTgzLDM1LjgxNy04MCw4MC04MGg5NlYwaC05NiAgICAgQzUwLjE0NCwwLDAsNTAuMTQ0LDAsMTEydjI4OGMwLDYxLjg1Niw1MC4xNDQsMTEyLDExMiwxMTJoMjg4YzYxLjg1NiwwLDExMi01MC4xNDQsMTEyLTExMlYyODhINDgweiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik0xNzYsNDE2aDMyVjI4OGMwLTEyNS43NiwxMDcuNTItMTI4LDExMi0xMjhoMTA1LjQ0bC04NC42NCw4NC42NGwyMi41NiwyMi41NmwxMTItMTEyYzYuMjA0LTYuMjQxLDYuMjA0LTE2LjMxOSwwLTIyLjU2ICAgICBsLTExMi0xMTJsLTIyLjcyLDIyLjcybDg0LjgsODQuNjRIMzIwYy0xLjQ0LDAtMTQ0LDEuNzYtMTQ0LDE2MFY0MTZ6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.download-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3MS4yIDQ3MS4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzEuMiA0NzEuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQ1Ny43LDIzMC4xNWMtNy41LDAtMTMuNSw2LTEzLjUsMTMuNXYxMjIuOGMwLDMzLjQtMjcuMiw2MC41LTYwLjUsNjAuNUg4Ny41Yy0zMy40LDAtNjAuNS0yNy4yLTYwLjUtNjAuNXYtMTI0LjggICAgYzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MTI0LjhjMCw0OC4zLDM5LjMsODcuNSw4Ny41LDg3LjVoMjk2LjJjNDguMywwLDg3LjUtMzkuMyw4Ny41LTg3LjV2LTEyMi44ICAgIEM0NzEuMiwyMzYuMjUsNDY1LjIsMjMwLjE1LDQ1Ny43LDIzMC4xNXoiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJNMjI2LjEsMzQ2Ljc1YzIuNiwyLjYsNi4xLDQsOS41LDRzNi45LTEuMyw5LjUtNGw4NS44LTg1LjhjNS4zLTUuMyw1LjMtMTMuOCwwLTE5LjFjLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwbC02Mi43LDYyLjggICAgVjMwLjc1YzAtNy41LTYtMTMuNS0xMy41LTEzLjVzLTEzLjUsNi0xMy41LDEzLjV2MjczLjlsLTYyLjgtNjIuOGMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xICAgIEwyMjYuMSwzNDYuNzV6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}.close-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3NS4yIDQ3NS4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzUuMiA0NzUuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTQwNS42LDY5LjZDMzYwLjcsMjQuNywzMDEuMSwwLDIzNy42LDBzLTEyMy4xLDI0LjctMTY4LDY5LjZTMCwxNzQuMSwwLDIzNy42czI0LjcsMTIzLjEsNjkuNiwxNjhzMTA0LjUsNjkuNiwxNjgsNjkuNiAgICBzMTIzLjEtMjQuNywxNjgtNjkuNnM2OS42LTEwNC41LDY5LjYtMTY4UzQ1MC41LDExNC41LDQwNS42LDY5LjZ6IE0zODYuNSwzODYuNWMtMzkuOCwzOS44LTkyLjcsNjEuNy0xNDguOSw2MS43ICAgIHMtMTA5LjEtMjEuOS0xNDguOS02MS43Yy04Mi4xLTgyLjEtODIuMS0yMTUuNywwLTI5Ny44QzEyOC41LDQ4LjksMTgxLjQsMjcsMjM3LjYsMjdzMTA5LjEsMjEuOSwxNDguOSw2MS43ICAgIEM0NjguNiwxNzAuOCw0NjguNiwzMDQuNCwzODYuNSwzODYuNXoiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJNMzQyLjMsMTMyLjljLTUuMy01LjMtMTMuOC01LjMtMTkuMSwwbC04NS42LDg1LjZMMTUyLDEzMi45Yy01LjMtNS4zLTEzLjgtNS4zLTE5LjEsMGMtNS4zLDUuMy01LjMsMTMuOCwwLDE5LjEgICAgbDg1LjYsODUuNmwtODUuNiw4NS42Yy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWMyLjYsMi42LDYuMSw0LDkuNSw0czYuOS0xLjMsOS41LTRsODUuNi04NS42bDg1LjYsODUuNmMyLjYsMi42LDYuMSw0LDkuNSw0ICAgIGMzLjUsMCw2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xbC04NS40LTg1LjZsODUuNi04NS42QzM0Ny42LDE0Ni43LDM0Ny42LDEzOC4yLDM0Mi4zLDEzMi45eiIgZmlsbD0iI0ZGRkZGRiIvPjwvZz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)}.refresh-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OS43MTEgNDg5LjcxMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg5LjcxMSA0ODkuNzExOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48Zz48cGF0aCBkPSJNMTEyLjE1Niw5Ny4xMTFjNzIuMy02NS40LDE4MC41LTY2LjQsMjUzLjgtNi43bC01OC4xLDIuMmMtNy41LDAuMy0xMy4zLDYuNS0xMywxNGMwLjMsNy4zLDYuMywxMywxMy41LDEzICAgIGMwLjIsMCwwLjMsMCwwLjUsMGw4OS4yLTMuM2M3LjMtMC4zLDEzLTYuMiwxMy0xMy41di0xYzAtMC4yLDAtMC4zLDAtMC41di0wLjFsMCwwbC0zLjMtODguMmMtMC4zLTcuNS02LjYtMTMuMy0xNC0xMyAgICBjLTcuNSwwLjMtMTMuMyw2LjUtMTMsMTRsMi4xLDU1LjNjLTM2LjMtMjkuNy04MS00Ni45LTEyOC44LTQ5LjNjLTU5LjItMy0xMTYuMSwxNy4zLTE2MCw1Ny4xYy02MC40LDU0LjctODYsMTM3LjktNjYuOCwyMTcuMSAgICBjMS41LDYuMiw3LDEwLjMsMTMuMSwxMC4zYzEuMSwwLDIuMS0wLjEsMy4yLTAuNGM3LjItMS44LDExLjctOS4xLDkuOS0xNi4zQzM2LjY1NiwyMTguMjExLDU5LjA1NiwxNDUuMTExLDExMi4xNTYsOTcuMTExeiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik00NjIuNDU2LDE5NS41MTFjLTEuOC03LjItOS4xLTExLjctMTYuMy05LjljLTcuMiwxLjgtMTEuNyw5LjEtOS45LDE2LjNjMTYuOSw2OS42LTUuNiwxNDIuNy01OC43LDE5MC43ICAgIGMtMzcuMywzMy43LTg0LjEsNTAuMy0xMzAuNyw1MC4zYy00NC41LDAtODguOS0xNS4xLTEyNC43LTQ0LjlsNTguOC01LjNjNy40LTAuNywxMi45LTcuMiwxMi4yLTE0LjdzLTcuMi0xMi45LTE0LjctMTIuMmwtODguOSw4ICAgIGMtNy40LDAuNy0xMi45LDcuMi0xMi4yLDE0LjdsOCw4OC45YzAuNiw3LDYuNSwxMi4zLDEzLjQsMTIuM2MwLjQsMCwwLjgsMCwxLjItMC4xYzcuNC0wLjcsMTIuOS03LjIsMTIuMi0xNC43bC00LjgtNTQuMSAgICBjMzYuMywyOS40LDgwLjgsNDYuNSwxMjguMyw0OC45YzMuOCwwLjIsNy42LDAuMywxMS4zLDAuM2M1NS4xLDAsMTA3LjUtMjAuMiwxNDguNy01Ny40ICAgIEM0NTYuMDU2LDM1Ny45MTEsNDgxLjY1NiwyNzQuODExLDQ2Mi40NTYsMTk1LjUxMXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPg==)}.copy{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OC4zIDQ4OC4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODguMyA0ODguMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+PGc+PGc+PHBhdGggZD0iTTMxNC4yNSw4NS40aC0yMjdjLTIxLjMsMC0zOC42LDE3LjMtMzguNiwzOC42djMyNS43YzAsMjEuMywxNy4zLDM4LjYsMzguNiwzOC42aDIyN2MyMS4zLDAsMzguNi0xNy4zLDM4LjYtMzguNlYxMjQgICAgQzM1Mi43NSwxMDIuNywzMzUuNDUsODUuNCwzMTQuMjUsODUuNHogTTMyNS43NSw0NDkuNmMwLDYuNC01LjIsMTEuNi0xMS42LDExLjZoLTIyN2MtNi40LDAtMTEuNi01LjItMTEuNi0xMS42VjEyNCAgICBjMC02LjQsNS4yLTExLjYsMTEuNi0xMS42aDIyN2M2LjQsMCwxMS42LDUuMiwxMS42LDExLjZWNDQ5LjZ6IiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggZD0iTTQwMS4wNSwwaC0yMjdjLTIxLjMsMC0zOC42LDE3LjMtMzguNiwzOC42YzAsNy41LDYsMTMuNSwxMy41LDEzLjVzMTMuNS02LDEzLjUtMTMuNWMwLTYuNCw1LjItMTEuNiwxMS42LTExLjZoMjI3ICAgIGM2LjQsMCwxMS42LDUuMiwxMS42LDExLjZ2MzI1LjdjMCw2LjQtNS4yLDExLjYtMTEuNiwxMS42Yy03LjUsMC0xMy41LDYtMTMuNSwxMy41czYsMTMuNSwxMy41LDEzLjVjMjEuMywwLDM4LjYtMTcuMywzOC42LTM4LjYgICAgVjM4LjZDNDM5LjY1LDE3LjMsNDIyLjM1LDAsNDAxLjA1LDB6IiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=)}"]
            }]
    }], null, { currentImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], buttonsConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], refresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], delete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], navigate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], download: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], fullscreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], customEmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }] }); })();
    return UpperButtonsComponent;
}(AccessibleComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with clickable dots (small circles) to navigate between images inside the modal gallery.
 */
var DotsComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(DotsComponent, _super);
    function DotsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Object of type `DotsConfig` to init DotsComponent's features.
         * For instance, it contains a param to show/hide this component.
         */
        _this.dotsConfig = { visible: true };
        /**
         * Output to emit clicks on dots. The payload contains a number that represent
         * the index of the clicked dot.
         */
        _this.clickDot = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        return _this;
    }
    /**
     * Method ´ngOnInit´ to build `configDots` applying a default value.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     */
    /**
     * Method ´ngOnInit´ to build `configDots` applying a default value.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    DotsComponent.prototype.ngOnInit = /**
     * Method ´ngOnInit´ to build `configDots` applying a default value.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    function () {
        /** @type {?} */
        var defaultConfig = { visible: true };
        this.configDots = Object.assign(defaultConfig, this.dotsConfig);
    };
    /**
     * Method ´ngOnChanges´ to change `configDots` if the input dotsConfig is changed.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     */
    /**
     * Method ´ngOnChanges´ to change `configDots` if the input dotsConfig is changed.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * @param {?} changes
     * @return {?}
     */
    DotsComponent.prototype.ngOnChanges = /**
     * Method ´ngOnChanges´ to change `configDots` if the input dotsConfig is changed.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var dotsConfigChanges = changes.dotsConfig;
        if (dotsConfigChanges && dotsConfigChanges.currentValue !== dotsConfigChanges.previousValue) {
            this.configDots = dotsConfigChanges.currentValue;
        }
    };
    /**
     * Method to check if an image is active (i.e. the current image).
     * It checks currentImage and images to prevent errors.
     * @param number index of the image to check if it's active or not
     * @returns boolean true if is active (and input params are valid), false otherwise
     */
    /**
     * Method to check if an image is active (i.e. the current image).
     * It checks currentImage and images to prevent errors.
     * @param {?} index
     * @return {?} boolean true if is active (and input params are valid), false otherwise
     */
    DotsComponent.prototype.isActive = /**
     * Method to check if an image is active (i.e. the current image).
     * It checks currentImage and images to prevent errors.
     * @param {?} index
     * @return {?} boolean true if is active (and input params are valid), false otherwise
     */
    function (index) {
        if (!this.currentImage || !this.images || this.images.length === 0) {
            return false;
        }
        /** @type {?} */
        var imageIndex;
        try {
            imageIndex = getIndex(this.currentImage, this.images);
        }
        catch (err) {
            console.error("Internal error while trying to show the active 'dot'", err);
            return false;
        }
        return index === imageIndex;
    };
    /**
     * Method called by events from keyboard and mouse.
     * @param number index of the dot
     * @param KeyboardEvent | MouseEvent event payload
     */
    /**
     * Method called by events from keyboard and mouse.
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    DotsComponent.prototype.onDotEvent = /**
     * Method called by events from keyboard and mouse.
     * @param {?} index
     * @param {?} event
     * @return {?}
     */
    function (index, event) {
        /** @type {?} */
        var result = _super.prototype.handleImageEvent.call(this, event);
        if (result === NEXT) {
            this.clickDot.emit(index);
        }
    };
    /**
     * Method used in the template to track ids in ngFor.
     * @param number index of the array
     * @param Image item of the array
     * @returns number the id of the item
     */
    /**
     * Method used in the template to track ids in ngFor.
     * @param {?} index
     * @param {?} item
     * @return {?} number the id of the item
     */
    DotsComponent.prototype.trackById = /**
     * Method used in the template to track ids in ngFor.
     * @param {?} index
     * @param {?} item
     * @return {?} number the id of the item
     */
    function (index, item) {
        return item.id;
    };
    DotsComponent.propDecorators = {
        currentImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        dotsConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        accessibilityConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        clickDot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }]
    };
DotsComponent.ɵfac = function DotsComponent_Factory(t) { return ɵDotsComponent_BaseFactory(t || DotsComponent); };
DotsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DotsComponent, selectors: [["ks-dots"]], inputs: { currentImage: "currentImage", images: "images", dotsConfig: "dotsConfig", accessibilityConfig: "accessibilityConfig" }, outputs: { clickDot: "clickDot" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]()], decls: 2, vars: 3, consts: [[1, "dots-container", 3, "title"], [4, "ngIf"], ["class", "inside dot", "role", "navigation", 3, "ngClass", "tabindex", "click", "keyup", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "navigation", 1, "inside", "dot", 3, "ngClass", "tabindex", "click", "keyup"]], template: function DotsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DotsComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.dotsContainerTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.dotsContainerAriaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.configDots || (ctx.configDots == null ? null : ctx.configDots.visible));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"]], styles: [".dots-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;margin-bottom:30px}.dots-container[_ngcontent-%COMP%] > .dot[_ngcontent-%COMP%]{background:#fff;border-radius:5px;height:10px;margin-left:4px;margin-right:4px;width:10px;cursor:pointer;opacity:.5}.dots-container[_ngcontent-%COMP%] > .dot[_ngcontent-%COMP%]:hover{opacity:.9;transition:opacity .5s}.dots-container[_ngcontent-%COMP%] > .dot.active[_ngcontent-%COMP%]{cursor:pointer;opacity:.9}@-webkit-keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@-webkit-keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}@keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}"], changeDetection: 0 });
var ɵDotsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](DotsComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](DotsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'ks-dots',
                template: "<nav class=\"dots-container\" [attr.aria-label]=\"accessibilityConfig?.dotsContainerAriaLabel\"\n     [title]=\"accessibilityConfig?.dotsContainerTitle\">\n  <ng-container *ngIf=\"!configDots || configDots?.visible\">\n    <div class=\"inside dot\"\n         *ngFor=\"let img of images; trackBy: trackById; let index = index\"\n         [ngClass]=\"{'active': isActive(index)}\"\n         [attr.aria-label]=\"accessibilityConfig?.dotAriaLabel + ' ' + (index + 1)\"\n         [tabindex]=\"0\" role=\"navigation\"\n         (click)=\"onDotEvent(index, $event)\" (keyup)=\"onDotEvent(index, $event)\"></div>\n  </ng-container>\n</nav>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
                styles: [".dots-container{display:flex;flex-direction:row;justify-content:center;margin-bottom:30px}.dots-container>.dot{background:#fff;border-radius:5px;height:10px;margin-left:4px;margin-right:4px;width:10px;cursor:pointer;opacity:.5}.dots-container>.dot:hover{opacity:.9;transition:opacity .5s}.dots-container>.dot.active{cursor:pointer;opacity:.9}@-webkit-keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@-webkit-keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}@keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}"]
            }]
    }], null, { currentImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], dotsConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], accessibilityConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], clickDot: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }] }); })();
    return DotsComponent;
}(AccessibleComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with image previews
 */
var PreviewsComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(PreviewsComponent, _super);
    function PreviewsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Output to emit the clicked preview. The payload contains the `ImageEvent` associated to the clicked preview.
         */
        _this.clickPreview = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        // /**
        //  * Output to emit the clicked arrow. The payload contains which arrow (left or right).
        //  */
        // @Output()
        // clickArrow: EventEmitter<InteractionEvent> = new EventEmitter<InteractionEvent>();
        /**
         * Enum of type `Action` that represents a mouse click on a button.
         * Declared here to be used inside the template.
         */
        _this.clickAction = Action.CLICK;
        /**
         * Enum of type `Action` that represents a keyboard action.
         * Declared here to be used inside the template.
         */
        _this.keyboardAction = Action.KEYBOARD;
        /**
         * Array of `InternalLibImage` exposed to the template. This field is initialized
         * applying transformations, default values and so on to the input of the same type.
         */
        _this.previews = [];
        /**
         * Default preview's size object, also used in the template to apply default sizes to ksSize's directive.
         */
        _this.defaultPreviewSize = { height: '50px', width: 'auto' };
        /**
         * Default preview's config object
         */
        _this.defaultPreviewConfig = {
            visible: true,
            number: 3,
            arrows: true,
            clickable: true,
            // alwaysCenter: false, // TODO still not implemented
            size: _this.defaultPreviewSize
        };
        return _this;
    }
    /**
     * Method ´ngOnInit´ to build `configPreview` applying a default value and also to
     * init the `previews` array.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     */
    /**
     * Method ´ngOnInit´ to build `configPreview` applying a default value and also to
     * init the `previews` array.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    PreviewsComponent.prototype.ngOnInit = /**
     * Method ´ngOnInit´ to build `configPreview` applying a default value and also to
     * init the `previews` array.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    function () {
        this.configPreview = Object.assign({}, this.defaultPreviewConfig, this.previewConfig);
        // if number is <= 0 reset to default
        if (this.configPreview && this.configPreview.number && this.configPreview.number <= 0) {
            this.configPreview.number = this.defaultPreviewConfig.number;
        }
        // init previews based on currentImage and the full array of images
        this.initPreviews(this.currentImage, this.images);
    };
    /**
     * Method to check if an image is active (i.e. a preview image).
     * @param InternalLibImage preview is an image to check if it's active or not
     * @returns boolean true if is active, false otherwise
     */
    /**
     * Method to check if an image is active (i.e. a preview image).
     * @param {?} preview
     * @return {?} boolean true if is active, false otherwise
     */
    PreviewsComponent.prototype.isActive = /**
     * Method to check if an image is active (i.e. a preview image).
     * @param {?} preview
     * @return {?} boolean true if is active, false otherwise
     */
    function (preview) {
        if (!preview || !this.currentImage) {
            return false;
        }
        return preview.id === this.currentImage.id;
    };
    // TODO improve this method to simplify the sourcecode + remove duplicated codelines
    /**
     * Method ´ngOnChanges´ to update `previews` array.
     * Also, both `start` and `end` local variables will be updated accordingly.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     */
    // TODO improve this method to simplify the sourcecode + remove duplicated codelines
    /**
     * Method ´ngOnChanges´ to update `previews` array.
     * Also, both `start` and `end` local variables will be updated accordingly.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @param {?} changes
     * @return {?}
     */
    PreviewsComponent.prototype.ngOnChanges = 
    // TODO improve this method to simplify the sourcecode + remove duplicated codelines
    /**
     * Method ´ngOnChanges´ to update `previews` array.
     * Also, both `start` and `end` local variables will be updated accordingly.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var images = changes.images;
        /** @type {?} */
        var currentImage = changes.currentImage;
        /** @type {?} */
        var prev;
        /** @type {?} */
        var current;
        if (currentImage) {
            prev = currentImage.previousValue;
            current = currentImage.currentValue;
        }
        else {
            current = this.currentImage;
        }
        if (current && images && images.previousValue && images.currentValue) {
            // I'm in this if statement, if input images are changed (for instance, because I removed one of them with the 'delete button',
            // or because users changed the images array while modal gallery is still open).
            // In this case, I have to re-init previews, because the input array of images is changed.
            this.initPreviews(current, images.currentValue);
        }
        if (prev && current && prev.id !== current.id) {
            this.updatePreviews(prev, current);
        }
    };
    /**
     * Method called by events from both keyboard and mouse on a preview.
     * This will trigger the `clickpreview` output with the input preview as its payload.
     * @param InternalLibImage preview that triggered this method
     * @param KeyboardEvent | MouseEvent event payload
     */
    /**
     * Method called by events from both keyboard and mouse on a preview.
     * This will trigger the `clickpreview` output with the input preview as its payload.
     * @param {?} preview
     * @param {?} event
     * @param {?=} action
     * @return {?}
     */
    PreviewsComponent.prototype.onImageEvent = /**
     * Method called by events from both keyboard and mouse on a preview.
     * This will trigger the `clickpreview` output with the input preview as its payload.
     * @param {?} preview
     * @param {?} event
     * @param {?=} action
     * @return {?}
     */
    function (preview, event, action) {
        if (action === void 0) { action = Action.NORMAL; }
        if (!this.configPreview || !this.configPreview.clickable) {
            return;
        }
        /** @type {?} */
        var result = _super.prototype.handleImageEvent.call(this, event);
        if (result === NEXT || result === PREV) {
            this.clickPreview.emit(new ImageModalEvent(action, getIndex(preview, this.images)));
        }
    };
    /**
     * Method called by events from both keyboard and mouse on a navigation arrow.
     * It also emits an event to specify which arrow.
     * @param string direction of the navigation that can be either 'next' or 'prev'
     * @param KeyboardEvent | MouseEvent event payload
     */
    /**
     * Method called by events from both keyboard and mouse on a navigation arrow.
     * It also emits an event to specify which arrow.
     * @param {?} direction
     * @param {?} event
     * @param {?=} action
     * @return {?}
     */
    PreviewsComponent.prototype.onNavigationEvent = /**
     * Method called by events from both keyboard and mouse on a navigation arrow.
     * It also emits an event to specify which arrow.
     * @param {?} direction
     * @param {?} event
     * @param {?=} action
     * @return {?}
     */
    function (direction, event, action) {
        if (action === void 0) { action = Action.NORMAL; }
        /** @type {?} */
        var result = _super.prototype.handleNavigationEvent.call(this, direction, event);
        if (result === NEXT) {
            // this.clickArrow.emit(<InteractionEvent>{ source: 'modal-previews', payload: DIRECTION_RIGHT, action: action });
            this.next();
        }
        else if (result === PREV) {
            // this.clickArrow.emit(<InteractionEvent>{ source: 'modal-previews', payload: DIRECTION_LEFT, action: action });
            this.previous();
        }
    };
    /**
     * Method used in the template to track ids in ngFor.
     * @param number index of the array
     * @param Image item of the array
     * @returns number the id of the item
     */
    /**
     * Method used in the template to track ids in ngFor.
     * @param {?} index
     * @param {?} item
     * @return {?} number the id of the item
     */
    PreviewsComponent.prototype.trackById = /**
     * Method used in the template to track ids in ngFor.
     * @param {?} index
     * @param {?} item
     * @return {?} number the id of the item
     */
    function (index, item) {
        return item.id;
    };
    /**
     * Private method to init previews based on the currentImage and the full array of images.
     * The current image in mandatory to show always the current preview (as highlighted).
     * @param InternalLibImage currentImage to decide how to show previews, because I always want to see the current image as highlighted
     * @param InternalLibImage[] images is the array of all images.
     */
    /**
     * Private method to init previews based on the currentImage and the full array of images.
     * The current image in mandatory to show always the current preview (as highlighted).
     * @private
     * @param {?} currentImage
     * @param {?} images
     * @return {?}
     */
    PreviewsComponent.prototype.initPreviews = /**
     * Private method to init previews based on the currentImage and the full array of images.
     * The current image in mandatory to show always the current preview (as highlighted).
     * @private
     * @param {?} currentImage
     * @param {?} images
     * @return {?}
     */
    function (currentImage, images) {
        var _this = this;
        /** @type {?} */
        var index;
        try {
            index = getIndex(currentImage, images);
        }
        catch (err) {
            throw err;
        }
        switch (index) {
            case 0:
                // first image
                this.setBeginningIndexesPreviews();
                break;
            case images.length - 1:
                // last image
                this.setEndIndexesPreviews();
                break;
            default:
                // other images
                this.setIndexesPreviews();
                break;
        }
        this.previews = images.filter((/**
         * @param {?} img
         * @param {?} i
         * @return {?}
         */
        function (img, i) { return i >= _this.start && i < _this.end; }));
    };
    /**
     * Private method to init both `start` and `end` to the beginning.
     */
    /**
     * Private method to init both `start` and `end` to the beginning.
     * @private
     * @return {?}
     */
    PreviewsComponent.prototype.setBeginningIndexesPreviews = /**
     * Private method to init both `start` and `end` to the beginning.
     * @private
     * @return {?}
     */
    function () {
        this.start = 0;
        this.end = Math.min((/** @type {?} */ (this.configPreview.number)), this.images.length);
    };
    /**
     * Private method to init both `start` and `end` to the end.
     */
    /**
     * Private method to init both `start` and `end` to the end.
     * @private
     * @return {?}
     */
    PreviewsComponent.prototype.setEndIndexesPreviews = /**
     * Private method to init both `start` and `end` to the end.
     * @private
     * @return {?}
     */
    function () {
        this.start = this.images.length - 1 - ((/** @type {?} */ (this.configPreview.number)) - 1);
        this.end = this.images.length;
    };
    /**
     * Private method to update both `start` and `end` based on the currentImage.
     */
    /**
     * Private method to update both `start` and `end` based on the currentImage.
     * @private
     * @return {?}
     */
    PreviewsComponent.prototype.setIndexesPreviews = /**
     * Private method to update both `start` and `end` based on the currentImage.
     * @private
     * @return {?}
     */
    function () {
        this.start = getIndex(this.currentImage, this.images) - Math.floor((/** @type {?} */ (this.configPreview.number)) / 2);
        this.end = getIndex(this.currentImage, this.images) + Math.floor((/** @type {?} */ (this.configPreview.number)) / 2) + 1;
    };
    /**
     * Private method to update the visible previews navigating to the right (next).
     */
    /**
     * Private method to update the visible previews navigating to the right (next).
     * @private
     * @return {?}
     */
    PreviewsComponent.prototype.next = /**
     * Private method to update the visible previews navigating to the right (next).
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // check if nextImage should be blocked
        if (this.isPreventSliding(this.images.length - 1)) {
            return;
        }
        if (this.end === this.images.length) {
            return;
        }
        this.start++;
        this.end = Math.min(this.end + 1, this.images.length);
        this.previews = this.images.filter((/**
         * @param {?} img
         * @param {?} i
         * @return {?}
         */
        function (img, i) { return i >= _this.start && i < _this.end; }));
    };
    /**
     * Private method to update the visible previews navigating to the left (previous).
     */
    /**
     * Private method to update the visible previews navigating to the left (previous).
     * @private
     * @return {?}
     */
    PreviewsComponent.prototype.previous = /**
     * Private method to update the visible previews navigating to the left (previous).
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // check if prevImage should be blocked
        if (this.isPreventSliding(0)) {
            return;
        }
        if (this.start === 0) {
            return;
        }
        this.start = Math.max(this.start - 1, 0);
        this.end = Math.min(this.end - 1, this.images.length);
        this.previews = this.images.filter((/**
         * @param {?} img
         * @param {?} i
         * @return {?}
         */
        function (img, i) { return i >= _this.start && i < _this.end; }));
    };
    /**
     * Private method to block/permit sliding between previews.
     * @param number boundaryIndex is the first or the last index of `images` input array
     * @returns boolean if true block sliding, otherwise not
     */
    /**
     * Private method to block/permit sliding between previews.
     * @private
     * @param {?} boundaryIndex
     * @return {?} boolean if true block sliding, otherwise not
     */
    PreviewsComponent.prototype.isPreventSliding = /**
     * Private method to block/permit sliding between previews.
     * @private
     * @param {?} boundaryIndex
     * @return {?} boolean if true block sliding, otherwise not
     */
    function (boundaryIndex) {
        return !!this.slideConfig && this.slideConfig.infinite === false && getIndex(this.currentImage, this.images) === boundaryIndex;
    };
    /**
     * Private method to handle navigation changing the previews array and other variables.
     */
    /**
     * Private method to handle navigation changing the previews array and other variables.
     * @private
     * @param {?} prev
     * @param {?} current
     * @return {?}
     */
    PreviewsComponent.prototype.updatePreviews = /**
     * Private method to handle navigation changing the previews array and other variables.
     * @private
     * @param {?} prev
     * @param {?} current
     * @return {?}
     */
    function (prev, current) {
        var _this = this;
        // to manage infinite sliding I have to reset both `start` and `end` at the beginning
        // to show again previews from the first image.
        // This happens when you navigate over the last image to return to the first one
        /** @type {?} */
        var prevIndex;
        /** @type {?} */
        var currentIndex;
        try {
            prevIndex = getIndex(prev, this.images);
            currentIndex = getIndex(current, this.images);
        }
        catch (err) {
            console.error('Cannot get previous and current image indexes in previews');
            throw err;
        }
        if (prevIndex === this.images.length - 1 && currentIndex === 0) {
            // first image
            this.setBeginningIndexesPreviews();
            this.previews = this.images.filter((/**
             * @param {?} img
             * @param {?} i
             * @return {?}
             */
            function (img, i) { return i >= _this.start && i < _this.end; }));
            return;
        }
        // the same for the opposite case, when you navigate back from the fist image to go to the last one.
        if (prevIndex === 0 && currentIndex === this.images.length - 1) {
            // last image
            this.setEndIndexesPreviews();
            this.previews = this.images.filter((/**
             * @param {?} img
             * @param {?} i
             * @return {?}
             */
            function (img, i) { return i >= _this.start && i < _this.end; }));
            return;
        }
        // otherwise manage standard scenarios
        if (prevIndex > currentIndex) {
            this.previous();
        }
        else if (prevIndex < currentIndex) {
            this.next();
        }
    };
    PreviewsComponent.propDecorators = {
        currentImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        slideConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        previewConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        accessibilityConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        clickPreview: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }]
    };
PreviewsComponent.ɵfac = function PreviewsComponent_Factory(t) { return ɵPreviewsComponent_BaseFactory(t || PreviewsComponent); };
PreviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PreviewsComponent, selectors: [["ks-previews"]], inputs: { currentImage: "currentImage", images: "images", slideConfig: "slideConfig", previewConfig: "previewConfig", accessibilityConfig: "accessibilityConfig" }, outputs: { clickPreview: "clickPreview" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]()], decls: 2, vars: 3, consts: [[1, "previews-container", 3, "title"], [4, "ngIf"], ["role", "button", 1, "nav-left", 3, "tabindex", "click", "keyup"], ["aria-hidden", "true", 3, "title"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "button", 1, "nav-right", 3, "tabindex", "click", "keyup"], ["ksSize", "", "role", "img", 3, "class", "src", "sizeConfig", "title", "alt", "tabindex", "click", "keyup", 4, "ngIf"], ["ksSize", "", "role", "img", 3, "src", "sizeConfig", "title", "alt", "tabindex", "click", "keyup"]], template: function PreviewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PreviewsComponent_ng_container_1_Template, 6, 14, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.previewsContainerTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.previewsContainerAriaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.configPreview == null ? null : ctx.configPreview.visible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], SizeDirective], styles: ["@media only screen and (max-width:767px),only screen and (max-device-width:767px){.previews-container[_ngcontent-%COMP%], .previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%], .previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%], .previews-container[_ngcontent-%COMP%] > .preview-image[_ngcontent-%COMP%]{display:none}}@media only screen and (min-device-width:768px){.previews-container[_ngcontent-%COMP%]{align-items:center;-webkit-animation:.8s fadein-semi-visible08;animation:.8s fadein-semi-visible08;display:flex;flex-direction:row;justify-content:center;margin-bottom:15px}.previews-container[_ngcontent-%COMP%] > .preview-image[_ngcontent-%COMP%]{cursor:pointer;margin-left:2px;margin-right:2px;opacity:.7;height:50px}.previews-container[_ngcontent-%COMP%] > .preview-image.active[_ngcontent-%COMP%]{opacity:1}.previews-container[_ngcontent-%COMP%] > .preview-image.unclickable[_ngcontent-%COMP%]{cursor:not-allowed}.previews-container[_ngcontent-%COMP%] > .preview-image[_ngcontent-%COMP%]:hover{opacity:1;transition:opacity .5s}.previews-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%], .previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%], .previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{color:#919191;cursor:pointer;transition:.5s}.previews-container[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]:hover, .previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]:hover, .previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.previews-container[_ngcontent-%COMP%] > .nav-left[_ngcontent-%COMP%]{margin-right:10px}.previews-container[_ngcontent-%COMP%] > .nav-right[_ngcontent-%COMP%]{margin-left:10px}}@-webkit-keyframes fadein-visible{from{opacity:0}to{opacity:1}}@keyframes fadein-visible{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@-webkit-keyframes fadein-semi-visible08{from{opacity:0}to{opacity:.8}}@keyframes fadein-semi-visible08{from{opacity:0}to{opacity:.8}}@-webkit-keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}@keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}", ".arrow-preview-image[_ngcontent-%COMP%], .empty-arrow-preview-image[_ngcontent-%COMP%], .left-arrow-preview-image[_ngcontent-%COMP%], .right-arrow-preview-image[_ngcontent-%COMP%]{width:15px;height:15px;opacity:.5}.empty-arrow-preview-image[_ngcontent-%COMP%]{background:#000;opacity:0}.left-arrow-preview-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:.5s}.left-arrow-preview-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.right-arrow-preview-image[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:.5s}.right-arrow-preview-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}"], changeDetection: 0 });
var ɵPreviewsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](PreviewsComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](PreviewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'ks-previews',
                template: "<nav class=\"previews-container\"\n     [attr.aria-label]=\"accessibilityConfig?.previewsContainerAriaLabel\"\n     [title]=\"accessibilityConfig?.previewsContainerTitle\">\n\n  <ng-container *ngIf=\"configPreview?.visible\">\n    <a class=\"nav-left\"\n       [attr.aria-label]=\"accessibilityConfig?.previewScrollPrevAriaLabel\"\n       [tabindex]=\"configPreview.arrows && start > 0 ? 0 : -1\" role=\"button\"\n       (click)=\"onNavigationEvent('left', $event)\" (keyup)=\"onNavigationEvent('left', $event)\">\n      <div class=\"inside {{configPreview.arrows && start > 0 ? 'left-arrow-preview-image' : 'empty-arrow-preview-image'}}\"\n           aria-hidden=\"true\"\n           [title]=\"accessibilityConfig?.previewScrollPrevTitle\"></div>\n    </a>\n\n    <ng-container *ngFor=\"let preview of previews; trackBy: trackById; let index = index\">\n      <img *ngIf=\"preview?.modal?.img\"\n           class=\"inside preview-image {{isActive(preview) ? 'active' : ''}}{{!configPreview.clickable ? ' unclickable' : ''}}\"\n           [src]=\"preview.plain?.img ? preview.plain.img : preview.modal.img\"\n           ksSize [sizeConfig]=\"{width: configPreview.size ? configPreview.size.width : defaultPreviewSize.width,\n                                 height: configPreview.size ? configPreview.size.height : defaultPreviewSize.height}\"\n           [attr.aria-label]=\"preview.modal.ariaLabel ? preview.modal.ariaLabel : ''\"\n           [title]=\"preview.modal.title ? preview.modal.title : ''\"\n           alt=\"{{preview.modal.alt ? preview.modal.alt : ''}}\"\n           [tabindex]=\"0\" role=\"img\"\n           (click)=\"onImageEvent(preview, $event, clickAction)\" (keyup)=\"onImageEvent(preview, $event, keyboardAction)\"/>\n    </ng-container>\n\n\n    <a class=\"nav-right\"\n       [attr.aria-label]=\"accessibilityConfig?.previewScrollNextAriaLabel\"\n       [tabindex]=\"configPreview.arrows && end < images.length ? 0 : -1\" role=\"button\"\n       (click)=\"onNavigationEvent('right', $event)\" (keyup)=\"onNavigationEvent('right', $event)\">\n      <div class=\"inside {{configPreview.arrows && end < images.length ? 'right-arrow-preview-image' : 'empty-arrow-preview-image'}}\"\n           aria-hidden=\"true\"\n           [title]=\"accessibilityConfig?.previewScrollNextTitle\"></div>\n    </a>\n  </ng-container>\n\n</nav>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
                styles: ["@media only screen and (max-width:767px),only screen and (max-device-width:767px){.previews-container,.previews-container>.nav-left,.previews-container>.nav-right,.previews-container>.preview-image{display:none}}@media only screen and (min-device-width:768px){.previews-container{align-items:center;-webkit-animation:.8s fadein-semi-visible08;animation:.8s fadein-semi-visible08;display:flex;flex-direction:row;justify-content:center;margin-bottom:15px}.previews-container>.preview-image{cursor:pointer;margin-left:2px;margin-right:2px;opacity:.7;height:50px}.previews-container>.preview-image.active{opacity:1}.previews-container>.preview-image.unclickable{cursor:not-allowed}.previews-container>.preview-image:hover{opacity:1;transition:opacity .5s}.previews-container .nav,.previews-container>.nav-left,.previews-container>.nav-right{color:#919191;cursor:pointer;transition:.5s}.previews-container .nav:hover,.previews-container>.nav-left:hover,.previews-container>.nav-right:hover{transform:scale(1.1)}.previews-container>.nav-left{margin-right:10px}.previews-container>.nav-right{margin-left:10px}}@-webkit-keyframes fadein-visible{from{opacity:0}to{opacity:1}}@keyframes fadein-visible{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@keyframes fadein-semi-visible05{from{opacity:0}to{opacity:.5}}@-webkit-keyframes fadein-semi-visible08{from{opacity:0}to{opacity:.8}}@keyframes fadein-semi-visible08{from{opacity:0}to{opacity:.8}}@-webkit-keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}@keyframes fadein-semi-visible09{from{opacity:0}to{opacity:.9}}", ".arrow-preview-image,.empty-arrow-preview-image,.left-arrow-preview-image,.right-arrow-preview-image{width:15px;height:15px;opacity:.5}.empty-arrow-preview-image{background:#000;opacity:0}.left-arrow-preview-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMTQ1LjE4OCwyMzguNTc1bDIxNS41LTIxNS41YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xcy0xMy44LTUuMy0xOS4xLDBsLTIyNS4xLDIyNS4xYy01LjMsNS4zLTUuMywxMy44LDAsMTkuMWwyMjUuMSwyMjUgICBjMi42LDIuNiw2LjEsNCw5LjUsNHM2LjktMS4zLDkuNS00YzUuMy01LjMsNS4zLTEzLjgsMC0xOS4xTDE0NS4xODgsMjM4LjU3NXoiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:.5s}.left-arrow-preview-image:hover{transform:scale(1.2)}.right-arrow-preview-image{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ3Ny4xNzUgNDc3LjE3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc3LjE3NSA0NzcuMTc1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij48Zz48cGF0aCBkPSJNMzYwLjczMSwyMjkuMDc1bC0yMjUuMS0yMjUuMWMtNS4zLTUuMy0xMy44LTUuMy0xOS4xLDBzLTUuMywxMy44LDAsMTkuMWwyMTUuNSwyMTUuNWwtMjE1LjUsMjE1LjUgICBjLTUuMyw1LjMtNS4zLDEzLjgsMCwxOS4xYzIuNiwyLjYsNi4xLDQsOS41LDRjMy40LDAsNi45LTEuMyw5LjUtNGwyMjUuMS0yMjUuMUMzNjUuOTMxLDI0Mi44NzUsMzY1LjkzMSwyMzQuMjc1LDM2MC43MzEsMjI5LjA3NXogICAiIGZpbGw9IiNGRkZGRkYiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+);background-size:15px;transition:.5s}.right-arrow-preview-image:hover{transform:scale(1.2)}"]
            }]
    }], null, { currentImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], slideConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], previewConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], accessibilityConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], clickPreview: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }] }); })();
    return PreviewsComponent;
}(AccessibleComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with the loading spinner
 */
var LoadingSpinnerComponent = /** @class */ (function () {
    function LoadingSpinnerComponent() {
        /**
         * Enum of type `LoadingType` to choose the standard loading spinner.
         * Declared here to be used inside the template.
         */
        this.loadingStandard = LoadingType.STANDARD;
        /**
         * Enum of type `LoadingType` to choose the bars loading spinner.
         * Declared here to be used inside the template.
         */
        this.loadingBars = LoadingType.BARS;
        /**
         * Enum of type `LoadingType` to choose the circular loading spinner.
         * Declared here to be used inside the template.
         */
        this.loadingCircular = LoadingType.CIRCULAR;
        /**
         * Enum of type `LoadingType` to choose the dots loading spinner.
         * Declared here to be used inside the template.
         */
        this.loadingDots = LoadingType.DOTS;
        /**
         * Enum of type `LoadingType` to choose the cube flipping loading spinner.
         * Declared here to be used inside the template.
         */
        this.loadingCubeFlipping = LoadingType.CUBE_FLIPPING;
        /**
         * Enum of type `LoadingType` to choose the circles loading spinner.
         * Declared here to be used inside the template.
         */
        this.loadingCircles = LoadingType.CIRCLES;
        /**
         * Enum of type `LoadingType` to choose the explosing squares loading spinner.
         * Declared here to be used inside the template.
         */
        this.loadingExplosingSquares = LoadingType.EXPLOSING_SQUARES;
    }
    LoadingSpinnerComponent.propDecorators = {
        loadingConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        accessibilityConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }]
    };
LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(); };
LoadingSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LoadingSpinnerComponent, selectors: [["ks-loading-spinner"]], inputs: { loadingConfig: "loadingConfig", accessibilityConfig: "accessibilityConfig" }, decls: 9, vars: 10, consts: [[3, "title"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "cssload-loader"], [1, "cssload-inner", "cssload-one"], [1, "cssload-inner", "cssload-two"], [1, "cssload-inner", "cssload-three"], [1, "loader-bars"], [1, "loader-circular"], [1, "loader-dots"], [1, "cube-wrapper"], [1, "cube-folding"], [1, "leaf1"], [1, "leaf2"], [1, "leaf3"], [1, "leaf4"], ["id", "preloader"], ["id", "loader"], [1, "loader"]], template: function LoadingSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, LoadingSpinnerComponent_ng_container_2_Template, 5, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, LoadingSpinnerComponent_ng_container_3_Template, 2, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, LoadingSpinnerComponent_ng_container_4_Template, 2, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, LoadingSpinnerComponent_ng_container_5_Template, 2, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, LoadingSpinnerComponent_ng_container_6_Template, 7, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, LoadingSpinnerComponent_ng_container_7_Template, 3, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, LoadingSpinnerComponent_ng_container_8_Template, 6, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.loadingSpinnerTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx.accessibilityConfig == null ? null : ctx.accessibilityConfig.loadingSpinnerAriaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", ctx.loadingConfig.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", ctx.loadingStandard);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", ctx.loadingBars);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", ctx.loadingCircular);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", ctx.loadingDots);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", ctx.loadingCubeFlipping);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", ctx.loadingCircles);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", ctx.loadingExplosingSquares);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitchCase"]], styles: [".cssload-loader[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;width:64px;height:64px;border-radius:50%;-o-border-radius:50%;-ms-border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;perspective:800px}.cssload-inner[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;box-sizing:border-box;-o-box-sizing:border-box;-ms-box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;border-radius:50%;-o-border-radius:50%;-ms-border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%}.cssload-inner.cssload-one[_ngcontent-%COMP%]{left:0;top:0;animation:.6s linear infinite cssload-rotate-one;-o-animation:.6s linear infinite cssload-rotate-one;-ms-animation:cssload-rotate-one .6s linear infinite;-webkit-animation:.6s linear infinite cssload-rotate-one;-moz-animation:.6s linear infinite cssload-rotate-one;border-bottom:3px solid rgba(255,255,255,.99)}.cssload-inner.cssload-two[_ngcontent-%COMP%]{right:0;top:0;animation:.6s linear infinite cssload-rotate-two;-o-animation:.6s linear infinite cssload-rotate-two;-ms-animation:cssload-rotate-two .6s linear infinite;-webkit-animation:.6s linear infinite cssload-rotate-two;-moz-animation:.6s linear infinite cssload-rotate-two;border-right:3px solid #fff}.cssload-inner.cssload-three[_ngcontent-%COMP%]{right:0;bottom:0;animation:.6s linear infinite cssload-rotate-three;-o-animation:.6s linear infinite cssload-rotate-three;-ms-animation:cssload-rotate-three .6s linear infinite;-webkit-animation:.6s linear infinite cssload-rotate-three;-moz-animation:.6s linear infinite cssload-rotate-three;border-top:3px solid #fff}@keyframes cssload-rotate-one{0%{transform:rotateX(35deg) rotateY(-45deg) rotateZ(0)}100%{transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@-webkit-keyframes cssload-rotate-one{0%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@keyframes cssload-rotate-two{0%{transform:rotateX(50deg) rotateY(10deg) rotateZ(0)}100%{transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@-webkit-keyframes cssload-rotate-two{0%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(0)}100%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@keyframes cssload-rotate-three{0%{transform:rotateX(35deg) rotateY(55deg) rotateZ(0)}100%{transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}@-webkit-keyframes cssload-rotate-three{0%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}", ".loader-dots[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;right:0;left:0;color:#fefcff;font-size:10px;margin:auto;width:1em;height:1em;border-radius:50%;text-indent:-9999em;-webkit-animation:1.3s linear infinite load4;animation:1.3s linear infinite load4;transform:translateZ(0)}@-webkit-keyframes load4{0%,100%{box-shadow:0 -3em 0 .2em,2em -2em 0 0,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 0}12.5%{box-shadow:0 -3em 0 0,2em -2em 0 .2em,3em 0 0 0,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}25%{box-shadow:0 -3em 0 -.5em,2em -2em 0 0,3em 0 0 .2em,2em 2em 0 0,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}37.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 0,2em 2em 0 .2em,0 3em 0 0,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}50%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 0,0 3em 0 .2em,-2em 2em 0 0,-3em 0 0 -1em,-2em -2em 0 -1em}62.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 0,-2em 2em 0 .2em,-3em 0 0 0,-2em -2em 0 -1em}75%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0 0 .2em,-2em -2em 0 0}87.5%{box-shadow:0 -3em 0 0,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0 0 0,-2em -2em 0 .2em}}@keyframes load4{0%,100%{box-shadow:0 -3em 0 .2em,2em -2em 0 0,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 0}12.5%{box-shadow:0 -3em 0 0,2em -2em 0 .2em,3em 0 0 0,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}25%{box-shadow:0 -3em 0 -.5em,2em -2em 0 0,3em 0 0 .2em,2em 2em 0 0,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}37.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 0,2em 2em 0 .2em,0 3em 0 0,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}50%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 0,0 3em 0 .2em,-2em 2em 0 0,-3em 0 0 -1em,-2em -2em 0 -1em}62.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 0,-2em 2em 0 .2em,-3em 0 0 0,-2em -2em 0 -1em}75%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0 0 .2em,-2em -2em 0 0}87.5%{box-shadow:0 -3em 0 0,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0 0 0,-2em -2em 0 .2em}}", ".loader-bars[_ngcontent-%COMP%], .loader-bars[_ngcontent-%COMP%]:after, .loader-bars[_ngcontent-%COMP%]:before{background:#fefcff;-webkit-animation:1s ease-in-out infinite load1;animation:1s ease-in-out infinite load1;width:1em;height:4em}.loader-bars[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;right:0;left:0;color:#fefcff;text-indent:-9999em;margin:auto;font-size:11px;transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s}.loader-bars[_ngcontent-%COMP%]:after, .loader-bars[_ngcontent-%COMP%]:before{position:absolute;top:0;content:''}.loader-bars[_ngcontent-%COMP%]:before{left:-1.5em;-webkit-animation-delay:-.32s;animation-delay:-.32s}.loader-bars[_ngcontent-%COMP%]:after{left:1.5em}@-webkit-keyframes load1{0%,100%,80%{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}@keyframes load1{0%,100%,80%{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}", ".loader-circular[_ngcontent-%COMP%], .loader-circular[_ngcontent-%COMP%]:after{border-radius:50%;width:10em;height:10em}.loader-circular[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;font-size:10px;text-indent:-9999em;border-top:1.1em solid rgba(255,255,255,.2);border-right:1.1em solid rgba(255,255,255,.2);border-bottom:1.1em solid rgba(255,255,255,.2);border-left:1.1em solid #fff;transform:translateZ(0);-webkit-animation:1.1s linear infinite load8;animation:1.1s linear infinite load8}@-webkit-keyframes load8{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes load8{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}", ".cube-folding[_ngcontent-%COMP%]{width:50px;height:50px;display:inline-block;transform:rotate(45deg);font-size:0}.cube-folding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;width:25px;height:25px;transform:scale(1.1);display:inline-block}.cube-folding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before{content:'';background-color:#fff;position:absolute;left:0;top:0;display:block;width:25px;height:25px;transform-origin:100% 100%;-webkit-animation:2.5s linear infinite both folding;animation:2.5s linear infinite both folding}.cube-folding[_ngcontent-%COMP%]   .leaf2[_ngcontent-%COMP%]{transform:rotateZ(90deg) scale(1.1)}.cube-folding[_ngcontent-%COMP%]   .leaf2[_ngcontent-%COMP%]::before{-webkit-animation-delay:.3s;animation-delay:.3s;background-color:#f2f2f2}.cube-folding[_ngcontent-%COMP%]   .leaf3[_ngcontent-%COMP%]{transform:rotateZ(270deg) scale(1.1)}.cube-folding[_ngcontent-%COMP%]   .leaf3[_ngcontent-%COMP%]::before{-webkit-animation-delay:.9s;animation-delay:.9s;background-color:#f2f2f2}.cube-folding[_ngcontent-%COMP%]   .leaf4[_ngcontent-%COMP%]{transform:rotateZ(180deg) scale(1.1)}.cube-folding[_ngcontent-%COMP%]   .leaf4[_ngcontent-%COMP%]::before{-webkit-animation-delay:.6s;animation-delay:.6s;background-color:#e6e6e6}@-webkit-keyframes folding{0%,10%{transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{transform:perspective(140px) rotateX(0);opacity:1}100%,90%{transform:perspective(140px) rotateY(180deg);opacity:0}}@keyframes folding{0%,10%{transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{transform:perspective(140px) rotateX(0);opacity:1}100%,90%{transform:perspective(140px) rotateY(180deg);opacity:0}}.cube-wrapper[_ngcontent-%COMP%]{position:fixed;left:50%;top:50%;margin-top:-50px;margin-left:-50px;width:100px;height:100px;text-align:center}@-webkit-keyframes text{100%{top:35px}}@keyframes text{100%{top:35px}}@-webkit-keyframes shadow{100%{bottom:-18px;width:100px}}@keyframes shadow{100%{bottom:-18px;width:100px}}", "#preloader[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}#loader[_ngcontent-%COMP%]{display:block;position:relative;left:50%;top:50%;width:100px;height:100px;margin:-75px 0 0 -75px;border-radius:50%;border:3px solid transparent;border-top-color:#b4b4b4;-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin}#loader[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:5px;left:5px;right:5px;bottom:5px;border-radius:50%;border:3px solid transparent;border-top-color:#d9d9d9;-webkit-animation:3s linear infinite spin;animation:3s linear infinite spin}#loader[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:15px;left:15px;right:15px;bottom:15px;border-radius:50%;border:3px solid transparent;border-top-color:#fff;-webkit-animation:1.5s linear infinite spin;animation:1.5s linear infinite spin}@-webkit-keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}", "@-webkit-keyframes loader{0%,10%,100%{width:60px;height:60px}65%{width:150px;height:150px}}@keyframes loader{0%,10%,100%{width:60px;height:60px}65%{width:150px;height:150px}}@-webkit-keyframes loaderBlock{0%,30%{transform:rotate(0)}55%{background-color:#b4b4b4}100%{transform:rotate(90deg)}}@keyframes loaderBlock{0%,30%{transform:rotate(0)}55%{background-color:#b4b4b4}100%{transform:rotate(90deg)}}@-webkit-keyframes loaderBlockInverse{0%,20%{transform:rotate(0)}55%{background-color:#d9d9d9}100%{transform:rotate(-90deg)}}@keyframes loaderBlockInverse{0%,20%{transform:rotate(0)}55%{background-color:#d9d9d9}100%{transform:rotate(-90deg)}}.loader[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:60px;height:60px;transform:translate(-50%,-50%) rotate(45deg) translate3d(0,0,0);-webkit-animation:1.2s ease-in-out infinite loader;animation:1.2s ease-in-out infinite loader}.loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;display:block;width:40px;height:40px;background-color:#fff;-webkit-animation:1.2s ease-in-out infinite both loaderBlock;animation:1.2s ease-in-out infinite both loaderBlock}.loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){top:0;left:0}.loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){top:0;right:0;-webkit-animation:1.2s ease-in-out infinite both loaderBlockInverse;animation:1.2s ease-in-out infinite both loaderBlockInverse}.loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){bottom:0;left:0;-webkit-animation:1.2s ease-in-out infinite both loaderBlockInverse;animation:1.2s ease-in-out infinite both loaderBlockInverse}.loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4){bottom:0;right:0}"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](LoadingSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'ks-loading-spinner',
                template: "<div [attr.aria-label]=\"accessibilityConfig?.loadingSpinnerAriaLabel\"\n     [title]=\"accessibilityConfig?.loadingSpinnerTitle\">\n\n  <ng-container [ngSwitch]=\"loadingConfig.type\">\n    <ng-container *ngSwitchCase=\"loadingStandard\">\n      <div class=\"cssload-loader\">\n        <div class=\"cssload-inner cssload-one\"></div>\n        <div class=\"cssload-inner cssload-two\"></div>\n        <div class=\"cssload-inner cssload-three\"></div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"loadingBars\">\n      <div class=\"loader-bars\">\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"loadingCircular\">\n      <div class=\"loader-circular\">\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"loadingDots\">\n      <div class=\"loader-dots\">\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"loadingCubeFlipping\">\n      <div class=\"cube-wrapper\">\n        <div class=\"cube-folding\">\n          <span class=\"leaf1\"></span>\n          <span class=\"leaf2\"></span>\n          <span class=\"leaf3\"></span>\n          <span class=\"leaf4\"></span>\n        </div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"loadingCircles\">\n      <div id=\"preloader\">\n        <div id=\"loader\"></div>\n      </div>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"loadingExplosingSquares\">\n      <div class=\"loader\">\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n      </div>\n    </ng-container>\n    <!--<ng-container *ngSwitchDefault>-->\n    <!---->\n    <!--</ng-container>-->\n  </ng-container>\n</div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
                styles: [".cssload-loader{position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;width:64px;height:64px;border-radius:50%;-o-border-radius:50%;-ms-border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;perspective:800px}.cssload-inner{position:absolute;width:100%;height:100%;box-sizing:border-box;-o-box-sizing:border-box;-ms-box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;border-radius:50%;-o-border-radius:50%;-ms-border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%}.cssload-inner.cssload-one{left:0;top:0;animation:.6s linear infinite cssload-rotate-one;-o-animation:.6s linear infinite cssload-rotate-one;-ms-animation:cssload-rotate-one .6s linear infinite;-webkit-animation:.6s linear infinite cssload-rotate-one;-moz-animation:.6s linear infinite cssload-rotate-one;border-bottom:3px solid rgba(255,255,255,.99)}.cssload-inner.cssload-two{right:0;top:0;animation:.6s linear infinite cssload-rotate-two;-o-animation:.6s linear infinite cssload-rotate-two;-ms-animation:cssload-rotate-two .6s linear infinite;-webkit-animation:.6s linear infinite cssload-rotate-two;-moz-animation:.6s linear infinite cssload-rotate-two;border-right:3px solid #fff}.cssload-inner.cssload-three{right:0;bottom:0;animation:.6s linear infinite cssload-rotate-three;-o-animation:.6s linear infinite cssload-rotate-three;-ms-animation:cssload-rotate-three .6s linear infinite;-webkit-animation:.6s linear infinite cssload-rotate-three;-moz-animation:.6s linear infinite cssload-rotate-three;border-top:3px solid #fff}@keyframes cssload-rotate-one{0%{transform:rotateX(35deg) rotateY(-45deg) rotateZ(0)}100%{transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@-webkit-keyframes cssload-rotate-one{0%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(-45deg) rotateZ(360deg)}}@keyframes cssload-rotate-two{0%{transform:rotateX(50deg) rotateY(10deg) rotateZ(0)}100%{transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@-webkit-keyframes cssload-rotate-two{0%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(0)}100%{-webkit-transform:rotateX(50deg) rotateY(10deg) rotateZ(360deg)}}@keyframes cssload-rotate-three{0%{transform:rotateX(35deg) rotateY(55deg) rotateZ(0)}100%{transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}@-webkit-keyframes cssload-rotate-three{0%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(0)}100%{-webkit-transform:rotateX(35deg) rotateY(55deg) rotateZ(360deg)}}", ".loader-dots{position:absolute;top:0;bottom:0;right:0;left:0;color:#fefcff;font-size:10px;margin:auto;width:1em;height:1em;border-radius:50%;text-indent:-9999em;-webkit-animation:1.3s linear infinite load4;animation:1.3s linear infinite load4;transform:translateZ(0)}@-webkit-keyframes load4{0%,100%{box-shadow:0 -3em 0 .2em,2em -2em 0 0,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 0}12.5%{box-shadow:0 -3em 0 0,2em -2em 0 .2em,3em 0 0 0,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}25%{box-shadow:0 -3em 0 -.5em,2em -2em 0 0,3em 0 0 .2em,2em 2em 0 0,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}37.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 0,2em 2em 0 .2em,0 3em 0 0,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}50%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 0,0 3em 0 .2em,-2em 2em 0 0,-3em 0 0 -1em,-2em -2em 0 -1em}62.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 0,-2em 2em 0 .2em,-3em 0 0 0,-2em -2em 0 -1em}75%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0 0 .2em,-2em -2em 0 0}87.5%{box-shadow:0 -3em 0 0,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0 0 0,-2em -2em 0 .2em}}@keyframes load4{0%,100%{box-shadow:0 -3em 0 .2em,2em -2em 0 0,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 0}12.5%{box-shadow:0 -3em 0 0,2em -2em 0 .2em,3em 0 0 0,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}25%{box-shadow:0 -3em 0 -.5em,2em -2em 0 0,3em 0 0 .2em,2em 2em 0 0,0 3em 0 -1em,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}37.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 0,2em 2em 0 .2em,0 3em 0 0,-2em 2em 0 -1em,-3em 0 0 -1em,-2em -2em 0 -1em}50%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 0,0 3em 0 .2em,-2em 2em 0 0,-3em 0 0 -1em,-2em -2em 0 -1em}62.5%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 0,-2em 2em 0 .2em,-3em 0 0 0,-2em -2em 0 -1em}75%{box-shadow:0 -3em 0 -1em,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0 0 .2em,-2em -2em 0 0}87.5%{box-shadow:0 -3em 0 0,2em -2em 0 -1em,3em 0 0 -1em,2em 2em 0 -1em,0 3em 0 -1em,-2em 2em 0 0,-3em 0 0 0,-2em -2em 0 .2em}}", ".loader-bars,.loader-bars:after,.loader-bars:before{background:#fefcff;-webkit-animation:1s ease-in-out infinite load1;animation:1s ease-in-out infinite load1;width:1em;height:4em}.loader-bars{position:absolute;top:0;bottom:0;right:0;left:0;color:#fefcff;text-indent:-9999em;margin:auto;font-size:11px;transform:translateZ(0);-webkit-animation-delay:-.16s;animation-delay:-.16s}.loader-bars:after,.loader-bars:before{position:absolute;top:0;content:''}.loader-bars:before{left:-1.5em;-webkit-animation-delay:-.32s;animation-delay:-.32s}.loader-bars:after{left:1.5em}@-webkit-keyframes load1{0%,100%,80%{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}@keyframes load1{0%,100%,80%{box-shadow:0 0;height:4em}40%{box-shadow:0 -2em;height:5em}}", ".loader-circular,.loader-circular:after{border-radius:50%;width:10em;height:10em}.loader-circular{position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;font-size:10px;text-indent:-9999em;border-top:1.1em solid rgba(255,255,255,.2);border-right:1.1em solid rgba(255,255,255,.2);border-bottom:1.1em solid rgba(255,255,255,.2);border-left:1.1em solid #fff;transform:translateZ(0);-webkit-animation:1.1s linear infinite load8;animation:1.1s linear infinite load8}@-webkit-keyframes load8{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes load8{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}", ".cube-folding{width:50px;height:50px;display:inline-block;transform:rotate(45deg);font-size:0}.cube-folding span{position:relative;width:25px;height:25px;transform:scale(1.1);display:inline-block}.cube-folding span::before{content:'';background-color:#fff;position:absolute;left:0;top:0;display:block;width:25px;height:25px;transform-origin:100% 100%;-webkit-animation:2.5s linear infinite both folding;animation:2.5s linear infinite both folding}.cube-folding .leaf2{transform:rotateZ(90deg) scale(1.1)}.cube-folding .leaf2::before{-webkit-animation-delay:.3s;animation-delay:.3s;background-color:#f2f2f2}.cube-folding .leaf3{transform:rotateZ(270deg) scale(1.1)}.cube-folding .leaf3::before{-webkit-animation-delay:.9s;animation-delay:.9s;background-color:#f2f2f2}.cube-folding .leaf4{transform:rotateZ(180deg) scale(1.1)}.cube-folding .leaf4::before{-webkit-animation-delay:.6s;animation-delay:.6s;background-color:#e6e6e6}@-webkit-keyframes folding{0%,10%{transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{transform:perspective(140px) rotateX(0);opacity:1}100%,90%{transform:perspective(140px) rotateY(180deg);opacity:0}}@keyframes folding{0%,10%{transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{transform:perspective(140px) rotateX(0);opacity:1}100%,90%{transform:perspective(140px) rotateY(180deg);opacity:0}}.cube-wrapper{position:fixed;left:50%;top:50%;margin-top:-50px;margin-left:-50px;width:100px;height:100px;text-align:center}@-webkit-keyframes text{100%{top:35px}}@keyframes text{100%{top:35px}}@-webkit-keyframes shadow{100%{bottom:-18px;width:100px}}@keyframes shadow{100%{bottom:-18px;width:100px}}", "#preloader{position:fixed;top:0;left:0;width:100%;height:100%}#loader{display:block;position:relative;left:50%;top:50%;width:100px;height:100px;margin:-75px 0 0 -75px;border-radius:50%;border:3px solid transparent;border-top-color:#b4b4b4;-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin}#loader:before{content:\"\";position:absolute;top:5px;left:5px;right:5px;bottom:5px;border-radius:50%;border:3px solid transparent;border-top-color:#d9d9d9;-webkit-animation:3s linear infinite spin;animation:3s linear infinite spin}#loader:after{content:\"\";position:absolute;top:15px;left:15px;right:15px;bottom:15px;border-radius:50%;border:3px solid transparent;border-top-color:#fff;-webkit-animation:1.5s linear infinite spin;animation:1.5s linear infinite spin}@-webkit-keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}", "@-webkit-keyframes loader{0%,10%,100%{width:60px;height:60px}65%{width:150px;height:150px}}@keyframes loader{0%,10%,100%{width:60px;height:60px}65%{width:150px;height:150px}}@-webkit-keyframes loaderBlock{0%,30%{transform:rotate(0)}55%{background-color:#b4b4b4}100%{transform:rotate(90deg)}}@keyframes loaderBlock{0%,30%{transform:rotate(0)}55%{background-color:#b4b4b4}100%{transform:rotate(90deg)}}@-webkit-keyframes loaderBlockInverse{0%,20%{transform:rotate(0)}55%{background-color:#d9d9d9}100%{transform:rotate(-90deg)}}@keyframes loaderBlockInverse{0%,20%{transform:rotate(0)}55%{background-color:#d9d9d9}100%{transform:rotate(-90deg)}}.loader{position:absolute;top:50%;left:50%;width:60px;height:60px;transform:translate(-50%,-50%) rotate(45deg) translate3d(0,0,0);-webkit-animation:1.2s ease-in-out infinite loader;animation:1.2s ease-in-out infinite loader}.loader span{position:absolute;display:block;width:40px;height:40px;background-color:#fff;-webkit-animation:1.2s ease-in-out infinite both loaderBlock;animation:1.2s ease-in-out infinite both loaderBlock}.loader span:nth-child(1){top:0;left:0}.loader span:nth-child(2){top:0;right:0;-webkit-animation:1.2s ease-in-out infinite both loaderBlockInverse;animation:1.2s ease-in-out infinite both loaderBlockInverse}.loader span:nth-child(3){bottom:0;left:0;-webkit-animation:1.2s ease-in-out infinite both loaderBlockInverse;animation:1.2s ease-in-out infinite both loaderBlockInverse}.loader span:nth-child(4){bottom:0;right:0}"]
            }]
    }], function () { return []; }, { loadingConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], accessibilityConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }] }); })();
    return LoadingSpinnerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Component with the gallery of thumbs.
 * In receives an array of Images, a boolean to show/hide
 * the gallery (feature used by imagePointer) and a config
 * object to customize the behaviour of this component.
 * Also, it emits click events as outputs.
 */
var PlainGalleryComponent = /** @class */ (function () {
    function PlainGalleryComponent() {
        /**
         * Output to emit an event when an image is changed.
         */
        this.show = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Bi-dimensional array of `Image` object to store images to display as plain gallery.
         * [] by default.
         */
        this.imageGrid = [];
        /**
         * Boolean passed as input to `ks-wrap` directive to configure flex-wrap css property.
         * However it's not enough, because you need to limit the width using `widthStyle` public variable.
         * For more info check https://developer.mozilla.org/it/docs/Web/CSS/flex-wrap
         */
        this.wrapStyle = false;
        /**
         * String passed as input to `ks-wrap` directive to set width to be able to force overflow.
         * In this way, `wrapStyle` (flex-wrap css property) will be used as requested.
         */
        this.widthStyle = '';
        /**
         * Default image size object
         */
        this.defaultSize = { width: '50px', height: 'auto' };
        /**
         * Default layout config object
         * Note that length=-1 means infinity
         */
        this.defaultLayout = new LineLayout(this.defaultSize, { length: -1, wrap: false }, 'flex-start');
        /**
         * Default plain gallery config object
         */
        this.defaultPlainConfig = {
            strategy: PlainGalleryStrategy.ROW,
            layout: this.defaultLayout,
            advanced: { aTags: false, additionalBackground: '50% 50%/cover' }
        };
    }
    /**
     * Method ´ngOnChanges´ to update both `imageGrid` and`configPlainGallery`.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     */
    /**
     * Method ´ngOnChanges´ to update both `imageGrid` and`configPlainGallery`.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @param {?} changes
     * @return {?}
     */
    PlainGalleryComponent.prototype.ngOnChanges = /**
     * Method ´ngOnChanges´ to update both `imageGrid` and`configPlainGallery`.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called when any data-bound property of a directive changes!!!
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var imagesChange = changes.images;
        /** @type {?} */
        var configChange = changes.plainGalleryConfig;
        // I'm using !change.firstChange because the first time will be called both onInit and onChange and I don't
        // want to execute initialization two times.
        if (configChange &&
            !configChange.firstChange &&
            (configChange.previousValue !== configChange.currentValue || (!configChange.previousValue && !configChange.currentValue))) {
            this.configPlainGallery = this.initPlainGalleryConfig();
        }
        if (imagesChange && !imagesChange.firstChange && imagesChange.previousValue !== imagesChange.currentValue) {
            this.initImageGrid();
        }
    };
    /**
     * Method ´ngOnInit´ to init both `configPlainGallery` calling `initPlainGalleryConfig()`
     * and `imageGrid invoking `initImageGrid()`.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     */
    /**
     * Method ´ngOnInit´ to init both `configPlainGallery` calling `initPlainGalleryConfig()`
     * and `imageGrid invoking `initImageGrid()`.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    PlainGalleryComponent.prototype.ngOnInit = /**
     * Method ´ngOnInit´ to init both `configPlainGallery` calling `initPlainGalleryConfig()`
     * and `imageGrid invoking `initImageGrid()`.
     * This is an Angular's lifecycle hook, so its called automatically by Angular itself.
     * In particular, it's called only one time!!!
     * @return {?}
     */
    function () {
        this.configPlainGallery = this.initPlainGalleryConfig();
        this.initImageGrid();
    };
    /**
     * Method called when you click on an image of the plain (or inline) gallery.
     * This will emit the show event with the index number as payload.
     * @param number index of the clicked image
     */
    /**
     * Method called when you click on an image of the plain (or inline) gallery.
     * This will emit the show event with the index number as payload.
     * @param {?} index
     * @return {?}
     */
    PlainGalleryComponent.prototype.showModalGallery = /**
     * Method called when you click on an image of the plain (or inline) gallery.
     * This will emit the show event with the index number as payload.
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.show.emit(index);
    };
    /**
     * Method called when you click on an image of the plain (or inline) gallery.
     * This will emit the show event with the image as payload.
     * @param Image img is the Image to show
     */
    /**
     * Method called when you click on an image of the plain (or inline) gallery.
     * This will emit the show event with the image as payload.
     * @param {?} img
     * @return {?}
     */
    PlainGalleryComponent.prototype.showModalGalleryByImage = /**
     * Method called when you click on an image of the plain (or inline) gallery.
     * This will emit the show event with the image as payload.
     * @param {?} img
     * @return {?}
     */
    function (img) {
        /** @type {?} */
        var index = this.images.findIndex((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return val && img && val.id === img.id; }));
        this.showModalGallery(index);
    };
    /**
     * Method to get `alt attribute`.
     * `alt` specifies an alternate text for an image, if the image cannot be displayed.
     * @param Image image to get its alt description.
     * @returns string alt description of the image
     */
    /**
     * Method to get `alt attribute`.
     * `alt` specifies an alternate text for an image, if the image cannot be displayed.
     * @param {?} image
     * @return {?} string alt description of the image
     */
    PlainGalleryComponent.prototype.getAltPlainDescriptionByImage = /**
     * Method to get `alt attribute`.
     * `alt` specifies an alternate text for an image, if the image cannot be displayed.
     * @param {?} image
     * @return {?} string alt description of the image
     */
    function (image) {
        if (!image) {
            return '';
        }
        return image.plain && image.plain.description ? image.plain.description : "Image " + (getIndex(image, this.images) + 1);
    };
    /**
     * Method to get the title for an image.
     * @param Image image to get its title
     * @returns string the title of the input image
     */
    /**
     * Method to get the title for an image.
     * @param {?} image
     * @return {?} string the title of the input image
     */
    PlainGalleryComponent.prototype.getTitleDisplay = /**
     * Method to get the title for an image.
     * @param {?} image
     * @return {?} string the title of the input image
     */
    function (image) {
        /** @type {?} */
        var description = '';
        if (image.plain && image.plain.description) {
            description = image.plain.description;
        }
        else if (image.modal && image.modal.description) {
            description = image.modal.description;
        }
        /** @type {?} */
        var currentIndex = getIndex(image, this.images);
        /** @type {?} */
        var prevDescription = 'Image ' + (currentIndex + 1) + '/' + this.images.length;
        /** @type {?} */
        var currImgDescription = description ? description : '';
        if (currImgDescription !== '') {
            currImgDescription = ' - ' + currImgDescription;
        }
        return prevDescription + currImgDescription;
    };
    /**
     * Method used in the template to track ids in ngFor.
     * @param number index of the array
     * @param Image item of the array
     * @returns number the id of the item
     */
    /**
     * Method used in the template to track ids in ngFor.
     * @param {?} index
     * @param {?} item
     * @return {?} number the id of the item
     */
    PlainGalleryComponent.prototype.trackById = /**
     * Method used in the template to track ids in ngFor.
     * @param {?} index
     * @param {?} item
     * @return {?} number the id of the item
     */
    function (index, item) {
        return item.id;
    };
    /**
     * Private method to build and return a `PlainGalleryConfig` object, proving also default values.
     * @returns PlainGalleryConfig the plain gallery configuration
     * @throws an Error if layout and strategy aren't compatible
     */
    /**
     * Private method to build and return a `PlainGalleryConfig` object, proving also default values.
     * @throws an Error if layout and strategy aren't compatible
     * @private
     * @return {?} PlainGalleryConfig the plain gallery configuration
     */
    PlainGalleryComponent.prototype.initPlainGalleryConfig = /**
     * Private method to build and return a `PlainGalleryConfig` object, proving also default values.
     * @throws an Error if layout and strategy aren't compatible
     * @private
     * @return {?} PlainGalleryConfig the plain gallery configuration
     */
    function () {
        /** @type {?} */
        var config = Object.assign({}, this.defaultPlainConfig, this.plainGalleryConfig);
        if (config.layout instanceof LineLayout) {
            if (config.strategy !== PlainGalleryStrategy.ROW && config.strategy !== PlainGalleryStrategy.COLUMN) {
                throw new Error('LineLayout requires either ROW or COLUMN strategy');
            }
            if (!config.layout || !config.layout.breakConfig) {
                throw new Error('Both layout and breakConfig must be valid');
            }
        }
        if (config.layout instanceof GridLayout) {
            if (config.strategy !== PlainGalleryStrategy.GRID) {
                throw new Error('GridLayout requires GRID strategy');
            }
            if (!config.layout || !config.layout.breakConfig) {
                throw new Error('Both layout and breakConfig must be valid');
            }
            // force wrap for grid layout
            config.layout.breakConfig.wrap = true;
        }
        if (config.layout instanceof AdvancedLayout) {
            if (config.strategy !== PlainGalleryStrategy.CUSTOM) {
                throw new Error('AdvancedLayout requires CUSTOM strategy');
            }
        }
        return config;
    };
    /**
     * Private method to init both `imageGrid` and other style variables,
     * based on the layout type.
     */
    /**
     * Private method to init both `imageGrid` and other style variables,
     * based on the layout type.
     * @private
     * @return {?}
     */
    PlainGalleryComponent.prototype.initImageGrid = /**
     * Private method to init both `imageGrid` and other style variables,
     * based on the layout type.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var config = this.configPlainGallery;
        // reset the array to prevent issues in case of GridLayout
        this.imageGrid = [];
        if (config.layout instanceof LineLayout) {
            /** @type {?} */
            var layout_1 = config.layout;
            /** @type {?} */
            var row = this.images.filter((/**
             * @param {?} val
             * @param {?} i
             * @return {?}
             */
            function (val, i) { return i < layout_1.breakConfig.length || layout_1.breakConfig.length === -1; }));
            this.imageGrid = [row];
            this.size = config.layout.size;
            switch (config.strategy) {
                case PlainGalleryStrategy.ROW:
                    this.directionStyle = 'row';
                    break;
                case PlainGalleryStrategy.COLUMN:
                    this.directionStyle = 'column';
                    this.wrapStyle = layout_1.breakConfig.wrap;
                    break;
            }
            this.justifyStyle = layout_1.justify;
        }
        if (config.layout instanceof GridLayout) {
            /** @type {?} */
            var layout = config.layout;
            /** @type {?} */
            var count = Math.ceil(this.images.length / layout.breakConfig.length);
            /** @type {?} */
            var start_1 = 0;
            /** @type {?} */
            var end_1 = layout.breakConfig.length - 1;
            for (var j = 0; j < count; j++) {
                /** @type {?} */
                var row = this.images.filter((/**
                 * @param {?} val
                 * @param {?} i
                 * @return {?}
                 */
                function (val, i) { return i >= start_1 && i <= end_1; }));
                this.imageGrid.push(row);
                start_1 = end_1 + 1;
                end_1 = start_1 + layout.breakConfig.length - 1;
            }
            this.size = config.layout.size;
            /** @type {?} */
            var pixels = +layout.size.width.replace('px', '');
            this.widthStyle = pixels * layout.breakConfig.length + pixels / 2 + 'px';
            this.wrapStyle = layout.breakConfig.wrap;
            this.directionStyle = 'row';
        }
        if (config.layout instanceof AdvancedLayout) {
            this.imageGrid = [this.images];
        }
    };
    PlainGalleryComponent.propDecorators = {
        images: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        showGallery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        plainGalleryConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        accessibilityConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }]
    };
PlainGalleryComponent.ɵfac = function PlainGalleryComponent_Factory(t) { return new (t || PlainGalleryComponent)(); };
PlainGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PlainGalleryComponent, selectors: [["ks-plain-gallery"]], inputs: { images: "images", showGallery: "showGallery", plainGalleryConfig: "plainGalleryConfig", accessibilityConfig: "accessibilityConfig" }, outputs: { show: "show" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]()], decls: 1, vars: 1, consts: [["class", "plain-container", "ksWrap", "", "ksDirection", "", 3, "wrap", "width", "direction", "justify", "title", 4, "ngIf"], ["ksWrap", "", "ksDirection", "", 1, "plain-container", 3, "wrap", "width", "direction", "justify", "title"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["aTags", ""], ["class", "image", "ksSize", "", "role", "img", 3, "src", "sizeConfig", "title", "alt", "tabindex", "click", "keyup", 4, "ngIf"], ["ksSize", "", "role", "img", 1, "image", 3, "src", "sizeConfig", "title", "alt", "tabindex", "click", "keyup"], ["class", "a-tag-image", "ksATagBgImage", "", "ksSize", "", 3, "image", "style", "sizeConfig", "title", "tabindex", "click", "keyup", 4, "ngIf"], ["ksATagBgImage", "", "ksSize", "", 1, "a-tag-image", 3, "image", "sizeConfig", "title", "tabindex", "click", "keyup"]], template: function PlainGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, PlainGalleryComponent_div_0_Template, 2, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showGallery);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], WrapDirective,
        DirectionDirective, _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], SizeDirective,
        ATagBgImageDirective], styles: [".plain-container[_ngcontent-%COMP%]{align-items:center;display:flex}.plain-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{cursor:pointer;height:auto;width:50px;margin:2px}.plain-container[_ngcontent-%COMP%]   .a-tag-image[_ngcontent-%COMP%]{cursor:pointer;margin:2px}"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](PlainGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'ks-plain-gallery',
                template: "<div *ngIf=\"showGallery\"\n     class=\"plain-container\"\n     ksWrap [wrap]=\"wrapStyle\" [width]=\"widthStyle\"\n     ksDirection [direction]=\"directionStyle\" [justify]=\"justifyStyle\"\n     [attr.aria-label]=\"accessibilityConfig?.plainGalleryContentAriaLabel\"\n     [title]=\"accessibilityConfig?.plainGalleryContentTitle\">\n\n  <ng-container *ngFor=\"let imgRow of imageGrid; let i = index\">\n    <ng-container *ngFor=\"let imgCol of imgRow; let j = index\">\n\n      <ng-container *ngIf=\"!configPlainGallery.advanced?.aTags; else aTags\">\n        <img *ngIf=\"imgCol?.modal?.img\"\n             [src]=\"imgCol.plain?.img ? imgCol.plain.img : imgCol.modal.img\"\n             class=\"image\"\n             ksSize [sizeConfig]=\"{width: size?.width, height: size?.height}\"\n             [attr.aria-label]=\"imgCol.plain?.ariaLabel\"\n             [title]=\"imgCol.plain?.title ? imgCol.plain.title : getTitleDisplay(imgCol)\"\n             alt=\"{{imgCol.plain?.alt ? imgCol.plain.alt : getAltPlainDescriptionByImage(imgCol)}}\"\n             [tabindex]=\"0\" role=\"img\"\n             (click)=\"showModalGalleryByImage(imgCol)\" (keyup)=\"showModalGalleryByImage(imgCol)\"/>\n      </ng-container>\n\n      <!-- Add directive to set background with the image url as param to pass thumb or img-->\n      <!-- to do something like this <a style=\"background: url('path to image') 50% 50%/cover\">.-->\n      <ng-template #aTags>\n        <a *ngIf=\"imgCol?.modal?.img\"\n           class=\"a-tag-image\"\n           ksATagBgImage [image]=\"imgCol\" [style]=\"configPlainGallery.advanced?.additionalBackground\"\n           ksSize [sizeConfig]=\"{width: size?.width, height: size?.height}\"\n           [attr.aria-label]=\"imgCol.plain?.ariaLabel\"\n           [title]=\"imgCol.plain?.title ? imgCol.plain.title : getTitleDisplay(imgCol)\"\n           [tabindex]=\"0\"\n           (click)=\"showModalGallery(j)\" (keyup)=\"showModalGallery(j)\"></a>\n      </ng-template>\n\n    </ng-container>\n  </ng-container>\n\n</div>\n\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectionStrategy"].OnPush,
                styles: [".plain-container{align-items:center;display:flex}.plain-container .image{cursor:pointer;height:auto;width:50px;margin:2px}.plain-container .a-tag-image{cursor:pointer;margin:2px}"]
            }]
    }], function () { return []; }, { show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], showGallery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], plainGalleryConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], accessibilityConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }] }); })();
    return PlainGalleryComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Array of all components.
 * @type {?}
 */
var COMPONENTS = [
    BackgroundComponent,
    PlainGalleryComponent,
    ModalGalleryComponent,
    CarouselComponent,
    CarouselPreviewsComponent,
    UpperButtonsComponent,
    DotsComponent,
    PreviewsComponent,
    CurrentImageComponent,
    LoadingSpinnerComponent,
    AccessibleComponent
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// to prevent bad scrolling behaviour on mobile phone with carousels.
// From @mohaxspb (https://github.com/Ks89/angular-modal-gallery/pull/187)
var  
// to prevent bad scrolling behaviour on mobile phone with carousels.
// From @mohaxspb (https://github.com/Ks89/angular-modal-gallery/pull/187)
KsHammerGestureConfig = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(KsHammerGestureConfig, _super);
    function KsHammerGestureConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    KsHammerGestureConfig.prototype.buildHammer = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        return new Hammer(element, {
            touchAction: 'pan-y'
        });
    };
KsHammerGestureConfig.ɵfac = function KsHammerGestureConfig_Factory(t) { return ɵKsHammerGestureConfig_BaseFactory(t || KsHammerGestureConfig); };
KsHammerGestureConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: KsHammerGestureConfig, factory: function (t) { return KsHammerGestureConfig.ɵfac(t); } });
var ɵKsHammerGestureConfig_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](KsHammerGestureConfig);
    return KsHammerGestureConfig;
}(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HammerGestureConfig"]));
/**
 * Module to import it in the root module of your application.
 */
var GalleryModule = /** @class */ (function () {
    function GalleryModule() {
    }
    /**
     * Importing with '.forRoot()' is deprecated. I'll provide a new way to do this in next releases.
     * Will be removed in 8.0.0 or 9.0.0
     */
    /**
     * Importing with '.forRoot()' is deprecated. I'll provide a new way to do this in next releases.
     * Will be removed in 8.0.0 or 9.0.0
     * @param {?=} config
     * @return {?}
     */
    GalleryModule.forRoot = /**
     * Importing with '.forRoot()' is deprecated. I'll provide a new way to do this in next releases.
     * Will be removed in 8.0.0 or 9.0.0
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: GalleryModule,
            providers: [
                {
                    provide: KEYBOARD_CONFIGURATION,
                    useValue: config ? config : {}
                },
                {
                    provide: KeyboardService,
                    useFactory: setupKeyboardService,
                    deps: [KEYBOARD_CONFIGURATION]
                }
            ]
        };
    };
GalleryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: GalleryModule });
GalleryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function GalleryModule_Factory(t) { return new (t || GalleryModule)(); }, providers: [
        {
            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_GESTURE_CONFIG"],
            useClass: KsHammerGestureConfig
        }
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](GalleryModule, { declarations: function () { return [BackgroundComponent,
        PlainGalleryComponent,
        ModalGalleryComponent,
        CarouselComponent,
        CarouselPreviewsComponent,
        UpperButtonsComponent,
        DotsComponent,
        PreviewsComponent,
        CurrentImageComponent,
        LoadingSpinnerComponent,
        AccessibleComponent,
        ClickOutsideDirective,
        SizeDirective,
        KeyboardNavigationDirective,
        WrapDirective,
        DirectionDirective,
        ATagBgImageDirective,
        DescriptionDirective,
        MarginDirective,
        MaxSizeDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]; }, exports: function () { return [ModalGalleryComponent,
        CarouselComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](GalleryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                declarations: [COMPONENTS, DIRECTIVES],
                exports: [ModalGalleryComponent, CarouselComponent],
                providers: [
                    {
                        provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HAMMER_GESTURE_CONFIG"],
                        useClass: KsHammerGestureConfig
                    }
                ]
            }]
    }], function () { return []; }, null); })();
    return GalleryModule;
}());
/**
 * Function to setup the keyboard service inside the `forRoot` method.
 * @param {?} injector
 * @return {?} KeyboardService an instance of the `KeyboardService`
 */
function setupKeyboardService(injector) {
    return new KeyboardService(injector);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ks89-angular-modal-gallery.js.map

/***/ }),

/***/ "./node_modules/mousetrap/mousetrap.js":
/*!*********************************************!*\
  !*** ./node_modules/mousetrap/mousetrap.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*global define:false */
/**
 * Copyright 2012-2017 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.5
 * @url craig.is/killing/mice
 */
(function(window, document, undefined) {

    // Check if mousetrap is used inside browser, if not, return
    if (!window) {
        return;
    }

    /**
     * mapping of special keycodes to their corresponding keys
     *
     * everything in this dictionary cannot use keypress events
     * so it has to be here to map to the correct keycodes for
     * keyup/keydown events
     *
     * @type {Object}
     */
    var _MAP = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        16: 'shift',
        17: 'ctrl',
        18: 'alt',
        20: 'capslock',
        27: 'esc',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'ins',
        46: 'del',
        91: 'meta',
        93: 'meta',
        224: 'meta'
    };

    /**
     * mapping for special characters so they can support
     *
     * this dictionary is only used incase you want to bind a
     * keyup or keydown event to one of these keys
     *
     * @type {Object}
     */
    var _KEYCODE_MAP = {
        106: '*',
        107: '+',
        109: '-',
        110: '.',
        111 : '/',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };

    /**
     * this is a mapping of keys that require shift on a US keypad
     * back to the non shift equivelents
     *
     * this is so you can use keyup events with these keys
     *
     * note that this will only work reliably on US keyboards
     *
     * @type {Object}
     */
    var _SHIFT_MAP = {
        '~': '`',
        '!': '1',
        '@': '2',
        '#': '3',
        '$': '4',
        '%': '5',
        '^': '6',
        '&': '7',
        '*': '8',
        '(': '9',
        ')': '0',
        '_': '-',
        '+': '=',
        ':': ';',
        '\"': '\'',
        '<': ',',
        '>': '.',
        '?': '/',
        '|': '\\'
    };

    /**
     * this is a list of special strings you can use to map
     * to modifier keys when you specify your keyboard shortcuts
     *
     * @type {Object}
     */
    var _SPECIAL_ALIASES = {
        'option': 'alt',
        'command': 'meta',
        'return': 'enter',
        'escape': 'esc',
        'plus': '+',
        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
    };

    /**
     * variable to store the flipped version of _MAP from above
     * needed to check if we should use keypress or not when no action
     * is specified
     *
     * @type {Object|undefined}
     */
    var _REVERSE_MAP;

    /**
     * loop through the f keys, f1 to f19 and add them to the map
     * programatically
     */
    for (var i = 1; i < 20; ++i) {
        _MAP[111 + i] = 'f' + i;
    }

    /**
     * loop through to map numbers on the numeric keypad
     */
    for (i = 0; i <= 9; ++i) {

        // This needs to use a string cause otherwise since 0 is falsey
        // mousetrap will never fire for numpad 0 pressed as part of a keydown
        // event.
        //
        // @see https://github.com/ccampbell/mousetrap/pull/258
        _MAP[i + 96] = i.toString();
    }

    /**
     * cross browser add event method
     *
     * @param {Element|HTMLDocument} object
     * @param {string} type
     * @param {Function} callback
     * @returns void
     */
    function _addEvent(object, type, callback) {
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
            return;
        }

        object.attachEvent('on' + type, callback);
    }

    /**
     * takes the event and returns the key character
     *
     * @param {Event} e
     * @return {string}
     */
    function _characterFromEvent(e) {

        // for keypress events we should return the character as is
        if (e.type == 'keypress') {
            var character = String.fromCharCode(e.which);

            // if the shift key is not pressed then it is safe to assume
            // that we want the character to be lowercase.  this means if
            // you accidentally have caps lock on then your key bindings
            // will continue to work
            //
            // the only side effect that might not be desired is if you
            // bind something like 'A' cause you want to trigger an
            // event when capital A is pressed caps lock will no longer
            // trigger the event.  shift+a will though.
            if (!e.shiftKey) {
                character = character.toLowerCase();
            }

            return character;
        }

        // for non keypress events the special maps are needed
        if (_MAP[e.which]) {
            return _MAP[e.which];
        }

        if (_KEYCODE_MAP[e.which]) {
            return _KEYCODE_MAP[e.which];
        }

        // if it is not in the special map

        // with keydown and keyup events the character seems to always
        // come in as an uppercase character whether you are pressing shift
        // or not.  we should make sure it is always lowercase for comparisons
        return String.fromCharCode(e.which).toLowerCase();
    }

    /**
     * checks if two arrays are equal
     *
     * @param {Array} modifiers1
     * @param {Array} modifiers2
     * @returns {boolean}
     */
    function _modifiersMatch(modifiers1, modifiers2) {
        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
    }

    /**
     * takes a key event and figures out what the modifiers are
     *
     * @param {Event} e
     * @returns {Array}
     */
    function _eventModifiers(e) {
        var modifiers = [];

        if (e.shiftKey) {
            modifiers.push('shift');
        }

        if (e.altKey) {
            modifiers.push('alt');
        }

        if (e.ctrlKey) {
            modifiers.push('ctrl');
        }

        if (e.metaKey) {
            modifiers.push('meta');
        }

        return modifiers;
    }

    /**
     * prevents default for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _preventDefault(e) {
        if (e.preventDefault) {
            e.preventDefault();
            return;
        }

        e.returnValue = false;
    }

    /**
     * stops propogation for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _stopPropagation(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
            return;
        }

        e.cancelBubble = true;
    }

    /**
     * determines if the keycode specified is a modifier key or not
     *
     * @param {string} key
     * @returns {boolean}
     */
    function _isModifier(key) {
        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
    }

    /**
     * reverses the map lookup so that we can look for specific keys
     * to see what can and can't use keypress
     *
     * @return {Object}
     */
    function _getReverseMap() {
        if (!_REVERSE_MAP) {
            _REVERSE_MAP = {};
            for (var key in _MAP) {

                // pull out the numeric keypad from here cause keypress should
                // be able to detect the keys from the character
                if (key > 95 && key < 112) {
                    continue;
                }

                if (_MAP.hasOwnProperty(key)) {
                    _REVERSE_MAP[_MAP[key]] = key;
                }
            }
        }
        return _REVERSE_MAP;
    }

    /**
     * picks the best action based on the key combination
     *
     * @param {string} key - character for key
     * @param {Array} modifiers
     * @param {string=} action passed in
     */
    function _pickBestAction(key, modifiers, action) {

        // if no action was picked in we should try to pick the one
        // that we think would work best for this key
        if (!action) {
            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
        }

        // modifier keys don't work as expected with keypress,
        // switch to keydown
        if (action == 'keypress' && modifiers.length) {
            action = 'keydown';
        }

        return action;
    }

    /**
     * Converts from a string key combination to an array
     *
     * @param  {string} combination like "command+shift+l"
     * @return {Array}
     */
    function _keysFromString(combination) {
        if (combination === '+') {
            return ['+'];
        }

        combination = combination.replace(/\+{2}/g, '+plus');
        return combination.split('+');
    }

    /**
     * Gets info for a specific key combination
     *
     * @param  {string} combination key combination ("command+s" or "a" or "*")
     * @param  {string=} action
     * @returns {Object}
     */
    function _getKeyInfo(combination, action) {
        var keys;
        var key;
        var i;
        var modifiers = [];

        // take the keys from this pattern and figure out what the actual
        // pattern is all about
        keys = _keysFromString(combination);

        for (i = 0; i < keys.length; ++i) {
            key = keys[i];

            // normalize key names
            if (_SPECIAL_ALIASES[key]) {
                key = _SPECIAL_ALIASES[key];
            }

            // if this is not a keypress event then we should
            // be smart about using shift keys
            // this will only work for US keyboards however
            if (action && action != 'keypress' && _SHIFT_MAP[key]) {
                key = _SHIFT_MAP[key];
                modifiers.push('shift');
            }

            // if this key is a modifier then add it to the list of modifiers
            if (_isModifier(key)) {
                modifiers.push(key);
            }
        }

        // depending on what the key combination is
        // we will try to pick the best event for it
        action = _pickBestAction(key, modifiers, action);

        return {
            key: key,
            modifiers: modifiers,
            action: action
        };
    }

    function _belongsTo(element, ancestor) {
        if (element === null || element === document) {
            return false;
        }

        if (element === ancestor) {
            return true;
        }

        return _belongsTo(element.parentNode, ancestor);
    }

    function Mousetrap(targetElement) {
        var self = this;

        targetElement = targetElement || document;

        if (!(self instanceof Mousetrap)) {
            return new Mousetrap(targetElement);
        }

        /**
         * element to attach key events to
         *
         * @type {Element}
         */
        self.target = targetElement;

        /**
         * a list of all the callbacks setup via Mousetrap.bind()
         *
         * @type {Object}
         */
        self._callbacks = {};

        /**
         * direct map of string combinations to callbacks used for trigger()
         *
         * @type {Object}
         */
        self._directMap = {};

        /**
         * keeps track of what level each sequence is at since multiple
         * sequences can start out with the same sequence
         *
         * @type {Object}
         */
        var _sequenceLevels = {};

        /**
         * variable to store the setTimeout call
         *
         * @type {null|number}
         */
        var _resetTimer;

        /**
         * temporary state where we will ignore the next keyup
         *
         * @type {boolean|string}
         */
        var _ignoreNextKeyup = false;

        /**
         * temporary state where we will ignore the next keypress
         *
         * @type {boolean}
         */
        var _ignoreNextKeypress = false;

        /**
         * are we currently inside of a sequence?
         * type of action ("keyup" or "keydown" or "keypress") or false
         *
         * @type {boolean|string}
         */
        var _nextExpectedAction = false;

        /**
         * resets all sequence counters except for the ones passed in
         *
         * @param {Object} doNotReset
         * @returns void
         */
        function _resetSequences(doNotReset) {
            doNotReset = doNotReset || {};

            var activeSequences = false,
                key;

            for (key in _sequenceLevels) {
                if (doNotReset[key]) {
                    activeSequences = true;
                    continue;
                }
                _sequenceLevels[key] = 0;
            }

            if (!activeSequences) {
                _nextExpectedAction = false;
            }
        }

        /**
         * finds all callbacks that match based on the keycode, modifiers,
         * and action
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event|Object} e
         * @param {string=} sequenceName - name of the sequence we are looking for
         * @param {string=} combination
         * @param {number=} level
         * @returns {Array}
         */
        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
            var i;
            var callback;
            var matches = [];
            var action = e.type;

            // if there are no events related to this keycode
            if (!self._callbacks[character]) {
                return [];
            }

            // if a modifier key is coming up on its own we should allow it
            if (action == 'keyup' && _isModifier(character)) {
                modifiers = [character];
            }

            // loop through all callbacks for the key that was pressed
            // and see if any of them match
            for (i = 0; i < self._callbacks[character].length; ++i) {
                callback = self._callbacks[character][i];

                // if a sequence name is not specified, but this is a sequence at
                // the wrong level then move onto the next match
                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                    continue;
                }

                // if the action we are looking for doesn't match the action we got
                // then we should keep going
                if (action != callback.action) {
                    continue;
                }

                // if this is a keypress event and the meta key and control key
                // are not pressed that means that we need to only look at the
                // character, otherwise check the modifiers as well
                //
                // chrome will not fire a keypress if meta or control is down
                // safari will fire a keypress if meta or meta+shift is down
                // firefox will fire a keypress if meta or control is down
                if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

                    // when you bind a combination or sequence a second time it
                    // should overwrite the first one.  if a sequenceName or
                    // combination is specified in this call it does just that
                    //
                    // @todo make deleting its own method?
                    var deleteCombo = !sequenceName && callback.combo == combination;
                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                    if (deleteCombo || deleteSequence) {
                        self._callbacks[character].splice(i, 1);
                    }

                    matches.push(callback);
                }
            }

            return matches;
        }

        /**
         * actually calls the callback function
         *
         * if your callback function returns false this will use the jquery
         * convention - prevent default and stop propogation on the event
         *
         * @param {Function} callback
         * @param {Event} e
         * @returns void
         */
        function _fireCallback(callback, e, combo, sequence) {

            // if this event should not happen stop here
            if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
                return;
            }

            if (callback(e, combo) === false) {
                _preventDefault(e);
                _stopPropagation(e);
            }
        }

        /**
         * handles a character key event
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event} e
         * @returns void
         */
        self._handleKey = function(character, modifiers, e) {
            var callbacks = _getMatches(character, modifiers, e);
            var i;
            var doNotReset = {};
            var maxLevel = 0;
            var processedSequenceCallback = false;

            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
            for (i = 0; i < callbacks.length; ++i) {
                if (callbacks[i].seq) {
                    maxLevel = Math.max(maxLevel, callbacks[i].level);
                }
            }

            // loop through matching callbacks for this key event
            for (i = 0; i < callbacks.length; ++i) {

                // fire for all sequence callbacks
                // this is because if for example you have multiple sequences
                // bound such as "g i" and "g t" they both need to fire the
                // callback for matching g cause otherwise you can only ever
                // match the first one
                if (callbacks[i].seq) {

                    // only fire callbacks for the maxLevel to prevent
                    // subsequences from also firing
                    //
                    // for example 'a option b' should not cause 'option b' to fire
                    // even though 'option b' is part of the other sequence
                    //
                    // any sequences that do not match here will be discarded
                    // below by the _resetSequences call
                    if (callbacks[i].level != maxLevel) {
                        continue;
                    }

                    processedSequenceCallback = true;

                    // keep a list of which sequences were matches for later
                    doNotReset[callbacks[i].seq] = 1;
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                    continue;
                }

                // if there were no sequence matches but we are still here
                // that means this is a regular match so we should fire that
                if (!processedSequenceCallback) {
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
                }
            }

            // if the key you pressed matches the type of sequence without
            // being a modifier (ie "keyup" or "keypress") then we should
            // reset all sequences that were not matched by this event
            //
            // this is so, for example, if you have the sequence "h a t" and you
            // type "h e a r t" it does not match.  in this case the "e" will
            // cause the sequence to reset
            //
            // modifier keys are ignored because you can have a sequence
            // that contains modifiers such as "enter ctrl+space" and in most
            // cases the modifier key will be pressed before the next key
            //
            // also if you have a sequence such as "ctrl+b a" then pressing the
            // "b" key will trigger a "keypress" and a "keydown"
            //
            // the "keydown" is expected when there is a modifier, but the
            // "keypress" ends up matching the _nextExpectedAction since it occurs
            // after and that causes the sequence to reset
            //
            // we ignore keypresses in a sequence that directly follow a keydown
            // for the same character
            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                _resetSequences(doNotReset);
            }

            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
        };

        /**
         * handles a keydown event
         *
         * @param {Event} e
         * @returns void
         */
        function _handleKeyEvent(e) {

            // normalize e.which for key events
            // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
            if (typeof e.which !== 'number') {
                e.which = e.keyCode;
            }

            var character = _characterFromEvent(e);

            // no character found then stop
            if (!character) {
                return;
            }

            // need to use === for the character check because the character can be 0
            if (e.type == 'keyup' && _ignoreNextKeyup === character) {
                _ignoreNextKeyup = false;
                return;
            }

            self.handleKey(character, _eventModifiers(e), e);
        }

        /**
         * called to set a 1 second timeout on the specified sequence
         *
         * this is so after each key press in the sequence you have 1 second
         * to press the next key before you have to start over
         *
         * @returns void
         */
        function _resetSequenceTimer() {
            clearTimeout(_resetTimer);
            _resetTimer = setTimeout(_resetSequences, 1000);
        }

        /**
         * binds a key sequence to an event
         *
         * @param {string} combo - combo specified in bind call
         * @param {Array} keys
         * @param {Function} callback
         * @param {string=} action
         * @returns void
         */
        function _bindSequence(combo, keys, callback, action) {

            // start off by adding a sequence level record for this combination
            // and setting the level to 0
            _sequenceLevels[combo] = 0;

            /**
             * callback to increase the sequence level for this sequence and reset
             * all other sequences that were active
             *
             * @param {string} nextAction
             * @returns {Function}
             */
            function _increaseSequence(nextAction) {
                return function() {
                    _nextExpectedAction = nextAction;
                    ++_sequenceLevels[combo];
                    _resetSequenceTimer();
                };
            }

            /**
             * wraps the specified callback inside of another function in order
             * to reset all sequence counters as soon as this sequence is done
             *
             * @param {Event} e
             * @returns void
             */
            function _callbackAndReset(e) {
                _fireCallback(callback, e, combo);

                // we should ignore the next key up if the action is key down
                // or keypress.  this is so if you finish a sequence and
                // release the key the final key will not trigger a keyup
                if (action !== 'keyup') {
                    _ignoreNextKeyup = _characterFromEvent(e);
                }

                // weird race condition if a sequence ends with the key
                // another sequence begins with
                setTimeout(_resetSequences, 10);
            }

            // loop through keys one at a time and bind the appropriate callback
            // function.  for any key leading up to the final one it should
            // increase the sequence. after the final, it should reset all sequences
            //
            // if an action is specified in the original bind call then that will
            // be used throughout.  otherwise we will pass the action that the
            // next key in the sequence should match.  this allows a sequence
            // to mix and match keypress and keydown events depending on which
            // ones are better suited to the key provided
            for (var i = 0; i < keys.length; ++i) {
                var isFinal = i + 1 === keys.length;
                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                _bindSingle(keys[i], wrappedCallback, action, combo, i);
            }
        }

        /**
         * binds a single keyboard combination
         *
         * @param {string} combination
         * @param {Function} callback
         * @param {string=} action
         * @param {string=} sequenceName - name of sequence if part of sequence
         * @param {number=} level - what part of the sequence the command is
         * @returns void
         */
        function _bindSingle(combination, callback, action, sequenceName, level) {

            // store a direct mapped reference for use with Mousetrap.trigger
            self._directMap[combination + ':' + action] = callback;

            // make sure multiple spaces in a row become a single space
            combination = combination.replace(/\s+/g, ' ');

            var sequence = combination.split(' ');
            var info;

            // if this pattern is a sequence of keys then run through this method
            // to reprocess each pattern one key at a time
            if (sequence.length > 1) {
                _bindSequence(combination, sequence, callback, action);
                return;
            }

            info = _getKeyInfo(combination, action);

            // make sure to initialize array if this is the first time
            // a callback is added for this key
            self._callbacks[info.key] = self._callbacks[info.key] || [];

            // remove an existing match if there is one
            _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

            // add this call back to the array
            // if it is a sequence put it at the beginning
            // if not put it at the end
            //
            // this is important because the way these are processed expects
            // the sequence ones to come first
            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                callback: callback,
                modifiers: info.modifiers,
                action: info.action,
                seq: sequenceName,
                level: level,
                combo: combination
            });
        }

        /**
         * binds multiple combinations to the same callback
         *
         * @param {Array} combinations
         * @param {Function} callback
         * @param {string|undefined} action
         * @returns void
         */
        self._bindMultiple = function(combinations, callback, action) {
            for (var i = 0; i < combinations.length; ++i) {
                _bindSingle(combinations[i], callback, action);
            }
        };

        // start!
        _addEvent(targetElement, 'keypress', _handleKeyEvent);
        _addEvent(targetElement, 'keydown', _handleKeyEvent);
        _addEvent(targetElement, 'keyup', _handleKeyEvent);
    }

    /**
     * binds an event to mousetrap
     *
     * can be a single key, a combination of keys separated with +,
     * an array of keys, or a sequence of keys separated by spaces
     *
     * be sure to list the modifier keys first to make sure that the
     * correct key ends up getting bound (the last key in the pattern)
     *
     * @param {string|Array} keys
     * @param {Function} callback
     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
     * @returns void
     */
    Mousetrap.prototype.bind = function(keys, callback, action) {
        var self = this;
        keys = keys instanceof Array ? keys : [keys];
        self._bindMultiple.call(self, keys, callback, action);
        return self;
    };

    /**
     * unbinds an event to mousetrap
     *
     * the unbinding sets the callback function of the specified key combo
     * to an empty function and deletes the corresponding key in the
     * _directMap dict.
     *
     * TODO: actually remove this from the _callbacks dictionary instead
     * of binding an empty function
     *
     * the keycombo+action has to be exactly the same as
     * it was defined in the bind method
     *
     * @param {string|Array} keys
     * @param {string} action
     * @returns void
     */
    Mousetrap.prototype.unbind = function(keys, action) {
        var self = this;
        return self.bind.call(self, keys, function() {}, action);
    };

    /**
     * triggers an event that has already been bound
     *
     * @param {string} keys
     * @param {string=} action
     * @returns void
     */
    Mousetrap.prototype.trigger = function(keys, action) {
        var self = this;
        if (self._directMap[keys + ':' + action]) {
            self._directMap[keys + ':' + action]({}, keys);
        }
        return self;
    };

    /**
     * resets the library back to its initial state.  this is useful
     * if you want to clear out the current keyboard shortcuts and bind
     * new ones - for example if you switch to another page
     *
     * @returns void
     */
    Mousetrap.prototype.reset = function() {
        var self = this;
        self._callbacks = {};
        self._directMap = {};
        return self;
    };

    /**
     * should we stop this event before firing off callbacks
     *
     * @param {Event} e
     * @param {Element} element
     * @return {boolean}
     */
    Mousetrap.prototype.stopCallback = function(e, element) {
        var self = this;

        // if the element has the class "mousetrap" then no need to stop
        if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
            return false;
        }

        if (_belongsTo(element, self.target)) {
            return false;
        }

        // Events originating from a shadow DOM are re-targetted and `e.target` is the shadow host,
        // not the initial event target in the shadow tree. Note that not all events cross the
        // shadow boundary.
        // For shadow trees with `mode: 'open'`, the initial event target is the first element in
        // the event’s composed path. For shadow trees with `mode: 'closed'`, the initial event
        // target cannot be obtained.
        if ('composedPath' in e && typeof e.composedPath === 'function') {
            // For open shadow trees, update `element` so that the following check works.
            var initialEventTarget = e.composedPath()[0];
            if (initialEventTarget !== e.target) {
                element = initialEventTarget;
            }
        }

        // stop for input, select, and textarea
        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
    };

    /**
     * exposes _handleKey publicly so it can be overwritten by extensions
     */
    Mousetrap.prototype.handleKey = function() {
        var self = this;
        return self._handleKey.apply(self, arguments);
    };

    /**
     * allow custom key mappings
     */
    Mousetrap.addKeycodes = function(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                _MAP[key] = object[key];
            }
        }
        _REVERSE_MAP = null;
    };

    /**
     * Init the global mousetrap functions
     *
     * This method is needed to allow the global mousetrap functions to work
     * now that mousetrap is a constructor function.
     */
    Mousetrap.init = function() {
        var documentMousetrap = Mousetrap(document);
        for (var method in documentMousetrap) {
            if (method.charAt(0) !== '_') {
                Mousetrap[method] = (function(method) {
                    return function() {
                        return documentMousetrap[method].apply(documentMousetrap, arguments);
                    };
                } (method));
            }
        }
    };

    Mousetrap.init();

    // expose mousetrap to the global object
    window.Mousetrap = Mousetrap;

    // expose as a common js module
    if ( true && module.exports) {
        module.exports = Mousetrap;
    }

    // expose mousetrap as an AMD module
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return Mousetrap;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/portfolio/portfolio.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/portfolio/portfolio.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"min-height-100\">\r\n  <div class=\"container padding-t-150 padding-xl-tp-10\">\r\n\r\n    <div fxLayout=\"row\" class=\"margin-b-75\">\r\n      <app-banner data-aos=\"fade-right\" data-aos-once=\"true\" urlImage=\"./assets/img/banner-portfolio.jpg\" fxFlex=\"100\"></app-banner>\r\n    </div>\r\n\r\n    <content class=\"margin-t-50\" fxLayout=\"row wrap\" fxLayout.lt-md=\"column\" fxLayoutGap=\"auto\" fxLayoutGap.lt-md=\"120px\">\r\n      <div data-aos=\"fade-up\" data-aos-once=\"true\" class=\"margin-b-135 txt-center content-center\" *ngFor=\"let project of projects | reverse; let i = index;\"\r\n        fxFlex.lt-md=\"100\" fxFlex.gt-sm=\"40\">\r\n        <img (click)=\"setValuesModal(project.galerias);\" src=\"{{ project.galerias[0].url_galeria }}\" class=\"cursor-pointer img-responsive\" />\r\n        <label class=\"d-block margin-t-20\">Imagem (1 de {{project.galerias.length }})</label>\r\n        <a class=\"txt-decoration-none margin-t-5 d-block\" href=\"{{ project.url_site_projeto }}\" target=\"_blank\">{{project[\"url_site_projeto\"]\r\n          | www}}</a>\r\n      </div>\r\n      \r\n      <div class=\"margin-b-135 txt-center content-center\" fxFlex.lt-md=\"100\" fxFlex.gt-sm=\"40\" *ngIf=\"getLengthProject(projects) / 2 != 0\"></div>\r\n    </content>\r\n\r\n    <app-modal class=\"position-ab\"></app-modal>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/modal/modal.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/modal/modal.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ks-modal-gallery [id]=\"1\" [modalImages]=\"images\"></ks-modal-gallery>");

/***/ }),

/***/ "./src/app/page/portfolio/portfolio.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/page/portfolio/portfolio.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("content > div label {\n  color: #003e88; }\n\ncontent > div a {\n  color: #00accc; }\n\n@media only screen and (max-width: 500px) {\n    content > div a {\n      word-wrap: break-word;\n      width: 200px;\n      display: block;\n      margin-left: auto;\n      margin-right: auto; } }\n\n@media only screen and (max-width: 959px) {\n  content > div {\n    margin-bottom: 90px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9wb3J0Zm9saW8vQzpcXHJlcG9zaXRvcmlvc1xcY3JpYWRvcm5hd2ViLWNvbXBhbnktYW5ndWxhcjkvc3JjXFxhcHBcXHBhZ2VcXHBvcnRmb2xpb1xccG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlL3BvcnRmb2xpby9DOlxccmVwb3NpdG9yaW9zXFxjcmlhZG9ybmF3ZWItY29tcGFueS1hbmd1bGFyOS9zcmNcXGFzc2V0c1xcc2Nzc1xccGFsZXR0ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBSU0sY0NKZSxFQUFBOztBREFyQjtFQVNNLGNDUmUsRUFBQTs7QURVZjtJQVhOO01BWVEscUJBQXFCO01BQ3JCLFlBQVk7TUFDWixjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLGtCQUFrQixFQUFBLEVBRXJCOztBQUVEO0VBcEJKO0lBcUJNLDhCQUE4QixFQUFBLEVBRWpDIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9wYWxldHRlLnNjc3MnO1xyXG5cclxuY29udGVudCB7XHJcbiAgPmRpdiB7XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICBjb2xvcjogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICcxJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcblxyXG4gICAgICBjb2xvcjogcGFsZXR0ZS1jb2xvcigncHJpbWFyeScsICcyJyk7XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDkwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn0iLCIkcGFsZXR0ZS1jb2xvcnM6IChcclxuICAgICdwcmltYXJ5JyA6IChcclxuICAgICAgICAnMScgOiAjMDAzZTg4LFxyXG4gICAgICAgICcyJyA6ICMwMGFjY2MsXHJcbiAgICAgICAgJzMnIDogIzAwODBiMVxyXG4gICAgKSxcclxuICAgICdwcmltYXJ5LW9wYWNpdHknOiAoXHJcbiAgICAgICAgJzEnOiAjMDAyNzdhOGYsXHJcbiAgICAgICAgJzEuMSc6ICMwMDI3N2EzZCxcclxuICAgICAgICAnMicgOiAjMDA2Y2E1NjksXHJcbiAgICAgICAgJzMnIDogIzAwZDhlNzU0LFxyXG4gICAgICAgICc0JyA6ICM1YWM0ZDYsXHJcbiAgICAgICAgJzUnIDogIzAwM2Q4ODU0XHJcbiAgICApLFxyXG4gICAgJ3NlY29uZGFyeScgOiAoXHJcbiAgICAgICAgJzEnIDogIzAwMDAwMDI0LFxyXG4gICAgICAgICcyJyA6ICMwMDAwMDA2NyxcclxuICAgICksXHJcbiAgICAndGVydGlhcnknIDogKFxyXG4gICAgICAgICcxJyA6ICNGRkYsXHJcbiAgICAgICAgJzInIDogIzAwMFxyXG4gICAgKSxcclxuICAgICdmb3VydGgnIDogKFxyXG4gICAgICAgICcxJyA6ICM0YWM5NTksXHJcbiAgICAgICAgJzInIDogIzA3NWU1NVxyXG4gICAgKVxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIHBhbGV0dGUtY29sb3IoJHR5cGUsICRjb2xvcikge1xyXG4gIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRwYWxldHRlLWNvbG9ycywgJHR5cGUpLCAkY29sb3IpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/page/portfolio/portfolio.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/page/portfolio/portfolio.component.ts ***!
  \*******************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio.service */ "./src/app/page/portfolio/portfolio.service.ts");
/* harmony import */ var src_app_shared_component_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/modal/modal.component */ "./src/app/shared/component/modal/modal.component.ts");
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ "./node_modules/@ks89/angular-modal-gallery/__ivy_ngcc__/fesm5/ks89-angular-modal-gallery.js");





var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(portfolioService) {
        this.portfolioService = portfolioService;
        this.projects = [];
        this.galleries = [];
        this.projectData();
    }
    PortfolioComponent.prototype.ngOnDestroy = function () {
        this.projectData().unsubscribe();
    };
    PortfolioComponent.prototype.setValuesModal = function (galleries) {
        var _this = this;
        this.galleries = galleries;
        this.modal.images = [];
        setTimeout(function () {
            var i = 0;
            _this.galleries.map(function (gallery) {
                _this.modal.images[i] = new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_4__["Image"](Number(i), { img: _this.galleries[i].url_galeria });
                i++;
            });
            _this.modal.imagesHtmlDescriptions = _this.modal.images;
            _this.modal.imagesRect = _this.modal.images;
            _this.modal.imagesMixedSizes = _this.modal.images;
            _this.modal.openModalViaService(1, 0);
        }, 500);
    };
    PortfolioComponent.prototype.projectData = function () {
        var _this = this;
        return this.portfolioService.getProjects().subscribe(function (result) {
            _this.projects = result;
        });
    };
    PortfolioComponent.prototype.getLengthProject = function (portfolio) {
        return portfolio.length;
    };
    PortfolioComponent.ctorParameters = function () { return [
        { type: _portfolio_service__WEBPACK_IMPORTED_MODULE_2__["PortfolioService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_component_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"])
    ], PortfolioComponent.prototype, "modal", void 0);
    PortfolioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./portfolio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/portfolio/portfolio.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/page/portfolio/portfolio.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_portfolio_service__WEBPACK_IMPORTED_MODULE_2__["PortfolioService"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/page/portfolio/portfolio.module.ts":
/*!****************************************************!*\
  !*** ./src/app/page/portfolio/portfolio.module.ts ***!
  \****************************************************/
/*! exports provided: PortfolioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioModule", function() { return PortfolioModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio.component */ "./src/app/page/portfolio/portfolio.component.ts");
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ "./node_modules/@ks89/angular-modal-gallery/__ivy_ngcc__/fesm5/ks89-angular-modal-gallery.js");
/* harmony import */ var src_app_shared_component_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/modal/modal.component */ "./src/app/shared/component/modal/modal.component.ts");
/* harmony import */ var src_app_shared_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/pipe/pipe.module */ "./src/app/shared/pipe/pipe.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio.service */ "./src/app/page/portfolio/portfolio.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_app_shared_component_triangles_triangles_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/triangles/triangles.module */ "./src/app/shared/component/triangles/triangles.module.ts");
/* harmony import */ var src_app_shared_component_banner_banner_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/banner/banner.module */ "./src/app/shared/component/banner/banner.module.ts");













var portfolioRoute = [
    { path: '', component: _portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"] }
];
var PortfolioModule = /** @class */ (function () {
    function PortfolioModule() {
    }
    PortfolioModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _portfolio_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioComponent"],
                src_app_shared_component_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_shared_pipe_pipe_module__WEBPACK_IMPORTED_MODULE_6__["PipeModule"],
                _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_4__["GalleryModule"].forRoot(),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(portfolioRoute),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                src_app_shared_component_triangles_triangles_module__WEBPACK_IMPORTED_MODULE_11__["TrianglesModule"],
                src_app_shared_component_banner_banner_module__WEBPACK_IMPORTED_MODULE_12__["BannerModule"]
            ],
            providers: [
                _portfolio_service__WEBPACK_IMPORTED_MODULE_8__["PortfolioService"]
            ]
        })
    ], PortfolioModule);
    return PortfolioModule;
}());



/***/ }),

/***/ "./src/app/page/portfolio/portfolio.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/page/portfolio/portfolio.service.ts ***!
  \*****************************************************/
/*! exports provided: PortfolioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioService", function() { return PortfolioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var PortfolioService = /** @class */ (function () {
    function PortfolioService(http) {
        this.http = http;
    }
    PortfolioService.prototype.getProjects = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiPortfolio, { headers: headers });
    };
    PortfolioService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PortfolioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PortfolioService);
    return PortfolioService;
}());



/***/ }),

/***/ "./src/app/shared/component/modal/modal.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/component/modal/modal.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/component/modal/modal.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/component/modal/modal.component.ts ***!
  \***********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ "./node_modules/@ks89/angular-modal-gallery/__ivy_ngcc__/fesm5/ks89-angular-modal-gallery.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");




var ModalComponent = /** @class */ (function () {
    function ModalComponent(galleryService) {
        this.galleryService = galleryService;
        this.images = [
            new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Image"](0, {
                img: ''
            })
        ];
        this.imagesHtmlDescriptions = this.images;
        this.imagesRect = this.images;
        this.imagesMixedSizes = this.images;
        this.customPlainGalleryRowConfig = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["PlainGalleryStrategy"].CUSTOM,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["AdvancedLayout"](-1, true)
        };
        this.customPlainGalleryColumnConfig = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["PlainGalleryStrategy"].CUSTOM,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["AdvancedLayout"](-1, true)
        };
        this.customPlainGalleryRowDescConfig = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["PlainGalleryStrategy"].CUSTOM,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["AdvancedLayout"](-1, true)
        };
        this.plainGalleryRow = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["PlainGalleryStrategy"].ROW,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["LineLayout"]({ width: '100%', height: 'auto' }, { length: 0, wrap: true }, 'flex-start')
        };
        this.plainGalleryRowSpaceAround = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["PlainGalleryStrategy"].ROW,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["LineLayout"]({ width: '50px', height: '50px' }, { length: 2, wrap: true }, 'space-around')
        };
        this.plainGalleryRowATags = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["PlainGalleryStrategy"].ROW,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["LineLayout"]({ width: '95px', height: '63px' }, { length: 4, wrap: true }, 'flex-start'),
            advanced: { aTags: true, additionalBackground: '50% 50%/cover' }
        };
        this.plainGalleryColumn = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["PlainGalleryStrategy"].COLUMN,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["LineLayout"]({ width: '50px', height: '50px' }, { length: 3, wrap: true }, 'flex-start')
        };
        this.plainGalleryGrid = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["PlainGalleryStrategy"].GRID,
            layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["GridLayout"]({ width: '80px', height: '80px' }, { length: 3, wrap: true })
        };
        this.singleImage = [this.images[0]];
        this.dotsConfig = {
            visible: false
        };
        this.customDescription = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["DescriptionStrategy"].ALWAYS_VISIBLE,
            imageText: 'Look this image ',
            numberSeparator: ' of ',
            beforeTextDescription: ' => '
        };
        this.customDescriptionStyle = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["DescriptionStrategy"].ALWAYS_VISIBLE,
            imageText: 'Look this image ',
            numberSeparator: ' of ',
            beforeTextDescription: ' => ',
            style: {
                bgColor: 'rgba(255,0,0,.5)',
                textColor: 'blue',
                marginTop: '3px',
                marginBottom: '0px',
                marginLeft: '5px',
                marginRight: '5px',
                position: 'absolute',
                top: '0px',
                height: '25px'
            }
        };
        this.customDescriptionHideIfEmpty = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["DescriptionStrategy"].HIDE_IF_EMPTY,
            imageText: 'Look this image ',
            numberSeparator: ' of ',
            beforeTextDescription: ' => '
        };
        this.customFullDescription = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["DescriptionStrategy"].ALWAYS_VISIBLE,
            customFullDescription: 'Custom description of the current visible image'
        };
        this.customFullDescriptionHidden = {
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["DescriptionStrategy"].ALWAYS_HIDDEN,
            customFullDescription: 'Custom description of the current visible image'
        };
        this.buttonsConfigDefault = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonsStrategy"].DEFAULT
        };
        this.buttonsConfigSimple = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonsStrategy"].SIMPLE
        };
        this.buttonsConfigAdvanced = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonsStrategy"].ADVANCED
        };
        this.buttonsConfigFull = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonsStrategy"].FULL
        };
        this.customButtonsConfigExtUrlNewTab = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonsStrategy"].CUSTOM,
            buttons: [
                {
                    className: 'ext-url-image',
                    type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonType"].EXTURL,
                    extUrlInNewTab: true
                },
                {
                    className: 'download-image',
                    type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonType"].DOWNLOAD
                },
                {
                    className: 'close-image',
                    type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonType"].CLOSE
                }
            ]
        };
        this.customButtonsFontAwesomeConfig = {
            visible: true,
            strategy: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonsStrategy"].CUSTOM,
            buttons: [
                {
                    className: 'fas fa-plus white',
                    type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonType"].CUSTOM,
                    ariaLabel: 'custom plus aria label',
                    title: 'custom plus title',
                    fontSize: '20px'
                },
                {
                    className: 'fas fa-times white',
                    type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonType"].CLOSE,
                    ariaLabel: 'custom close aria label',
                    title: 'custom close title',
                    fontSize: '20px'
                },
                {
                    className: 'fas fa-download white',
                    type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonType"].DOWNLOAD,
                    ariaLabel: 'custom download aria label',
                    title: 'custom download title',
                    fontSize: '20px'
                },
                {
                    className: 'fas fa-external-link-alt white',
                    type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonType"].EXTURL,
                    ariaLabel: 'custom exturl aria label',
                    title: 'custom exturl title',
                    fontSize: '20px'
                }
            ]
        };
        this.previewConfigOneImage = {
            visible: true,
            number: 1
        };
        this.previewConfigNoArrows = {
            visible: true,
            arrows: false
        };
        this.previewConfigNoClickable = {
            visible: true,
            clickable: false
        };
        this.previewConfigAlwaysCenter = {
            visible: true
        };
        this.previewConfigCustomSize = {
            visible: true,
            size: { width: '30px', height: '30px' }
        };
        this.accessibilityConfig = {
            backgroundAriaLabel: 'CUSTOM Modal gallery full screen background',
            backgroundTitle: 'CUSTOM background title',
            plainGalleryContentAriaLabel: 'CUSTOM Plain gallery content',
            plainGalleryContentTitle: 'CUSTOM plain gallery content title',
            modalGalleryContentAriaLabel: 'CUSTOM Modal gallery content',
            modalGalleryContentTitle: 'CUSTOM modal gallery content title',
            loadingSpinnerAriaLabel: 'CUSTOM The current image is loading. Please be patient.',
            loadingSpinnerTitle: 'CUSTOM The current image is loading. Please be patient.',
            mainContainerAriaLabel: 'CUSTOM Current image and navigation',
            mainContainerTitle: 'CUSTOM main container title',
            mainPrevImageAriaLabel: 'CUSTOM Previous image',
            mainPrevImageTitle: 'CUSTOM Previous image',
            mainNextImageAriaLabel: 'CUSTOM Next image',
            mainNextImageTitle: 'CUSTOM Next image',
            dotsContainerAriaLabel: 'CUSTOM Image navigation dots',
            dotsContainerTitle: 'CUSTOM dots container title',
            dotAriaLabel: 'CUSTOM Navigate to image number',
            previewsContainerAriaLabel: 'CUSTOM Image previews',
            previewsContainerTitle: 'CUSTOM previews title',
            previewScrollPrevAriaLabel: 'CUSTOM Scroll previous previews',
            previewScrollPrevTitle: 'CUSTOM Scroll previous previews',
            previewScrollNextAriaLabel: 'CUSTOM Scroll next previews',
            previewScrollNextTitle: 'CUSTOM Scroll next previews',
            carouselContainerAriaLabel: 'Current image and navigation',
            carouselContainerTitle: '',
            carouselPrevImageAriaLabel: 'Previous image',
            carouselPrevImageTitle: 'Previous image',
            carouselNextImageAriaLabel: 'Next image',
            carouselNextImageTitle: 'Next image',
            carouselPreviewsContainerAriaLabel: 'Image previews',
            carouselPreviewsContainerTitle: '',
            carouselPreviewScrollPrevAriaLabel: 'Scroll previous previews',
            carouselPreviewScrollPrevTitle: 'Scroll previous previews',
            carouselPreviewScrollNextAriaLabel: 'Scroll next previews',
            carouselPreviewScrollNextTitle: 'Scroll next previews'
        };
        this.name = "" + _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.openImageModalRow = function (image) {
        var index = this.getCurrentIndexCustomLayout(image, this.images);
        this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, { layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["AdvancedLayout"](index, true) });
    };
    ModalComponent.prototype.openImageModalColumn = function (image) {
        var index = this.getCurrentIndexCustomLayout(image, this.images);
        this.customPlainGalleryColumnConfig = Object.assign({}, this.customPlainGalleryColumnConfig, { layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["AdvancedLayout"](index, true) });
    };
    ModalComponent.prototype.openImageModalRowDescription = function (image) {
        var index = this.getCurrentIndexCustomLayout(image, this.imagesRect);
        this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["AdvancedLayout"](index, true) });
    };
    ModalComponent.prototype.onButtonBeforeHook = function (event) {
        if (!event || !event.button) {
            return;
        }
        if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonType"].DELETE) {
            this.images = this.images.filter(function (val) { return event.image && val.id !== event.image.id; });
        }
    };
    ModalComponent.prototype.onButtonAfterHook = function (event) {
        if (!event || !event.button) {
            return;
        }
    };
    ModalComponent.prototype.onCustomButtonBeforeHook = function (event, galleryId) {
        var _this = this;
        if (!event || !event.button) {
            return;
        }
        if (event.button.type === _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["ButtonType"].CUSTOM) {
            this.addRandomImage();
            setTimeout(function () {
                _this.galleryService.openGallery(galleryId, _this.images.length - 1);
            }, 0);
        }
    };
    ModalComponent.prototype.onCustomButtonAfterHook = function (event, galleryId) {
        if (!event || !event.button) {
            return;
        }
    };
    ModalComponent.prototype.onCloseImageModal = function (event) {
        this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, { layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["AdvancedLayout"](-1, true) });
        this.customPlainGalleryColumnConfig = Object.assign({}, this.customPlainGalleryColumnConfig, { layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["AdvancedLayout"](-1, true) });
        this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["AdvancedLayout"](-1, true) });
    };
    ModalComponent.prototype.onShowAutoCloseExample = function (event, galleryId) {
        var _this = this;
        setTimeout(function () {
            _this.galleryService.closeGallery(galleryId);
        }, 3000);
    };
    ModalComponent.prototype.addRandomImage = function () {
        var imageToCopy = this.images[Math.floor(Math.random() * this.images.length)];
        var newImage = new _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["Image"](this.images.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
        this.images = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.images, [newImage]);
    };
    ModalComponent.prototype.openModalViaService = function (id, index) {
        this.galleryService.openGallery(id, index);
    };
    ModalComponent.prototype.trackById = function (index, item) {
        return item.id;
    };
    ModalComponent.prototype.getCurrentIndexCustomLayout = function (image, images) {
        return image ? images.indexOf(image) : -1;
    };
    ModalComponent.ctorParameters = function () { return [
        { type: _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["GalleryService"] }
    ]; };
    ModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/component/modal/modal.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modal.component.scss */ "./src/app/shared/component/modal/modal.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_2__["GalleryService"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipe/pipe.module.ts":
/*!********************************************!*\
  !*** ./src/app/shared/pipe/pipe.module.ts ***!
  \********************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _text_capitalize_text_capitalize_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-capitalize/text-capitalize.pipe */ "./src/app/shared/pipe/text-capitalize/text-capitalize.pipe.ts");
/* harmony import */ var _reverse_reverse_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reverse/reverse.pipe */ "./src/app/shared/pipe/reverse/reverse.pipe.ts");
/* harmony import */ var _www_www_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./www/www.pipe */ "./src/app/shared/pipe/www/www.pipe.ts");






var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule_1 = PipeModule;
    PipeModule.forRoot = function () {
        return {
            ngModule: PipeModule_1,
            providers: [],
        };
    };
    var PipeModule_1;
    PipeModule = PipeModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _text_capitalize_text_capitalize_pipe__WEBPACK_IMPORTED_MODULE_3__["TextCapitalizePipe"],
                _reverse_reverse_pipe__WEBPACK_IMPORTED_MODULE_4__["ReversePipe"],
                _www_www_pipe__WEBPACK_IMPORTED_MODULE_5__["WwwPipe"],
            ],
            exports: [
                _text_capitalize_text_capitalize_pipe__WEBPACK_IMPORTED_MODULE_3__["TextCapitalizePipe"],
                _reverse_reverse_pipe__WEBPACK_IMPORTED_MODULE_4__["ReversePipe"],
                _www_www_pipe__WEBPACK_IMPORTED_MODULE_5__["WwwPipe"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], PipeModule);
    return PipeModule;
}());



/***/ }),

/***/ "./src/app/shared/pipe/reverse/reverse.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/pipe/reverse/reverse.pipe.ts ***!
  \*****************************************************/
/*! exports provided: ReversePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ReversePipe = /** @class */ (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (value) {
        if (value) {
            return value.reverse();
        }
    };
    ReversePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'reverse'
        })
    ], ReversePipe);
    return ReversePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipe/text-capitalize/text-capitalize.pipe.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/pipe/text-capitalize/text-capitalize.pipe.ts ***!
  \*********************************************************************/
/*! exports provided: TextCapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextCapitalizePipe", function() { return TextCapitalizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var TextCapitalizePipe = /** @class */ (function () {
    function TextCapitalizePipe() {
    }
    TextCapitalizePipe.prototype.transform = function (input) {
        return input.length === 0 ? '' : input.charAt(0).toUpperCase() + input.slice(1);
    };
    TextCapitalizePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'textCapitalize'
        })
    ], TextCapitalizePipe);
    return TextCapitalizePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipe/www/www.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipe/www/www.pipe.ts ***!
  \*********************************************/
/*! exports provided: WwwPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WwwPipe", function() { return WwwPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var WwwPipe = /** @class */ (function () {
    function WwwPipe() {
    }
    WwwPipe.prototype.transform = function (value) {
        if (value.indexOf("http://") != -1) {
            return value.replace("http://", "www.");
        }
        return value.replace("https://", "www.");
    };
    WwwPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'www'
        })
    ], WwwPipe);
    return WwwPipe;
}());



/***/ })

}]);
//# sourceMappingURL=page-portfolio-portfolio-module.js.map