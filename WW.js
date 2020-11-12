var players_list = [] //annas list of names
var players=[]; //list of objects


function addItem(container, template) {
        let name = prompt("Please enter player name");
        let name_id = name
        players_list.push(name);
        container.append(Mustache.render(template, { name, name_id }));
    }
    $(() => {
        const tmpl = $('#item_template').html()
        const container = $('#app');

        //for(let i=0; i<0; i++) { addItem(container, tmpl); } // if i want some players to be displayed by default

        $('#add_el').click(() => {
            addItem(container, tmpl);
        })

        container.on('click', '.del_el', (e) => {
            $(e.target).closest('.item').remove();
        });
    });

class player{
    constructor(idplayery){
        this.namev=idplayery;
        this.rolev=null;
        this.statusv=0; //0=alive, 1=selected, 2=dead
        this.loverv=0;
        this.Save_potion=0;
        this.Kill_potion=0;
        //WW=0
        //Villager=1
        //Witch=2
        //Hunter=3
        //Seer=4
        //cupid=5
        //WhiteWW=6
    }
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 /* phases -> 0:setup, 1:Cupid, 2:Seer, 3:WW, 4:Witchkill,  5:WitchSave, 6:Day */


function main(idplayer){
    if (x==0){
        setupfunctionpl(idplayer);
    }else if (x==1){
        document.getElementById(idplayer).style.backgroundColor = "Gold";
        Cupid(idplayer);
        if (countv==0){
            countv+=1;
        }else{
            x+=1;
        }
    }else if (x==2){
        document.getElementById(idplayer).style.backgroundColor = "Gold";
        Seer(idplayer);
        x+=1;
    }else if (x==3){
        document.getElementById(idplayer).style.backgroundColor = "Gold";
        WW(idplayer);
        x+=1;
    }else if (x==4){
        document.getElementById(idplayer).style.backgroundColor = "Gold";
        WWW(idplayer);
        x+=1;
    }else if (x==5){
        document.getElementById(idplayer).style.backgroundColor = "Gold";
        x+=1;
    }else if (x==6){
        document.getElementById(idplayer).style.backgroundColor = "Gold";
        sleepwalker(idplayer);
        x+=1;
    }else if (x==8){
        document.getElementById(idplayer).style.backgroundColor = "Gold";
        Day(idplayer);
        var confirm=checkifhunter(idplayer);
        if (confirm==1){
            x=9;
        }else{
            x=2;
        }
    }else if (x==9){
        document.getElementById(idplayer).style.backgroundColor = "Gold";
        hunter(idplayer);
        x=8;
        hunterkill=1;
    }else if (x==10){
        document.getElementById(idplayer).style.backgroundColor = "Gold";
        hunter(idplayer);
        x=2;
        hunterkill=1;
    }else if (x==100){
        document.getElementById(idplayer).style.backgroundColor = "Gold";
        Witchkillpl(idplayer);
    }else if (x==101){
        document.getElementById(idplayer).style.backgroundColor = "Gold";
        Witchsavepl(idplayer);
    }
}

function setupfunctionpl(idplayerx){
    if (setup==1){
        document.getElementById(idplayerx).style.backgroundColor = "red";
        sCupid(idplayerx);
    }else if (setup==2){
        document.getElementById(idplayerx).style.backgroundColor = "DeepSkyBlue";
        sSeer(idplayerx);
    }else if (setup==3){
        document.getElementById(idplayerx).style.backgroundColor = "black";
        sWW(idplayerx);
    }else if (setup==4){
        document.getElementById(idplayerx).style.backgroundColor = "GreenYellow";
        sWitch(idplayerx);
    }else if (setup==5){
        document.getElementById(idplayerx).style.backgroundColor = "yellow";
        sVillagers(idplayerx);
    }else if (setup==6){
        document.getElementById(idplayerx).style.backgroundColor = "Chocolate";
        sHunter(idplayerx);
    }else if (setup==7){
        document.getElementById(idplayerx).style.backgroundColor = "Chocolate";
        sWWW(idplayerx);
        x+=1;
    }
}
function setupfunction(){
    if (setup==0){
        document.getElementById("text1").innerHTML = "Cupid";
        document.getElementById("text2").innerHTML = "Select the Cupid";
        setup+=1;
    }else if (setup==1){
        document.getElementById("text1").innerHTML = "Seer";
        document.getElementById("text2").innerHTML = "Select the Seer";
        setup+=1;
    }else if (setup==2){
        document.getElementById("text1").innerHTML = "Werewolves";
        document.getElementById("text2").innerHTML = "Select the Werewolves";
        setup+=1;
    }else if (setup==3){
        document.getElementById("text1").innerHTML = "Witch";
        document.getElementById("text2").innerHTML = "Select the Witch";
        setup+=1;
    }else if (setup==4){
        document.getElementById("text1").innerHTML = "Villager";
        document.getElementById("text2").innerHTML = "Select the Villagers";
        setup+=1;
    }else if (setup==5){
        document.getElementById("text1").innerHTML = "Hunter";
        document.getElementById("text2").innerHTML = "Select the Hunter";
        setup+=1;
    }
}

function checkwinner() {
    var wwremaining=0;
        for (p in players){
            curr=players[p];
            if (curr.rolev==0){
                wwremaining+=1;
            }
        }
    if (wwremaining==0){
        document.getElementById("text1").innerHTML = "Game Over";
        document.getElementById("text2").innerHTML = "The Villagers Wins";
    }
    var villagersremaining=0;
        for (p in players){
            curr=players[p];
            if (curr.rolev!=0){
                villagersremaining+=1;
            }
        }
    if (villagersremaining==0){
        document.getElementById("text1").innerHTML = "Game Over";
        document.getElementById("text2").innerHTML = "The WW Win";
    }
}

/*-------------------------------------------------------------------*/
function phases(){
    if (x==0){
        if (players_list.length<8){
            alert("you need at least 8 players");
        }else if(players_list.length>17){
            alert("too many players -> 17 max");
        }else{
            if(setup<1){
                for (mm in players_list){
                    x1= new player(players_list[mm]);
                    players.push(x1);
                }
            }
            if (setup<7){
                setupfunction()
            }
        }
    }else if (x==1){
        makegrey();
        document.getElementById("text1").innerHTML = "Cupid";
        document.getElementById("text2").innerHTML = "Select the lovebirds";
    }else if (x==2){
        checkwinner()
        var lives=0;
        for (p in players){
            if (players[p].rolev==4){
                lives=1;
            }
        }
        if (lives==0){
            x+=1;
            phases()
        }else{
            makegrey();
            showdead();
            document.getElementById("text1").innerHTML = "Seer";
            document.getElementById("text2").innerHTML = "Select the Identity you want to know";
        }

    }else if (x==3){
        makegrey();
        showdead();
        document.getElementById("text1").innerHTML = "Werewolves";
        document.getElementById("text2").innerHTML = "Select the Victim";
    }else if (x==4) {
        var lives = 0;
        for (p in players) {
            if (players[p].rolev == 6) {
                lives = 1;
            }
        }
        if (lives == 0) {
            x += 1;
            phases();
        } else {
            makegrey();
            showdead();
            document.getElementById("text1").innerHTML = "White Werewolves";
            document.getElementById("text2").innerHTML = "Select a werewolve to kill";
        }
    }else if (x==5) {
        var lives=0;
        for (p in players){
            if (players[p].rolev==2){
                lives=1;
            }
        }
        if (lives == 0) {
            x += 1;
            phases();
        } else {
            makegrey();
            showdead();
            document.getElementById("text1").innerHTML = "Whitch";
            document.getElementById("text2").innerHTML = "Select a a potion or next";
            $('#KP').show();
            $('#SP').show();
            Witch();
            x+=1;
        }
    }else if (x==6){
        makegrey();
        showdead();
        checkdead();
        document.getElementById("text1").innerHTML = "sleepwalker";
        document.getElementById("text2").innerHTML = "click next to reveal";
        $('#KP').hide();
        $('#SP').hide();
        x+=1;
    }else if (x==7){
        makegrey();
        showdead();
        checkdead();
        document.getElementById("text1").innerHTML = "Reveal the night";
        document.getElementById("text2").innerHTML = "click next to reveal";
        x+=1;
    }else if (x==8){
        makegrey();
        showdead();
        checkwinner()
        lovers()
        var checkhunter=0;
        for (ll in players_list) {
            if (players_list[ll].statusv == 2 && players_list[ll].rolev == 3) {
                checkhunter = 1;
            }
        }
        if (checkhunter==1&&hunterkill==0){
            document.getElementById("text1").innerHTML = "Hunter";
            document.getElementById("text2").innerHTML = "Hunter choose a victim";
            x=9;
        }else{
            document.getElementById("text1").innerHTML = "Day ";
            document.getElementById("text2").innerHTML = "Choose a victim";
        }
    }else if (x==9){
        makegrey();
        showdead();
        checkwinner()
        lovers()
        document.getElementById("text1").innerHTML = "Hunter";
        document.getElementById("text2").innerHTML = "Hunter choose a victim";
        x=10;
    }

}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



//----------------------Selecting functions-----------------------------------------------
function getobj(i){
    for (j in players){
        news=players[j];
        if (news.namev==i){
            return news;
        }
    }
}
        //WW=0
        //Villager=1
        //Witch=2
        //Hunter=3
        //Seer=4
        //cupid=5

function sWW(s){
    here=getobj(s);
    here.rolev=0;
}
function sHunter(s){
    here=getobj(s);
    here.rolev=3;
}
function sWitch(s){
    here=getobj(s);
    here.rolev=2;
}
function sSeer(s){
    here=getobj(s);
    here.rolev=4;
}
function sVillagers(s){
    here=getobj(s);
    here.rolev=1;
}
function sCupid(s) {
    here=getobj(s);
    here.rolev=5;
}
function sWWW(s) {
    here=getobj(s);
    here.rolev=6;
}



//----------------------Action functions-----------------------------------------------
function Cupid(i){
    here=getobj(i);
    here.loverv=1;
}
function Seer(i){
    here=getobj(i);
    hererole = here.rolev;
    alert(hererole)
}
function WW(i){
    here=getobj(i);
    here.statusv=1;
}
function WWW(i){
    here=getobj(i);
    here.statusv=1;
}

function Witch(){
    var sele=None;
        for (p in players){
            if (players[p].statusv==1){
                sele=players[p].namev;
                alert("this player would be killed",sele);
                document.getElementById(sele).style.backgroundColor = "Gold";
            }
        }
}
function WitchKill(){
    x=100;
    document.getElementById("text2").innerHTML = "Select the Person you want to Kill";
}
function WitchSave(){
    x=101;
    document.getElementById("text2").innerHTML = "Select the Person you want to Save";
}
function Witchkillpl(i){
    here=getobj(i);
    here.status==1;
    x=6;
}
function Witchsavepl(){
    here=getobj(s);
    here.status==0;
    x=6;
}

function sleepwalker(i) {
    here=getobj(i);
    hererole = here.rolev;
    alert(hererole)
}
function Day(i){
    here=getobj(i);
    here.statusv=2;
    checkdead()
    showdead()
}

function hunter(i){
    here=getobj(i);
    here.statusv=2;
    checkdead()
    showdead()
}
function checkifhunter(i) {
    if (i.rolev==3 &&i.statusv==2){
        return 1;
    }
}

function lovers() {
    for (ll in players_list) {
        if (players_list[ll].statusv == 2 && players_list[ll].loverv == 1) {
            for (ll in players_list) {
                if (players_list[ll].loverv == 1) {
                    players_list[ll].statusv =1;
                }
            }
        }
    }
}





//--------------------- visual functions--------------------------------------------------------
function makegrey(){
    for (ll in players_list){
            document.getElementById(players_list[ll]).style.backgroundColor = "DarkGrey";
        }
}
function showdead(){
    for (ll in players_list){
        if (players_list[ll].statusv==2){
            document.getElementById(players_list[ll]).style.backgroundColor = "OrangeRed";
            document.getElementById(players_list[ll]).innerHTML = players_list[ll].rolev;
        }
    }
}
function checkdead(){
    for (p in players){
            if (players[p].statusv==1){
                players[p].statusv==2;
            }
    }
}











