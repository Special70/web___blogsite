import ArticlePreviewFront from "./components/ArticlePreviewFront";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ArticleToViewContextProvider } from "./context/ArticleToViewContext";
import ArticleViewerPage from "./components/ArticleViewerPage";
import ArticlePageEditor from "./components/ArticlePageEditor";
import ArticleView from "./components/ArticleView";


function App() {
  const navigate = useNavigate();
  return (
    <>
    <div className="min-h-300 bg-gray-100 xl:w-3/4 w-full xl:m-auto xl:mt-10 xl:mb-10 xl:rounded-lg shadow-xl/30 relative flex flex-col">
      <div className="w-full bg-linear-to-r from-cyan-900 to-gray-800 h-25 xl:rounded-t-lg p-5 flex flex-wrap items-center justify-around">
        <span className="text-white text-4xl">PostBrick</span>
        <span className="text-white text-2xl cursor-pointer hover:scale-120 transition-all" onClick={()=>{navigate("/web___blogsite/")}}>HOME</span>
        <span className="text-white text-2xl cursor-pointer hover:scale-120 transition-all" onClick={()=>{navigate("/web___blogsite/articlelistview")}}>ARTICLES</span>
      </div>

      {/*center segment*/}
      
      <div className="flex-grow p-4">
        
        <ArticleToViewContextProvider>
          <Routes>
            <Route path="*" element={"null"}/>
            <Route path="/" element={<ArticlePreviewFront />} />
            <Route path="/articleview" element={<ArticleViewerPage/>} />
            <Route path="/articlelistview" element={<ArticleView/>} />
            <Route path="/articleeditor" element={<ArticlePageEditor/>} />
          </Routes>
        </ArticleToViewContextProvider>
      
      
      {/*center segment*/}
      </div>

      {/* Footer */}
      <div className="w-full bg-gradient-to-r from-cyan-900 to-gray-800 h-24 xl:rounded-b-lg p-5 flex items-center justify-around">
        <div className="w-full pl-20">
          <span className="text-white text-2xl" onClick={()=>{
            navigate("/web___blogsite/editor");
            console.log("test");
          }}>PostBrick</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

