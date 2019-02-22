var yearstring = "2019";
var navItems = [
        {menuitem:true,  text:"Home",path:"/",pane:"/panes/home.html"},
        {menuitem:true, collapsed:false, text:yearstring+" Mainstage Season",path:"/mainstage",pane:"/panes/home.html", children:[
            { menuitem: true, text: "The Taffetas", path: "/2019/mainstage/taffetas", pane: "/panes/play-template.html", blurb: "/panes/2019/taffetas.html", controller: taffetas2019Controller },
            { menuitem: true, text: "Moonlight and Magnolias", path: "/2019/mainstage/moonlightandmagnolias", pane: "/panes/play-template.html", blurb: "/panes/2019/moonlightandmagnolias.html", controller: moonlightandmagnolias2019Controller },
            { menuitem: true, text: "random", path: "/2019/mainstage/random", pane: "/panes/play-template.html", blurb: "/panes/2019/random.html", controller: random2019Controller },
            { menuitem: true, text: "A Funny Thing Happened on the Way to the Forum", path: "/2019/mainstage/forum", pane: "/panes/play-template.html", blurb: "/panes/2019/forum.html", controller: forum2019Controller },
            { menuitem: true, text: "The Savannah Sipping Society", path: "/2019/mainstage/savannahsipping", pane: "/panes/play-template.html", blurb: "/panes/2019/savannahsipping.html", controller: savannahsipping2019Controller },
            { menuitem: true, text: "Outside Mullingar", path: "/2019/mainstage/mullingar", pane: "/panes/play-template.html", blurb: "/panes/2019/mullingar.html", controller: mullingar2019Controller },
            { menuitem: true, text: "Blithe Spirit", path: "/2019/mainstage/blithespirit", pane: "/panes/play-template.html", blurb: "/panes/2019/blithespirit.html", controller: blithespirit2019Controller },

        ]},
        {
            menuitem: false, collapsed: false, text: yearstring + " Special Events", path: "/special", pane: "/panes/home.html", children: [
                { menuitem: true, text: "Miss Meatball", path: "/2017/events/meatball", pane: "/panes/2017/meatballblurb.html", blurb: "/panes/2017/meatballblurb.html" },

        ]},
        {menuitem:true, collapsed:false, text:yearstring+" Children's Season",path:"/jact",pane:"/panes/jact.html", children:[
            { menuitem: true, text: "Hyronomous A. Frog", path: "/2019/JACT/hyronomous", pane: "/panes/play-template.html", blurb: "/panes/2019/hyronomous.html", controller: hyronomous2019Controller },
            { menuitem: true, text: "Let Your Hair Down, Rapunzel", path: "/2019/JACT/rapunzel", pane: "/panes/play-template.html", blurb: "/panes/2019/rapunzel.html", controller: rapunzel2019Controller },
            { menuitem: true, text: "Charlotte's Web", path: "/2019/JACT/charlottesweb", pane: "/panes/play-template.html", blurb: "/panes/2019/charlottesweb.html", controller: charlottesweb2019Controller },

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
        {menuitem:true, collapsed:false, text:"Education",path:"/education",pane:"/panes/education.html", children:[
            {menuitem:true, text:"Theater Classes",path:"/education/kidscamp",pane:"/panes/kidscamp.html"},
            {menuitem:true, text:"Apprenticeships",path:"/education/apprentice",pane:"/panes/apprentice.html"},
            { menuitem: true, text: "Opportunities for kids", path: "/education/forkids", pane: "/panes/forkids.html" },
            { menuitem: true, text: "Scholarships", path: "/education/scholarships", pane: "/panes/scholarships.html" }
        ] },
        {menuitem:true, collapsed:true, text:"Employment",path:"/employment",pane:"/panes/employment.html", children:[
            {menuitem:true, text:"Volunteer Opportunities",path:"/employment/volunteer",pane:"/panes/volunteer.html"},
        ] },
        { menuitem: true, collapsed: true, text: "Rehearsal Schedule", path: "/calendar", pane: "/panes/calendar.html" },
        { menuitem: true, collapsed: true, text: "About Us", path: "/about", pane: "/panes/about.html" },
        {menuitem:false, text:"Butterflies Are Free",       path: "/mainstage/butterflies", pane: "/panes/play-template.html", blurb: "/panes/playblurb2.html", controller: play2controller },
        {menuitem:false, text:"Funny Money",                path:"/mainstage/funnymoney",   pane:"/panes/play-template.html",blurb:"/panes/playblurb3.html",controller:play3controller},
        {menuitem:false, text:"The World Goes 'Round",      path:"/mainstage/world",isMusical:true,         pane:"/panes/musical-template.html",blurb:"/panes/playblurb1.html",controller:play1controller},
        {menuitem:false, text:"It Could Be Any One Of Us",  path:"/mainstage/couldbe",      pane:"/panes/play-template.html",blurb:"/panes/playblurb4.html",controller:play4controller},
        {menuitem:false, text:"Be My Baby",                 path:"/mainstage/bemybaby",     pane:"/panes/play-template.html",blurb:"/panes/playblurb5.html",controller:play5controller},
        {menuitem:false, text:"Fox on the Fairway",         path:"/mainstage/foxonthefairway",pane:"/panes/play-template.html",blurb:"/panes/playblurb6.html",controller:play6controller},
        {menuitem:false, text:"The Outgoing Tide",          path:"/mainstage/outgoingtide", pane:"/panes/play-template.html",blurb:"/panes/playblurb7.html",controller:play7controller},
        {menuitem:false, text:"The Foreigner",              path:"/2016/mainstage/foreigner",  pane:"/panes/play-template.html",blurb:"/panes/2016/foreigner.html",controller:foreigner2016Controller},
        {menuitem:false, text:"Sin, Sex, and the CIA",      path:"/2016/mainstage/sinsex",   pane:"/panes/play-template.html",blurb:"/panes/2016/sinsex.html",controller:sinsex2016Controller},
        {menuitem:false, text:"The Gin Game",               path:"/2016/mainstage/gingame",pane:"/panes/play-template.html",blurb:"/panes/2016/gingame.html",controller:gingame2016Controller},
        {menuitem:false, text:"The Spitfire Grill",         path:"/2016/mainstage/spitfire",      pane:"/panes/musical-template.html",blurb:"/panes/2016/spitfire.html",controller:spitfire2016Controller},
        {menuitem:false, text:"The Cemetery Club",          path:"/2016/mainstage/cemeteryclub",     pane:"/panes/play-template.html",blurb:"/panes/2016/cemeteryclub.html",controller:cemeteryclub2016Controller},
        {menuitem:false, text:"Death By Fatal Murder",      path:"/2016/mainstage/fatalmurder",pane:"/panes/play-template.html",blurb:"/panes/2016/fatalmurder.html",controller:fatalmurder2016Controller},
        {menuitem:false, text:"Violet Sharp",               path:"/2016/mainstage/violetsharp", pane:"/panes/play-template.html",blurb:"/panes/2016/violetsharp.html",controller:violetsharp2016Controller},
        {menuitem:false, text:"Sinatra: A Centennial Celebration",  path:"/2016/ss/sinatra",          pane:"/panes/play-template.html",blurb:"/panes/JACTblurb1.html",controller:sinatra2016Controller},
        {menuitem:false, text:"Carrie: the Musical",        path:"/2016/ss/carrie",          pane:"/panes/play-template.html",blurb:"/panes/JACTblurb3.html",controller:carrie2016Controller},
        {menuitem:false, text:"Oh, Jack!",                  path:"/2016/jact/ohjack",          pane:"/panes/play-template.html",blurb:"/panes/JACTblurb1.html",controller:jact2016OhjackController},
        {menuitem:false, text:"The Enchanted Sleeping Beauty", path:"/2016/jact/enchanted",         pane:"/panes/play-template.html",blurb:"/panes/JACTblurb2.html",controller:jact2016EnchantedController},
        {menuitem:false, text:"Looking Glass Land",         path:"/2016/jact/lookingglass",          pane:"/panes/play-template.html",blurb:"/panes/JACTblurb3.html",controller:jact2016Looking_Glass_LandController},
        {menuitem:false, text:"Always - Patsy Cline",       path:"/2017/mainstage/patsycline", pane:"/panes/play-template.html",blurb:"/panes/2017/patsycline.html",controller:patsycline2017Controller},
        {menuitem:false, text:"Mixed Emotions",             path:"/2017/mainstage/mixedemotions", pane:"/panes/play-template.html",blurb:"/panes/2017/mixedemotions.html",controller:mixedemotions2017Controller},
        {menuitem:false, text:"Seussical - The Musical",    path:"/2017/mainstage/seussical", pane:"/panes/play-template.html",blurb:"/panes/2017/seussical.html",controller:seussical2017Controller},
        {menuitem:false, text:"Rumors",                     path:"/2017/mainstage/rumors", pane:"/panes/play-template.html",blurb:"/panes/2017/rumors.html",controller:rumors2017Controller},
        {menuitem:false, text:"The Dixie Swim Club",        path:"/2017/mainstage/dixie", pane:"/panes/play-template.html",blurb:"/panes/2017/dixie.html",controller:dixie2017Controller},
        {menuitem:false, text:"Boeing Boeing",              path:"/2017/mainstage/boeing", pane:"/panes/play-template.html",blurb:"/panes/2017/boeing.html",controller:boeing2017Controller},
        {menuitem:false, text:"Winnie the Pooh Birthday Tail", path:"/2017/JACT/winnie", pane:"/panes/play-template.html",blurb:"/panes/2017/winnie.html",controller:winnie2017Controller},
        {menuitem:false, text:"Cinderella",                 path:"/2017/JACT/cinderella", pane:"/panes/play-template.html",blurb:"/panes/2017/cinderella.html",controller:cinderella2017Controller},
        { menuitem: false, text: "Social Security", path: "/2018/mainstage/socialsecurity", pane: "/panes/play-template.html", blurb: "/panes/2018/socialsecurity.html", controller: socialsecurity2018Controller },
        { menuitem: false, text: "Steel Magnolias", path: "/2018/mainstage/steelmagnolias", pane: "/panes/play-template.html", blurb: "/panes/2018/steelmagnolias.html", controller: steelmagnolias2018Controller },
        { menuitem: false, text: "Grease", path: "/2018/mainstage/grease", pane: "/panes/play-template.html", blurb: "/panes/2018/grease.html", controller: grease2018Controller },
        { menuitem: false, text: "Mama Won't Fly", path: "/2018/mainstage/mamawontfly", pane: "/panes/play-template.html", blurb: "/panes/2018/mamawontfly.html", controller: mamawontfly2018Controller },
        { menuitem: false, text: "Kitchen Witches", path: "/2018/mainstage/kitchenwitches", pane: "/panes/play-template.html", blurb: "/panes/2018/kitchenwitches.html", controller: kitchenwitches2018Controller },
        { menuitem: false, text: "A Comedy of Tenors", path: "/2018/mainstage/comedyoftenors", pane: "/panes/play-template.html", blurb: "/panes/2018/comedyoftenors.html", controller: comedyoftenors2018Controller },
        { menuitem: false, text: "Sleeping Beauty", path: "/2018/JACT/sleepingbeauty", pane: "/panes/play-template.html", blurb: "/panes/2018/sleepingbeauty.html", controller: sleepingbeauty2018Controller },
        { menuitem: false, text: "L'il Red", path: "/2018/JACT/lilred", pane: "/panes/play-template.html", blurb: "/panes/2018/lilred.html", controller: lilred2018Controller },
        { menuitem: false, text: "Really Rosie", path: "/2018/JACT/reallyrosie", pane: "/panes/play-template.html", blurb: "/panes/2018/reallyrosie.html", controller: reallyrosie2018Controller }



    ];
