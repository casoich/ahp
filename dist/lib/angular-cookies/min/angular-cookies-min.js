!function(){/**
 * @license AngularJS v1.2.26
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
!function(o,n,i){"use strict";n.module("ngCookies",["ng"]).factory("$cookies",["$rootScope","$browser",function(o,e){function t(){var o,t,f,u;for(o in c)a(r[o])&&e.cookies(o,i);for(o in r)t=r[o],n.isString(t)||(t=""+t,r[o]=t),t!==c[o]&&(e.cookies(o,t),u=!0);if(u){u=!1,f=e.cookies();for(o in r)r[o]!==f[o]&&(a(f[o])?delete r[o]:r[o]=f[o],u=!0)}}var r={},c={},f,u=!1,s=n.copy,a=n.isUndefined;return e.addPollFn(function(){var n=e.cookies();f!=n&&(f=n,s(n,c),s(n,r),u&&o.$apply())})(),u=!0,o.$watch(t),r}]).factory("$cookieStore",["$cookies",function(o){return{get:function(i){var e=o[i];return e?n.fromJson(e):e},put:function(i,e){o[i]=n.toJson(e)},remove:function(n){delete o[n]}}}])}(window,window.angular)}();