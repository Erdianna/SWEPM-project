var players_list = [] //list of names
var players=[]; //list of objects


function addItem(container, template) { //function to add name to list of names and to assign it to the element
    let name = prompt("Please enter player name");
    let name_id = name
    players_list.push(name);
    container.append(Mustache.render(template, { name, name_id }));
}

function erase(idit,arr){// function to drop name out of namelist if deleted
    for( var i = 0; i < arr.length; i++){
        if ( arr[i] == idit) {
            arr.splice(i, 1);
            //for (d in players_list){
            //    alert(players_list[d]);
            //}
        }
    }
}
    $(() => {
        const tmpl = $('#item_template').html()
        const container = $('#app');

        //for(let i=0; i<0; i++) { addItem(container, tmpl); } // if i want some players to be displayed by default

        $('#add_el').click(() => {
            addItem(container, tmpl);
        })

        container.on('click', '.del_el', (e) => { // delete element if clicked
            $(e.target).closest('.item').remove();
            ddd=(e.target).closest('.item').id
            erase(ddd,players_list);

        });
    });

class player{ //class for all players -> each player gets his object
    constructor(idplayerv){
        this.namev=idplayerv;
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


function main(idplayer){ // main function gets called whenever a player gets clicked and passes the name of the player
    if (x==0){// depending on what phase of the game you are in x will tell you
        setupfunctionpl(idplayer); //set up phase follows the var setup
    }else if (x==1){
        document.getElementById(idplayer).style.backgroundColor = "Gold";
        Cupid(idplayer);

        if (countv==0){
            countv+=1;
        }else{
            x+=1;
        }
    }else if (x==2){//Seer function gets called
        document.getElementById(idplayer).style.backgroundColor = "Gold";
        Seer(idplayer);
        x+=1;
    }else if (x==4){//Werewolf function gets called
        document.getElementById(idplayer).style.backgroundColor = "Gold";
        WW(idplayer);
        x+=1;
    }else if (x==5){// white wherewolf kills a werewolf
        document.getElementById(idplayer).style.backgroundColor = "Gold";
        WWW(idplayer);
        x+=1;
    }else if (x==6){// buffer for whitch
    }else if (x==3){//sleepwalker
        document.getElementById(idplayer).style.backgroundColor = "Gold";
        sleepwalker(idplayer);
        x+=1;
    }else if (x==8){//day voting
        document.getElementById(idplayer).style.backgroundColor = "Gold";
        Day(idplayer);
        var confirm=checkifhunter(idplayer);//check if hunter allready dead
        if (confirm==1){
            x=9;
        }else{
            x=2;
        }
    }else if (x==9){//hunter night phase -> if he dies during the night
        document.getElementById(idplayer).style.backgroundColor = "Gold";
        hunter(idplayer);
        x=8;
        hunterkill=1;
    }else if (x==10){//hunter day phase -> if he dies during the day
        document.getElementById(idplayer).style.backgroundColor = "Gold";
        hunter(idplayer);
        x=2;
        hunterkill=1;
    }else if (x==100){ //witchkill potion
        document.getElementById(idplayer).style.backgroundColor = "Gold";
        Witchkillpl(idplayer);
    }else if (x==101){//witch save potion
        document.getElementById(idplayer).style.backgroundColor = "Gold";
        Witchsavepl(idplayer);
    }
}

function setupfunctionpl(idplayerx){ //setting up all the role to each player
    if (setup==1){
        document.getElementById(idplayerx).style.backgroundColor = "red";
        sCupid(idplayerx);
    }else if (setup==2){
        document.getElementById(idplayerx).style.backgroundColor = "DeepSkyBlue";
        sSeer(idplayerx);
    }else if (setup==3){
        document.getElementById(idplayerx).style.backgroundColor = "#595959";
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
        document.getElementById(idplayerx).style.backgroundColor = "#e6e6e6";
        sWWW(idplayerx);
        x+=1;
    }
}
function setupfunction(){
    if (setup==0){
        document.getElementById("text1").innerHTML = "Cupid";
        document.getElementById("text2").innerHTML = "Select Cupid";
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
    }else if (setup==6){
        document.getElementById("text1").innerHTML = "White Werewolf";
        document.getElementById("text2").innerHTML = "Select the white Werewolf ";
        setup+=1;
    }
}

function checkwinner() { //function to determin if either the werewolves or the villagers have won
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
function phases(){ //phases function gets called everytime the next button gets klicked
    if (x==0){//set up phase
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
    }else if (x==1){ //
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

    }else if (x==4){
        makegrey();
        showdead();
        $('#SW').hide();
        document.getElementById("text1").innerHTML = "Werewolves";
        document.getElementById("text2").innerHTML = "Select the Victim";
    }else if (x==5) {
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
            if (white==0){
                white+=1;
                x+=1;
                phases();
            }else{
                makegrey();
                showdead();
                document.getElementById("text1").innerHTML = "White Werewolf";
                document.getElementById("text2").innerHTML = "Select a werewolve to kill";
                white=0;
            }
        }
    }else if (x==6) {
        var potions=0;
        var lives=0;
        for (p in players){
            if (players[p].rolev==2){
                lives=1;
                if (players[p].Kill_potion==1){
                    potions+=1;
                }
                if (players[p].Save_potion==1){
                    potions+=1;
                }
            }

        }
        if (lives == 0 && potions==0) {
            x += 1;
            phases();
        } else {
            makegrey();
            showdead();
            document.getElementById("text1").innerHTML = "Whitch";
            document.getElementById("text2").innerHTML = "Select a a potion or next";
            for (wit in players){
                if (players[wit].rolev==2 && players[wit].Kill_potion==1){
                    $('#KP').show();
                }
                if (players[wit].rolev==2 && players[wit].Save_potion==1){
                    $('#SP').show();
                }
            }
            Witch();
            x+=1;
        }
    }else if (x==3){
        makegrey();
        showdead();
        document.getElementById("text1").innerHTML = "sleepwalker";
        document.getElementById("text2").innerHTML = "click a player to reveal the identity or click kill to kill a villager at random";
        $('#SW').show();
    }else if (x==7){
        makegrey();
        showdead();
        checkdead();
        document.getElementById("text1").innerHTML = "Reveal the night";
        document.getElementById("text2").innerHTML = "click next to reveal";
        $('#KP').hide();
        $('#SP').hide();
        x+=1;
    }else if (x==8){
        makegrey();
        checkdead();
        showdead();
        checkwinner();
        lovers();
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
        checkwinner();
        lovers();
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
} //give name and returns the object of player
        //WW=0
        //Villager=1
        //Witch=2
        //Hunter=3
        //Seer=4
        //cupid=5

function sWW(s){
    here=getobj(s);
    here.rolev=0;
} //assigns all the roles to players
function sHunter(s){
    here=getobj(s);
    here.rolev=3;
}
function sWitch(s){
    here=getobj(s);
    here.rolev=2;
    here.Kill_potion=1;
    here.Save_potion=1;
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
} //selects the lovers
function Seer(i){
    here=getobj(i);
    alert(rolename(here));
}//shows their role
function WW(i){
    here=getobj(i);
    here.statusv=1;
}//kills a person
function WWW(i){
    here=getobj(i);
    here.statusv=1;
}//kills a werewolf

function Witch(){
    var sele=null;
        for (p in players){
            if (players[p].statusv==1){
                sele=players[p].namev;
                alert("this player would be killed",sele);
                document.getElementById(sele).style.backgroundColor = "Gold";
            }
        }
}// shows who would die that night
function WitchKill(){ //sets x for killing
    x=100;
    document.getElementById("text2").innerHTML = "Select the Person you want to Kill";
}
function WitchSave(){ //ets x for saving
    x=101;
    document.getElementById("text2").innerHTML = "Select the Person you want to Save";
}
function Witchkillpl(i){
    here=getobj(i);
    here.status==1;
    x=6;
} //function kill person
function Witchsavepl(i){
    here=getobj(i);
    here.status==0;
    x=7;
} // function save person

function sleepwalker(i) {
    here=getobj(i);
    alert(rolename(here));
} // prints out role of person that was klicked
function sleepwalkerkill() {// kill last person of list of all ordinary villagers
    var villlist=[];
    for (vill in players){
        if (players[vill].rolev==1 && players[vill].status==0){
            villlist.push(players[vill]);
        }
    }
    villlist[-1].statusv=1;
    x+=1;
}
function Day(i){ //kills selected person
    here=getobj(i);
    here.statusv=2;
    checkdead();
    showdead();
}

function hunter(i){
    here=getobj(i);
    here.statusv=2;
    checkdead()
    showdead()
} //kill person selected
function checkifhunter(i) {
    if (i.rolev==3 &&i.statusv==2){
        return 1;
    }
} // checks if hunter was active allready;

function lovers() { //gets called when a lover has died
    for (ll in players_list) {
        if (players_list[ll].statusv == 2 && players_list[ll].loverv == 1) {
            for (ll in players_list) {
                if (players_list[ll].loverv == 1) {
                    players_list[ll].statusv=2;
                    alert("a lover has been killed and the second lover also died");
                }
            }
        }
    }
}





//--------------------- visual functions--------------------------------------------------------
function makegrey(){ //makes all players appear grey
    for (ll in players_list){
            document.getElementById(players_list[ll]).style.backgroundColor = "DarkGrey";
        }
}
function showdead(){ // makes all dead player apper
    for (ll in players){
        if (players[ll].statusv==2){
            document.getElementById(players[ll].namev).style.backgroundColor = "OrangeRed";
            newname=players[ll].namev+"xx";
            rolen=rolename(players[ll].rolev);
            document.getElementById(newname).innerHTML=rolen;
        }
    }
}
function checkdead(){ //kills all selected people
    for (p in players){
            if (players[p].statusv==1){
                players[p].statusv=2;
            }
    }
}

function rolename(i){
    if (i.rolev==0){
        return "Werwolve"
    }else if (i.rolev==1){
        return "Villager"
    }else if (i.rolev==2){
        return "Witch"
    }else if (i.rolev==3){
        return "Hunter"
    }else if (i.rolev==4){
        return "Seer"
    }else if (i.rolev==5){
        return "Cupid"
    }else if (i.rolev==6){
        return "White werewolve"
    }
} //returns role name when role number given 
        //WW=0
        //Villager=1
        //Witch=2
        //Hunter=3
        //Seer=4
        //cupid=5
        //white werwolve










