/**
 * Master Controller
 */
    var yearstring = "2015";

var navItems = [
        {text:"Home",path:"/",pane:"/panes/home.html"},
        {text:yearstring+" Mainstage Season",path:"/mainstage",pane:"/panes/mainstage.html", children:[
            {text:"play1",path:"/mainstage/play1",pane:"/panes/play1.html"},
            {text:"play2",path:"/mainstage/play2",pane:"/panes/play2.html"},
            {text:"play3",path:"/mainstage/play3",pane:"/panes/play3.html"},
            {text:"play4",path:"/mainstage/play4",pane:"/panes/play4.html"},
            {text:"play5",path:"/mainstage/play5",pane:"/panes/play5.html"},
            {text:"play6",path:"/mainstage/play6",pane:"/panes/play6.html"},
            {text:"play7",path:"/mainstage/play7",pane:"/panes/play7.html"}

        ]},
        {text:yearstring+" Children's Season",path:"/jact",pane:"/panes/jact.html", children:[
            {text:"JACTplay1",path:"/jact/play1",pane:"/panes/JACTplay1.html"},
            {text:"JACTplay2",path:"/jact/play2",pane:"/panes/JACTplay2.html"},
            {text:"JACTplay3",path:"/jact/play3",pane:"/panes/JACTplay3.html"}

        ]},
        {text:"Ticket Information",path:"/tickets",pane:"/panes/tickets.html"}
    ];
var $routeProviderReference;
var appController=angular.module('Dashboard',['ngRoute']);
function mapRoutes (theseNavItems) {
    var j = 0, currentRoute;

    for ( ; j < theseNavItems.length; j++ ) {

            currentRoute = theseNavItems[j];
console.log(currentRoute.path,currentRoute.pane,currentRoute.children);
            $routeProviderReference.when(currentRoute.path, {
                    templateUrl: currentRoute.pane
            });
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
    $scope.mainblurbpane="/panes/mainblurb.html";
    $scope.headerpane="/panes/header.html";
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
