import './App.css';

import { DataGrid, StatusFilter } from '@modules';
import { store } from '@store';
import { Buffer } from 'buffer';
import { Provider } from 'react-redux';

window.Buffer = Buffer;

function App() {
  return (
    <Provider store={store}>
      <StatusFilter />
      <DataGrid />
    </Provider>
  );
}

export default App;
