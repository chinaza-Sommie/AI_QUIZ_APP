

function Results() {
  return (
     <div className='h-screen flex justify-center items-center'>
      <div className="w-[45%]">

        {/* top section */}
        <div className="bg-[#151923] text-center border border-[#202531] py-15 rounded-xl">
            <div className="mb-10 border-b-4 border-[]">
                <h2 className="text-white text-5xl font-bold">100%</h2>
                <p className="text-[#7589a3] text-lg pt-1"> 10/10 correct</p>
            </div>
            <div>
                <h2 className="text-white text-2xl font-semibold"> You're a Legend</h2>
                <p className="text-[#7589a3] text-lg pt-1">HTML Quiz</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
