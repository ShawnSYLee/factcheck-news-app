import { useContext, useEffect, useState } from 'react';
import { NewsContext } from "../Contexts/NewsContext"

const useNews = () => {
    const NewsAPI = require('newsapi');
    const newsapi = new NewsAPI('19a7dfed5fca41c486a3b5a5744ce031', { corsProxyUrl: 'https://cors-anywhere.herokuapp.com/' });

    const [state, setState] = useContext(NewsContext);

    useEffect(() => {
        getTopHeadlines();
    }, []);

    function getTopHeadlines() {
        newsapi.v2.topHeadlines({
            category: 'politics',
            language: 'en',
            country: 'us'
        }).then(response => {
            setState({
                articles: response.articles,
                totalResults: response.totalResults
            })
        });
    }

    function getSearchHeadlines() {
        newsapi.v2.everything({
            q: 'Donald Trump',
            language: 'en',
            sortBy: 'relevancy'
        }).then(response => {
            setState({
                articles: response.articles,
                totalResults: response.totalResults
            })
        });
    }

    return {
        getTopHeadlines,
        getSearchHeadlines
    }
};

export default useNews;