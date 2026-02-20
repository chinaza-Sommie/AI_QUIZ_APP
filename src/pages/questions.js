import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { techStacks } from "../datasets/stackData";
import { reactQuestion } from "../datasets/stackData";
// import '';

function Questions() {
    // fetch the questions using an array number eg: question[currnumber]
    // loop through the current questions list
    // store the answers selected in an object
    // increment the currnumber count when user clicks next and move to the next
    
    const [currnumber, setCurrnumber] = useState(0);
    const currquestion = reactQuestion[currnumber];
    const [answers, setAnswers] = useState({});
    const moveToAnsStorage = (questionID, selectedIndex) => {
        // for each question selected:
        // 1. get the id, answers selected (this should be the element index)
        // 2. set it to the answers storage
        setAnswers((prev) => ({
            ...prev,
             [questionID]: selectedIndex
        }))
    }

    const scoreAnswers = () => {
        // loop through the questions array
        // {0: 1; 1: 2}
        let scores = 0;
        reactQuestion.forEach((question) => {
            const eachAnswer = answers[question.id];

            if(question.correctIndex === eachAnswer){
                scores += 10;
            }else{
                scores += 0
            }
        })
        console.log(scores);
        return scores;
    }
    
    
    
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className="w-[45%]">
        <div className="flex justify-between text-[#7589a3] text-base mb-5">
            <div> {techStacks[0].name} </div>
            <div> {currnumber + 1} / {reactQuestion.length} </div>
        </div>

        <div className="bg-[#151923] border border-[#202531] p-8 rounded-xl">
            <h1 className="text-white font-bold text-2xl mb-2"> { currquestion.question } </h1>

            <div className="mt-5">
                { currquestion.options.map((option,index) => (
                    <div key={index} tabIndex={0} onClick={() => moveToAnsStorage(currquestion.id, index)} className="flex mt-2 bg-[#161b24] border border-[#202531] px-5 py-4 text-lg text-[#7589a3] rounded-lg transition delay-150 duration-300 ease-in-out hover:bg-inherit hover:cursor-pointer focus:border-[#7056f6]">
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
            <button className="text-base text-[#7589a3] py-2 px-6 tansition delay-150 duration-300 ease-in-out hover:cursor-pointer hover:text-white "> Quit </button>
            { currnumber < (reactQuestion.length - 1)  ? (
                <button 
                onClick={()=> ( setCurrnumber(currnumber + 1))}
                className="bg-[#7056f6] text-base text-white py-2 px-6 rounded rounded-md hover:cursor-pointer"> Next </button>
            ) : (
                <button
                onClick={() => scoreAnswers()}
                className="bg-[#7056f6] text-base text-white py-2 px-6 rounded rounded-md hover:cursor-pointer"> Submit </button>
            ) }
        </div>
      </div>
    </div>
  );
}

export default Questions;
