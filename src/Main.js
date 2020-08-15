import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainView from './Views/MainView';
import ArticleView from './Views/ArticleView';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={ MainView } />
            <Route exact path='/article=:article' component={ ArticleView } />
        </Switch>
    );
}

export default Main;