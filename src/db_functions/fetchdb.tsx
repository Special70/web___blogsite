

export async function getDBStatus() {
    const response = await fetch(`https://backend-blogsite-mongodb.onrender.com/articles`);
    if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return null;
    }
    const records = await response.json();
    return records;
}

export async function getSpecificArticle(targetId: string) {
    const articles = await getDBStatus();

    const article = articles.find((a: { _id: string; }) => a._id === targetId);

    return article
    
}