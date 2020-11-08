from django.http import HttpResponseRedirect
from django.shortcuts import render
from .forms import *
from .functions import *


def index(request):

    if request.method == 'POST': # if this is a POST request we need to process the form data
        form1 = playerNumForm(request.POST)
        if form1.is_valid():
            global PLAYER_NUM
            PLAYER_NUM = form1.cleaned_data['player_num']
            #print(form1.cleaned_data['player_num'])
            # print(forms['field'].value())
            # print(forms.cleaned_data['field'])

            return HttpResponseRedirect('/names')  # Redirect after POST

    else: # if a GET (or any other method) we'll create a blank form
        form1 = playerNumForm()

    return render(request, 'setup.html', {'form1': form1})


def get_name(request):
    forms = [NameForm() for i in range(PLAYER_NUM)]
    if request.method == 'POST': # if this is a POST request we need to process the form data
        plyers_name = request.POST.getlist("field")

        print(plyers_name)
        global P
        P = setupplayer(plyers_name)

        return HttpResponseRedirect('/main')  # Redirect after POST

    return render(request, 'names.html', {'forms':forms})


def main(request):
    players = P  # these are objects
    role = RoleForm()
    if request.method == 'POST':
        if request.POST.get('url') is not None:
            name = request.POST.get('url') # <-- NAME OF THE CHOOSEN VILLAGER
            print(name)
        if request.POST.get('role') is not None:
            role = request.POST.get("role") # <-- ROLE OF THE CHOOSEN VILLAGER
            print(role)

        #get_role(name, role)

        return HttpResponseRedirect('/main')

    return render(request, 'main.html', {'players':players, 'role': role})



def phases(request):
    players = P
    return render(request, 'phases.html', {'players':players})






