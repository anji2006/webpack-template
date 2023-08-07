import React from 'react'
import Counter from './views/counterApp'
import {Provider} from 'react-redux'

import store from './redux/store'

function App() {
  return (
    <div>
      <div>this is what</div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  )
}

export default App
