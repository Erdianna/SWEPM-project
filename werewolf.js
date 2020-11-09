var players_list = []

function addItem(container, template) {
    let name = prompt("Please enter player name");
    let name_id = name
    players_list.push(name); // adds every new player to the list
    container.append(Mustache.render(template, { name, name_id }));
}

$(() => {
    const tmpl = $('#item_template').html()
    const container = $('#app');

    $('#KP').hide();
    $('#SP').hide();

    //for(let i=0; i<4; i++) { addItem(container, tmpl); } // if i want some players to be displayed by default

    $('#add_el').click(() => {
        addItem(container, tmpl);
    })

    container.on('click', '.del_el', (e) => {
        $(e.target).closest('.item').remove();
    });
});

//----------------------------------


var werewolves=[];
var villagers=[];
var hunter=None;
var witch=None;
var fortuneteller=None;
var cupid=None;

var selected=None;

var LifeWW=None;
var LifeHunter=1;
var LifeWitch=1;
var LifeForutneteler=1;

 /* phases -> 0:setup, 1:Cupid, 2:FT, 3:WW, 4:Witchkill,  5:WitchSave, 6:Day */


function main(idplayer){
    if (x==0){
        //alert('if x= 0 was triggered')
        setupfunction(idplayer);
    }else if (x==1){
        Cupid(idplayer);
    }else if (x==2){
        FT(idplayer);
    }else if (x==3){
        WW(idplayer);
    }else if (x==4){
        Witch(idplayer);
    }else if (x==5){
        WitchKill(idplayer);
    }else if (x==6){
        WitchSave(idplayer);
    }else if (x==7){
        Day(idplayer);
    }
}

function setupfunction(idplayer){
    if (setup==1){
        document.getElementById("text1").innerHTML = "Cupid";
        document.getElementById("text2").innerHTML = "Select the Cupid";
        sCupid(idplayer);
    }else if (setup==2){
        document.getElementById("text1").innerHTML = "Seer";
        document.getElementById("text2").innerHTML = "Select the Seer";
        sFT(idplayer);
    }else if (setup==3){
        document.getElementById("text1").innerHTML = "Werewolves";
        document.getElementById("text2").innerHTML = "Select the Werewolves";
        sWW(idplayer);
    }else if (setup==4){
        document.getElementById("text1").innerHTML = "Witch";
        document.getElementById("text2").innerHTML = "Select the Witch";
        sWitch(idplayer);
    }else if (setup==5){
        document.getElementById("text1").innerHTML = "Villager";
        document.getElementById("text2").innerHTML = "Select the Villagers";
        sVillagers(idplayer);
    }else if (setup==6){
        document.getElementById("text1").innerHTML = "Hunterr";
        document.getElementById("text2").innerHTML = "Select the Hunter";
        sHunter(idplayer);
    }
}
/*-------------------------------------------------------------------*/

function phases(){
    $('#add_el').hide();
    $('.del_el').hide();
    //alert(x)
    if (x==0){
        if (setup<7){
            setup+=1;
        }else{
            x+=1;
        }
    }else if (x==1){
        document.getElementById("text1").innerHTML = "Cupid";
        document.getElementById("text2").innerHTML = "Select the lovebirds";
        x = x+1;
    }else if (x==2){
        if (LifeForutneteler==0){
            x+=1;
        }else{
        document.getElementById("text1").innerHTML = "Seer";
        document.getElementById("text2").innerHTML = "Select the Identity you want to know";
        x+=1;}

    }else if (x==3){
        document.getElementById("text1").innerHTML = "Werewolves";
        document.getElementById("text2").innerHTML = "Select the Victim";
        x+=1;
    }else if (x==4) {
        if (LifeWitch == 0) {
            x += 3;
        } else {
        document.getElementById("text1").innerHTML = "Witch";
        document.getElementById("text2").innerHTML = "Select the Potion or next";
        x += 3;
        $('KP').show();
        $('SP').show();
        }

    }else if (x==7){
        document.getElementById("text1").innerHTML = "Day ";
        document.getElementById("text2").innerHTML = "Select the Potion or next";
        x=2;
        $('KP').hide();
        $('SP').hide();
    }
}
//---------------------------------------------------------------------
function Witchkill(){
    x=5;
    document.getElementById("text2").innerHTML = "Select the Person you want to Kill or next";
}
function Witchsave(){
    if (selected != None){
        selected=None;
    }
    x=6;
}

//----------------------Selecting functions-----------------------------------------------
function sWW(i){
    werewolves.append(i);
}
function sHunter(i){
    hunter=i;
}
function sWitch(i){
    witch=i;
}
function sFT(i){
    fortuneteller=i;
}
function sVillagers(i){
    villagers.append(i);
}
function sCupid(i) {
    cupid=i;
}

//----------------------Action functions-----------------------------------------------
function Cupid(i){
    //
}
function FT(i){
    //
}
function WW(i){
    //
}
function Witch(i){
    //get data if a person is select to die
}
function Day(i){
    //
}