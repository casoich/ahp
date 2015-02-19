(function(){ 
angular.module('Dashboard', ['ui.bootstrap', 'ui.router', 'ngCookies']);
'use strict';

/**
 * Route configuration for the Dashboard module.
 */
angular.module('Dashboard').config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {

    // For unmatched routes
    $urlRouterProvider.otherwise('/');

    // Application routes
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'panes/home.html'
        })
        .state('tables', {
            url: '/tables', 
            templateUrl: 'tables.html'
        });
}]);

/*!
 * Jasny Bootstrap v3.1.3 (http://jasny.github.io/bootstrap)
 * Copyright 2012-2014 Arnold Daniels
 * Licensed under Apache-2.0 (https://github.com/jasny/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Jasny Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}void 0===a.support.transition&&(a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()}))}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.state=null,this.placement=null,this.options.recalc&&(this.calcClone(),a(window).on("resize",a.proxy(this.recalc,this))),this.options.autohide&&a(document).on("click",a.proxy(this.autohide,this)),this.options.toggle&&this.toggle(),this.options.disablescrolling&&(this.options.disableScrolling=this.options.disablescrolling,delete this.options.disablescrolling)};b.DEFAULTS={toggle:!0,placement:"auto",autohide:!0,recalc:!0,disableScrolling:!0},b.prototype.offset=function(){switch(this.placement){case"left":case"right":return this.$element.outerWidth();case"top":case"bottom":return this.$element.outerHeight()}},b.prototype.calcPlacement=function(){function b(a,b){if("auto"===e.css(b))return a;if("auto"===e.css(a))return b;var c=parseInt(e.css(a),10),d=parseInt(e.css(b),10);return c>d?b:a}if("auto"!==this.options.placement)return void(this.placement=this.options.placement);this.$element.hasClass("in")||this.$element.css("visiblity","hidden !important").addClass("in");var c=a(window).width()/this.$element.width(),d=a(window).height()/this.$element.height(),e=this.$element;this.placement=c>=d?b("left","right"):b("top","bottom"),"hidden !important"===this.$element.css("visibility")&&this.$element.removeClass("in").css("visiblity","")},b.prototype.opposite=function(a){switch(a){case"top":return"bottom";case"left":return"right";case"bottom":return"top";case"right":return"left"}},b.prototype.getCanvasElements=function(){var b=this.options.canvas?a(this.options.canvas):this.$element,c=b.find("*").filter(function(){return"fixed"===a(this).css("position")}).not(this.options.exclude);return b.add(c)},b.prototype.slide=function(b,c,d){if(!a.support.transition){var e={};return e[this.placement]="+="+c,b.animate(e,350,d)}var f=this.placement,g=this.opposite(f);b.each(function(){"auto"!==a(this).css(f)&&a(this).css(f,(parseInt(a(this).css(f),10)||0)+c),"auto"!==a(this).css(g)&&a(this).css(g,(parseInt(a(this).css(g),10)||0)-c)}),this.$element.one(a.support.transition.end,d).emulateTransitionEnd(350)},b.prototype.disableScrolling=function(){var b=a("body").width(),c="padding-"+this.opposite(this.placement);if(void 0===a("body").data("offcanvas-style")&&a("body").data("offcanvas-style",a("body").attr("style")||""),a("body").css("overflow","hidden"),a("body").width()>b){var d=parseInt(a("body").css(c),10)+a("body").width()-b;setTimeout(function(){a("body").css(c,d)},1)}},b.prototype.show=function(){if(!this.state){var b=a.Event("show.bs.offcanvas");if(this.$element.trigger(b),!b.isDefaultPrevented()){this.state="slide-in",this.calcPlacement();var c=this.getCanvasElements(),d=this.placement,e=this.opposite(d),f=this.offset();-1!==c.index(this.$element)&&(a(this.$element).data("offcanvas-style",a(this.$element).attr("style")||""),this.$element.css(d,-1*f),this.$element.css(d)),c.addClass("canvas-sliding").each(function(){void 0===a(this).data("offcanvas-style")&&a(this).data("offcanvas-style",a(this).attr("style")||""),"static"===a(this).css("position")&&a(this).css("position","relative"),"auto"!==a(this).css(d)&&"0px"!==a(this).css(d)||"auto"!==a(this).css(e)&&"0px"!==a(this).css(e)||a(this).css(d,0)}),this.options.disableScrolling&&this.disableScrolling();var g=function(){"slide-in"==this.state&&(this.state="slid",c.removeClass("canvas-sliding").addClass("canvas-slid"),this.$element.trigger("shown.bs.offcanvas"))};setTimeout(a.proxy(function(){this.$element.addClass("in"),this.slide(c,f,a.proxy(g,this))},this),1)}}},b.prototype.hide=function(){if("slid"===this.state){var b=a.Event("hide.bs.offcanvas");if(this.$element.trigger(b),!b.isDefaultPrevented()){this.state="slide-out";var c=a(".canvas-slid"),d=(this.placement,-1*this.offset()),e=function(){"slide-out"==this.state&&(this.state=null,this.placement=null,this.$element.removeClass("in"),c.removeClass("canvas-sliding"),c.add(this.$element).add("body").each(function(){a(this).attr("style",a(this).data("offcanvas-style")).removeData("offcanvas-style")}),this.$element.trigger("hidden.bs.offcanvas"))};c.removeClass("canvas-slid").addClass("canvas-sliding"),setTimeout(a.proxy(function(){this.slide(c,d,a.proxy(e,this))},this),1)}}},b.prototype.toggle=function(){"slide-in"!==this.state&&"slide-out"!==this.state&&this["slid"===this.state?"hide":"show"]()},b.prototype.calcClone=function(){this.$calcClone=this.$element.clone().html("").addClass("offcanvas-clone").removeClass("in").appendTo(a("body"))},b.prototype.recalc=function(){if("none"!==this.$calcClone.css("display")&&("slid"===this.state||"slide-in"===this.state)){this.state=null,this.placement=null;var b=this.getCanvasElements();this.$element.removeClass("in"),b.removeClass("canvas-slid"),b.add(this.$element).add("body").each(function(){a(this).attr("style",a(this).data("offcanvas-style")).removeData("offcanvas-style")})}},b.prototype.autohide=function(b){0===a(b.target).closest(this.$element).length&&this.hide()};var c=a.fn.offcanvas;a.fn.offcanvas=function(c){return this.each(function(){var d=a(this),e=d.data("bs.offcanvas"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.offcanvas",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.offcanvas.Constructor=b,a.fn.offcanvas.noConflict=function(){return a.fn.offcanvas=c,this},a(document).on("click.bs.offcanvas.data-api","[data-toggle=offcanvas]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.offcanvas"),h=g?"toggle":d.data();b.stopPropagation(),g?g.toggle():f.offcanvas(h)})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.$element.on("click.bs.rowlink","td:not(.rowlink-skip)",a.proxy(this.click,this))};b.DEFAULTS={target:"a"},b.prototype.click=function(b){var c=a(b.currentTarget).closest("tr").find(this.options.target)[0];if(a(b.target)[0]!==c)if(b.preventDefault(),c.click)c.click();else if(document.createEvent){var d=document.createEvent("MouseEvents");d.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),c.dispatchEvent(d)}};var c=a.fn.rowlink;a.fn.rowlink=function(c){return this.each(function(){var d=a(this),e=d.data("bs.rowlink");e||d.data("bs.rowlink",e=new b(this,c))})},a.fn.rowlink.Constructor=b,a.fn.rowlink.noConflict=function(){return a.fn.rowlink=c,this},a(document).on("click.bs.rowlink.data-api",'[data-link="row"]',function(b){if(0===a(b.target).closest(".rowlink-skip").length){var c=a(this);c.data("bs.rowlink")||(c.rowlink(c.data()),a(b.target).trigger("click.bs.rowlink"))}})}(window.jQuery),+function(a){"use strict";var b=void 0!==window.orientation,c=navigator.userAgent.toLowerCase().indexOf("android")>-1,d="Microsoft Internet Explorer"==window.navigator.appName,e=function(b,d){c||(this.$element=a(b),this.options=a.extend({},e.DEFAULTS,d),this.mask=String(this.options.mask),this.init(),this.listen(),this.checkVal())};e.DEFAULTS={mask:"",placeholder:"_",definitions:{9:"[0-9]",a:"[A-Za-z]",w:"[A-Za-z0-9]","*":"."}},e.prototype.init=function(){var b=this.options.definitions,c=this.mask.length;this.tests=[],this.partialPosition=this.mask.length,this.firstNonMaskPos=null,a.each(this.mask.split(""),a.proxy(function(a,d){"?"==d?(c--,this.partialPosition=a):b[d]?(this.tests.push(new RegExp(b[d])),null===this.firstNonMaskPos&&(this.firstNonMaskPos=this.tests.length-1)):this.tests.push(null)},this)),this.buffer=a.map(this.mask.split(""),a.proxy(function(a){return"?"!=a?b[a]?this.options.placeholder:a:void 0},this)),this.focusText=this.$element.val(),this.$element.data("rawMaskFn",a.proxy(function(){return a.map(this.buffer,function(a,b){return this.tests[b]&&a!=this.options.placeholder?a:null}).join("")},this))},e.prototype.listen=function(){if(!this.$element.attr("readonly")){var b=(d?"paste":"input")+".mask";this.$element.on("unmask.bs.inputmask",a.proxy(this.unmask,this)).on("focus.bs.inputmask",a.proxy(this.focusEvent,this)).on("blur.bs.inputmask",a.proxy(this.blurEvent,this)).on("keydown.bs.inputmask",a.proxy(this.keydownEvent,this)).on("keypress.bs.inputmask",a.proxy(this.keypressEvent,this)).on(b,a.proxy(this.pasteEvent,this))}},e.prototype.caret=function(a,b){if(0!==this.$element.length){if("number"==typeof a)return b="number"==typeof b?b:a,this.$element.each(function(){if(this.setSelectionRange)this.setSelectionRange(a,b);else if(this.createTextRange){var c=this.createTextRange();c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select()}});if(this.$element[0].setSelectionRange)a=this.$element[0].selectionStart,b=this.$element[0].selectionEnd;else if(document.selection&&document.selection.createRange){var c=document.selection.createRange();a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length}return{begin:a,end:b}}},e.prototype.seekNext=function(a){for(var b=this.mask.length;++a<=b&&!this.tests[a];);return a},e.prototype.seekPrev=function(a){for(;--a>=0&&!this.tests[a];);return a},e.prototype.shiftL=function(a,b){var c=this.mask.length;if(!(0>a)){for(var d=a,e=this.seekNext(b);c>d;d++)if(this.tests[d]){if(!(c>e&&this.tests[d].test(this.buffer[e])))break;this.buffer[d]=this.buffer[e],this.buffer[e]=this.options.placeholder,e=this.seekNext(e)}this.writeBuffer(),this.caret(Math.max(this.firstNonMaskPos,a))}},e.prototype.shiftR=function(a){for(var b=this.mask.length,c=a,d=this.options.placeholder;b>c;c++)if(this.tests[c]){var e=this.seekNext(c),f=this.buffer[c];if(this.buffer[c]=d,!(b>e&&this.tests[e].test(f)))break;d=f}},e.prototype.unmask=function(){this.$element.unbind(".mask").removeData("inputmask")},e.prototype.focusEvent=function(){this.focusText=this.$element.val();var a=this.mask.length,b=this.checkVal();this.writeBuffer();var c=this,d=function(){b==a?c.caret(0,b):c.caret(b)};d(),setTimeout(d,50)},e.prototype.blurEvent=function(){this.checkVal(),this.$element.val()!==this.focusText&&this.$element.trigger("change")},e.prototype.keydownEvent=function(a){var c=a.which;if(8==c||46==c||b&&127==c){var d=this.caret(),e=d.begin,f=d.end;return f-e===0&&(e=46!=c?this.seekPrev(e):f=this.seekNext(e-1),f=46==c?this.seekNext(f):f),this.clearBuffer(e,f),this.shiftL(e,f-1),!1}return 27==c?(this.$element.val(this.focusText),this.caret(0,this.checkVal()),!1):void 0},e.prototype.keypressEvent=function(a){var b=this.mask.length,c=a.which,d=this.caret();if(a.ctrlKey||a.altKey||a.metaKey||32>c)return!0;if(c){d.end-d.begin!==0&&(this.clearBuffer(d.begin,d.end),this.shiftL(d.begin,d.end-1));var e=this.seekNext(d.begin-1);if(b>e){var f=String.fromCharCode(c);if(this.tests[e].test(f)){this.shiftR(e),this.buffer[e]=f,this.writeBuffer();var g=this.seekNext(e);this.caret(g)}}return!1}},e.prototype.pasteEvent=function(){var a=this;setTimeout(function(){a.caret(a.checkVal(!0))},0)},e.prototype.clearBuffer=function(a,b){for(var c=this.mask.length,d=a;b>d&&c>d;d++)this.tests[d]&&(this.buffer[d]=this.options.placeholder)},e.prototype.writeBuffer=function(){return this.$element.val(this.buffer.join("")).val()},e.prototype.checkVal=function(a){for(var b=this.mask.length,c=this.$element.val(),d=-1,e=0,f=0;b>e;e++)if(this.tests[e]){for(this.buffer[e]=this.options.placeholder;f++<c.length;){var g=c.charAt(f-1);if(this.tests[e].test(g)){this.buffer[e]=g,d=e;break}}if(f>c.length)break}else this.buffer[e]==c.charAt(f)&&e!=this.partialPosition&&(f++,d=e);return!a&&d+1<this.partialPosition?(this.$element.val(""),this.clearBuffer(0,b)):(a||d+1>=this.partialPosition)&&(this.writeBuffer(),a||this.$element.val(this.$element.val().substring(0,d+1))),this.partialPosition?e:this.firstNonMaskPos};var f=a.fn.inputmask;a.fn.inputmask=function(b){return this.each(function(){var c=a(this),d=c.data("bs.inputmask");d||c.data("bs.inputmask",d=new e(this,b))})},a.fn.inputmask.Constructor=e,a.fn.inputmask.noConflict=function(){return a.fn.inputmask=f,this},a(document).on("focus.bs.inputmask.data-api","[data-mask]",function(){var b=a(this);b.data("bs.inputmask")||b.inputmask(b.data())})}(window.jQuery),+function(a){"use strict";var b="Microsoft Internet Explorer"==window.navigator.appName,c=function(b,c){if(this.$element=a(b),this.$input=this.$element.find(":file"),0!==this.$input.length){this.name=this.$input.attr("name")||c.name,this.$hidden=this.$element.find('input[type=hidden][name="'+this.name+'"]'),0===this.$hidden.length&&(this.$hidden=a('<input type="hidden">').insertBefore(this.$input)),this.$preview=this.$element.find(".fileinput-preview");var d=this.$preview.css("height");"inline"!==this.$preview.css("display")&&"0px"!==d&&"none"!==d&&this.$preview.css("line-height",d),this.original={exists:this.$element.hasClass("fileinput-exists"),preview:this.$preview.html(),hiddenVal:this.$hidden.val()},this.listen()}};c.prototype.listen=function(){this.$input.on("change.bs.fileinput",a.proxy(this.change,this)),a(this.$input[0].form).on("reset.bs.fileinput",a.proxy(this.reset,this)),this.$element.find('[data-trigger="fileinput"]').on("click.bs.fileinput",a.proxy(this.trigger,this)),this.$element.find('[data-dismiss="fileinput"]').on("click.bs.fileinput",a.proxy(this.clear,this))},c.prototype.change=function(b){var c=void 0===b.target.files?b.target&&b.target.value?[{name:b.target.value.replace(/^.+\\/,"")}]:[]:b.target.files;if(b.stopPropagation(),0===c.length)return void this.clear();this.$hidden.val(""),this.$hidden.attr("name",""),this.$input.attr("name",this.name);var d=c[0];if(this.$preview.length>0&&("undefined"!=typeof d.type?d.type.match(/^image\/(gif|png|jpeg)$/):d.name.match(/\.(gif|png|jpe?g)$/i))&&"undefined"!=typeof FileReader){var e=new FileReader,f=this.$preview,g=this.$element;e.onload=function(b){var e=a("<img>");e[0].src=b.target.result,c[0].result=b.target.result,g.find(".fileinput-filename").text(d.name),"none"!=f.css("max-height")&&e.css("max-height",parseInt(f.css("max-height"),10)-parseInt(f.css("padding-top"),10)-parseInt(f.css("padding-bottom"),10)-parseInt(f.css("border-top"),10)-parseInt(f.css("border-bottom"),10)),f.html(e),g.addClass("fileinput-exists").removeClass("fileinput-new"),g.trigger("change.bs.fileinput",c)},e.readAsDataURL(d)}else this.$element.find(".fileinput-filename").text(d.name),this.$preview.text(d.name),this.$element.addClass("fileinput-exists").removeClass("fileinput-new"),this.$element.trigger("change.bs.fileinput")},c.prototype.clear=function(a){if(a&&a.preventDefault(),this.$hidden.val(""),this.$hidden.attr("name",this.name),this.$input.attr("name",""),b){var c=this.$input.clone(!0);this.$input.after(c),this.$input.remove(),this.$input=c}else this.$input.val("");this.$preview.html(""),this.$element.find(".fileinput-filename").text(""),this.$element.addClass("fileinput-new").removeClass("fileinput-exists"),void 0!==a&&(this.$input.trigger("change"),this.$element.trigger("clear.bs.fileinput"))},c.prototype.reset=function(){this.clear(),this.$hidden.val(this.original.hiddenVal),this.$preview.html(this.original.preview),this.$element.find(".fileinput-filename").text(""),this.original.exists?this.$element.addClass("fileinput-exists").removeClass("fileinput-new"):this.$element.addClass("fileinput-new").removeClass("fileinput-exists"),this.$element.trigger("reset.bs.fileinput")},c.prototype.trigger=function(a){this.$input.trigger("click"),a.preventDefault()};var d=a.fn.fileinput;a.fn.fileinput=function(b){return this.each(function(){var d=a(this),e=d.data("bs.fileinput");e||d.data("bs.fileinput",e=new c(this,b)),"string"==typeof b&&e[b]()})},a.fn.fileinput.Constructor=c,a.fn.fileinput.noConflict=function(){return a.fn.fileinput=d,this},a(document).on("click.fileinput.data-api",'[data-provides="fileinput"]',function(b){var c=a(this);if(!c.data("bs.fileinput")){c.fileinput(c.data());var d=a(b.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');d.length>0&&(b.preventDefault(),d.trigger("click.bs.fileinput"))}})}(window.jQuery);
/**
 * Alerts Controller
 */
angular.module('Dashboard').controller('AlertsCtrl', ['$scope', AlertsCtrl]);

function AlertsCtrl($scope) {
    $scope.alerts = [
        { type: 'success', msg: 'Thanks for visiting! Feel free to create pull requests to improve the dashboard!' },
        { type: 'danger', msg: 'Found a bug? Create an issue with as many details as you can.' }
    ];

    $scope.addAlert = function() {
        $scope.alerts.push({msg: 'Another alert!'});
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
}
var play1controller= function($scope) {
    
    $scope.playinfo={
        title:"The World Goes 'Round - Musical",
        isMusical:true,
        date:"7:30 Thur & Fri July 9, 10, 16, 17<br/>5:00 & 8:30 Sat July 11, 18<br/>2:00 Sun July 12",
        writtenby : "Music- John Kander<br/>Lyrics – Fred Ebb<br/>Conceived by Susan Stroman, David Thompson, Scott Ellis",
        directedby : "",
        headline:"Music! Humor! Romance! All that jazz!",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
        backpic:"",
        insetpic:"img/WorldGoesRoundMedium.jpg",
        infoblurb:"/panes/play1infoblurb.html",
        castlist:[
//            {
//                name:"Thom Person", role:"Director",
//                photopath:"./bios/thom-mclaughlan-thumb.jpg",
//                biopath:"./bios/thom-mclaughlan.html"
//            },
//            {
//                name:"Someother Person", role:"star",
//                photopath:"./bios/thom-mclaughlan-thumb.jpg",
//                biopath:"./bios/thom-mclaughlan.html"
//            }
//
        ]
    }  ;     
};

var play2controller= function($scope) {
    
    $scope.playinfo={
        title:"Butterflies Are Free",
        isMusical:false,
        date:"7:30 Thur & Fri May 28, 29, June 4, 5 <br/> 5:00 and 8:30 Sat, May 30, June 6 <br/> 2:00  Sun May 31",
        writtenby : "Written by Leonard Gershe",
        directedby : "Directed by Karin Maresh",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
        backpic:"/img/Butterflies.png",
        insetpic:"/img/butterfliesarefree.jpg",
        infoblurb:"/panes/play2infoblurb.html",
        castlist:[
//            {
//                name:"Thom Person", role:"Director",
//                photopath:"./bios/thom-mclaughlan-thumb.jpg",
//                biopath:"./bios/thom-mclaughlan.html"
//            },
//            {
//                name:"Someother Person", role:"star",
//                photopath:"./bios/thom-mclaughlan-thumb.jpg",
//                biopath:"./bios/thom-mclaughlan.html"
//            }

        ]
    }  ;     
};

var play3controller= function($scope) {
    
    $scope.playinfo={
        title:"Funny Money",
        isMusical:false,
        date:"7:30  Thur & Fri June 18, 19; 25, 26<br/>5:00 Sat June 20, 27<br/>2:00 June 21",
        writtenby : "Written by Ray Cooney",
        directedby : "Directed by Matthew Mylnarski",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
        backpic:"",
        insetpic:"/img/funnymoney.png",
        infoblurb:"/panes/play3infoblurb.html",
        castlist:[
//            {
//                name:"Thom Person", role:"Director",
//                photopath:"./bios/thom-mclaughlan-thumb.jpg",
//                biopath:"./bios/thom-mclaughlan.html"
//            },
//            {
//                name:"Someother Person", role:"star",
//                photopath:"./bios/thom-mclaughlan-thumb.jpg",
//                biopath:"./bios/thom-mclaughlan.html"
//            }

        ]
    }  ;     
}

var play4controller= function($scope) {
    
    $scope.playinfo={
        title:"It Could Be Any One Of Us",
        isMusical:false,
        date:"7:30 Thur & Fri July 30, 31, Aug 6, 7<br/>5:00 & 8:30 Sat Aug 1, 8<br/>2:00 Sun Aug 2",
        writtenby : "Written by Alan Ayckbourn",
        directedby : "Directed by Wayne Brinda",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
        backpic:"",
        insetpic:"/img/couldbe.jpg",
        infoblurb:"/panes/play4infoblurb.html",
        castlist:[
//            {
//                name:"Thom Person", role:"Director",
//                photopath:"./bios/thom-mclaughlan-thumb.jpg",
//                biopath:"./bios/thom-mclaughlan.html"
//            },
//            {
//                name:"Someother Person", role:"star",
//                photopath:"./bios/thom-mclaughlan-thumb.jpg",
//                biopath:"./bios/thom-mclaughlan.html"
//            }

        ]
    }  ;     
}

var play5controller= function($scope) {
    
    $scope.playinfo={
        title:"Be My Baby",
        isMusical:false,
        date:"7:30 Thur & Fri  Aug 20, 21, 27, 28<br/>5:00 & 8:30 Sat Aug 22, 29<br/>2:00 Sun Aug 23",
        writtenby : "Written by Ken Ludwig",
        directedby : "Directed by Thom McLaughlin",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
        backpic:"",
        insetpic:"/img/Be-My-Baby.jpg",
        infoblurb:"/panes/play5infoblurb.html",
        castlist:[
//            {
//                name:"Thom Person", role:"Director",
//                photopath:"./bios/thom-mclaughlan-thumb.jpg",
//                biopath:"./bios/thom-mclaughlan.html"
//            },
//            {
//                name:"Someother Person", role:"star",
//                photopath:"./bios/thom-mclaughlan-thumb.jpg",
//                biopath:"./bios/thom-mclaughlan.html"
//            }

        ]
    }  ;     
}

var play6controller= function($scope) {
    
    $scope.playinfo={
        title:"Fox on the Fairway",
        isMusical:false,
        date:"7:30 Thur & Fri Sept 10, 11, 17, 18<br/>5:00 & 8:30 Sat Sept 12, 19<br/>2:00 Sept 13",
        writtenby : "Written by Ken Ludwig",
        directedby : "Directed by Ron Ferrara",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
        backpic:"",
        insetpic:"/img/foxonthefairway.jpg",
        infoblurb:"/panes/play6infoblurb.html",
        castlist:[
//            {
//                name:"Thom Person", role:"Director",
//                photopath:"./bios/thom-mclaughlan-thumb.jpg",
//                biopath:"./bios/thom-mclaughlan.html"
//            },
//            {
//                name:"Someother Person", role:"star",
//                photopath:"./bios/thom-mclaughlan-thumb.jpg",
//                biopath:"./bios/thom-mclaughlan.html"
//            }

        ]
    }  ;     
}

var play7controller= function($scope) {
    
    $scope.playinfo={
        title:"The Outgoing Tide",
        isMusical:false,
        date:"7:30 Thur & Fri Oct 1, 2, 8, 9<br/>5:00 & 8:30 Sat Oct 3, 10<br/>2:00 Sun Oct 4",
        writtenby : "Written by Bruce Graham",
        directedby : "",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-outgoing.html",
        backpic:"/img/Canoe-Sunset.jpg",
        insetpic:"/img/blank.gif",
        infoblurb:"/panes/play7infoblurb.html",
        castlist:[
//            {
//                name:"Thom Person", role:"Director",
//                photopath:"./bios/thom-mclaughlan-thumb.jpg",
//                biopath:"./bios/thom-mclaughlan.html"
//            },
//            {
//                name:"Someother Person", role:"star",
//                photopath:"./bios/thom-mclaughlan-thumb.jpg",
//                biopath:"./bios/thom-mclaughlan.html"
//            },
//            {
//                name:"Someother Person", role:"star",
//                photopath:"./bios/thom-mclaughlan-thumb.jpg",
//                biopath:"./bios/thom-mclaughlan.html"
//            }

        ]
    }  ;     
}

var JACT1controller= function($scope) {
    
    $scope.playinfo={
        title:"Invisible Dragon",
        isMusical:false,
        date:"",
        writtenby : "",
        directedby : "",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
        backpic:"",
        insetpic:"img/blank.gif",
        infoblurb:"/panes/JACT1infoblurb.html",
        castlist:[
//            {
//                name:"Thom Person", role:"Director",
//                photopath:"./bios/thom-mclaughlan-thumb.jpg",
//                biopath:"./bios/thom-mclaughlan.html"
//            },
//            {
//                name:"Someother Person", role:"star",
//                photopath:"./bios/thom-mclaughlan-thumb.jpg",
//                biopath:"./bios/thom-mclaughlan.html"
//            }
//
        ]
    }  ;     
};

var JACT2controller= function($scope) {
    
    $scope.playinfo={
        title:"Snow White",
        isMusical:false,
        date:"",
        writtenby : "",
        directedby : "",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
        backpic:"",
        insetpic:"img/blank.gif",
        infoblurb:"/panes/JACT2infoblurb.html",
        castlist:[
//            {
//                name:"Thom Person", role:"Director",
//                photopath:"./bios/thom-mclaughlan-thumb.jpg",
//                biopath:"./bios/thom-mclaughlan.html"
//            },
//            {
//                name:"Someother Person", role:"star",
//                photopath:"./bios/thom-mclaughlan-thumb.jpg",
//                biopath:"./bios/thom-mclaughlan.html"
//            }
//
        ]
    }  ;     
};

var JACT3controller= function($scope) {
    
    $scope.playinfo={
        title:"Emperor's New Clothes",
        isMusical:false,
        date:"",
        writtenby : "",
        directedby : "",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
        backpic:"",
        insetpic:"img/blank.gif",
        infoblurb:"",
        castlist:[
//            {
//                name:"Thom Person", role:"Director",
//                photopath:"./bios/thom-mclaughlan-thumb.jpg",
//                biopath:"./bios/thom-mclaughlan.html"
//            },
//            {
//                name:"Someother Person", role:"star",
//                photopath:"./bios/thom-mclaughlan-thumb.jpg",
//                biopath:"./bios/thom-mclaughlan.html"
//            }
//
        ]
    }  ;     
};

var yearstring = "2015";
var navItems = [
        {menuitem:true,  text:"Home",path:"/",pane:"/panes/home.html"},
        {menuitem:true, collapsed:false, text:yearstring+" Mainstage Season",path:"/mainstage",pane:"/panes/mainstage.html", children:[
            {menuitem:true, text:"Butterflies Are Free",       path:"/mainstage/butterflies",  pane:"/panes/play-template.html",blurb:"/panes/playblurb2.html",controller:play2controller},
            {menuitem:true, text:"Funny Money",                path:"/mainstage/funnymoney",   pane:"/panes/play-template.html",blurb:"/panes/playblurb3.html",controller:play3controller},
            {menuitem:true, text:"The World Goes 'Round",      isMusical:true, path:"/mainstage/world",        pane:"/panes/musical-template.html",blurb:"/panes/playblurb1.html",controller:play1controller},
            {menuitem:true, text:"It Could Be Any One Of Us",  path:"/mainstage/couldbe",      pane:"/panes/play-template.html",blurb:"/panes/playblurb4.html",controller:play4controller},
            {menuitem:true, text:"Be My Baby",                 path:"/mainstage/bemybaby",     pane:"/panes/play-template.html",blurb:"/panes/playblurb5.html",controller:play5controller},
            {menuitem:true, text:"Fox on the Fairway",       path:"/mainstage/foxonthefairway",pane:"/panes/play-template.html",blurb:"/panes/playblurb6.html",controller:play6controller},
            {menuitem:true, text:"The Outgoing Tide",          path:"/mainstage/outgoingtide", pane:"/panes/play-template.html",blurb:"/panes/playblurb7.html",controller:play7controller}

        ]},
        {menuitem:true, collapsed:false, text:yearstring+" Children's Season",path:"/jact",pane:"/panes/jact.html", children:[
            {menuitem:true, text:"Invisible Dragon",  path:"/jact/dragon",          pane:"/panes/play-template.html",blurb:"/panes/JACTblurb1.html",controller:JACT1controller},
            {menuitem:true, text:"Snow White",                 path:"/jact/snowwhite",         pane:"/panes/play-template.html",blurb:"/panes/JACTblurb2.html",controller:JACT2controller},
            {menuitem:true, text:"Emperor's New Clothes",      path:"/jact/emperors",          pane:"/panes/play-template.html",blurb:"/panes/JACTblurb3.html",controller:JACT3controller}

        ]},
        {menuitem:true, text:"Ticket Information",path:"/tickets",pane:"/panes/tickets.html"},
        {menuitem:true, collapsed:true, text:yearstring+" Auditions",path:"/auditions",pane:"/panes/auditions.html", children:[
            {menuitem:true, text:yearstring+" Mainstage",path:"/auditions/mainstage",pane:"/panes/mainstageAuditions.html"},
            {menuitem:true, text:yearstring+" JACT",path:"/auditions/JACT",pane:"/panes/JACTAuditions.html"}
        ]},
        {menuitem:true, collapsed:true, text:"Dinner Theatre",path:"/lamplighter",pane:"/panes/dinnertheatre.html", children:[
            {menuitem:true, text:"Pricing",path:"/lamplighter/pricing",pane:"/panes/lamplighter.html"},
            {menuitem:true, text:"Lunch Menu",path:"/lamplighter/lunch",pane:"/panes/lamplighterlunch.html"},
            {menuitem:true, text:"Dinner Menu",path:"/lamplighter/dinner",pane:"/panes/lamplighterdinner.html"}
        ] },
        {menuitem:true, collapsed:true, text:"Education",path:"/education",pane:"/panes/education.html", children:[
            {menuitem:true, text:"Theater Classes",path:"/education/classes",pane:"/panes/classes.html"},
            {menuitem:true, text:"Apprenticeships",path:"/education/apprentice",pane:"/panes/apprentice.html"},
            {menuitem:true, text:"Scholarships",path:"/education/scholarships",pane:"/panes/scholarships.html"},
        ] },
        {menuitem:true, collapsed:true, text:"Employment",path:"/employment",pane:"/panes/employment.html", children:[
            {menuitem:true, text:"Volunteer Opportunities",path:"/employment/volunteer",pane:"/panes/volunteer.html"},
        ] },
        {menuitem:true, collapsed:true, text:"About Us",path:"/about",pane:"/panes/about.html"},
    ];

/**
 * Master Controller
 */
var $routeProviderReference;
var appController=angular.module('Dashboard',['ngRoute','ngSanitize','ui.bootstrap']);
appController.filter('unsafe', function($sce) { return $sce.trustAsHtml; });
function mapRoutes (theseNavItems) {
    var j = 0, currentRoute;

    for ( ; j < theseNavItems.length; j++ ) {

            currentRoute = theseNavItems[j];
            //console.log(currentRoute.path,currentRoute.pane,currentRoute.children);
            $routeProviderReference.when(currentRoute.path, {
                    templateUrl: currentRoute.pane
            });
            if (currentRoute.controller){
                $routeProviderReference.when(currentRoute.path, {
                    templateUrl: currentRoute.pane,
                    controller: currentRoute.controller
                });
            }
            if (currentRoute.children) {
                mapRoutes(currentRoute.children);
            }

    }

}
appController
    .config(['$routeProvider',
    function($routeProvider) {
      $routeProviderReference = $routeProvider;
    }])
     .controller('MasterCtrl', ['$scope',  MasterCtrl])
     .run(['$rootScope', '$route', function($rootScope, $http, $route) {
             mapRoutes(navItems);
		$routeProviderReference.otherwise({ redirectTo: "/" });

//		$route.reload();

	
}]);

function MasterCtrl($scope, $http) {
    /**
     * Sidebar Toggle & Cookie Control
     *
     */
//      $('[data-toggle=offcanvas]').click(function() {
//    $('.row-offcanvas').toggleClass('active');
//  });

    var mobileView = 992;
    $scope.navItems= navItems;
    $scope.homepage=[
        {
            path:"/panes/home.html"
        },
        {
            path:"/panes/announcement.html"
        },
    ];
    $scope.play1blurb="/panes/playblurb1.html";
    $scope.play2blurb="/panes/playblurb2.html";
    $scope.play3blurb="/panes/playblurb3.html";
    $scope.play4blurb="/panes/playblurb4.html";
    $scope.play5blurb="/panes/playblurb5.html";
    $scope.play6blurb="/panes/playblurb6.html";
    $scope.play7blurb="/panes/playblurb7.html";
    $scope.mainblurbpane="/panes/mainblurb.html";
    $scope.auditionsblurb="/panes/auditionsblurb.html";
    $scope.aboutahp="/panes/aboutahp.html";
    $scope.headerpane="/panes/header.html";
    $scope.addressblock="/panes/addressblock.html";
    $scope.announcementpane="/panes/announcement.html";
    $scope.socialbar="/panes/social-bar.html";
    $scope.sidenav="/panes/sidebar.html";
    $scope.getWidth = function() { return window.innerWidth; };

//   $scope.loadMenu = function() {
//      $http.get('menu/all').success(function(items) {
//         $scope.navitems = items;
//      });
//   };
//
//   $scope.loadMenu();

    $scope.toggleSidebar = function() 
    {
        $scope.toggle = ! $scope.toggle;

        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function() { $scope.$apply(); };
}
console.log("end master-ctrl.js");
/**
 * Loading Directive
 * @see http://tobiasahlin.com/spinkit/
 */
angular.module('Dashboard').directive('rdLoading', rdLoading);

function rdLoading () {
    var directive = {
        restrict: 'AE',
        template: '<div class="loading"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
    };
    return directive;
};
})();