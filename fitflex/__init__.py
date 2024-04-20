import os

from flask import (Flask, redirect, render_template, request,
                   send_from_directory, url_for)

from fitflex.Password import Password

app = Flask(__name__, template_folder= os.path.abspath("./templates"), static_folder=os.path.abspath("./static"))
#os.chdir("..")
#template_dir = os.path.abspath()
print("directory: " + os.getcwd())
print(os.path.abspath("./templates"))
@app.route('/')

def index():
   print('Request for index page received')
   return render_template('index.html')

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')

@app.route('/hello', methods=['POST'])
def hello():
   formEmail = request.form.get('email')
   formPassword = request.form.get('password')
   if formEmail:
       attempt = Password()
       if attempt.login(formEmail,formPassword) == True:
           status = "True"
       else:
           status = "False"
       return render_template('hello.html', status = status)
   else:
       print('Request for hello page received with no name or blank name -- redirecting')
       return redirect(url_for('index'))

