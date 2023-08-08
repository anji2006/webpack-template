import React from 'react'
import Counter from './views/counterApp'
import {Provider} from 'react-redux'

import store from './redux/store'
import ErrorBoundary from './components/ErrorBoundary'
import CounterA from './views/counterApp/CounterA'

function App() {
  return (
    <div>
      <Provider store={store}>
        <CounterA />
        <CounterA />
        <CounterA />
        <CounterA />
        <CounterA />
        <ErrorBoundary
          fallback={
            <div>
              this is fallback
              <button
                type="button"
                onClick={() => console.log('this is fallback button')}
              >
                click on fallback
              </button>
            </div>
          }
        >
          <Counter />
        </ErrorBoundary>
        <CounterA />
        <CounterA />
        <CounterA />
      </Provider>
    </div>
  )
}

export default App
