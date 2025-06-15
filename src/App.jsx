

import Layout from './pages/LayoutPage';
import { BrowserRouter, Routes, Route, } from "react-router";
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NoteFoundPage';
import OneGamePage from './pages/OneGamePage';
import ContactsPage from './pages/ContactsPage';
import {useStore} from './store' 

function App() {

const{questsOfGenre}=useStore()

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<MainPage />} />
            <Route path='detailed-quest/:id' element={<OneGamePage arr={questsOfGenre} />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}



export default App;