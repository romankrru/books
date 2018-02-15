import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import BookControls from './containers/BookControls/BookControls';
import BooksList from './containers/BooksList/BooksList';

class App extends Component {
  render() {
    return (
      <Layout>
        <Sidebar>
          <BookControls />
        </Sidebar>
        <MainContent>
          <BooksList />
        </MainContent>
      </Layout>
    );
  }
}

export default App;
