
// import '';

function Home() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className="bg-[#151923] border border-[#7589a3] w-[30%] text-center py-9 rounded rounded-md shadow-md shadow-[#7589a3]">
        <div className="text-[#7056f6] font-bold text-3xl mb-3"> {'</>'}  </div>
        <h1 className="text-white font-bold text-3xl mb-3">DevQuiz</h1>
        <p className="text-[#7589a3] text-lg mb-8"> Test Your Web Dev Knowledge </p>
        <button className="bg-[#7056f6] text-base text-white py-2 px-6 rounded rounded-md "> Get Started </button>
      </div>
    </div>
  );
}

export default Home;
