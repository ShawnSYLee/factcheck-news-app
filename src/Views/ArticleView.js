import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'antd';

import '../Styles/App.css';

const ArticleView = () => {
    let history = useHistory();

    return (
        <>
            <div>
                <span>Article View</span>
            </div>
            <Button type="primary" 
                onClick={() => history.goBack()}
            >
                Back
            </Button>
        </>
    )
}

export default ArticleView;
