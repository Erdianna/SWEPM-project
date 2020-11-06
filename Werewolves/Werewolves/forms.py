from django import forms

class playerNumForm(forms.Form):
    player_num = forms.IntegerField(label='Number of players')

class NameForm(forms.Form):
    field = forms.CharField(label='', max_length=100)

#forms = [Foo(prefix=i) for i in range(5)]
