var yearstring = "2015";
var navItems = [
        {menuitem:true, menuitem:true, text:"Home",path:"/",pane:"/panes/home.html"},
        {menuitem:true, collapsible:false, text:yearstring+" Mainstage Season",path:"/mainstage",pane:"/panes/mainstage.html", children:[
            {menuitem:true, text:"Butterflies Are Free",       path:"/mainstage/butterflies",  pane:"/panes/play-template.html",blurb:"/panes/playblurb2.html",controller:play2controller},
            {menuitem:true, text:"Funny Money",                path:"/mainstage/funnymoney",   pane:"/panes/play-template.html",blurb:"/panes/playblurb3.html",controller:play3controller},
            {menuitem:true, text:"The World Goes 'Round",      path:"/mainstage/world",        pane:"/panes/play-template.html",blurb:"/panes/playblurb1.html",controller:play1controller},
            {menuitem:true, text:"It Could Be Any One Of Us",  path:"/mainstage/couldbe",      pane:"/panes/play-template.html",blurb:"/panes/playblurb4.html",controller:play4controller},
            {menuitem:true, text:"Be My Baby",                 path:"/mainstage/bemybaby",     pane:"/panes/play-template.html",blurb:"/panes/playblurb5.html",controller:play5controller},
            {menuitem:true, text:"Fox on the Fairway",       path:"/mainstage/foxonthefairway",pane:"/panes/play-template.html",blurb:"/panes/playblurb6.html",controller:play6controller},
            {menuitem:true, text:"TBA",                        path:"/",pane:"/panes/home.html"}

        ]},
        {menuitem:true, collapsible:false, text:yearstring+" Children's Season",path:"/jact",pane:"/panes/jact.html", children:[
            {menuitem:true, text:"Don't Count Your Chickens",  path:"/jact/chickens",          pane:"/panes/JACTplay1.html"},
            {menuitem:true, text:"Snow White",                 path:"/jact/snowwhite",         pane:"/panes/JACTplay2.html"},
            {menuitem:true, text:"Emperor's New Clothes",      path:"/jact/emperors",          pane:"/panes/JACTplay3.html"}

        ]},
        {menuitem:true, text:"Ticket Information",path:"/tickets",pane:"/panes/tickets.html"},
        {menuitem:true, collapsible:true, text:yearstring+" Auditions",path:"/auditions",pane:"/panes/auditions.html", children:[
            {menuitem:true, text:yearstring+" Mainstage",path:"/auditions/mainstage",pane:"/panes/mainstageAuditions.html"},
            {menuitem:true, text:yearstring+" JACT",path:"/auditions/JACT",pane:"/panes/JACTAuditions.html"}
        ]},
    ];
