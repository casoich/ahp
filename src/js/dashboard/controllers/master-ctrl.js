/**
 * Master Controller
 */
var appController=angular.module('Dashboard',['ngRoute']);
appController
    .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl: 'panes/home.html'
        }).
        when('/mainStage', {
          templateUrl: 'panes/mainstage.html'
        }).
        otherwise({
          redirectTo: '/'
        });
    }])
     .controller('MasterCtrl', ['$scope',  MasterCtrl]);

function MasterCtrl($scope) {
    /**
     * Sidebar Toggle & Cookie Control
     *
     */
//      $('[data-toggle=offcanvas]').click(function() {
//    $('.row-offcanvas').toggleClass('active');
//  });

    var mobileView = 992;
    var yearstring = "2015";
    $scope.navitems=[
        {text:"Home",path:"/",pane:"/panes/home.html"},
        {text:yearstring+" Mainstage Season",path:"/mainstage",pane:"/panes/mainstage.html"},
        {text:yearstring+" Children's Season",path:"/jact",pane:"/panes/jact.html"},
        {text:"Ticket Information",path:"/tickets",pane:"/panes/tickets.html"},
    ]
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

//    $scope.$watch($scope.getWidth, function(newValue, oldValue)
//    {
//        if(newValue >= mobileView)
//        {
//            if(angular.isDefined($cookieStore.get('toggle')))
//            {
//                if($cookieStore.get('toggle') == false)
//                {
//                    $scope.toggle = false;
//                }            
//                else
//                {
//                    $scope.toggle = true;
//                }
//            }
//            else 
//            {
//                $scope.toggle = true;
//            }
//        }
//        else
//        {
//            $scope.toggle = false;
//        }
//
//    });

    $scope.toggleSidebar = function() 
    {
        $scope.toggle = ! $scope.toggle;

        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function() { $scope.$apply(); };
}
