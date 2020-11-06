from django.http import HttpResponseRedirect
from django.shortcuts import render
from .forms import playerNumForm, Foo
import sys


def index(request):

    if request.method == 'POST': # if this is a POST request we need to process the form data
        form1 = playerNumForm(request.POST)
        if form1.is_valid():
            global PLAYER_NUM
            PLAYER_NUM = form1.cleaned_data['player_num']
            print(form1.cleaned_data['player_num'])

            return HttpResponseRedirect('/names')  # Redirect after POST

    else: # if a GET (or any other method) we'll create a blank form
        form1 = playerNumForm()

    return render(request, 'index.html', {'form1': form1})


def get_name(request):
    #if request.method == 'POST': # if this is a POST request we need to process the form data
    # for i in range(PLAYER_NUM):
    #     from
    forms = [Foo(prefix=i) for i in range(PLAYER_NUM)]

    if request.method == 'POST':
        #if forms.is_valid():

        #print(forms['field'].value())
        #print(forms.cleaned_data['field'])
        print(forms)
        for i in forms:
            print(i)

        # PLAYER_NUM = form1.data['player_num'] # player_num is the form from forms.py
        # print(PLAYER_NUM, file=sys.stderr)
    #else: # if a GET (or any other method) we'll create a blank form
     #   form1 = playerNumForm()

    return render(request, 'names.html', {'forms':forms})



