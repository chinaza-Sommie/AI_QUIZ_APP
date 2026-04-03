from dummydata import reactQuestions, htmlQuestions

def fetchQuestions(stack):
    if stack == "html":
        return htmlQuestions
    else:
        return reactQuestions
