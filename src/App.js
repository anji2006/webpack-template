import React from 'react'
import {Provider} from 'react-redux'

import store from './redux/store'
import Auth from './HOC/Authontication'
import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'
import {Outlet, useNavigation} from 'react-router-dom'

function App() {
  const navigation = useNavigation()

  return (
    <Provider store={store}>
      <Header />
      <div
        style={{
          border: '2px solid red',
          height: '100vh',
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </Provider>
  )
}

export default App
