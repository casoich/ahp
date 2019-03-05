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
