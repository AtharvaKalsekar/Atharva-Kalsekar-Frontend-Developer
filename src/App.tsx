import './App.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { DataGrid, Filters } from '@modules';
import { store } from '@store';
import { Buffer } from 'buffer';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

import { PaginationContextProvider } from './modules/Pagination';

window.Buffer = Buffer;

function App() {
  return (
    <Provider store={store}>
      <Filters />
      <PaginationContextProvider>
        <DataGrid />
      </PaginationContextProvider>
    </Provider>
  );
}

export default App;
