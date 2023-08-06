import React from 'react';
import Counter from './views/counterApp';
import {Provider} from 'react-redux';

import store from './redux/store';

const App = () => {
  return (
    <div>
      <div>this is Application</div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
};

export default App;
