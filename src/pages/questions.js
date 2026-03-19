import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Questions({scores, setScores, answers, setAnswers}) {
    const navigate = useNavigate();
    const { selected } = useParams();
    const [currnumber, setCurrnumber] = useState(0);
    const [questions, setQuestions] = useState([])
    const currquestion = questions[currnumber];
    const isAnswered = answers[currquestion?.id] !== undefined;
    
    useEffect(() => {
        if(!selected){
            navigate("/");
        }
    }, [selected, navigate]);



    useEffect(() => {
        fetch(`http://127.0.0.1:5000/questions?stack=${selected}`)
        .then((result) => result.json())
        .then((data) => {
            setQuestions(data)
        })
        .catch((error) => {
        console.log(error)
        // alert("⚠️ Unable to load stacks. The server might be down.");
        // navigate("/")
        })
    }, [])

    const moveToAnsStorage = (questionID, selectedIndex) => {
        setAnswers((prev) => ({
            ...prev,
             [questionID]: selectedIndex
        }))
    }

    const submitAnswers = () =>{
        navigate('/results')
    }
    
    if (questions.length === 0) {
        return <div>Loading questions...</div>;
    }
    
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className="w-[45%]">
        <div className="flex justify-between text-[#7589a3] text-base mb-5">
            <div className="capitalize"> {selected} </div>
            <div> {currnumber + 1} / {questions.length} </div>
        </div>

        <div className="bg-[#151923] border border-[#202531] p-8 rounded-xl">
            <h1 className="text-white font-bold text-2xl mb-2"> { currquestion.question } </h1>

            <div className="mt-5">
                { currquestion.options.map((option,index) => (
                    <div key={index} tabIndex={0} onClick={() => moveToAnsStorage(currquestion.id, index)} 
                    className={`flex mt-2 bg-[#161b24] px-5 py-4 text-lg text-[#7589a3] rounded-lg transition delay-150 duration-300 ease-in-out hover:bg-inherit hover:cursor-pointer
                    ${answers[currquestion.id] === index ? "border border-[#7056f6]" : "border border-[#202531]"
                    }`}>
                        <div className="mr-3">
                            <p className="bg-[#202531] px-2 rounded-lg"> {String.fromCharCode(65 + index)} </p>
                        </div>
                        <div className="">
                            <p>{ option }</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="flex justify-between items-center pt-4">
            <button className="text-base text-white py-2 px-6 bg-[#ef4343] rounded-md tansition delay-150 duration-300 ease-in-out hover:cursor-pointer hover:text-white "> Quit </button>
            { currnumber < (questions.length - 1)  ? (
                <button
                disabled={!isAnswered}
                onClick={()=> ( setCurrnumber(currnumber + 1))}
                className={`text-base py-2 px-6 rounded rounded-md
                    ${!isAnswered ? "bg-[#191a22] text-[#7589a3] border border-[#7589a3] cursor-not-allowed ": "bg-[#7056f6] text-white hover:cursor-pointer"}`}> Next </button>
            ) : (
                <button
                disabled={!isAnswered}
                onClick={() => submitAnswers()}
                className={`text-base py-2 px-6 rounded rounded-md
                    ${!isAnswered ? "bg-[#191a22] text-[#7589a3] border border-[#7589a3] cursor-not-allowed ": "bg-[#7056f6] text-white hover:cursor-pointer"}`}> Submit </button>
            ) }
        </div>
      </div>
    </div>
  );
}

export default Questions;
