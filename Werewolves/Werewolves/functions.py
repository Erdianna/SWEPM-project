
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
    Players = []
    for x in num:
        y=Player(x)
        Players.append(y)
    print(Players)
    return Players