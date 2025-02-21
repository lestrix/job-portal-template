from django.http import JsonResponse

# Create your views here.
def job_list(request):
    jobs = [
        {"title" : "Python Developer", "company": "Tech Corp"},
        {"title" : "React Developer", "company": "Code Corp"},
    ],
    return JsonResponse(jobs, safe=False)