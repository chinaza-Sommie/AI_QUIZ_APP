import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from dummydata import tech_stacks
from aiApi import fetchQuestions

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Server is running!"

@app.route("/stacks", methods=["GET"])
def getStack():
    print("STACKS ENDPOINT HIT")
    return jsonify(tech_stacks)

@app.route("/questions", methods=["GET"])
def getQuestions():
    stack = request.args.get("stack")
    data = fetchQuestions(stack)
    print(stack)
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)