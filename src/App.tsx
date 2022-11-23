import './App.css';

import { DataGrid, Filters } from '@modules';
import { store } from '@store';
import { Buffer } from 'buffer';
import { Provider } from 'react-redux';

window.Buffer = Buffer;

function App() {
  return (
    <Provider store={store}>
      <Filters />
      <DataGrid />
    </Provider>
  );
}

export default App;
