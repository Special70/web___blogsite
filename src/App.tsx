

function App() {
  return (
    <>
    <div className="h-300 bg-gray-100 xl:w-3/4 w-full xl:m-auto xl:mt-10 xl:mb-10 xl:rounded-lg shadow-xl/30 relative">
      <div className="w-full bg-linear-to-r from-cyan-900 to-gray-800 h-25 xl:rounded-t-lg p-5 flex flex-wrap items-center justify-around">
        <span className="text-white text-4xl">PostBrick</span>
        <span className="text-white text-2xl cursor-pointer">HOME</span>
        <span className="text-white text-2xl cursor-pointer">ARTICLES</span>
        <span className="text-white text-2xl cursor-pointer">🔍</span>
      </div>
      <div className="w-full bg-linear-to-r from-cyan-900 to-gray-800 h-25 xl:rounded-b-lg p-5 flex items-center justify-around bottom-0 absolute">
        <div className="w-full pl-20">
          <span className="text-white text-2xl">PostBrick</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
