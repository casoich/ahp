var yearstring = "2015";
var navItems = [
        {menuitem:true,  text:"Home",path:"/",pane:"/panes/home.html"},
        {menuitem:true, collapsed:false, text:yearstring+" Mainstage Season",path:"/mainstage",pane:"/panes/mainstage.html", children:[
            {menuitem:true, text:"Butterflies Are Free",       path:"/mainstage/butterflies",  pane:"/panes/play-template.html",blurb:"/panes/playblurb2.html",controller:play2controller},
            {menuitem:true, text:"Funny Money",                path:"/mainstage/funnymoney",   pane:"/panes/play-template.html",blurb:"/panes/playblurb3.html",controller:play3controller},
            {menuitem:true, text:"The World Goes 'Round",      isMusical:true, path:"/mainstage/world",        pane:"/panes/musical-template.html",blurb:"/panes/playblurb1.html",controller:play1controller},
            {menuitem:true, text:"It Could Be Any One Of Us",  path:"/mainstage/couldbe",      pane:"/panes/play-template.html",blurb:"/panes/playblurb4.html",controller:play4controller},
            {menuitem:true, text:"Be My Baby",                 path:"/mainstage/bemybaby",     pane:"/panes/play-template.html",blurb:"/panes/playblurb5.html",controller:play5controller},
            {menuitem:true, text:"Fox on the Fairway",       path:"/mainstage/foxonthefairway",pane:"/panes/play-template.html",blurb:"/panes/playblurb6.html",controller:play6controller},
            {menuitem:true, text:"The Outgoing Tide",          path:"/mainstage/outgoingtide", pane:"/panes/play-template.html",blurb:"/panes/playblurb7.html",controller:play7controller}

        ]},
        {menuitem:true, collapsed:false, text:yearstring+" Children's Season",path:"/jact",pane:"/panes/jact.html", children:[
            {menuitem:true, text:"Invisible Dragon",  path:"/jact/dragon",          pane:"/panes/play-template.html",blurb:"/panes/JACTblurb1.html",controller:JACT1controller},
            {menuitem:true, text:"Snow White",                 path:"/jact/snowwhite",         pane:"/panes/play-template.html",blurb:"/panes/JACTblurb2.html",controller:JACT2controller},
            {menuitem:true, text:"Emperor's New Clothes",      path:"/jact/emperors",          pane:"/panes/play-template.html",blurb:"/panes/JACTblurb3.html",controller:JACT3controller}

        ]},
        {menuitem:true, text:"Ticket Information",path:"/tickets",pane:"/panes/tickets.html"},
        {menuitem:true, collapsed:true, text:yearstring+" Auditions",path:"/auditions",pane:"/panes/auditions.html", children:[
            {menuitem:true, text:yearstring+" Mainstage",path:"/auditions/mainstage",pane:"/panes/mainstageAuditions.html"},
            {menuitem:true, text:yearstring+" JACT",path:"/auditions/JACT",pane:"/panes/JACTAuditions.html"}
        ]},
        {menuitem:true, collapsed:true, text:"Dinner Theatre",path:"/lamplighter",pane:"/panes/dinnertheatre.html", children:[
            {menuitem:true, text:"Pricing",path:"/lamplighter/pricing",pane:"/panes/lamplighter.html"},
            {menuitem:true, text:"Lunch Menu",path:"/lamplighter/lunch",pane:"/panes/lamplighterlunch.html"},
            {menuitem:true, text:"Dinner Menu",path:"/lamplighter/dinner",pane:"/panes/lamplighterdinner.html"}
        ] },
        {menuitem:true, collapsed:true, text:"Education",path:"/education",pane:"/panes/education.html", children:[
            {menuitem:true, text:"Theater Classes",path:"/education/classes",pane:"/panes/classes.html"},
            {menuitem:true, text:"Apprenticeships",path:"/education/apprentice",pane:"/panes/apprentice.html"},
            {menuitem:true, text:"Scholarships",path:"/education/scholarships",pane:"/panes/scholarships.html"},
        ] },
        {menuitem:true, collapsed:true, text:"Employment",path:"/employment",pane:"/panes/employment.html", children:[
            {menuitem:true, text:"Volunteer Opportunities",path:"/employment/volunteer",pane:"/panes/volunteer.html"},
        ] },
        {menuitem:true, collapsed:true, text:"About Us",path:"/about",pane:"/panes/about.html"},
    ];
