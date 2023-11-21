from django.shortcuts import render, redirect
from .models import Usuario

def edita(request):
    items = Usuario.objects.all()
    return render(request, 'editar.html', {'items': items})

def registra(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        lastName = request.POST.get('lastName')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        passname = request.POST.get('passname')
        item = Usuario(name=name, lastName=lastName, email=email, phone=phone, passname=passname)
        item.save()
        return redirect('edita')
    return render(request, 'registro.html')

def Actualiza(request, pk):
    item = Usuario.objects.get(pk=pk)
    if request.method == 'POST':
        item.name = request.POST.get('name')
        item.lastName = request.POST.get('lastName')
        item.email = request.POST.get('email')
        item.phone = request.POST.get('phone')
        item.passname = request.POST.get('passname')
        item.save()
        return redirect('edita')
    return render(request, 'Actualizar.html', {'item': item})

def borra(request, pk):
    item = Usuario.objects.get(pk=pk)
    item.delete()
    return redirect('edita')

