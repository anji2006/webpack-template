import React, {useEffect} from 'react';
import {Provider} from 'react-redux';

import store from './redux/store';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import {Outlet} from 'react-router-dom';

import './App.css';
import Auth from './HOC/Authontication';

function App() {
  return (
    <Provider store={store}>
      <div className="root-container">
        <Header />
        <div className="content-box">
          <div className="side-panel">side bar</div>
          <div
            style={{
              border: '2px solid red',
              height: '100vh',
            }}
            className="content"
          >
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default Auth(App);
