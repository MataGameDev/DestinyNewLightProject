import React from 'react';
import './App.css';
import Content from '../shared/layout/Content';
import Header from '../shared/layout/Header';

import {element} from 'prop-types';


function App(props) {
  return (
    <div className="App">
      <Header title="Routing"/>
      <Content >
        {/* Components */}
        {props.children}
      </Content>
    </div>
  );

}

App.propTypes = {
  children: element.isRequired,
}

export default App;
