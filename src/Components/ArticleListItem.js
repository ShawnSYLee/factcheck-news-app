import React from 'react';
import { useHistory } from 'react-router-dom';

import { 
    Card,
    Input 
} from 'antd';

const ArticleListItem = ({article}) => {
    return (
        <Card 
            title={article.title}
            cover={<img src={article.urlToImage} />}
        >
            <p>{article.author}</p>
            <p>{article.source.name}</p>
        </Card> 
    );
}

export default ArticleListItem;