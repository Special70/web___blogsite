
import React, { createContext, useContext, useState } from 'react';

interface ArticleToViewContextType {
  viewingArticle: string;
  setViewingArticle: React.Dispatch<React.SetStateAction<string>>;
}
export const ArticleToViewContext = createContext({} as ArticleToViewContextType);
export const ArticleToViewContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [viewingArticle, setViewingArticle] = useState("");
  return (
    <ArticleToViewContext.Provider value={{viewingArticle, setViewingArticle}}>
        {children}
    </ArticleToViewContext.Provider>
  )
}
export const useArticleToView = () => {
  const context = useContext(ArticleToViewContext);
  if (!context) {
    throw new Error('useArticleToView must be used within an ArticleToViewContextProvider');
  }
  return context;
};

