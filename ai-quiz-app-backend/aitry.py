# from openai import OpenAI
# client = OpenAI()

# def fetchQuestions(stack):
#     response = client.responses.create(
#         model="gpt-4.1-mini",
#         input=f"Generate 5 multiple choice quiz questions about {stack}.",
#         response_format={
#             "type": "json_schema",
#             "json_schema": {
#                 "name": "question_stack",
#                 "schema": {
#                     "type": "array",
#                     "items": {
#                         "type": "object",
#                         "properties": {
#                             "id": {"type": "number"},
#                             "question": {"type": "string"},
#                             "options": {
#                                 "type": "array",
#                                 "items": {"type": "string"}
#                             },
#                             "correctIndex": {"type": "number"}
#                         },
#                         "required": ["id", "question", "options", "correctIndex"]
#                     }
#                 }
#             }
#         }
#     )

#     return response.output_parsed  


from openai import OpenAI
from dotenv import load_dotenv
import os


load_dotenv()

client = OpenAI()

def fetchQuestions():
    response = client.responses.create(
        model="gpt-4.1-mini",
        input=f"Give a very short one-word answer to hello.",
        max_output_tokens=16
    )
    print(response.output[0].content[0].text)
    return response.output[0].content[0].text

fetchQuestions()