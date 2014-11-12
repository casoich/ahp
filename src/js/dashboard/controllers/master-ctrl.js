/**
 * Master Controller
 */
angular.module('Dashboard')
    .controller('MasterCtrl', ['$scope', '$cookieStore', MasterCtrl]);

function MasterCtrl($scope, $cookieStore) {
    /**
     * Sidebar Toggle & Cookie Control
     *
     */
//      $('[data-toggle=offcanvas]').click(function() {
//    $('.row-offcanvas').toggleClass('active');
//  });

    var mobileView = 992;
    $scope.homepage=[
        {
            path:"/panes/home.html"
        },
        {
            path:"/panes/announcement.html"
        },
    ];
    $scope.mainblurbpane="/panes/mainblurb.html";
    $scope.announcementpane="/panes/announcement.html";
    $scope.socialbar="/panes/social-bar.html";
    $scope.sidenav="/panes/sidebar.html";
    $scope.getWidth = function() { return window.innerWidth; };

    $scope.$watch($scope.getWidth, function(newValue, oldValue)
    {
        if(newValue >= mobileView)
        {
            if(angular.isDefined($cookieStore.get('toggle')))
            {
                if($cookieStore.get('toggle') == false)
                {
                    $scope.toggle = false;
                }            
                else
                {
                    $scope.toggle = true;
                }
            }
            else 
            {
                $scope.toggle = true;
            }
        }
        else
        {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function() 
    {
        $scope.toggle = ! $scope.toggle;

        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function() { $scope.$apply(); };
}
