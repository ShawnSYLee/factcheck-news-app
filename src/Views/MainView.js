import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import {
    Button,
    Input
} from 'antd';

import useNews from "../Hooks/useNews"
import { NewsContext } from "../Contexts/NewsContext"
import ArticleListItem from '../Components/ArticleListItem'

import '../Styles/App.css';

const { Search } = Input;

const MainView = () => {
    let history = useHistory();
    const [state, setState] = useContext(NewsContext);
    const {
        getTopHeadlines
    } = useNews();
    const { getSearchHeadlines } = useNews();

    function testCallbacks() {
        console.log(state.articles)
        console.log(state.totalResults)
    }

    return (
        <>
            <Search
                placeholder="Search news"
                enterButton="Search"
                size="large"
                onSearch={getSearchHeadlines()}
            />

            <div className="article-list">
                {state.articles.map((article, i) =>
                    <ArticleListItem
                        key={i}
                        i={i}
                        article={article}
                    />
                )}
            </div>
        </>
    )
}

export default MainView;