import React from 'react';
import { useHistory } from 'react-router-dom';

import { 
    Button,
    Input 
} from 'antd';

import '../Styles/App.css';

const { Search } = Input;

const MainView = () => {
    let history = useHistory();

    function goToArticle() {
        history.push('/article=0')
    }

    return (
        <>
            <div>
                <span>Main View</span>
            </div>
            <Search 
                placeholder="Search news"
                enterButton="Search"
                size="large"
                 onSearch={value => console.log(value)}
            />

            <Button type="primary" onClick={goToArticle}>Go to Article</Button>
        </>
    )
}

export default MainView;