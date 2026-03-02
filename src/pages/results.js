import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { reactQuestion, analysisData } from "../datasets/stackData";

function Results({answers, setAnswers}) {
  const navigate = useNavigate();
  const [scores, setScores] = useState(0);
  const analysis_Datas = analysisData[0];

  useEffect(()=> {
    if(!answers || Object.keys(answers).length === 0){
      navigate("/");
      return;
    }

    let curr_score = 0;
    reactQuestion.forEach((question) => {
      const eachAnswer = answers[question.id];
  
      if(question.correctIndex === eachAnswer){
        curr_score += 10;
      }else{
        curr_score += 0
      }
    })
    setScores(curr_score);
    
  }, [answers, navigate]);

  const calculateCorrectAnswers = () => {
    const total_correct_answers = scores / reactQuestion.length;
    return total_correct_answers;
  }
  

  return (
     <div className='flex justify-center items-center py-10'>
      <div className="w-[80%] md:w-[45%]">

        {/* top section */}
        <div className="bg-[#151923] text-center border border-[#202531] py-12 rounded-xl">
            <div className="inline-block mb-10 border-b-4 border-[#7056f6] pb-3">
                <h2 className="text-white text-5xl font-bold">{scores}</h2>
                <p className="text-[#7589a3] text-base pt-1"> {calculateCorrectAnswers()} / 10 correct</p>
            </div>
            <div>
                <h2 className="text-white text-2xl font-semibold"> You're a Legend</h2>
                <p className="text-[#7589a3] text-base pt-1">HTML Quiz</p>
            </div>
        </div>

        {/* question review */}
        <div className="bg-[#151923] border border-[#202531] p-10 mt-5 rounded-xl">
            <div className="flex  justify-between items-center">
              <h3 className="text-white text-2xl font-semibold mb-5"> Review Answers</h3>
              <p className="text-white text-lg font-semibold mb-5 px-4 py-1 rounded-md bg-[#7056f6] hover:cursor-pointer"> Performance Analysis</p>
            </div>
            
            <div className="hidden">
              {
                reactQuestion.map((eachQuestion, index) => {
                  const selectedAnswer = answers[index+1];
                  const correct = selectedAnswer === eachQuestion.correctIndex;
                  return(
                    <>
                      {correct ? (
                      <div key={index+1} className="bg-[#152226] border border-[#18593b] px-5 py-3 mb-5 rounded-xl">
                        <h4 className="text-white text-lg font-semibold">{eachQuestion.question} </h4>
                        <p className="text-base text-[#93ecb8]"> Your Answer: {eachQuestion.options[selectedAnswer]} </p>
                      </div>
                    ) : (
                      <div key={index+1} className="bg-[#281a25] border border-[#67272f] px-5 py-3 mb-5 rounded-xl">
                        <h4 className="text-white text-lg font-semibold">{eachQuestion.question}</h4>
                        <p className="text-base "> <span className="text-[#ef4343]">Your Anwser: {eachQuestion.options[selectedAnswer]}</span> <span className="text-white">||</span> <span className="text-[#81cba1]">Correct Answer: {eachQuestion.options[eachQuestion.correctIndex]} </span></p>
                      </div>
                    )}
                    </>
                  )       
                })
              }
            </div>
            
        </div>

        <div className="bg-[#151923] border border-[#202531] p-10 mt-5 rounded-xl">
            <h3 className="text-white text-2xl font-semibold mb-5"> Performance Analysis</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-5">
              {analysis_Datas.concepts.map((concept, index) => (
                <div key={index} className="bg-[#191a22] border border-[#202531] px-5 py-3 mb-5 rounded-xl text-[#7689a4]">
                  {concept}
                </div>
              ))}
            </div>

            <div className="bg-[#1c1c2f] border border-[#2e295c] rounded-xl px-5 py-3">
              <h3 className="text-[#6f55f4] text-lg font-semibold mb-2"> Recommendation</h3>
              <p className="text-[#7689a4] text-sm"> {analysis_Datas.recommendation} </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
