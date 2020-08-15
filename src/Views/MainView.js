import React from 'react';
import { useHistory } from 'react-router-dom';

import { 
    Button,
    Input 
} from 'antd';

import useNews from "../Hooks/useNews"

import ArticleListItem from '../Components/ArticleListItem'

import '../Styles/App.css';

const { Search } = Input;

const MainView = () => {
    let history = useHistory();
    const NewsAPI = require('newsapi');
    // const newsapi = new NewsAPI('1c2c9496522c45818207e592c841a459')
    const newsapi = new NewsAPI('1c2c9496522c45818207e592c841a459', { corsProxyUrl: 'https://cors-anywhere.herokuapp.com/' });

    function goToArticle() {
        newsapi.v2.topHeadlines({
            q: 'trump',
            category: 'politics',
            language: 'en',
            country: 'us'
          }).then(response => {
            console.log(response);
            /*
              {
                status: "ok",
                articles: [...]
              }
            */
          });
    }

   

    return (
        <>
            <Search 
                placeholder="Search news"
                enterButton="Search"
                size="large"
                 onSearch={value => console.log(value)}
            />

            <Button type="primary" onClick={goToArticle}>Go to Article</Button>

            <div className="article-list">
                {/* map and display ArticleListItems */}
            </div>
        </>
    )
}

export default MainView;