from flask import Flask, render_template, request, json
import string, random, sys, logging
logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
password = ''
lights = {
    "bedroom": False,
    "kitchen": False,
    "livingroom": False,
    "bathroom": False,
    "hallway": False
}

@app.route('/', methods=('GET',))
def home():
    return render_template('index.html')

@app.route('/password', methods=('GET',))
def getPassword():
    global password
    password = ''.join(random.choices(string.ascii_letters, k=10))
    data = {
        'otp': password
    }
    return app.response_class(
        response=json.dumps(data),
        mimetype='application/json; charset=utf-8'
    )

@app.route('/lights', methods=('GET',))
def getLights():
    global lights
    logging.debug(lights)
    return app.response_class(
        response=json.dumps(lights),
        mimetype='application/json; charset=utf-8'
    )

@app.route('/lights', methods=('POST',))
def setLights():
    global password, lights
    otp = request.args.get('otp', None)
    if otp != password or password == '':
        return app.response_class(
            response='wrong password',
            status=401
        )
    room = request.args.get('room')
    value = request.args.get('value')
    if value == 'true':
        lights[room] = True
    elif value == 'false':
        lights[room] = False
    else:
        return app.response_class(
            response='not value',
            status=400
        )
    password = ''
    return app.response_class(
        response=json.dumps(lights),
        mimetype='application/json; charset=utf-8'
    )

if __name__ == '__main__':
    port = 80 if len(sys.argv) < 2 else sys.argv[1]
    app.run(host='0.0.0.0', port=port)
