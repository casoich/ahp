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
