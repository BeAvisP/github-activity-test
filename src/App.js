import React from 'react';
import { Route, Switch } from 'react-router';
import { Toaster } from 'react-hot-toast';
import './App.css';
import OrganizationListPage from './pages/OrganizationListPage/OrganizationListPage';
import RepositoryDetailsPage from './pages/RepositoryDetailsPage/RepositoryDetailsPage';

function App() {
  return (
    <div className='App'>
      <div>
        <Toaster />
      </div>
      <Switch>
        <Route exact path='/' component={OrganizationListPage} />
        <Route exact path='/:org' component={OrganizationListPage} />
        <Route exact path='/:org/:repo' component={RepositoryDetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
