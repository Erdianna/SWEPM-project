werewolves=[];
hunter=None;
witch=None;
fortuneteller=None;
var x=0 /* phases -> 0:setup, 1:Cupid, 2:FT, 3:WW, 4:Witch, 5:Day */
var setup=0
function main(idplayer){ //behind the players buttons
    if (x==0){
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
        Day(idplayer);
    }
}
function setupfunction(idplayer){
    if (setup==1){
        sCupid(idplayer);
    }else if (setup==2){
        sFT(idplayer);
    }else if (setup==3){
        sWW(idplayer);
    }else if (setup==4){
        sWitch(idplayer);
    }
}
function phases(){ //behind next button
    alert('hello')
    if (x===0){
        if (setup<5){
            setup+=1;
        }else{
            x+=1;
        }
    }else if (x===1){
        document.getElementById("text1").innerHTML = "Cupid";
        document.getElementById("text2").innerHTML = "Select the lovebirds";
        x+=1;
    }else if (x===2){
        document.getElementById("text1").innerHTML = "Fortune Teller";
        document.getElementById("text2").innerHTML = "Select the Identity you want to know";
        x+=1;
    }else if (x===3){
        document.getElementById("text1").innerHTML = "Werewolves";
        document.getElementById("text2").innerHTML = "Select the Victim";
        x+=1;
    }else if (x===4){
        document.getElementById("text1").innerHTML = "Witch";
        document.getElementById("text2").innerHTML = "Select the Potion or next";
        x+=1;
    }
}
function selectWerewolves(x){
    werewolves.append(x);
    $.ajax({
            type: "POST",
            url: "/selectWW/",
            data: {
                "var1": "val1",
                "csrfmiddlewaretoken":"{{ csrf_token }}",
            },
            dataType: 'json',
            success: function(data) {
            }
        })
}