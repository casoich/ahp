/**
 * Master Controller
 */
var $routeProviderReference;
var appController = angular.module('Dashboard', ['ngRoute', 'ngSanitize', 'ui.bootstrap'])
    .config(['$controllerProvider', function ($controllerProvider) {
        //$controllerProvider.allowGlobals();
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
    var myvariable = "hi";
    console.log($http);
    $http.get('/panes/content.json')
        .then(function (res) {
            $scope.content = res.data;
            console.log("loaded JSON:", $scope.content);
        });
    var mobileView = 992;
    $scope.moment = window.moment;

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
    $scope.findObjectInArray = function(thisarray, prop, match) {
        if (!!thisarray) {
            for (var i = 0; i < thisarray.length; i++) {
                if (thisarray[i][prop] == match) {
                    return thisarray[i];
                }
            }
        }
    }


      //var testingDate="2017-07-25 08:00:00am";
    // Daterange filters
    $scope.showBetween = function (startDate, endDate) {
        var itemDate = moment();
        try {
            if (testingDate) itemDate = moment(testingDate);
        } catch (err) {
            //just... nothing
        }
        var s = moment(startDate, "YYYY-MM-DD");
        var e = moment(endDate, "YYYY-MM-DD");
        if (itemDate >= s && itemDate <= e) return true;
        return false;
    };
    $scope.isComingUp = function (startDate) {
        var itemDate = moment();
        try {
            if (testingDate) itemDate = moment(testingDate);
        } catch (err) {
            //just... nothing
        }
        var s = moment(startDate, "YYYY-MM-DD");
        var leadtime = moment(itemDate).add(21, 'days');
        if (leadtime >= s && itemDate<s) return true;
        return false;
    }
    $scope.nowShowing = function (startDate, endDate) {
        //semantic alias method
        var endtime = moment(endDate).add(1, 'days');
        return $scope.showBetween(startDate, endtime);
    }
    $scope.showOnThisDate = function (thisdate) {
        var internaldate = moment(thisdate, "YYYY-MM-DD");
        // console.log("got to showOnThisDate for date:", thisdate);
        var yearstring = moment(thisdate).format('YYYY');
        for (var thisshow in this.content.showinfo[yearstring]) {
            var thisshowobj = this.content.showinfo[yearstring][thisshow];
            // console.log(thisshowobj.startdate, "-", thisshowobj.enddate);
            var s = moment(thisshowobj.startdate, "YYYY-MM-DD");
            var e = moment(thisshowobj.enddate, "YYYY-MM-DD");
            if (internaldate >= s && internaldate <= e) {
                // console.log("returning:", thisshowobj);
                return thisshowobj;
            }
        }
        // console.log("failed to find",thisdate)
        return {};
    }
    $scope.eventToday = function () {
        var itemDate = moment();
        try {
            if (testingDate) itemDate = moment(testingDate);
        } catch (err) {
            //just... nothing
        }
        var yearstring = moment(itemDate).format('YYYY');
        for (thisEvent in this.content.eventinfo[yearstring]) {
            var thisEventObj=this.content.eventinfo[yearstring][thisEvent]
            for (var thisEventDate in thisEventObj.dates) {
                // console.log(moment(itemDate).format('YYYY-MM-DD') ,"vs.", thisEventObj.dates[thisEventDate].date);
                if (moment(itemDate).format('YYYY-MM-DD') == thisEventObj.dates[thisEventDate].date) {
                    // console.info("found a matching event:", thisEventObj);
                    return thisEventObj;
                }
            }
        }
    }
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
// console.log("end master-ctrl.js");