import './App.css';

import { DataGrid, StatusFilter } from '@modules';
import { store } from '@store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <StatusFilter />
      <DataGrid />
    </Provider>
  );
}

export default App;
