import { useEffect, useState } from "react";
import { useArticleToView } from "../context/ArticleToViewContext";
import { getSpecificArticle } from "../db_functions/fetchdb";

type Article = {
    _id: string
    author: string
    title: string
    date: string
    content: string
    img_header_url: string
}


function ArticleViewerPage() {
    
    const {viewingArticle } = useArticleToView();
    const [articleDetails, setArticleDetails] = useState<Article | null>(null);

    useEffect(() => {
        if (!viewingArticle) return;

        const fetchArticle = async () => {
        const article = await getSpecificArticle(viewingArticle);
        setArticleDetails(article);
        };

        fetchArticle();
    }, [viewingArticle]);

    if (!articleDetails) {
        return <p>Loading article...</p>;
    }

    return (
        <div>  
            <div className="bg-radial-[at_25%_25%] from-white to-zinc-900">
                <img src={articleDetails.img_header_url} className="h-90 w-auto m-auto bg-gr fade-edges" />
            </div>
            <div className="text-4xl font-light text-center mt-5">{articleDetails.title}</div>
            <hr className="mt-3 mb-1 w-3/4 m-auto" />
            <div className="text-2xl font-light text-center mb-3">{articleDetails.date}</div>
            <div className="font-light" dangerouslySetInnerHTML={{ __html: articleDetails.content }} />
        </div>
    )
}
export default ArticleViewerPage;