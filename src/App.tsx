

import Layout from './pages/LayoutPage.jsx';
import { BrowserRouter, Routes, Route, } from "react-router";
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NoteFoundPage.jsx';
import OneGamePage from './pages/OneGamePage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import UserCabinet from './pages/UserCabinet.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

 export const queryClient = new QueryClient()


function App(): React.ReactElement {


  return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<MainPage />} />
              <Route path='detailed-quest/:id' element={<OneGamePage />} />
              <Route path='/contacts' element={<ContactsPage />} />
              <Route path='/cabinet' element={<UserCabinet />} />
              <Route path='*' element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
  )
}


export default App;