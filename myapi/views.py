from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import EmailMessage
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.template.loader import render_to_string
import json

# Create your views here.
@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world!'})


@csrf_exempt
def send_contact_mail(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        subject = data.get('subject', 'No Subject')
        message = data.get('message', 'No Message')
        from_email = data.get('email')
        full_name = data.get('fullName', 'Anonymous')
        company_name = data.get('companyName', 'N/A')
        to_email = 'contact@bohesa.com'

        # Load HTML template and render with context
        html_content = render_to_string('emails/email_template.html', {
            'fullName': full_name,
            'email': from_email,
            'companyName': company_name,
            'subject': subject,
            'message': message
        })

        try:
            print('I am here')
            email = EmailMessage(
                subject,
                html_content,
                from_email=None,  # The email will appear from the default FROM_EMAIL in Django settings
                to=[to_email],
            )
            email.content_subtype = "html"  # Set the email content as HTML
            email.send()
            print('Am I sending')
            return JsonResponse({'status': 'success'}, status=200)
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=500)
    return JsonResponse({'status': 'invaild request'}, status=400)



