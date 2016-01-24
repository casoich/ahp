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
