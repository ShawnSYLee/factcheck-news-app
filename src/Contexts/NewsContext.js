import React, { useState, useContext } from 'react';

const NewsContext = React.createContext([{}, () => { }]);

const NewsProvider = (props) => {
    const [news, setNews] = useState({
        articles: [
            {
                author: "derp",
                title: "derpy",
                source: "asdfasdlf"
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