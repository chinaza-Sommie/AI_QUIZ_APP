export const techStacks  = [
    {
        id: "react",
        name: "React",
        description: "Component-based UI library for building interactive interfaces",
        icon: '</>',
    },
    {
        id: "javascript",
        name: "Javascript",
        description: "Let's talk functionality of the web. Making components dynamic & versatile",
        icon: '</>',
    },
    {
        id: "html",
        name: "HTML",
        description: "Let's checkout the backbone of the web. Everything Structure and semantics",
        icon: '</>',
    },
    {
        id: "css",
        name: "CSS",
        description: "Style the web with layouts, animations and responsive design",
        icon: '</>',
    }
]

export const reactQuestion = [
    { id: 1,
        question: "What hook is used to manage state in a functional component?", 
        options: ["useEffect", "useState", "useContext", "useReducer"], 
        correctIndex: 1 
    },
    { id: 2, question: "What does JSX stand for?", options: ["JavaScript XML", "Java Syntax Extension", "JSON XML", "JavaScript Extension"], correctIndex: 0 },
    { id: 3, question: "Which method is used to render a React element into the DOM?", options: ["ReactDOM.render()", "React.create()", "React.mount()", "ReactDOM.append()"], correctIndex: 0 },
    { id: 4, question: "What is the purpose of useEffect?", options: ["Manage state", "Handle side effects", "Create context", "Optimize rendering"], correctIndex: 1 },
    { id: 5, question: "How do you pass data from parent to child component?", options: ["State", "Props", "Context", "Refs"], correctIndex: 1 },
    { id: 6, question: "What is the virtual DOM?", options: ["A browser API", "A lightweight copy of the real DOM", "A CSS framework", "A testing tool"], correctIndex: 1 },
    { id: 7, question: "Which hook replaces lifecycle methods in functional components?", options: ["useState", "useMemo", "useEffect", "useCallback"], correctIndex: 2 },
    { id: 8, question: "What is a React Fragment used for?", options: ["Adding styles", "Grouping elements without extra DOM nodes", "Creating portals", "Error handling"], correctIndex: 1 },
    { id: 9, question: "What does the key prop help React with?", options: ["Styling", "Identifying elements in lists", "Event handling", "Routing"], correctIndex: 1 },
    { id: 10, question: "What is the correct way to update state based on previous state?", options: ["setState(newValue)", "setState(prev => newValue)", "state = newValue", "this.state = newValue"], correctIndex: 1 },

]



// export const questionStack = {
//     react: reactQuestion,
//     javscript: reactQuestion,
// }