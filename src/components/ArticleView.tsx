import { useEffect, useState } from "react";
import { getDBStatus } from "../db_functions/fetchdb";
import { useArticleToView } from "../context/ArticleToViewContext";
import { useNavigate } from "react-router-dom";

type Article = {
    _id: string
    author: string
    title: string
    date: string
    content: string
    img_header_url: string
}

function ArticleView() {

    const { setViewingArticle } = useArticleToView();

    const [articles, setArticles] = useState<Article[] | null>(null);

    useEffect(() => {
        getDBStatus().then((res) => {
            if (res && res.length > 0) {
                setArticles(res);
            } else {
                setArticles([]);
            }
        });
    }, []);

    const navigate = useNavigate();

    return (
        <>
            <div className="p-5">
                <div className="underline text-4xl font-quicksand font-light underline-offset-8 pb-4">Articles</div>
                <div className="flex flex-col gap-2">
                    {articles === null ? (<div>Loading...</div>) :
                        articles.length === 0 ? (<div>No articles to display.</div>) :
                            (articles.map((data, index) => (
                                <div
                                    className="min-w-100 w-full hover:scale-95 hover:cursor-pointer transition-all relative mb-2 h-auto"
                                    key={index}
                                    onClick={() => {
                                        setViewingArticle(data._id);
                                        navigate("/web___blogsite/articleview");
                                    }}
                                >
                                    <div
                                        key={data._id}
                                        className="h-auto shadow-lg mb-4 p-4 bg-white overflow-hidden relative"
                                    >
                                        <img src={data.img_header_url} className="h-40 w-auto m-auto" />
                                        <h2 className="text-xl font-bold">{data.title}</h2>
                                        <p className="text-sm text-gray-600">
                                            by {data.author} • {data.date}
                                        </p>

                                        {/* Limit height to make gradient more meaningful */}
                                        <div className="relative max-h-40 overflow-hidden">
                                            <div
                                                className="font-light"
                                                dangerouslySetInnerHTML={{
                                                    __html: data.content.slice(0, 300),
                                                }}
                                            />
                                            {/* Gradient overlay */}
                                            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                            ))
                            )}
                </div>
            </div>
        </>
    )
}
export default ArticleView;