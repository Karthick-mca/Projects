from django.shortcuts import render
from .models import FeedbackData,ServiceData

# Create your views here.
def home(request):
    return render(request,'home.html')

def course(request):
    return render(request,'course.html')

def contact(request):
    return render(request,'contact.html')

def gallery(request):
    return render(request,'gallery.html')

def service(request):
    sd=ServiceData.objects.all()
    return render(request,'service.html',{'sd':sd})

def feedback(request):
    if request.method=='GET':   
        return render(request,'feedback.html')
    else:
        FeedbackData(name=request.POST.get('name'),
                     rating=request.POST.get('rating'),
                     feedback=request.POST.get('feedback')).save()
        form=FeedbackData.objects.all()
        return render(request,'feedback.html',{'form':form})

