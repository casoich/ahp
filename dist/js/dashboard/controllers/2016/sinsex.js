var sinsex2016Controller= function($scope) {
    console.log("got controller:",this);
    $scope.playinfo={
        title:"Sin, Sex, and the C.I.A.",
                path:"#/2016/mainstage/sinsex",

        isMusical:false,
        date:"7:30 June 16, 17, 18; 23, 24, 25   <br/>2:00  Sun June 19",
        writtenby : "Written by Michael & Susan Parker   ",
        directedby : "Directed by Ron Ferrara",
        headline:"",
        subhead:"",
        stylesheet:"/panes/styleinsert-default.html",
//        backpic:"/img/Butterflies.png",
        insetpic:"/img/sinsex.jpg",
        infoblurb:"/panes/2016/sinsexblurb.html",
        castlist:[
            {
                name:"Ron Ferrara", role:"Director",
                photopath:"./bios/ron-ferrara.jpg",
                biopath:"./bios/ron-ferrara-sscia.html"
            },
            {
                name:"Susan Szymanowski Shirey", role:"Stage Manager",
                photopath:"./bios/sue-shirey.jpg",
                biopath:"./bios/sue-shirey-sscia.html"
            },
            {
                name:"Terri Bowser", role:"Margaret Johnson",
                photopath:"./bios/terri-bowser.jpg",
                biopath:"./bios/terri-bowser-sscia.html"
            },
            {
                name:"Mike Crosby", role:"Luke James",
                photopath:"./bios/mike-crosby.jpg",
                biopath:"./bios/mike-crosby-sscia.html"
            },
            {
                name:"Rick Dutrow", role:"Daniel Warren",
                photopath:"./bios/rick-dutrow.jpg",
                biopath:"./bios/rick-dutrow-sscia.html"
            },
            {
                name:"Andrew Nesky", role:"Rev. Samuel Abernathy",
                photopath:"./bios/andy-nesky.jpg",
                biopath:"./bios/andy-nesky-sscia.html"
            },
            {
                name:"Rachel Nicely", role:"Heather Ann Faraday",
                photopath:"./bios/rachel-nicely.jpg",
                biopath:"./bios/rachel-nicely-sscia.html"
            },
            {
                name:"Stephan Ie Swift", role:"Ranger Don",
                photopath:"./bios/stephanie-swift-antill.jpg",
                biopath:"./bios/stephanie-swift-sscia.html"
            },
            {
                name:"Angela Trovato", role:"Millicent",
                photopath:"./bios/angela-trovato.jpg",
                biopath:"./bios/angela-trovato-sscia.html"
            }

        ]
    }  ;     
};
