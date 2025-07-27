import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ArticlePageEditor() {

    const [date, setDate] = useState("DATE PLCH");
    const [author, setAuthor] = useState("AUTHOR");
    const [title, setTitle] = useState("TITLE PLCH");
    const [imgURL, setImgURL] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Cube-h.svg/1200px-Cube-h.svg.png");
    const [content, setContent] = useState("");

    const [displayExportTab, setDisplayExportTab] = useState(false);

    function createDelayedExecutor<T extends any[]>(
    callback: (...args: T) => void,
    delay: number = 5000
    ) {
    let timerId: ReturnType<typeof setTimeout> | null = null;

    return function trigger(...args: T) {
        if (timerId) {
        clearTimeout(timerId);
        }

        timerId = setTimeout(() => {
        callback(...args);
        timerId = null;
        }, delay);
    };
    }

    const defineImageURL = createDelayedExecutor((arg: string) => {
        setImgURL(arg)
    }, 2000);

    
    const defineArticleContent = createDelayedExecutor((arg: string) => {
        setContent(arg)
    }, 20);

                    const nav = useNavigate()

    return (
    <div className="z-20 h-screen w-screen bg-gray-100 flex flex-row">
        {displayExportTab == true ? <>
        <div className="bg-black/50 w-screen h-screen absolute">
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="bg-white border-2 w-auto">Export details: {"("}Click the gray box to copy{")"}<br></br>
                
                        <div className="break-words bg-gray-300 border-2 m-2 active:cursor-pointer active:bg-gray-500" onClick={async (event)=>{
                            try {
                                await navigator.clipboard.writeText(event.currentTarget.innerText.replace("\"","\\\""))
                            } catch (e) {

                            }
                        }}>
                            {'{'}
                            "author":"{author}",
                            "title":"{title}",
                            "date":"{date}",
                            "content":"{content}",
                            "img_header_url":"{imgURL}"{'}'}
                        </div><br />
                        Copypaste the details and send it to the messenger group chat to be added in the list of articles.
                        <button className="bg-gray-200 border-2 w-full hover:bg-gray-400 active:bg-gray-600" onClick={()=>{
                            setDisplayExportTab(false)
                        }}>Close</button>
                </div>
            </div>
        </div>
        </> : ""}
        <div className="h-screen w-1/2 bg-white border-r-4 border-black p-4">
            <label htmlFor="title">Article Title : </label><input id="title" className="bg-white border-2 border-black" onChange={(e)=>{
                if (e.target.value.length == 0) {
                    setTitle("TITLE PLCH")
                } else
                setTitle(e.target.value)
                }}/>
                <br /><br />
            <label htmlFor="author">Author : </label><input id="author" className="bg-white border-2 border-black" onChange={(e)=>{
                if (e.target.value.length == 0) {
                    setAuthor("AUTHOR PLCH")
                } else
                setAuthor(e.target.value)
                }}/>
                <br /><br />
            <label htmlFor="date">Date : </label><input id="date" className="bg-white border-2 border-black" onChange={(e)=>{
                if (e.target.value.length == 0) {
                    setDate("DATE PLCH")
                } else
                setDate(e.target.value)
                }}/>
                <br /><br />
            <label htmlFor="imgurl">Header Image URL : </label><input id="imgurl" className="bg-white border-2 border-black" 
            onChange={(e)=>{
                if (e.target.value.length != 0) {
                    defineImageURL(e.target.value)
                }
            }}
            />
                <br /><br />
            <label htmlFor="content">Content : </label><br /><textarea id="content" className="bg-white border-2 border-black w-full h-120" onChange={(e)=>{
                if (e.target.value.length != 0) {
                    defineArticleContent(e.target.value)
                }
            }}/>
                <br />
                <button className="border-2 border-black p-5 bg-gray-200 hover:bg-gray-400 active:bg-gray-600" onClick={()=>{
                    setDisplayExportTab(true)
                }}>Export Details</button>
                <br />
                <button className="border-2 border-black p-5 bg-gray-200 hover:bg-gray-400 active:bg-gray-600" onClick={()=>{
                    nav("/web___blogsite/")
                }}>Go Home</button>
        </div>
        <div className="min-h-300 h-auto w-1/2 p-5">
            <div className="bg-radial-[at_25%_25%] from-white to-zinc-900">
                <img src={imgURL} className="h-90 w-auto m-auto bg-gr fade-edges" />
            </div>
            <div className="text-4xl font-light text-center mt-5">{title}</div>
            <hr className="mt-3 mb-1 w-3/4 m-auto" />
            <div className="text-2xl font-light text-center mb-3">{date}</div>
            <div className="font-light" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    </div>
   ) 
}

export default ArticlePageEditor;