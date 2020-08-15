import React from 'react';
import { useHistory } from 'react-router-dom';

const ArticleListItem = ({author, title, source, url}) => {
    return (
        <div>
            <div className="article-title">{title}</div>
            <div className="article-title">{author}</div>
            <div className="article-title">{source.name}</div>
        </div>
    );
}

export default ArticleListItem;