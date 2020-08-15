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
                onSearch={testCallbacks}
            />

            <Button type="primary" onClick={getTopHeadlines}>Go to Article</Button>

            <div className="article-list">
                {state.articles.map((article, i) =>
                    <ArticleListItem
                        key={i}
                        i={i}
                        author={state.articles[i].author}
                        title={state.articles[i].title}
                        source={state.articles[i].source}
                    />
                )}
            </div>
        </>
    )
}

export default MainView;