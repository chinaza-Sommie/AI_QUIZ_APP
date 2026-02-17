import { techStacks } from "../datasets/stackData";
// import '';

function SelectStack() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className="text-center w-[48%]"> 
        <div className="mb-10">
            <h1 className="text-white font-bold text-4xl mb-2"> Choose Your Stack</h1>
            <p className="text-[#7589a3] text-base"> Pick a technology to get quizzed on</p>
        </div>
        <div className="grid grid-cols-2 gap-4">

            {
                techStacks.map((stack) => (
                    <div className="bg-[#151923] border border-[#7589a3] text-center py-8 px-5 rounded rounded-lg tansition delay-150 duration-300 ease-in-out hover:cursor-pointer hover:shadow-xl/20 hover:shadow-[#7056f6]">
                        <div className="text-[#7056f6] font-bold text-xl mb-3"> {'</>'} </div>
                        <h1 className="text-white text-xl mb-3">{stack.name}</h1>
                        <p className="text-[#7589a3] text-base"> {stack.description} </p>
                    </div>
                ))
            }

        </div>
        <div className="pt-6"> 
            <p className="text-[#7589a3] text-base hover:text-[#7056f6] hover:cursor-pointer"> Back to Home</p>
        </div>
      </div>
    </div>
  );
}

export default SelectStack;
