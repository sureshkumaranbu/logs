import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import React, {Fragment, useEffect} from 'react';

import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/logs/AddLogModal'
import AddTechModal from './components/techs/AddTechModal'
import EditLogModal from './components/logs/EditLogModal'
import Logs from './components/logs/Logs';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Provider } from 'react-redux';
import SearchBar from './components/layout/SearchBar'
import TechListModal from './components/techs/TechListModal';
import store from './store';

const App = () => {

  useEffect(() => {
    //init materialise js
    M.AutoInit();
  }, [])
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
