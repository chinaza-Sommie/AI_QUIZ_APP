import { techStacks } from "../datasets/stackData";
// import '';

function Questions() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className="w-[45%]">
        <div className="flex justify-between text-[#7589a3] text-base mb-5">
            <div> JavaScript </div>
            <div> 1/10 </div>
        </div>

        <div className="bg-[#151923] border border-[#202531] p-8 rounded-xl">
            <h1 className="text-white font-bold text-2xl mb-2"> What is the output of typeof null? </h1>

            <div className="mt-5">
                <div className="flex mt-2 bg-[#161b24] border border-[#202531] px-5 py-4 text-lg text-[#7589a3] rounded-lg tansition delay-150 duration-300 ease-in-out hover:bg-inherit hover:cursor-pointer hover:">
                    <div className="mr-3">
                        <p className="bg-[#202531] px-2 rounded-lg"> A </p>
                    </div>
                    <div className="">
                        <p>'null'</p>
                    </div>
                </div>

                <div className="flex mt-3 bg-[#161b24] border border-[#202531] px-5 py-4 text-lg text-[#7589a3] rounded-lg">
                    <div className="mr-3">
                        <p className="bg-[#202531] px-2 rounded-lg"> B </p>
                    </div>
                    <div className="">
                        <p>'null'</p>
                    </div>
                </div>

                <div className="flex mt-3 bg-[#161b24] border border-[#202531] px-5 py-4 text-lg text-[#7589a3] rounded-lg">
                    <div className="mr-3">
                        <p className="bg-[#202531] px-2 rounded-lg"> C </p>
                    </div>
                    <div className="">
                        <p>'null'</p>
                    </div>
                </div>

                <div className="flex mt-3 bg-[#161b24] border border-[#202531] px-5 py-4 text-lg text-[#7589a3] rounded-lg">
                    <div className="mr-3">
                        <p className="bg-[#202531] px-2 rounded-lg"> D </p>
                    </div>
                    <div className="">
                        <p>'null'</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex justify-between items-center pt-4">
            <button className="text-base text-[#7589a3] py-2 px-6 tansition delay-150 duration-300 ease-in-out hover:cursor-pointer hover:text-white "> Quit </button>
            <button className="bg-[#7056f6] text-base text-white py-2 px-6 rounded rounded-md hover:cursor-pointer"> Next </button>
        </div>
      </div>
    </div>
  );
}

export default Questions;
