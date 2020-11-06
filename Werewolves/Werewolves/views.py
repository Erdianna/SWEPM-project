from django.http import HttpResponseRedirect
from django.shortcuts import render
from .forms import playerNumForm, NameForm
from .functions import *


def index(request):

    if request.method == 'POST': # if this is a POST request we need to process the form data
        form1 = playerNumForm(request.POST)
        if form1.is_valid():
            global PLAYER_NUM
            PLAYER_NUM = form1.cleaned_data['player_num']
            print(form1.cleaned_data['player_num'])
            # print(forms['field'].value())
            # print(forms.cleaned_data['field'])

            return HttpResponseRedirect('/names')  # Redirect after POST

    else: # if a GET (or any other method) we'll create a blank form
        form1 = playerNumForm()

    return render(request, 'index.html', {'form1': form1})


def get_name(request):
    forms = [NameForm() for i in range(PLAYER_NUM)]
    if request.method == 'POST': # if this is a POST request we need to process the form data
        plyers_name = request.POST.getlist("field")

        print(plyers_name)
        global playerObjects
        playerObjects = setupplayer(plyers_name)

        return HttpResponseRedirect('/main')  # Redirect after POST

    return render(request, 'names.html', {'forms':forms})

def main(request):


    return render(request, 'main.html', {'players':playerObjects})



