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
    $scope.JACT1blurb="/panes/JACTblurb1.html";
    $scope.JACT2blurb="/panes/JACTblurb2.html";
    $scope.JACT3blurb="/panes/JACTblurb3.html";

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