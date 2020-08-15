import React, { useState, useContext } from 'react';

const NewsContext = React.createContext([{}, () => { }]);

const NewsProvider = (props) => {
    const [news, setNews] = useState({
        articles: [
            {
                author: "Author",
                content: "Content",
                description: "",
                publishedAt: "Published",
                source: {
                    id: "source-id",
                    name: "source-name"
                },
                title: "Title",
                url: "url",
                urlToImage: "urlToImage"
            }
        ],
        totalResults: 0
    });

    return (
        <NewsContext.Provider value={[news, setNews]}>
            {props.children}
        </NewsContext.Provider>
    );
}

export { NewsContext, NewsProvider };