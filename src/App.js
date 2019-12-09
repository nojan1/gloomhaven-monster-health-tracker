import React from 'react';
import MainView from './components/mainView';
import AddMonsterView from './components/addMonsterView';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/add" component={AddMonsterView} />
      <Route path="/" match="exact" component={MainView} />
    </Switch>
  );
}

export default App;
