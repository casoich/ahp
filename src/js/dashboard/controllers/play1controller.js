var play1controller= function($scope) {
    
    $scope.playinfo={
        title:"The World Goes 'Round",
        isMusical:true,
        date:"May 29,30,31; June 5, 6, 7 at 7:30pm<br/>June 1 &amp; 8 at 2:00 pm",
        writtenby : "John Kander and Fred Ebb",
        directedby : "someone",
        headline:"Music! Humor! Romance! All that jazz!",
        subhead:"The first show at Apple Hill is set somewhere, featuring people.",
        stylesheet:"/panes/styleinsert-default.html",
        backpic:"",
        insetpic:"img/WorldGoesRoundMedium.jpg",
        infoblurb:"/panes/play1infoblurb.html",
        castlist:[
            {
                name:"Thom Person", role:"Director",
                photopath:"./bios/thom-mclaughlan-thumb.jpg",
                biopath:"./bios/thom-mclaughlan.html"
            },
            {
                name:"Someother Person", role:"star",
                photopath:"./bios/thom-mclaughlan-thumb.jpg",
                biopath:"./bios/thom-mclaughlan.html"
            }

        ]
    }  ;     
};
