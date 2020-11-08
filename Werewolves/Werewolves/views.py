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
        global P
        P = setupplayer(plyers_name)

        return HttpResponseRedirect('/main')  # Redirect after POST

    return render(request, 'names.html', {'forms':forms})


roles = []
def main(request):
    players = P  # these are objects
    role = RoleForm()
    if request.method == 'POST':
        url = request.POST.get('url')
        print(url)

        # for p in players:
        #     if p.name in request.POST:
        #print(request.POST)

        # if request.POST.get("choose_role"):
        # #if 'choose_role' in request.POST: # chooserole is naem
        #
        answer = request.POST.get("role")
        print(answer)
        roles.append(answer)
    #print(players) # list of the player objects
    #print(roles) # list of the selected roles

    return render(request, 'main.html', {'players':players, 'role': role})

def scratch(request):
    players = [p.name for p in P]
    dictionary = dict(zip(players, roles))
    print(dictionary)

    return render(request, 'scratch.html')

def process_url_from_client(request):
    url = request.POST.get('url')
    print(url)




