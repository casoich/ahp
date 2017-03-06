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
            {
                name:"Denise Pullen", role:"Director",
                photopath:"./bios/denise-pullen.jpg",
                biopath:"./bios/denise-pullen.html"
            },
            {
                name:"Michael Rozell", role:"Musical Director",
                photopath:"./bios/michael-rozell.jpg",
                biopath:"./bios/michael-rozell.html"
            },
            {
                name:"Nicole Makos", role:"Stage Manager",
                photopath:"./bios/nikki-makos.jpg",
                biopath:"./bios/nikki-makos.html"
            },
            {
                name:"Johnny Gallagher", role:"",
                photopath:"./bios/johnny-gallagher.jpg",
                biopath:"./bios/johnny-gallagher.html"
            },
            {
                name:"Keri Lucey", role:"",
                photopath:"./bios/keri-lucey.jpg",
                biopath:"./bios/keri-lucey.html"
            },
            {
                name:"Lauren McCurdy", role:"",
                photopath:"./bios/lauren-mccurdy.jpg",
                biopath:"./bios/lauren-mccurdy.html"
            },
            {
                name:"Patrick J. McMahon", role:"",
                photopath:"./bios/pj-mcmahon.jpg",
                biopath:"./bios/pj-mcmahon.html"
            },
            {
                name:"Jamie Pasquinelli", role:"",
                photopath:"./bios/jamie-pasquinelli.jpg",
                biopath:"./bios/jamie-pasquinelli.html"
            },
            {
                name:"Surya Ravindran", role:"",
                photopath:"./bios/surya-ravindran.jpg",
                biopath:"./bios/surya-ravindran.html"
            },
            {
                name:"Kelsey Riker", role:"",
                photopath:"./bios/kelsey-riker.jpg",
                biopath:"./bios/kelsey-riker.html"
            },

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
            {
                name:"Karin Maresh", role:"Director",
                photopath:"./bios/karin-maresh.jpg",
                biopath:"./bios/karin-maresh.html"
            },
            {
                name:"D.J. Stevenson", role:"Stage Manager",
                photopath:"./bios/missing-female.jpg",
                biopath:"./bios/deborah-stephenson.html"
            },
            {
                name:"Matt Henderson", role:"Don Baker",
                photopath:"./bios/matt-henderson.jpg",
                biopath:"./bios/matt-henderson.html"
            },
            {
                name:"Klase Danko", role:"Jill Tanner",
                photopath:"./bios/klase-danko.jpg",
                biopath:"./bios/klase-danko.html"
            },
            {
                name:"Terri Bowser", role:"Mrs. Baker",
                photopath:"./bios/terri-bowser.jpg",
                biopath:"./bios/terri-bowser.html"
            },
            {
                name:"Craig Soich", role:"Ralph Austin",
                photopath:"./bios/craig-soich.jpg",
                biopath:"./bios/craig-soich.html"
            },

        ]
    }  ;     
};

var play3controller= function($scope) {
    
    $scope.playinfo={
        title:"Funny Money",
        isMusical:false,
        date:"7:30  Thur & Fri June 18, 19; 25, 26<br/>5:00 and 8:30 Sat June 20, 27<br/>2:00 June 21",
        writtenby : "Written by Ray Cooney",
        directedby : "Directed by Matthew Mylnarski",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
        backpic:"",
        insetpic:"/img/funnymoney.png",
        infoblurb:"/panes/play3infoblurb.html",
        castlist:[
            {
                name:"Matthew R. Mlynarski", role:"Director",
                photopath:"./bios/matt-mlynarski.jpg",
                biopath:"./bios/matt-mlynarski.html"
            },
            {
                name:"Susan Szymanowski Shirey", role:"Stage Manager",
                photopath:"./bios/sue-shirey.jpg",
                biopath:"./bios/sue-shirey.html"
            },
            {
                name:"Mike Crosby", role:"Henry Perkins",
                photopath:"./bios/mike-crosby.jpg",
                biopath:"./bios/mike-crosby.html"
            },
            {
                name:"Briana Downs", role:"Jean Perkins",
                photopath:"./bios/briana-downs.jpg",
                biopath:"./bios/briana-downs.html"
            },
            {
                name:"T.J. Swigart", role:"Vic Johnson",
                photopath:"./bios/tj-swigart.jpg",
                biopath:"./bios/tj-swigart.html"
            },
            {
                name:"Rachel Nicely", role:"Betty Johnson",
                photopath:"./bios/rachel-nicely.jpg",
                biopath:"./bios/rachel-nicely.html"
            },
            {
                name:"Alex Novickoff", role:"Bill",
                photopath:"./bios/alex-novickoff.jpg",
                biopath:"./bios/alex-novickoff.html"
            },
            {
                name:"Stephen Toth", role:"Davenport",
                photopath:"./bios/stephen-toth.jpg",
                biopath:"./bios/stephen-toth.html"
            },
            {
                name:"Frankie Shoup", role:"Slater",
                photopath:"./bios/frankie-shoup.jpg",
                biopath:"./bios/frankie-shoup.html"
            }

        ]
    }  ;     
}

var play4controller= function($scope) {
    
    $scope.playinfo={
        title:"It Could Be Any One Of Us",
        isMusical:false,
        date:"7:30 Thur & Fri July 30, 31, Aug 6, 7<br/>7:30 Sat Aug 1, 8<br/>2:00 Sun Aug 2",
        writtenby : "Written by Alan Ayckbourn",
        directedby : "Directed by Wayne Brinda",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
        backpic:"",
        insetpic:"/img/couldbe.jpg",
        infoblurb:"/panes/play4infoblurb.html",
        castlist:[
            {
                name:"Wayne Brinda", role:"Director",
                photopath:"./bios/wayne-brinda.jpg",
                biopath:"./bios/wayne-brinda.html"
            },
            {
                name:"Katelynn Reist", role:"Stage Manager",
                photopath:"./bios/katelynn-reist.jpg",
                biopath:"./bios/katelynn-reist.html"
            },
            {
                name:"Rick Dutrow", role:"Mortimer Chalke",
                photopath:"./bios/rick-dutrow-2.jpg",
                biopath:"./bios/rick-dutrow.html"
            },
            {
                name:"Terri Bowser", role:"Jocelyn Polegate",
                photopath:"./bios/terri-bowser.jpg",
                biopath:"./bios/terri-bowser-icbaoou.html"
            },
            {
                name:"Matt Henderson", role:"Brinton Chalke",
                photopath:"./bios/matt-henderson.jpg",
                biopath:"./bios/matt-henderson-icbaoou.html"
            },
            {
                name:"Angie Lavelle", role:"Amy Polegate",
                photopath:"./bios/angie-lavelle.jpg",
                biopath:"./bios/angie-lavelle.html"
            },
            {
                name:"Craig Soich", role:"Norris Honeywell",
                photopath:"./bios/craig-soich.jpg",
                biopath:"./bios/craig-soich-icbaoou.html"
            },
            {
                name:"Pamela Lee", role:"Wendy Windwood",
                photopath:"./bios/pamela-lee.jpg",
                biopath:"./bios/pamela-lee.html"
            }

        ]
    }  ;     
}

var play5controller= function($scope) {
    
    $scope.playinfo={
        title:"Be My Baby",
        isMusical:false,
        date:"7:30 Thur & Fri  Aug 20, 21, 27, 28<br/>7:30 Sat Aug 22, 29<br/>2:00 Sun Aug 23",
        writtenby : "Written by Ken Ludwig",
        directedby : "Directed by Thom McLaughlin",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
        backpic:"",
        insetpic:"/img/Be-My-Baby.jpg",
        infoblurb:"/panes/play5infoblurb.html",
        castlist:[
            {
                name:"Thom McLaughlin", role:"Director",
                photopath:"./bios/thom-mclaughlin.jpg",
                biopath:"./bios/thom-mclaughlin-bmb.html"
            },
            {
                name:"Mike Marra", role:"Stage Manager",
                photopath:"./bios/mike-marra.jpg",
                biopath:"./bios/mike-marra.html"
            },
            {
                name:"Madison Nick", role:"Gloria Nance",
                photopath:"./bios/maddie-nick.jpg",
//                photopath:"./bios/missing-female.jpg",
                biopath:"./bios/maddie-nick.html"
            },
            {
                name:"Shirley Ratner", role:"Maud Kinch",
                photopath:"./bios/shirley-ratner.jpg",
                biopath:"./bios/shirley-ratner.html"
            },
            {
                name:"D Palyo", role:"Christy McCall",
                photopath:"./bios/d-palyo.jpg",
//                photopath:"./bios/missing-male.jpg",
                biopath:"./bios/d-palyo.html"
            },
            {
                name:"Dennis \"Chip\" Kerr", role:"John Campbell",
                photopath:"./bios/dennis-kerr.jpg",
                biopath:"./bios/dennis-kerr.html"
            },
            {
                name:"Matt Mlynarski", role:"Male Ensemble",
                photopath:"./bios/matt-mlynarski.jpg",
                biopath:"./bios/matt-mlynarski-bmb.html"
            },
            {
                name:"Karin Maresh", role:"Female Ensemble",
                photopath:"./bios/karin-maresh.jpg",
                biopath:"./bios/karin-maresh-bmb.html"
            },

        ]
    }  ;     
}

var play6controller= function($scope) {
    
    $scope.playinfo={
        title:"Fox on the Fairway",
        isMusical:false,
        date:"7:30 Thur & Fri Sept 10, 11, 17, 18<br/>7:30 Sat Sept 12, 19<br/>2:00 Sept 13",
        writtenby : "Written by Ken Ludwig",
        directedby : "Directed by Ron Ferrara",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
        backpic:"",
        insetpic:"/img/foxonthefairway.jpg",
        infoblurb:"/panes/play6infoblurb.html",
        castlist:[
            {
                name:"Ron Ferrara", role:"Director",
                photopath:"./bios/ron-ferrara.jpg",
                biopath:"./bios/ron-ferrara.html"
            },
            {
                name:"Susan Szymanowski Shirey", role:"Stage Manager",
                photopath:"./bios/sue-shirey.jpg",
                biopath:"./bios/sue-shirey-fotf.html"
            },
            {
                name:"Mike Crosby", role:"Justin",
                photopath:"./bios/mike-crosby.jpg",
                biopath:"./bios/mike-crosby-fotf.html"
            },
            {
                name:"Klase Danko", role:"Louise",
                photopath:"./bios/klase-danko.jpg",
                biopath:"./bios/klase-danko-fotf.html"
            },
            {
                name:"Rick Dutrow", role:"Bingham",
                photopath:"./bios/rick-dutrow-fotf.jpg",
                biopath:"./bios/rick-dutrow-fotf.html"
            },
            {
                name:"Pam Farneth", role:"Pamela",
                photopath:"./bios/pam-farneth.jpg",
                biopath:"./bios/pam-farneth.html"
            },
            {
                name:"Dave Hoffman", role:"Dickie",
                photopath:"./bios/dave-hoffman.jpg",
                biopath:"./bios/dave-hoffman.html"
            },
            {
                name:"Kristin Lenz", role:"Muriel",
                photopath:"./bios/kristin-lenz.jpg",
                biopath:"./bios/kristin-lenz.html"
            }

        ]
    }  ;     
}

var play7controller= function($scope) {
    
    $scope.playinfo={
        title:"The Outgoing Tide",
        isMusical:false,
        date:"7:30 Thur & Fri Oct 1, 2, 8, 9<br/>7:30 Sat Oct 3, 10<br/>2:00 Sun Oct 4",
        writtenby : "Written by Bruce Graham",
        directedby : "",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-outgoing.html",
        backpic:"/img/OutgoingTide1.jpg",
        insetpic:"/img/blank.gif",
        infoblurb:"/panes/play7infoblurb.html",
        castlist:[
            {
                name:"Thom McLaughlin", role:"Director",
                photopath:"./bios/thom-mclaughlin.jpg",
                biopath:"./bios/thom-mclaughlin-tot.html"
            },
            {
                name:"Stephanie Swift-Antill", role:"Stage Manager",
                photopath:"./bios/stephanie-swift-antill.jpg",
                biopath:"./bios/stephanie-swift-antill.html"
            },
            {
                name:"Dennis \"Chip\" Kerr", role:"Gunner",
                photopath:"./bios/dennis-kerr.jpg",
                biopath:"./bios/dennis-kerr-tot.html"
            },
            {
                name:"Pat Beyer", role:"Peg",
                photopath:"./bios/pat-beyer-tot.jpg",
                biopath:"./bios/pat-beyer-tot.html"
            },
            {
                name:"Rick Dutrow", role:"Jack",
                photopath:"./bios/rick-dutrow-2.jpg",
                biopath:"./bios/rick-dutrow-tot.html"
            }

        ]
    }  ;     
}

var JACT1controller= function($scope) {
    
    $scope.playinfo={
        title:"The Invisible Dragon",
        isMusical:false,
        date:"June 16, 18, 20; <br/>23, 25, 26, at 11:00am",
        writtenby : "Written by Patricia Clapp",
        directedby : "Directed by Clare Ratway",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
        backpic:"",
        insetpic:"img/Dragon.png",
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
        title:"Snow White and the Seven Dwarfs",
        isMusical:true,
        date:"July 7, 9, 11; <br/>14, 16, 17, at 11:00am",
        writtenby : "Written by Tim Kelly<br/>Music and Lyrics by Bill Francoeur",
        directedby : "Directed by Joette Salandro",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
        backpic:"",
        insetpic:"img/Dwarfs.png",
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
        title:"The Emperor's New Clothes",
        isMusical:false,
        date:"July 28, 30, August 1;<br/> 4, 6, 7, at 11:00am",
        writtenby : "Written by Sharon A Cole",
        directedby : "Directed by Clare Ratway",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
        backpic:"",
        insetpic:"img/Emperor.png",
        infoblurb:"/panes/JACT3infoblurb.html",
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

var foreigner2016Controller= function($scope) {
    console.log("got controller:",this);
    $scope.playinfo={
        title:"The Foreigner",
        path:"#/2016/mainstage/foreigner",
        isMusical:false,
        date:"7:30  May 26, 27, 28, June 2, 3, 4 <br/>2:00  Sun May 29",
        writtenby : "Written by Larry Shue",
        directedby : "Directed by F.J. Hartland",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
//        backpic:"/img/Butterflies.png",
        insetpic:"/img/foreigner.jpg",
        infoblurb:"/panes/2016/foreignerblurb.html",
        castlist:[
//            {
//                name:"Karin Maresh", role:"Director",
//                photopath:"./bios/karin-maresh.jpg",
//                biopath:"./bios/karin-maresh.html"
//            },
//            {
//                name:"D.J. Stevenson", role:"Stage Manager",
//                photopath:"./bios/missing-female.jpg",
//                biopath:"./bios/deborah-stephenson.html"
//            },
//            {
//                name:"Matt Henderson", role:"Don Baker",
//                photopath:"./bios/matt-henderson.jpg",
//                biopath:"./bios/matt-henderson.html"
//            },
//            {
//                name:"Klase Danko", role:"Jill Tanner",
//                photopath:"./bios/klase-danko.jpg",
//                biopath:"./bios/klase-danko.html"
//            },
//            {
//                name:"Terri Bowser", role:"Mrs. Baker",
//                photopath:"./bios/terri-bowser.jpg",
//                biopath:"./bios/terri-bowser.html"
//            },
//            {
//                name:"Craig Soich", role:"Ralph Austin",
//                photopath:"./bios/craig-soich.jpg",
//                biopath:"./bios/craig-soich.html"
//            }

        ]
    }  ;     
};

var sinsex2016Controller= function($scope) {
    console.log("got controller:",this);
    $scope.playinfo={
        title:"Sin, Sex, and the C.I.A.",
                path:"#/2016/mainstage/sinsex",

        isMusical:false,
        date:"7:30 June 16, 17, 18; 23, 24, 25   <br/>2:00  Sun June 19",
        writtenby : "Written by Michael & Susan Parker   ",
        directedby : "Directed by Ron Ferrara",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
//        backpic:"/img/Butterflies.png",
        insetpic:"/img/sinsex.jpg",
        infoblurb:"/panes/2016/sinsexblurb.html",
        castlist:[
            {
                name:"Ron Ferrara", role:"Director",
                photopath:"./bios/ron-ferrara.jpg",
                biopath:"./bios/ron-ferrara-sscia.html"
            },
            {
                name:"Susan Szymanowski Shirey", role:"Stage Manager",
                photopath:"./bios/sue-shirey.jpg",
                biopath:"./bios/sue-shirey-sscia.html"
            },
            {
                name:"Terri Bowser", role:"Margaret Johnson",
                photopath:"./bios/terri-bowser.jpg",
                biopath:"./bios/terri-bowser-sscia.html"
            },
            {
                name:"Mike Crosby", role:"Luke James",
                photopath:"./bios/mike-crosby.jpg",
                biopath:"./bios/mike-crosby-sscia.html"
            },
            {
                name:"Rick Dutrow", role:"Daniel Warren",
                photopath:"./bios/rick-dutrow.jpg",
                biopath:"./bios/rick-dutrow-sscia.html"
            },
            {
                name:"Andrew Nesky", role:"Rev. Samuel Abernathy",
                photopath:"./bios/andy-nesky.jpg",
                biopath:"./bios/andy-nesky-sscia.html"
            },
            {
                name:"Rachel Nicely", role:"Heather Ann Faraday",
                photopath:"./bios/rachel-nicely.jpg",
                biopath:"./bios/rachel-nicely-sscia.html"
            },
            {
                name:"Stephan Ie Swift", role:"Ranger Don",
                photopath:"./bios/stephanie-swift-antill.jpg",
                biopath:"./bios/stephanie-swift-sscia.html"
            },
            {
                name:"Angela Trovato", role:"Millicent",
                photopath:"./bios/angela-trovato.jpg",
                biopath:"./bios/angela-trovato-sscia.html"
            }

        ]
    }  ;     
};

var cemeteryclub2016Controller= function($scope) {
    console.log("got controller:",this);
    $scope.playinfo={
        title:"The Cemetery Club",
                path:"#/2016/mainstage/cemeteryclub",

        isMusical:false,
        date:"7:30  Aug 18, 19, 20; 25, 26, 27<br/>2:00 Aug 21",
        writtenby : "Written by Ivan Menchell",
        directedby : "Directed by Matt Mlynarski",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
//        backpic:"/img/Butterflies.png",
        insetpic:"/img/cemeteryclub.jpg",
        infoblurb:"/panes/2016/cemeteryclubblurb.html",
        castlist:[
//            {
//                name:"Wayne Brinda", role:"Director",
//                photopath:"./bios/wayne-brinda.jpg",
//                biopath:"./bios/wayne-brinda.html"
//            },
//            {
//                name:"D.J. Stevenson", role:"Stage Manager",
//                photopath:"./bios/missing-female.jpg",
//                biopath:"./bios/deborah-stephenson.html"
//            },
//            {
//                name:"Shirley Ratner", role:"Fonsia Dorsey",
//                photopath:"./bios/shirley-ratner.jpg",
//                biopath:"./bios/shirley-ratner.html"
//            },
//            {
//                name:"Dennis \"Chip\" Kerr", role:"Weller Martin",
//                photopath:"./bios/dennis-kerr.jpg",
//                biopath:"./bios/dennis-kerr.html"
//            }
        ]
    }  ;     
};

var gingame2016Controller= function($scope) {
    console.log("got controller:",this);
    $scope.playinfo={
        title:"The Gin Game",
                path:"#/2016/mainstage/gingame",

        isMusical:false,
        date:"7:30  July 7, 8, 9; 14, 15, 16<br/>2:00  Sun July 10",
        writtenby : "Written by D.L. Coburn",
        directedby : "Directed by Wayne Brinda",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
//        backpic:"/img/Butterflies.png",
        insetpic:"/img/gingame.jpg",
        infoblurb:"/panes/2016/gingameblurb.html",
        castlist:[
            {
                name:"Wayne Brinda", role:"Director",
                photopath:"./bios/wayne-brinda.jpg",
                biopath:"./bios/wayne-brinda.html"
            },
//            {
//                name:"D.J. Stevenson", role:"Stage Manager",
//                photopath:"./bios/missing-female.jpg",
//                biopath:"./bios/deborah-stephenson.html"
//            },
            {
                name:"Shirley Ratner", role:"Fonsia Dorsey",
                photopath:"./bios/shirley-ratner.jpg",
                biopath:"./bios/shirley-ratner.html"
            },
            {
                name:"Dennis \"Chip\" Kerr", role:"Weller Martin",
                photopath:"./bios/dennis-kerr.jpg",
                biopath:"./bios/dennis-kerr.html"
            }
        ]
    }  ;     
};

var spitfire2016Controller= function($scope) {
    console.log("got controller:",this);
    $scope.playinfo={
        title:"The Spitfire Grill",
                path:"#/2016/mainstage/spitfire",

        isMusical:true,
        date:"7:30 July 28, 29, 30; Aug 4, 5, 6<br/>2:00  Sun July 31 2:00",
        writtenby : "Music &amp; Book by James Valcq<br/>Lyrics and Book by Fred Alley<br/>Based on the film by Lee David Zlotoff",
        directedby : "Directed by Thom McLaughlin and Aaron Gray",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
//        backpic:"/img/Butterflies.png",
        insetpic:"/img/spitfire.jpg",
        infoblurb:"/panes/2016/spitfireblurb.html",
        castlist:[
//            {
//                name:"Wayne Brinda", role:"Director",
//                photopath:"./bios/wayne-brinda.jpg",
//                biopath:"./bios/wayne-brinda.html"
//            },
//            {
//                name:"D.J. Stevenson", role:"Stage Manager",
//                photopath:"./bios/missing-female.jpg",
//                biopath:"./bios/deborah-stephenson.html"
//            },
//            {
//                name:"Shirley Ratner", role:"Fonsia Dorsey",
//                photopath:"./bios/shirley-ratner.jpg",
//                biopath:"./bios/shirley-ratner.html"
//            },
//            {
//                name:"Dennis \"Chip\" Kerr", role:"Weller Martin",
//                photopath:"./bios/dennis-kerr.jpg",
//                biopath:"./bios/dennis-kerr.html"
//            }
        ]
    }  ;     
};

var fatalmurder2016Controller= function($scope) {
    console.log("got controller:",this);
    $scope.playinfo={
        title:"Death By Fatal Murder",
                path:"#/2016/mainstage/fatalmurder",

        isMusical:false,
        date:"7:30  Sept 8, 9, 10; 15, 16, 17<br/>2:00 Sept 11",
        writtenby : "Written by Peter Gordon",
        directedby : "Directed by Rick Dutrow",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
//        backpic:"/img/Butterflies.png",
        insetpic:"/img/fatalmurder.jpg",
        infoblurb:"/panes/2016/fatalmurderblurb.html",
        castlist:[
//            {
//                name:"Wayne Brinda", role:"Director",
//                photopath:"./bios/wayne-brinda.jpg",
//                biopath:"./bios/wayne-brinda.html"
//            },
//            {
//                name:"D.J. Stevenson", role:"Stage Manager",
//                photopath:"./bios/missing-female.jpg",
//                biopath:"./bios/deborah-stephenson.html"
//            },
//            {
//                name:"Shirley Ratner", role:"Fonsia Dorsey",
//                photopath:"./bios/shirley-ratner.jpg",
//                biopath:"./bios/shirley-ratner.html"
//            },
//            {
//                name:"Dennis \"Chip\" Kerr", role:"Weller Martin",
//                photopath:"./bios/dennis-kerr.jpg",
//                biopath:"./bios/dennis-kerr.html"
//            }
        ]
    }  ;     
};

var violetsharp2016Controller= function($scope) {
    console.log("got controller:",this);
    $scope.playinfo={
        title:"Violet Sharp",
                path:"#/2016/mainstage/violetsharp",

        isMusical:false,
        date:"7:30  Sept 29, 30, Oct 1; 6, 7, 8  <br/>2:00 Oct 2",
        writtenby : "Written by William Cameron",
        directedby : "Directed by Karin Maresh",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
//        backpic:"/img/Butterflies.png",
        insetpic:"/img/violetsharp.jpg",
        infoblurb:"/panes/2016/violetsharpblurb.html",
        castlist:[
//            {
//                name:"Wayne Brinda", role:"Director",
//                photopath:"./bios/wayne-brinda.jpg",
//                biopath:"./bios/wayne-brinda.html"
//            },
//            {
//                name:"D.J. Stevenson", role:"Stage Manager",
//                photopath:"./bios/missing-female.jpg",
//                biopath:"./bios/deborah-stephenson.html"
//            },
//            {
//                name:"Shirley Ratner", role:"Fonsia Dorsey",
//                photopath:"./bios/shirley-ratner.jpg",
//                biopath:"./bios/shirley-ratner.html"
//            },
//            {
//                name:"Dennis \"Chip\" Kerr", role:"Weller Martin",
//                photopath:"./bios/dennis-kerr.jpg",
//                biopath:"./bios/dennis-kerr.html"
//            }
        ]
    }  ;     
};

var jact2016OhjackController= function($scope) {
    console.log("got controller:",this);
    $scope.playinfo={
        title:"Oh, Jack!",
        path:"#/2016/jact/ohjack",

        isMusical:true,
        date:"June 14, 16, 18, 21, 23, 24",
        writtenby : "Book and music by Richard Kinter",
        directedby : "Directed by: Tobi Sasso (Music Director: Joette Salandro)",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
//        backpic:"/img/Butterflies.png",
        insetpic:"/img/ohjack.jpg",
        infoblurb:"/panes/2016/jact2016ohjack.html",
        castlist:[
//            {
//                name:"Wayne Brinda", role:"Director",
//                photopath:"./bios/wayne-brinda.jpg",
//                biopath:"./bios/wayne-brinda.html"
//            },
//            {
//                name:"D.J. Stevenson", role:"Stage Manager",
//                photopath:"./bios/missing-female.jpg",
//                biopath:"./bios/deborah-stephenson.html"
//            },
//            {
//                name:"Shirley Ratner", role:"Fonsia Dorsey",
//                photopath:"./bios/shirley-ratner.jpg",
//                biopath:"./bios/shirley-ratner.html"
//            },
//            {
//                name:"Dennis \"Chip\" Kerr", role:"Weller Martin",
//                photopath:"./bios/dennis-kerr.jpg",
//                biopath:"./bios/dennis-kerr.html"
//            }
        ]
    }  ;     
};
var jact2016EnchantedController= function($scope) {
    console.log("got controller:",this);
    $scope.playinfo={
        title:"The Enchanted Sleeping Beauty",
        path:"#/2016/jact/enchanted",
        isMusical:true,
        date:"July 5, 7, 9; 12, 14, 15",
        writtenby : "by Vera Morris and Bill Francoeur",
        directedby : "Directed by: Joette Salandro",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
//        backpic:"/img/Butterflies.png",
        insetpic:"/img/enchanted_sleeping_beauty.jpg",
        infoblurb:"/panes/2016/jact2016enchanted.html",
        castlist:[
//            {
//                name:"Wayne Brinda", role:"Director",
//                photopath:"./bios/wayne-brinda.jpg",
//                biopath:"./bios/wayne-brinda.html"
//            },
//            {
//                name:"D.J. Stevenson", role:"Stage Manager",
//                photopath:"./bios/missing-female.jpg",
//                biopath:"./bios/deborah-stephenson.html"
//            },
//            {
//                name:"Shirley Ratner", role:"Fonsia Dorsey",
//                photopath:"./bios/shirley-ratner.jpg",
//                biopath:"./bios/shirley-ratner.html"
//            },
//            {
//                name:"Dennis \"Chip\" Kerr", role:"Weller Martin",
//                photopath:"./bios/dennis-kerr.jpg",
//                biopath:"./bios/dennis-kerr.html"
//            }
        ]
    }  ;     
};
var jact2016Looking_Glass_LandController= function($scope) {
    console.log("got controller:",this);
    $scope.playinfo={
        title:"Looking Glass Land",
        path:"#/2016/jact/lookingglass",
        isMusical:false,
        date:"July 26, 28, 30; AUGUST 2, 4, 5",
        writtenby : "by James DeVita",
        directedby : "Directed by: Becky Shirey",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
//        backpic:"/img/Butterflies.png",
        insetpic:"/img/looking_glass.jpg",
        infoblurb:"/panes/2016/jact2016looking_glass_land.html",
        castlist:[
//            {
//                name:"Wayne Brinda", role:"Director",
//                photopath:"./bios/wayne-brinda.jpg",
//                biopath:"./bios/wayne-brinda.html"
//            },
//            {
//                name:"D.J. Stevenson", role:"Stage Manager",
//                photopath:"./bios/missing-female.jpg",
//                biopath:"./bios/deborah-stephenson.html"
//            },
//            {
//                name:"Shirley Ratner", role:"Fonsia Dorsey",
//                photopath:"./bios/shirley-ratner.jpg",
//                biopath:"./bios/shirley-ratner.html"
//            },
//            {
//                name:"Dennis \"Chip\" Kerr", role:"Weller Martin",
//                photopath:"./bios/dennis-kerr.jpg",
//                biopath:"./bios/dennis-kerr.html"
//            }
        ]
    }  ;     
};
var sinatra2016Controller= function($scope) {
    console.log("got controller:",this);
    $scope.playinfo={
        title:"Sinatra: A Centennial Celebration",
                path:"#/2016/ss/sinatra",

        isMusical:true,
        date:"Friday, April 29 at 8:00 PM",
        writtenby : "",
        directedby : "",
        headline:"",
        subhead:"OPAC presents a very special FUNDRAISING event",
        stylesheet:"/panes/styleinsert-ss.html",
//        backpic:"/img/Butterflies.png",
        insetpic:"/img/sinatra.png",
        infoblurb:"/panes/2016/sinatrablurb.html",
        castlist:[
//            {
//                name:"Wayne Brinda", role:"Director",
//                photopath:"./bios/wayne-brinda.jpg",
//                biopath:"./bios/wayne-brinda.html"
//            },
//            {
//                name:"D.J. Stevenson", role:"Stage Manager",
//                photopath:"./bios/missing-female.jpg",
//                biopath:"./bios/deborah-stephenson.html"
//            },
//            {
//                name:"Shirley Ratner", role:"Fonsia Dorsey",
//                photopath:"./bios/shirley-ratner.jpg",
//                biopath:"./bios/shirley-ratner.html"
//            },
//            {
//                name:"Dennis \"Chip\" Kerr", role:"Weller Martin",
//                photopath:"./bios/dennis-kerr.jpg",
//                biopath:"./bios/dennis-kerr.html"
//            }
        ]
    }  ;     
};

var carrie2016Controller= function($scope) {
    console.log("got controller:",this);
    $scope.playinfo={
        title:"Carrie: The Musical",
                path:"#/2016/ss/carrie",

        isMusical:true,
        date:"8:00 October 20, 21, 22; 27, 28, 29",
        writtenby : "Book by Lawrence D. Cohen<br/>Lyrics by Dean Pitchford<br/>Music by Michael Gore",
        directedby : "",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-ss-carrie.html",
//        backpic:"/img/Butterflies.png",
        insetpic:"/img/Carrie_Logo.png",
        infoblurb:"/panes/2016/carrieblurb.html",
        castlist:[
//            {
//                name:"Wayne Brinda", role:"Director",
//                photopath:"./bios/wayne-brinda.jpg",
//                biopath:"./bios/wayne-brinda.html"
//            },
//            {
//                name:"D.J. Stevenson", role:"Stage Manager",
//                photopath:"./bios/missing-female.jpg",
//                biopath:"./bios/deborah-stephenson.html"
//            },
//            {
//                name:"Shirley Ratner", role:"Fonsia Dorsey",
//                photopath:"./bios/shirley-ratner.jpg",
//                biopath:"./bios/shirley-ratner.html"
//            },
//            {
//                name:"Dennis \"Chip\" Kerr", role:"Weller Martin",
//                photopath:"./bios/dennis-kerr.jpg",
//                biopath:"./bios/dennis-kerr.html"
//            }
        ]
    }  ;     
};

var patsycline2017Controller= function($scope) {
    $scope.playinfo = $scope.fetchFromObject($scope.content,'showinfo.2017.patsycline2017') ;     
};
var mixedemotions2017Controller= function($scope) {
    $scope.playinfo = $scope.fetchFromObject($scope.content, 'showinfo.2017.mixedemotions2017');     
};
var seussical2017Controller= function($scope) {
    $scope.playinfo = $scope.fetchFromObject($scope.content, 'showinfo.2017.seussical2017');     
};
var rumors2017Controller= function($scope) {
    $scope.playinfo = $scope.fetchFromObject($scope.content, 'showinfo.2017.rumors2017');     
};
var dixie2017Controller= function($scope) {
    $scope.playinfo = $scope.fetchFromObject($scope.content, 'showinfo.2017.dixie2017');     
};
var boeing2017Controller= function($scope) {
    $scope.playinfo = $scope.fetchFromObject($scope.content, 'showinfo.2017.boeing2017');     
};
var winnie2017Controller= function($scope) {
    $scope.playinfo = $scope.fetchFromObject($scope.content, 'showinfo.2017.winnie2017');     
};
var cinderella2017Controller= function($scope) {
    $scope.playinfo = $scope.fetchFromObject($scope.content, 'showinfo.2017.cinderella2017');     
};

var yearstring = "2017";
var navItems = [
        {menuitem:true,  text:"Home",path:"/",pane:"/panes/home.html"},
        {menuitem:true, collapsed:false, text:yearstring+" Mainstage Season",path:"/mainstage",pane:"/panes/home.html", children:[
        {menuitem:true, text:"Always - Patsy Cline",          path:"/2017/mainstage/patsycline", pane:"/panes/play-template.html",blurb:"/panes/2017/patsycline.html",controller:patsycline2017Controller},
        {menuitem:true, text:"Mixed Emotions",          path:"/2017/mainstage/mixedemotions", pane:"/panes/play-template.html",blurb:"/panes/2017/mixedemotions.html",controller:mixedemotions2017Controller},
        {menuitem:true, text:"Seussical - The Musical",          path:"/2017/mainstage/seussical", pane:"/panes/play-template.html",blurb:"/panes/2017/seussical.html",controller:seussical2017Controller},
        {menuitem:true, text:"Rumors",          path:"/2017/mainstage/rumors", pane:"/panes/play-template.html",blurb:"/panes/2017/rumors.html",controller:rumors2017Controller},
        {menuitem:true, text:"The Dixie Swim Club",          path:"/2017/mainstage/dixie", pane:"/panes/play-template.html",blurb:"/panes/2017/dixie.html",controller:dixie2017Controller},
        {menuitem:true, text:"Boeing Boeing",          path:"/2017/mainstage/boeing", pane:"/panes/play-template.html",blurb:"/panes/2017/boeing.html",controller:boeing2017Controller}

        ]},
        {menuitem:false, collapsed:false, text:yearstring+" Special Events",path:"/special",pane:"/panes/home.html", children:[
        ]},
        {menuitem:true, collapsed:false, text:yearstring+" Children's Season",path:"/jact",pane:"/panes/jact.html", children:[
            {menuitem:true, text:"Winnie the Pooh Birthday Tail",          path:"/2017/JACT/winnie", pane:"/panes/play-template.html",blurb:"/panes/2017/winnie.html",controller:winnie2017Controller},
            {menuitem:true, text:"Cinderella",          path:"/2017/JACT/cinderella", pane:"/panes/play-template.html",blurb:"/panes/2017/cinderella.html",controller:cinderella2017Controller}
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
        {menuitem:false, text:"Butterflies Are Free",       path:"/mainstage/butterflies",  pane:"/panes/play-template.html",blurb:"/panes/playblurb2.html",controller:play2controller},
        {menuitem:false, text:"Funny Money",                path:"/mainstage/funnymoney",   pane:"/panes/play-template.html",blurb:"/panes/playblurb3.html",controller:play3controller},
        {menuitem:false, text:"The World Goes 'Round",      isMusical:true, path:"/mainstage/world",        pane:"/panes/musical-template.html",blurb:"/panes/playblurb1.html",controller:play1controller},
        {menuitem:false, text:"It Could Be Any One Of Us",  path:"/mainstage/couldbe",      pane:"/panes/play-template.html",blurb:"/panes/playblurb4.html",controller:play4controller},
        {menuitem:false, text:"Be My Baby",                 path:"/mainstage/bemybaby",     pane:"/panes/play-template.html",blurb:"/panes/playblurb5.html",controller:play5controller},
        {menuitem:false, text:"Fox on the Fairway",         path:"/mainstage/foxonthefairway",pane:"/panes/play-template.html",blurb:"/panes/playblurb6.html",controller:play6controller},
        {menuitem:false, text:"The Outgoing Tide",          path:"/mainstage/outgoingtide", pane:"/panes/play-template.html",blurb:"/panes/playblurb7.html",controller:play7controller},
        {menuitem:false, text:"The Foreigner",       path:"/2016/mainstage/foreigner",  pane:"/panes/play-template.html",blurb:"/panes/2016/foreigner.html",controller:foreigner2016Controller},
        {menuitem:false, text:"Sin, Sex, and the CIA",path:"/2016/mainstage/sinsex",   pane:"/panes/play-template.html",blurb:"/panes/2016/sinsex.html",controller:sinsex2016Controller},
        {menuitem:false, text:"The Gin Game",        path:"/2016/mainstage/gingame",pane:"/panes/play-template.html",blurb:"/panes/2016/gingame.html",controller:gingame2016Controller},
        {menuitem:false, text:"The Spitfire Grill",  path:"/2016/mainstage/spitfire",      pane:"/panes/musical-template.html",blurb:"/panes/2016/spitfire.html",controller:spitfire2016Controller},
        {menuitem:false, text:"The Cemetery Club",   path:"/2016/mainstage/cemeteryclub",     pane:"/panes/play-template.html",blurb:"/panes/2016/cemeteryclub.html",controller:cemeteryclub2016Controller},
        {menuitem:false, text:"Death By Fatal Murder",path:"/2016/mainstage/fatalmurder",pane:"/panes/play-template.html",blurb:"/panes/2016/fatalmurder.html",controller:fatalmurder2016Controller},
        {menuitem:false, text:"Violet Sharp",          path:"/2016/mainstage/violetsharp", pane:"/panes/play-template.html",blurb:"/panes/2016/violetsharp.html",controller:violetsharp2016Controller},
        {menuitem:false, text:"Sinatra: A Centennial Celebration",  path:"/2016/ss/sinatra",          pane:"/panes/play-template.html",blurb:"/panes/JACTblurb1.html",controller:sinatra2016Controller},
        {menuitem:false, text:"Carrie: the Musical",      path:"/2016/ss/carrie",          pane:"/panes/play-template.html",blurb:"/panes/JACTblurb3.html",controller:carrie2016Controller},
        {menuitem:false, text:"Oh, Jack!",  path:"/2016/jact/ohjack",          pane:"/panes/play-template.html",blurb:"/panes/JACTblurb1.html",controller:jact2016OhjackController},
        {menuitem:false, text:"The Enchanted Sleeping Beauty",                 path:"/2016/jact/enchanted",         pane:"/panes/play-template.html",blurb:"/panes/JACTblurb2.html",controller:jact2016EnchantedController},
        {menuitem:false, text:"Looking Glass Land",      path:"/2016/jact/lookingglass",          pane:"/panes/play-template.html",blurb:"/panes/JACTblurb3.html",controller:jact2016Looking_Glass_LandController}



    ];

/**
 * Master Controller
 */
var $routeProviderReference;
var appController = angular.module('Dashboard', ['ngRoute', 'ngSanitize', 'ui.bootstrap'])
    .config(['$controllerProvider', function ($controllerProvider) {
        $controllerProvider.allowGlobals();
    }])
    ;
appController
    .filter('unsafe', function ($sce) {
        // console.log("hit unsafe with ", $sce);
        return $sce.trustAsHtml;
    })
    .filter('orderObjectBy', function () {
        return function (items, field, reverse) {
            var filtered = [];
            angular.forEach(items, function (item) {
                filtered.push(item);
            });
            filtered.sort(function (a, b) {
                return (a[field] > b[field] ? 1 : -1);
            });
            if (reverse) filtered.reverse();
            return filtered;
        };
    })
    .filter('orderObjectDateBy', function () {
        return function (items, field, reverse) {
            var filtered = [];
            angular.forEach(items, function (item) {
                filtered.push(item);
            });
            filtered.sort(function (a, b) {
                // console.log("sorting", a,field,a[field], b[field]);
                return (moment(a[field], "YYYY-MM-DD") > moment(b[field], "YYYY-MM-DD") ? 1 : -1);
            });
            if (reverse) filtered.reverse();
            return filtered;
        };
    })
    .filter('filterObjectBy', function () {
        return function (items, field, term, reverse) {
            var filtered = [];
            angular.forEach(items, function (item) {
                if (item[field] == term) {
                    filtered.push(item);
                }
            });
            if (reverse) filtered.reverse();
            return filtered;
        };
    })

    ;
function mapRoutes(theseNavItems) {
    var j = 0, currentRoute;

    for (j = 0; j < theseNavItems.length; j++) {

        currentRoute = theseNavItems[j];
        //console.log(currentRoute.path,currentRoute.pane,currentRoute.children);
        $routeProviderReference.when(currentRoute.path, {
            templateUrl: currentRoute.pane
        });
        if (currentRoute.controller) {
            $routeProviderReference.when(currentRoute.path, {
                templateUrl: currentRoute.pane,
                controller: currentRoute.controller,
                controllerName: currentRoute.controller.name
            });
        }
        if (currentRoute.children) {
            mapRoutes(currentRoute.children);
        }

    }

}
appController
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProviderReference = $routeProvider;
        }])
    .controller('MasterCtrl', ['$scope', '$http', MasterCtrl])
    .run(['$rootScope', '$route', function ($rootScope, $http, $route) {
        mapRoutes(navItems);
        $routeProviderReference.otherwise({ redirectTo: "/" });

        //		$route.reload();

    }]);

function MasterCtrl($scope, $http) {

    $scope.controllerList = {};
    $scope.content = {};
    console.log($http);
    $http.get('/panes/content.json')
        .then(function (res) {
            $scope.content = res.data;
            console.log("loaded JSON:", $scope.content);
        });
    var mobileView = 992;
    $scope.navItems = navItems;
    $scope.homepage = [
        {
            path: "/panes/home.html"
        },
        {
            path: "/panes/announcement.html"
        },
    ];
    function storeControllers(theseNavItems) {
        var j = 0, currentRoute;

        for (j = 0; j < theseNavItems.length; j++) {

            currentRoute = theseNavItems[j];

            if (currentRoute.controller) {
                $scope.controllerList[currentRoute.controller.name] = currentRoute.controller;
                appController.controller(currentRoute.controller.name, ['$scope', currentRoute.controller]);
                //                                 console.log(appController);


                //                    console.log(currentRoute.controller);
            }
            if (currentRoute.children) {
                storeControllers(currentRoute.children);
            }

        }
    }
    storeControllers(navItems);
    $scope.play1blurb = "/panes/playblurb1.html";
    $scope.play2blurb = "/panes/playblurb2.html";
    $scope.play3blurb = "/panes/playblurb3.html";
    $scope.play4blurb = "/panes/playblurb4.html";
    $scope.play5blurb = "/panes/playblurb5.html";
    $scope.play6blurb = "/panes/playblurb6.html";
    $scope.play7blurb = "/panes/playblurb7.html";
    $scope.JACT1blurb = "/panes/JACTblurb1.html";
    $scope.JACT2blurb = "/panes/JACTblurb2.html";
    $scope.JACT3blurb = "/panes/JACTblurb3.html";

    $scope.mainblurbpane = "/panes/mainblurb.html";
    $scope.auditionsblurb = "/panes/auditionsblurb.html";
    $scope.aboutahp = "/panes/aboutahp.html";
    $scope.headerpane = "/panes/header.html";
    $scope.addressblock = "/panes/addressblock.html";
    $scope.announcementpane = "/panes/announcement.html";
    $scope.socialbar = "/panes/social-bar.html";
    $scope.sidenav = "/panes/sidebar.html";
    $scope.getWidth = function () { return window.innerWidth; };


    $scope.getTemplate = function (controllerName) {
        //console.log("in getController:",controllerName, $scope.controllerList[controllerName]);
        return $scope.controllerList[controllerName];

    };
    $scope.fetchFromObject = function (obj, prop) {
        if (typeof obj === 'undefined') {
            return false;
        }
        var _index = prop.indexOf('.')
        if (_index > -1) {
            return $scope.fetchFromObject(obj[prop.substring(0, _index)], prop.substr(_index + 1));
        }
        return obj[prop];
    }
    //var testingDate="2016-10-03 08:00:00am";
    // Daterange filter
    $scope.showBetween = function (startDate, endDate) {

        //        console.log("got to showBetween:",startDate,endDate);
        var itemDate = moment();
        try {
            if (testingDate) itemDate = moment(testingDate);
        } catch (err) {
            //just... nothing
        }
        var s = moment(startDate, "YYYY-MM-DD");
        var e = moment(endDate, "YYYY-MM-DD");
        // console.log((itemDate >= s && itemDate <= e),e,itemDate,e);
        if (itemDate >= s && itemDate <= e) return true;
        return false;

    };
    $scope.logit = function (athing) {
        console.log(athing);
        return athing;
    };

    $scope.toggleSidebar = function () {
        $scope.toggle = !$scope.toggle;

        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function () { $scope.$apply(); };
    //    console.log($scope);
}
////    console.log("$scope in master-ctrl",$scope);
//    console.log("MasterCtrl in master-ctrl",MasterCtrl);
//    console.log("navItems in master-ctrl",navItems);
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