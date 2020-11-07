
class Player:
    def __init__(self,x):
        self.name=x
        self.Role=None
        self.status=0 #0=alive, 1=selected, 2=dead
        self.love=0
        self.Save_potion=0
        self.Kill_potion=0
        #WW=0
        #Villager=1
        #Witch=2
        #Hunter=3
        #Fortune Telle=4

def setupplayer(num): # num is list of players
    global Players
    Players = []
    for x in num:
        y=Player(x)
        Players.append(y)
    return Players

#selecting roles

def findobj(x):
    for y in Players:
        if y.name==x:
            return y

def selectWerewolf(x):
    y=findobj(x)
    y.Role=0
def selectVillager(x):
    y=findobj(x)
    y.Role=1
def selectWitch(x):
    y=findobj(x)
    y.Role=2
    y.Save_potion=1
    y.Kill_potion=1
def selecthunter(x):
    y=findobj(x)
    y.Role=3
def selectFT(x):
    y=findobj(x)
    y.Role=4

#----------Cupid----------------
def selectlovebirds (x,y):
    l1=findobj(x)
    l2=findobj(y)
    l1.love=1
    l2.love=1

#----------WW----------------
def WWselect(x):
    y=findobj(x)
    y.status=1

def kill(x):
    y=findobj(x)
    y.status=2
    if y.Role==3:
        return True
#----------Witch----------------
def SavePotion(x):
    for y in Players:
        if y.Role==2:
            y.Save_potion=0
    y=findobj(x)
    y.status=0

def KillPotion(x):
    for y in Players:
        if y.Role==2:
            y.Kill_potion=0
    y=findobj(x)
    y.status=2

