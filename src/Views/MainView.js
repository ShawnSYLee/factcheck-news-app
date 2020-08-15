import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'antd';

import '../Styles/App.css';

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
            <Button type="primary" onClick={goToArticle}>Go to Article</Button>
        </>
    )
}

export default MainView;