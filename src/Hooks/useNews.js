import { useContext, useEffect, useState } from 'react';
import { NewsContext } from "../Contexts/NewsContext"

const useNews = () => {
    const NewsAPI = require('newsapi');
    const newsapi = new NewsAPI('1c2c9496522c45818207e592c841a459', { corsProxyUrl: 'https://cors-anywhere.herokuapp.com/' });

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
            setState(state => ({
                ...state,
                articles: response.articles,
                totalResults: response.totalResults
            }))
        });
    }

    function getSearchHeadlines() {
        newsapi.v2.everything({
            q: 'Ariana Grande',
            from: '2017-01-01',
            language: 'en',
            sortBy: 'relevancy',
            pageSize: '40'
        }).then(response => {
            setState(state => ({
                ...state,
                articles: response.articles,
                totalResults: response.totalResults
            }))
        });
    }

    return {
        getTopHeadlines,
        getSearchHeadlines
    }
};

export default useNews;