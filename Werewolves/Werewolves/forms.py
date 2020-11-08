from django import forms

class playerNumForm(forms.Form):
    player_num = forms.IntegerField(label='Number of players')

class NameForm(forms.Form):
    field = forms.CharField(label='', max_length=100)

FRUIT_CHOICES= [
    ('villager', 'Villager'),
    ('hunter', 'Hunter'),
    ('seer', 'Seer'),
    ('cupido', 'Cupido'),
    ('werewolf', 'Werewolf'),
    ('witch', 'Witch'),
    ]
#FRUIT_CHOICES= ['', 'Villager', 'Seer', 'Cupido', 'Hunter']

class RoleForm(forms.Form):
    role = forms.CharField(label='Choose role', widget=forms.Select(choices=FRUIT_CHOICES))


