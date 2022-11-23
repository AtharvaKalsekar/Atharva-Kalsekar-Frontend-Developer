import './App.css';

import { StatusFilter } from '@modules';
import { store } from '@store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <StatusFilter />
    </Provider>
  );
}

export default App;
