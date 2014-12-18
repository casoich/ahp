/**
 * Master Controller
 */
var yearstring = "2015";

var navItems = [
        {text:"Home",path:"/",pane:"/panes/home.html"},
        {text:yearstring+" Mainstage Season",path:"/mainstage",pane:"/panes/mainstage.html", children:[
            {text:"The World Goes 'Round",path:"/mainstage/play1",pane:"/panes/play1.html",blurb:"/panes/playblurb1.html"},
            {text:"Butterflies Are Free",path:"/mainstage/play2",pane:"/panes/play2.html"},
            {text:"Chasing Manet",path:"/mainstage/play3",pane:"/panes/play3.html"},
            {text:"play4",path:"/mainstage/play4",pane:"/panes/play4.html"},
            {text:"play5",path:"/mainstage/play5",pane:"/panes/play5.html"},
            {text:"play6",path:"/mainstage/play6",pane:"/panes/play6.html"}

        ]},
        {text:yearstring+" Children's Season",path:"/jact",pane:"/panes/jact.html", children:[
            {text:"JACTplay1",path:"/jact/play1",pane:"/panes/JACTplay1.html"},
            {text:"JACTplay2",path:"/jact/play2",pane:"/panes/JACTplay2.html"},
            {text:"JACTplay3",path:"/jact/play3",pane:"/panes/JACTplay3.html"}

        ]},
        {text:"Ticket Information",path:"/tickets",pane:"/panes/tickets.html"},
        {text:yearstring+" Auditions",path:"/auditions",pane:"/panes/auditions.html", children:[
            {text:yearstring+" Mainstage",path:"/auditions/mainstage",pane:"/panes/mainstageAuditions.html"},
            {text:yearstring+" JACT",path:"/auditions/JACT",pane:"/panes/JACTAuditions.html"}
        ]},
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
    $scope.play1blurb="/panes/playblurb1.html";
    $scope.play2blurb="/panes/playblurb2.html";
    $scope.play3blurb="/panes/playblurb3.html";
    $scope.play4blurb="/panes/playblurb4.html";
    $scope.play5blurb="/panes/playblurb5.html";
    $scope.play6blurb="/panes/playblurb6.html";
    $scope.play7blurb="/panes/playblurb7.html";
    $scope.mainblurbpane="/panes/mainblurb.html";
    $scope.mainblurbpane="/panes/auditionsblurb.html";
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
